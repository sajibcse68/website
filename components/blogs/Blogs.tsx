import BlogCard from '@/components/blogs/BlogCard';
import { getBlogsMetadata } from '@/utils/blogs';

function Blogs() {
  const blogs = getBlogsMetadata('blogs');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blog.slug} blog={blog} />
      ))}
    </div>
  );
}

export default Blogs;

/* blogs */
/* * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  flex-direction: column;
  padding: 14px;
  min-height: 100vh;
  color: #1e293b;
  gap: 14px;
}

header,
main,
footer {
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
}

@media (min-width: 640px) {
  body {
    padding: 24px;
    gap: 24px;
  }

  .postsContainer {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
  }

  .postCard {
    padding: 24px;
  }
} */