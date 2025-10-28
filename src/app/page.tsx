import { FadeIn } from '@/components/fade-in';
import { PostCard } from '@/components/post-card';
import { ProjectCard } from '@/components/project-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { getAllPosts, getFeaturedProjects } from '@/lib/content';
import Link from 'next/link';
import { Github, Linkedin, Mail, Bot } from 'lucide-react';
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
      <FadeIn className="hero-section blob-container">
        {/* Animated Blobs */}
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
        
        <div className="hero-content">
          <div className="flex justify-center"> 
            <Avatar className="h-40 w-40 mb-6">
              <AvatarImage src="/avatar.jpg" alt="Samien Shaheed" />
              <AvatarFallback>SS</AvatarFallback>
            </Avatar>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
           Samien Shaheed
          </h1>
          <div className="mt-10 flex items-center justify-center gap-x-4 flex-wrap">
            <Button className="social-button" asChild>
              <Link href="https://github.com/SamienShaheed">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
            <Button className="social-button" asChild>
              <Link href="https://linkedin.com/in/samienshaheed/">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
            <Button className="social-button" asChild>
              <Link href="mailto:samienshaheed@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </Link>
            </Button>
            <Button className="social-button" asChild>
              <Link href="https://huggingface.co/SamienShaheed">
                <Bot className="mr-2 h-4 w-4" />
                Hugging Face
              </Link>
            </Button>
          </div>
        </div>
      </FadeIn>

      {/* About Me Section */}
      <FadeIn delay={0.1} className="about-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">
              About Me
            </h2>
            <p className="text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              I create software that connects people and simplifies everyday challenges, with a focus on clean design, scalability, and usability. As a full-stack developer, I enjoy working across the stack to build reliable, high-performance web and mobile applications. I&apos;m passionate about continuous learning and love exploring everything from AI-driven applications to clean architecture and modern design principles.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <FadeIn delay={0.2} className="projects-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground">
                Some of my recent projects
              </p>
            </div>
            <div className="relative flex justify-center">
              <Carousel opts={{ 
                align: "center", 
                loop: true, 
                duration: 1000,
                containScroll: "trimSnaps",
                }} className={`w-full max-w-${featuredProjects.length <= 3 ? '4xl' : '6xl'}`}>
                <CarouselContent>
                  {featuredProjects.map((project) => (
                    <CarouselItem key={project.slug} className='md:basis-1/2 lg:basis-1/3'>
                      <ProjectCard project={project} />
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
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
                Latest Blog Posts
              </h2>
              <p className="text-lg text-muted-foreground">
                Thoughts on development, technology, and more
              </p>
            </div>
            <div className="relative flex justify-center">
              <Carousel opts={{ 
                align: "center", 
                loop: true, 
                duration: 1000,
                containScroll: "trimSnaps",
                }} className={`w-full max-w-${latestPosts.length <= 3 ? '4xl' : '6xl'}`}>
                <CarouselContent>
                  {latestPosts.map((post) => (
                    <CarouselItem key={post.slug} className='md:basis-1/2 lg:basis-1/3'>
                      <PostCard post={post} />
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
