import React, { useState } from "react";

interface Blog {
  id: number;
  title: string;
  published: boolean;
}

const AllBlogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([
    {
      id: 1,
      title: "A detailed step by step guide to manage your lifestyle",
      published: true,
    },
    {
      id: 2,
      title: "How to create an effective startup roadmap or ideas",
      published: true,
    },
    {
      id: 3,
      title: "Learning new technology to boost your career in software",
      published: true,
    },
    {
      id: 4,
      title: "Tips for getting the most out of apps and software",
      published: true,
    },
    {
      id: 5,
      title: "Enhancing your skills and capturing memorable moments",
      published: true,
    },
    {
      id: 6,
      title: "Maximizing returns by minimizing resources in your startup",
      published: true,
    },
    {
      id: 7,
      title: "Taxes on Luxury Houses",
      published: true,
    },
    {
      id: 8,
      title: "The New Way of Study",
      published: true,
    },
  ]);

  const togglePublish = (id: number) => {
    setBlogs((prev) =>
      prev.map((blog) =>
        blog.id === id
          ? { ...blog, published: !blog.published }
          : blog
      )
    );
  };

  const deleteBlog = (id: number) => {
    setBlogs((prev) => prev.filter((blog) => blog.id !== id));
  };

  return (
<div className="w-full max-w-[500px] px-3 py-6 dark:text-white sm:px-6 sm:py-7">
    
      <h1 className="text-[18px] font-semibold text-gray-800 mb-7 dark:text-white">
        All blogs
      </h1>

     
      <div className="w-full overflow-hidden rounded-xl border border-gray-200 shadow-sm dark:border-gray-800 dark:bg-gray-900">

    
        <div className="grid grid-cols-[40px_1fr_120px] items-center min-h-[58px] px-3 bg-gray-50 border-b border-gray-200 dark:border-gray-800 dark:bg-gray-900 ">

          <span className="text-[13px] font-semibold text-gray-700 dark:border-gray-800 dark:bg-gray-900">
            #
          </span>

          <span className="text-[13px] font-semibold text-gray-700 dark:border-gray-800 dark:bg-gray-900">
            BLOG TITLE
          </span>

          <span className="text-[13px] font-semibold text-gray-700 dark:border-gray-800 dark:bg-gray-900">
            ACTIONS
          </span>

        </div>

        
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="grid grid-cols-[40px_1fr_120px] items-center min-h-[88px] px-3 border-b border-gray-200 last:border-b-0 dark:bg-gray-900"
          >

            
            <span className="text-sm text-gray-600  dark:bg-text-400">
              {blog.id}
            </span>

            
            <p className="pr-3 text-[14px] leading-5 text-gray-700  dark:bg-text-300">
              {blog.title}
            </p>

          
            <div className="flex items-center gap-3">

            
              <button
                onClick={() => togglePublish(blog.id)}
               className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-red-50 text-lg text-red-400 hover:bg-red-100 dark:bg-red-950 dark:text-red-400 dark:hover:bg-red-900"
              >
                {blog.published ? "Unpublish" : "Publish"}
              </button>

              
              <button
                onClick={() => deleteBlog(blog.id)}
                className="w-[32px] h-[32px] rounded-full bg-red-50 text-red-400 flex items-center justify-center text-lg hover:bg-red-100"
              >
                ×
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default AllBlogs;