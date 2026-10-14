'use client';

import Link from 'next/link';
import { T } from '@/components/t';
import { blogContent, getLocalePost } from '@/lib/blog-data';
import { useLocale } from '@/lib/locale-context';

export default function BlogPage() {
  const { locale } = useLocale();
  const posts = blogContent.slugs
    .map(slug => ({ slug, post: getLocalePost(blogContent, slug, locale) }))
    .filter((p): p is { slug: string, post: NonNullable<ReturnType<typeof getLocalePost>> } => p.post !== null);

  return (
    <main>
      <div className="mb-8">
        <Link href="/" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)]">
          <T k="blog.back" />
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-4"><T k="blog.title" /></h1>
      <p className="text-[var(--color-text-muted)] mb-12">
        <T k="blog.description" />
      </p>

      <div className="space-y-6">
        {posts.map(({ slug, post }) => (
          <Link key={slug} href={`/blog/${slug}`}>
            <article className="p-8 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors">
              <div className="text-sm text-[var(--color-text-muted)] mb-2">{post.date}</div>
              <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
              <p className="text-[var(--color-text-muted)] mb-4">{post.description}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] text-xs text-[var(--color-text-muted)]">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
