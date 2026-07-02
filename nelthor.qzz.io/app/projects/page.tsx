import Link from 'next/link';
import { ProjectsSection } from '@/components/projects-section';
import { T } from '@/components/t';

export default function ProjectsPage() {
  return (
    <main>
      <div className="mb-8">
        <Link href="/" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)]">
          <T k="projects.back" />
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-4"><T k="projects.title" /></h1>
      <p className="text-[var(--color-text-muted)] mb-12">
        <T k="projects.description" />
      </p>
      <ProjectsSection />
    </main>
  );
}
