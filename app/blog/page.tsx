import Markdown from 'markdown-to-jsx';
import { getBlogsMetadata, getBlogContent } from '@/utils/blogs';
import React from 'react';

// components
import BlogSection from '@/components/sections/BlogSection';

// utils
import { capitalizeFirstLetter } from '@/utils/common';

export const generateStaticParams = async () => {
  const blogs = getBlogsMetadata('blogs');
  return blogs.map((blog) => ({ slug: blog.slug }));
};

export async function generateMetadata({ params }: any) {
  const id = await params?.slug ? `${params?.slug} | Sajib's Blogs` : '';

  return {
    title: `${capitalizeFirstLetter(id.replaceAll('-', ' ') ?? '')}`,
  };
}

export default function BlogPage() {
  return (
    <article className="mx-auto max-w-7xl">
      <BlogSection />
    </article>
  );
}
