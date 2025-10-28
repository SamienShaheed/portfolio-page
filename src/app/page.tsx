import { FadeIn } from '@/components/fade-in';
import { PostCard } from '@/components/post-card';
import { ProjectCard } from '@/components/project-card';
import { getAllPosts, getFeaturedProjects } from '@/lib/content';
import { Stagger, Reveal } from '@/components/reveal';
import HeroSection from '@/components/hero-section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* About Me Section */}
      <FadeIn delay={0.1} className="about-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Stagger>
              <Reveal from="up">
                <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">
                  About Me
                </h2>
              </Reveal>
              <Reveal from="up" delay={0.06}>
                <p className="text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
                  I create software that connects people and simplifies everyday challenges, with a focus on clean design, scalability, and usability. As a full-stack developer, I enjoy working across the stack to build reliable, high-performance web and mobile applications. I&apos;m passionate about continuous learning and love exploring everything from AI-driven applications to clean architecture and modern design principles.
                </p>
              </Reveal>
            </Stagger>
          </div>
        </div>
      </FadeIn>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <FadeIn delay={0.2} className="projects-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Stagger>
                <Reveal from="up">
                  <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
                    Featured Projects
                  </h2>
                </Reveal>
                <Reveal from="up" delay={0.06}>
                  <p className="text-lg text-muted-foreground">
                    Some of my recent projects
                  </p>
                </Reveal>
              </Stagger>
            </div>
            <div className="relative flex justify-center">
              <Carousel opts={{ 
                align: "center", 
                loop: true, 
                duration: 1000,
                containScroll: "trimSnaps",
                }} className={`w-full max-w-${featuredProjects.length <= 3 ? '4xl' : '6xl'}`}>
                <CarouselContent>
                  {featuredProjects.map((project, idx) => (
                    <CarouselItem key={project.slug} className='md:basis-1/2 lg:basis-1/3'>
                      <Reveal from="up" delay={idx * 0.06}>
                        <ProjectCard project={project} />
                      </Reveal>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
              </Carousel>  
            </div>
          </div>
        </FadeIn>
      )}
      
      {/* Latest Blog Posts */}
      {latestPosts.length > 0 && (
        <FadeIn delay={0.2} className="blogs-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Stagger>
                <Reveal from="up">
                  <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
                    Latest Blog Posts
                  </h2>
                </Reveal>
                <Reveal from="up" delay={0.06}>
                  <p className="text-lg text-muted-foreground">
                    Thoughts on development, technology, and more
                  </p>
                </Reveal>
              </Stagger>
            </div>
            <div className="relative flex justify-center">
              <Carousel opts={{ 
                align: "center", 
                loop: true, 
                duration: 1000,
                containScroll: "trimSnaps",
                }} className={`w-full max-w-${latestPosts.length <= 3 ? '4xl' : '6xl'}`}>
                <CarouselContent>
                  {latestPosts.map((post, idx) => (
                    <CarouselItem key={post.slug} className='md:basis-1/2 lg:basis-1/3'>
                      <Reveal from="up" delay={idx * 0.06}>
                        <PostCard post={post} />
                      </Reveal>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
              </Carousel>  
            </div>
          </div>
        </FadeIn>
      )}
    </>
  );
}
