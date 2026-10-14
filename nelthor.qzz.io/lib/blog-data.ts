import type { BlogData, BlogPost } from './blog-types';
import blogContentJson from './blog-content.json';

export const blogContent = blogContentJson as unknown as BlogData;

export function getLocalePost(data: BlogData, slug: string, locale: 'en' | 'es'): BlogPost | null {
  const entry = data.posts[slug];
  if (!entry) { return null; }
  return entry[locale] ?? entry.en ?? entry.es;
}

export function getLatest(locale: 'en' | 'es', count = 3): { slug: string, post: BlogPost }[] {
  return blogContent.slugs
    .map(slug => ({ slug, post: getLocalePost(blogContent, slug, locale) }))
    .filter((p): p is { slug: string, post: BlogPost } => p.post !== null)
    .slice(0, count);
}
