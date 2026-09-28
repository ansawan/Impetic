import React from 'react'
import { blogService } from '@/lib/services/blogService'
import { EditBlogForm } from '@/components/admin/EditBlogForm'

interface EditBlogPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const { blogs } = await blogService.getAllBlogs({ limit: 100 });
  if (blogs.length === 0) {
    return [{ id: 'blog-1' }, { id: 'blog-2' }, { id: 'blog-3' }];
  }
  return blogs.map((blog) => ({
    id: blog.id,
  }));
}

export default async function AdminEditBlogPage({ params }: EditBlogPageProps) {
  const resolvedParams = await params;
  return <EditBlogForm id={resolvedParams.id} />;
}
