'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function ViewAllBtn() {
  const pathname = usePathname();
  const showBtn = pathname === '/';

  // Delete this when we'll have more than 6 posts
  return null;

  if (!showBtn) return null;

  return (
    <div className="text-center mt-12">
      <Link
        href="/blogs"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
      >
        View All Posts
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Link>
    </div>
  );
}
