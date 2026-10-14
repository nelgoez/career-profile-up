#!/usr/bin/env node
/**
 * Generates lib/blog-content.json from content/blog/{en,es}/*.mdx.
 * ES entries fall back to EN fields when a translation is missing.
 * Run before `next dev` / `next build` (chained in package.json scripts).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const blogDir = path.join(root, 'content', 'blog');
const outFile = path.join(root, 'lib', 'blog-content.json');

function readPosts(locale) {
  const dir = path.join(blogDir, locale);
  if (!fs.existsSync(dir)) { return {}; }
  const posts = {};
  for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.mdx'))) {
    const raw = fs.readFileSync(path.join(dir, f), 'utf8');
    const { data } = matter(raw);
    const slug = f.replace(/\.mdx$/, '');
    posts[slug] = {
      title: data.title ?? slug,
      date: data.date ?? '',
      description: data.description ?? '',
      tags: data.tags ?? [],
    };
  }
  return posts;
}

const en = readPosts('en');
const es = readPosts('es');

const slugs = [...new Set([...Object.keys(en), ...Object.keys(es)])];
const posts = {};
for (const slug of slugs) {
  const enPost = en[slug] ?? null;
  const esPost = es[slug] ?? null;
  posts[slug] = {
    en: enPost,
    es: esPost
      ? {
          title: esPost.title,
          date: esPost.date,
          description: esPost.description,
          tags: esPost.tags,
        }
      : enPost
        ? {
            title: enPost.title,
            date: enPost.date,
            description: enPost.description,
            tags: enPost.tags,
            fallback: true,
          }
        : null,
  };
  if (!posts[slug].en && !posts[slug].es) { delete posts[slug]; }
}

const sortedSlugs = slugs
  .filter(s => posts[s])
  .sort((a, b) => {
    const da = posts[a].es?.date ?? posts[a].en?.date ?? '';
    const db = posts[b].es?.date ?? posts[b].en?.date ?? '';
    return new Date(db).getTime() - new Date(da).getTime();
  });

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, JSON.stringify({ slugs: sortedSlugs, posts }, null, 2));
console.log(`blog-content: ${sortedSlugs.length} posts → ${path.relative(root, outFile)}`);
