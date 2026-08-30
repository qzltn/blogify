import { useState } from "react";
import AllBlogs from "./Allblogs";
import AddBlog from "./Addblogs";
import Comments from "./Comments";

function Dashboard() {
  const [activePage, setActivePage] = useState("dashboard");

  const blogs = [
    "A detailed step by step guide to manage your lifestyle",
    "How to create an effective startup roadmap or ideas",
    "Learning new technology to boost your career in software",
    "Tips for getting the most out of apps and software",
    "Enhancing your skills and capturing memorable moments",
    "Maximizing returns by minimizing resources in your business",
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fb] text-[#20242d]">

    
      <header className="fixed left-0 right-0 top-0 z-50 flex h-[72px] items-center justify-between border-b border-gray-200 bg-white px-5">

        
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center">
            <span className="text-2xl font-bold">✣</span>
          </div>

          <span className="text-2xl font-semibold tracking-tight">
            Blogify
          </span>
        </div>

      
        <button
          className="flex h-9 w-9 items-center justify-center rounded-full text-xl text-gray-500 transition hover:bg-gray-100"
          aria-label="Toggle dark mode"
        >
          ☾
        </button>
      </header>

      <aside className="fixed bottom-0 left-0 top-[72px] z-40 w-[58px] border-r border-gray-200 bg-white">

        <div className="flex flex-col items-center pt-5">

        
          <button
            onClick={() => setActivePage("dashboard")}
            className={`relative flex h-12 w-full items-center justify-center transition ${
              activePage === "dashboard"
                ? "bg-gray-100 text-gray-800"
                : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            {activePage === "dashboard" && (
              <span className="absolute left-0 h-8 w-[3px] rounded-r-full bg-gray-700" />
            )}

            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <path d="M3 11.5 12 4l9 7.5" />
              <path d="M5.5 10.5V20h13v-9.5" />
              <path d="M9 20v-5h6v5" />
            </svg>
          </button>
        
          <button
            onClick={() => setActivePage("addBlog")}
            className={`relative flex h-12 w-full items-center justify-center transition ${
              activePage === "addBlog"
                ? "bg-gray-100 text-gray-800"
                : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            {activePage === "addBlog" && (
              <span className="absolute left-0 h-8 w-[3px] rounded-r-full bg-gray-700" />
            )}

            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <rect x="5" y="5" width="14" height="14" rx="2" />
              <path d="M12 8v8" />
              <path d="M8 12h8" />
            </svg>
          </button>

         
          <button
            onClick={() => setActivePage("allBlogs")}
            className={`relative flex h-12 w-full items-center justify-center transition ${
              activePage === "allBlogs"
                ? "bg-gray-100 text-gray-800"
                : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            {activePage === "allBlogs" && (
              <span className="absolute left-0 h-8 w-[3px] rounded-r-full bg-gray-700" />
            )}

            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <rect x="5" y="4" width="14" height="16" rx="2" />
              <path d="M8 8h8" />
              <path d="M8 12h8" />
              <path d="M8 16h5" />
            </svg>
          </button>

          
          <button
            onClick={() => setActivePage("comments")}
            className={`relative flex h-12 w-full items-center justify-center transition ${
              activePage === "comments"
                ? "bg-gray-100 text-gray-800"
                : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            {activePage === "comments" && (
              <span className="absolute left-0 h-8 w-[3px] rounded-r-full bg-gray-700" />
            )}

            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
            >
              <path d="M20 11.5a7 7 0 0 1-7 7H8l-4 2v-9a7 7 0 0 1 7-7h2a7 7 0 0 1 7 7Z" />
              <path d="M8 11h.01" />
              <path d="M12 11h.01" />
              <path d="M16 11h.01" />
            </svg>
          </button>

        </div>
      </aside>
      
      <main className="ml-[58px] pt-[72px]">

      
        {activePage === "dashboard" && (
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">

           
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

             
              <div className="flex min-h-[110px] items-center gap-5 rounded-lg border border-gray-200 bg-white px-5 shadow-sm">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gray-50">

                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <rect x="5" y="4" width="14" height="16" rx="2" />
                    <path d="M8 8h8" />
                    <path d="M8 12h6" />
                    <path d="m8 16 2 2 5-5" />
                  </svg>

                </div>

                <div>
                  <p className="text-2xl font-semibold">10</p>
                  <p className="text-sm text-gray-500">Blogs</p>
                </div>
              </div>

            
              <div className="flex min-h-[110px] items-center gap-5 rounded-lg border border-gray-200 bg-white px-5 shadow-sm">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gray-50">

                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M20 11.5a7 7 0 0 1-7 7H8l-4 2v-9a7 7 0 0 1 7-7h2a7 7 0 0 1 7 7Z" />
                  </svg>

                </div>

                <div>
                  <p className="text-2xl font-semibold">27</p>
                  <p className="text-sm text-gray-500">Comments</p>
                </div>
              </div>

              
              <div className="flex min-h-[110px] items-center gap-5 rounded-lg border border-gray-200 bg-white px-5 shadow-sm">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-gray-50">

                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M5 4h14v16H5z" />
                    <path d="m8 16 2.5-.5L17 9l-2-2-6.5 6.5L8 16Z" />
                    <path d="m14 7 2 2" />
                  </svg>

                </div>

                <div>
                  <p className="text-2xl font-semibold">4</p>
                  <p className="text-sm text-gray-500">Drafts</p>
                </div>
              </div>

            </div>
         
            <section className="mt-10">

              <div className="mb-4 flex items-center gap-3">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <path d="M8 9h8" />
                  <path d="M8 13h8" />
                  <path d="M8 17h5" />
                </svg>

                <h2 className="text-xl font-semibold">
                  Latest Blogs
                </h2>
              </div>

             
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">

                
                <div className="grid grid-cols-[45px_1fr_125px] border-b border-gray-200 px-4 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:grid-cols-[55px_1fr_150px]">

                  <div>#</div>

                  <div>
                    Blog Title
                  </div>

                  <div>
                    Actions
                  </div>

                </div>

                
                {blogs.map((blog, index) => (
                  <div
                    key={index}
                    className="grid min-h-[82px] grid-cols-[45px_1fr_125px] items-center border-b border-gray-100 px-4 last:border-b-0 sm:grid-cols-[55px_1fr_150px]"
                  >

                    <div className="text-sm text-gray-500">
                      {index + 1}
                    </div>

                    <div className="pr-3 text-sm leading-5 text-gray-600 sm:text-base">
                      {blog}
                    </div>

                    <div className="flex items-center gap-2">

                      <button className="rounded-md border border-gray-300 px-3 py-2 text-xs text-gray-600 transition hover:bg-gray-50 sm:text-sm">
                        Unpublish
                      </button>

                      <button className="flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-red-300 transition hover:bg-red-100">
                        ×
                      </button>

                    </div>

                  </div>
                ))}

              </div>

            </section>

          </div>
        )}

        
        {activePage === "allBlogs" && <AllBlogs />}

       
    {activePage === "addBlog" && <AddBlog />}

       {activePage === "comments" && <Comments/>}

      </main>

    </div>
  );
}

export default Dashboard;