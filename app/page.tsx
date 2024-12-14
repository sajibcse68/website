'use server';

import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import BlogSection from '@/components/sections/BlogSection';
import TestimonialSection from '@/components/sections/TestimonialSection';

export default async function HomePage() {
  return (
    <div className="m-0">
      <HeroSection />

      <BlogSection />

      <TestimonialSection />
    </div>
  );
}
