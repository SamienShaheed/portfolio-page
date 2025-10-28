import { FadeIn } from '@/components/fade-in';
import { PostCard } from '@/components/post-card';
import { getAllPosts } from '@/lib/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on development, technology, and more.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <FadeIn className="text-center py-16">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Blog
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          Thoughts on development, technology, and more. I write about the things I learn 
          and the challenges I face as a developer.
        </p>
      </FadeIn>

      {posts.length > 0 ? (
        <FadeIn delay={0.1}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </FadeIn>
      ) : (
        <FadeIn delay={0.1} className="text-center py-16">
          <p className="text-lg text-muted-foreground">
            No blog posts available yet. Check back soon!
          </p>
        </FadeIn>
      )}
    </div>
  );
}
