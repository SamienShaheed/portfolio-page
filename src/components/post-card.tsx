'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Post } from '@/lib/content';
import { formatDate } from '@/lib/utils';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      whileHover={reduce ? undefined : { y: -4, scale: 1.01 }}
      whileTap={reduce ? undefined : { scale: 0.99 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >
      <Card className="group hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <time className="text-sm text-muted-foreground">
            {formatDate(post.date)}
          </time>
        </div>
        <CardTitle className="group-hover:text-primary transition-colors">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {post.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
    </motion.div>
  );
}
