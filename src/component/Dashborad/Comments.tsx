import { useState } from "react";

type Comment = {
  id: number;
  blog: string;
  name: string;
  comment: string;
};

const approvedComments: Comment[] = [
  {
    id: 1,
    blog: "Learning new technology to boost your career in software",
    name: "Jock London",
    comment: "Hi this blog is must to read",
  },
  {
    id: 2,
    blog: "Enhancing your skills and capturing memorable moments",
    name: "Peter Lawrence",
    comment:
      "Honestly, I did not expect this to work, but it totally did. Saved my project!",
  },
];

const notApprovedComments: Comment[] = [
  {
    id: 1,
    blog: "A detailed step by step guide to manage your lifestyle",
    name: "Michael Scott",
    comment: "This is my new comment",
  },
  {
    id: 2,
    blog: "How to create an effective startup roadmap or ideas",
    name: "John Doe",
    comment: "This is a nice blog",
  },
  {
    id: 3,
    blog: "Tips for getting the most out of apps and software",
    name: "Sam Smith",
    comment:
      "This is the best blog, everybody should read it",
  },
];

export default function Comments() {
  const [activeTab, setActiveTab] = useState<
    "approved" | "notApproved"
  >("approved");

  const comments =
    activeTab === "approved"
      ? approvedComments
      : notApprovedComments;

  return (
    <div className="w-full max-w-[700px] px-3 py-6 text-gray-700 dark:text-gray-200 sm:px-6 sm:py-7">

      {/* Header */}
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <h2 className="text-[17px] font-semibold text-gray-700 dark:text-white">
          Comments
        </h2>

        <div className="flex gap-2 sm:gap-4">

          {/* Approved */}
          <button
            onClick={() => setActiveTab("approved")}
            className={`
              rounded-full border px-4 py-2 text-xs transition sm:px-5
              ${
                activeTab === "approved"
                  ? "border-gray-500 bg-gray-100 text-gray-800 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  : "border-gray-400 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
              }
            `}
          >
            Approved
          </button>

          {/* Not Approved */}
          <button
            onClick={() => setActiveTab("notApproved")}
            className={`
              rounded-full border px-4 py-2 text-xs transition sm:px-5
              ${
                activeTab === "notApproved"
                  ? "border-gray-500 bg-gray-100 text-gray-800 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                  : "border-gray-400 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
              }
            `}
          >
            Not Approved
          </button>

        </div>
      </div>

      {/* Comments List */}
      <div className="overflow-x-auto rounded-xl border border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">

        {/* Table Header */}
        <div className="grid min-w-[500px] grid-cols-[1fr_115px] border-b border-gray-200 px-4 py-4 dark:border-gray-800 sm:px-6">

          <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
            BLOG TITLE & COMMENT
          </span>

          <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
            ACTION
          </span>

        </div>

        {/* Comments */}
        {comments.map((item) => (
          <div
            key={item.id}
            className="grid min-h-[180px] min-w-[500px] grid-cols-[1fr_115px] border-b border-gray-200 px-4 py-6 last:border-0 dark:border-gray-800 sm:px-6 sm:py-7"
          >

            {/* Comment Info */}
            <div className="pr-3 text-[13px] leading-5 text-gray-700 dark:text-gray-300">

              <p className="mb-5">
                <span className="font-semibold text-gray-800 dark:text-white">
                  Blog :
                </span>{" "}
                {item.blog}
                </p>

              <p>
                <span className="font-semibold text-gray-800 dark:text-white">
                  Name :
                </span>{" "}
                {item.name}
              </p>

              <p>
                <span className="font-semibold text-gray-800 dark:text-white">
                  Comment :
                </span>{" "}
                {item.comment}
              </p>

            </div>

            {/* Action */}
            <div className="flex items-start gap-3 pt-8">

              {activeTab === "approved" ? (
                <span className="flex h-[35px] items-center whitespace-nowrap rounded-full border border-green-400 bg-green-50 px-3 text-[11px] text-green-600 dark:border-green-700 dark:bg-green-950 dark:text-green-400">
                  Approved
                </span>
              ) : (
                <button
                  className="text-green-500 transition hover:text-green-400"
                  title="Approve"
                >
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="m8 12 2.5 2.5L16 9" />
                  </svg>
                </button>
              )}

              {/* Delete */}
              <button
                className="text-gray-500 transition hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
                title="Delete"
              >
                <svg
                  className="h-[21px] w-[21px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 7h16" />
                  <path d="M10 11v6" />
                  <path d="M14 11v6" />
                  <path d="M6 7l1 13h10l1-13" />
                  <path d="M9 7V4h6v3" />
                </svg>
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}