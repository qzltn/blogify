import { useState } from "react";

function AddBlog() {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8">

      {/* Page Title */}
      <h1 className="mb-8 text-2xl font-semibold">
        Add Blog
      </h1>

      {/* Upload Image */}
      <div className="mb-7">
        <label className="mb-3 block text-sm font-medium">
          Blog Image
        </label>

        <label className="flex h-48 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg border border-dashed border-gray-300 bg-white transition hover:bg-gray-50">

          {image ? (
            <img
              src={image}
              alt="Blog preview"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center text-gray-400">
              <svg
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4 5h16v14H4z" />
                <path d="m4 16 4-4 3 3 3-4 6 6" />
                <circle cx="9" cy="9" r="1.5" />
              </svg>

              <span className="mt-2 text-sm">
                Upload Image
              </span>
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />

        </label>
      </div>

      {/* Blog Title */}
      <div className="mb-6">

        <label className="mb-3 block text-sm font-medium">
          Blog Title
        </label>

        <div className="flex gap-3">

          <input
            type="text"
            placeholder="Type here"
            className="h-12 flex-1 rounded-lg border border-gray-300 bg-white px-4 text-sm outline-none transition focus:border-gray-500"
          />

          <button
            type="button"
            className="h-12 shrink-0 rounded-lg bg-black px-5 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            AI Generate
          </button>

        </div>

      </div>

      {/* Sub Title */}
      <div className="mb-6">

        <label className="mb-3 block text-sm font-medium">
          Sub Title
        </label>

        <input
          type="text"
          placeholder="Type here"
          className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm outline-none transition focus:border-gray-500"
        />

      </div>

      {/* Blog Description */}
      <div className="mb-6">

        <label className="mb-3 block text-sm font-medium">
          Blog Description
        </label>

        <textarea
          placeholder="Type here"
          className="min-h-[220px] w-full resize-none rounded-lg border border-gray-300 bg-white p-4 text-sm outline-none transition focus:border-gray-500"
        />

      </div>

      {/* Publish Button */}
      <button
        type="button"
        className="rounded-lg bg-black px-7 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
      >
        Publish Blog
      </button>

    </div>
  );
}

export default AddBlog;