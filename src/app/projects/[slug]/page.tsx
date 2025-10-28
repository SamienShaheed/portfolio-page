import { FadeIn } from '@/components/fade-in';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getAllProjects, getProjectBySlug } from '@/lib/content';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <FadeIn className="max-w-4xl mx-auto">
        <article className="prose-custom">
          <header className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
              {project.title}
            </h1>
            
            {project.tags.length > 0 && (
              <div className="flex gap-2 mb-6">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
            
            {project.description && (
              <p className="text-lg text-muted-foreground mb-8">
                {project.description}
              </p>
            )}
            
            <div className="flex gap-4 mb-8">
              {project.url && (
                <Button asChild>
                  <Link href={project.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Link>
                </Button>
              )}
              {project.github && (
                <Button variant="outline" asChild>
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Link>
                </Button>
              )}
            </div>
          </header>
          
          <div 
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
        </article>
      </FadeIn>
    </div>
  );
}
