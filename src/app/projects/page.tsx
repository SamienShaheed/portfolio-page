import { FadeIn } from '@/components/fade-in';
import { ProjectCard } from '@/components/project-card';
import { getAllProjects } from '@/lib/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A collection of my work and side projects built with modern web technologies.',
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <FadeIn className="text-center py-16">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Projects
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          A collection of my work and side projects. Each project represents a learning journey 
          and showcases different aspects of modern web development.
        </p>
      </FadeIn>

      {projects.length > 0 ? (
        <FadeIn delay={0.1}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </FadeIn>
      ) : (
        <FadeIn delay={0.1} className="text-center py-16">
          <p className="text-lg text-muted-foreground">
            No projects available yet. Check back soon!
          </p>
        </FadeIn>
      )}
    </div>
  );
}
