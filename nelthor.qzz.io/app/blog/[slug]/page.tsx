import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import remarkGfm from 'remark-gfm';
import { LocaleGate } from '@/components/locale-gate';
import { T } from '@/components/t';
import { useMDXComponents } from '@/mdx-components';

interface Params { slug: string }

interface PostSource { title: string, date: string, body: string, fallback?: boolean }

function readPost(locale: 'en' | 'es', slug: string): PostSource | null {
  if (!/^[\w-]+$/.test(slug)) { return null; }
  const filePath = path.join(process.cwd(), 'content', 'blog', locale, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) { return null; }
  const { data, content } = matter(fs.readFileSync(filePath, 'utf8'));
  return { title: data.title ?? slug, date: data.date ?? '', body: content };
}

function getAllSlugs(): string[] {
  const manifestPath = path.join(process.cwd(), 'lib', 'blog-content.json');
  if (!fs.existsSync(manifestPath)) { return []; }
  try {
    const data = JSON.parse(fs.readFileSync(manifestPath, 'utf8')) as { slugs?: string[] };
    return data.slugs ?? [];
  }
  catch { return []; }
}

export function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

function BackToBlog() {
  return (
    <div className="mb-8">
      <Link href="/blog" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)]">
        <T k="blog.back-to-blog" />
      </Link>
    </div>
  );
}

function PostArticle({ post }: { post: PostSource }) {
  return (
    <article className="max-w-3xl">
      <h1 className="text-4xl font-bold mb-3 leading-tight">{post.title}</h1>
      <p className="text-sm text-[var(--color-text-muted)] mb-10">{post.date}</p>
      <div className="prose-custom space-y-1">
        <MDXRemote source={post.body} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} components={useMDXComponents({})} />
      </div>
    </article>
  );
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const enPost = readPost('en', slug);
  const esPost = readPost('es', slug);

  if (!enPost && !esPost) {
    return (
      <main>
        <BackToBlog />
        <h1 className="text-2xl font-bold"><T k="blog.not-found" /></h1>
      </main>
    );
  }

  return (
    <main>
      <BackToBlog />
      <LocaleGate
        en={enPost ? <PostArticle post={enPost} /> : null}
        es={esPost ? <PostArticle post={esPost} /> : null}
        fallbackNotice={(
          <p className="mb-6 px-4 py-3 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] text-sm text-[var(--color-text-muted)] max-w-3xl">
            <T k="blog.en-only" />
          </p>
        )}
      />
    </main>
  );
}
