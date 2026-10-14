export interface BlogPost {
  title: string
  date: string
  description: string
  tags: string[]
  fallback?: boolean
}

export interface BlogData {
  slugs: string[]
  posts: Record<string, { en: BlogPost | null, es: BlogPost | null }>
}
