import fs from 'node:fs';
import path from 'node:path';
import { BrandsSection } from '@/components/brands-section';
import { EvidenceShowcase } from '@/components/evidence-showcase';
import { ImpactMetrics } from '@/components/impact-metrics';
import { ProjectsSection } from '@/components/projects-section';
import { BtsTeaserSection, ContactSection, ExperienceSection, HeroSection, LatestPostsSection, SkillsSection } from '@/components/translated-home';
import './hero-animations.css';

function getInitialProjects() {
  const jsonPath = path.join(process.cwd(), 'content/projects/_projects.json');
  if (!fs.existsSync(jsonPath)) { return null; }
  try {
    const raw = fs.readFileSync(jsonPath, 'utf8');
    return JSON.parse(raw).repos ?? null;
  }
  catch { return null; }
}

export default function HomePage() {
  const initialProjects = getInitialProjects();

  return (
    <main>
      <HeroSection />
      <ImpactMetrics />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection initialProjects={initialProjects} />
      <BrandsSection />
      <EvidenceShowcase />
      <LatestPostsSection />
      <BtsTeaserSection />
      <ContactSection />
    </main>
  );
}
