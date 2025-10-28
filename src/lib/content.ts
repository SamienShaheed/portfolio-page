import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  published: boolean;
  tags: string[];
  content: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  url?: string;
  github?: string;
  tags: string[];
  featured: boolean;
  content: string;
}

export function getAllPosts(): Post[] {
  const postsDirectory = path.join(contentDirectory, 'posts');
  
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || '',
        description: data.description || '',
        date: data.date || '',
        published: data.published !== false,
        tags: data.tags || [],
        content,
      } as Post;
    });

  return allPostsData
    .filter((post) => post.published)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getAllProjects(): Project[] {
  const projectsDirectory = path.join(contentDirectory, 'projects');
  
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || '',
        description: data.description || '',
        url: data.url,
        github: data.github,
        tags: data.tags || [],
        featured: data.featured === true,
        content,
      } as Project;
    });

  return allProjectsData.sort((a, b) => (a.title > b.title ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}

export function getProjectBySlug(slug: string): Project | null {
  const projects = getAllProjects();
  return projects.find((project) => project.slug === slug) || null;
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured).slice(0, 10);
}

export function getLatestPosts(limit: number = 3): Post[] {
  return getAllPosts().slice(0, limit);
}
