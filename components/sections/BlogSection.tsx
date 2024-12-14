import Link from 'next/link';

// components
import Blogs from '@/components/blogs/Blogs';
import { ViewAllBtn } from '@/components/buttons/ViewAllBtn';

function BlogSection() {
  return (
    <section className="backdrop-blur-lg bg-white/30 dark:bg-gray-900/30 rounded-xl py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Latest Blog Posts
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Insights and experiences from my journey in web development
          </p>
        </div>

        {/* All blogs */}
        <Blogs />

        {/** <!-- "View All" Button --> */}
        <ViewAllBtn />
      </div>
    </section>
  );
}

export default BlogSection;
