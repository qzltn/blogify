import { useState } from "react";

const AddBlog = () => {
  const [image, setImage] = useState<File | null>(null);

  return (
    <div className="w-full max-w-[700px] px-3 py-5 text-gray-700 dark:text-gray-200 sm:px-6">

      
      <div className="mb-7">
        <label className="mb-2 block text-[15px] font-medium text-gray-700 dark:text-gray-200">
          Upload thumbnail
        </label>

        <label
          htmlFor="thumbnail"
          className="flex h-[105px] w-[180px] cursor-pointer flex-col items-center justify-center rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800"
        >
          <input
            id="thumbnail"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                setImage(e.target.files[0]);
              }
            }}
          />

          {image ? (
            <img
              src={URL.createObjectURL(image)}
              alt="thumbnail"
              className="h-full w-full rounded-lg object-cover"
            />
          ) : (
            <>
              <span className="text-2xl text-gray-400 dark:text-gray-500">
                ☁
              </span>

              <span className="text-sm text-gray-400 dark:text-gray-500">
                Upload
              </span>
            </>
          )}
        </label>
      </div>

   
      <div className="mb-5">
        <label className="mb-2 block text-[15px] font-medium text-gray-700 dark:text-gray-200">
          Blog title
        </label>

        <input
          type="text"
          placeholder="Type here"
          className="h-[48px] w-full rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500"
        />

        <button
          type="button"
          className="mt-3 flex h-[39px] items-center gap-2 rounded-md border border-gray-300 px-4 text-[13px] text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          <span>✦</span>
          AI Generate
        </button>
      </div>

      
      <div className="mb-5">
        <label className="mb-2 block text-[15px] font-medium text-gray-700 dark:text-gray-200">
          Sub title
        </label>

        <input
          type="text"
          placeholder="Type here"
          className="h-[48px] w-full rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500"
        />
      </div>

      
      <div className="mb-5">
        <label className="mb-2 block text-[15px] font-medium text-gray-700 dark:text-gray-200">
          Blog Description
        </label>

        <div className="overflow-hidden rounded-md border border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-900">

          
          <div className="flex h-[82px] items-start gap-4 border-b border-gray-200 px-4 py-3 text-gray-600 dark:border-gray-700 dark:text-gray-300 sm:gap-5">

            <button type="button" className="text-sm">
              Normal
            </button>

            <button type="button" className="font-bold">
              B
            </button>

            <button type="button" className="italic">
              I
            </button>

            <button type="button" className="underline">
              U
            </button>

            <button type="button">
              🔗
            </button>

            <button type="button">
              ☷
            </button>

            <button type="button">
              ≣
            </button>

            <button type="button">
              Tₓ
            </button>

          </div>

        
          <div
            contentEditable
            suppressContentEditableWarning
            className="h-[250px] px-4 py-3 text-sm text-gray-800 outline-none dark:text-gray-200"
          />
        </div>
      </div>

     
      <div className="mb-4">
        <label className="mb-2 block text-[15px] font-medium text-gray-700 dark:text-gray-200">
          Blog category
        </label>

        <select className="h-[40px] w-[180px] rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-500 outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
          <option value="">Select category</option>
          <option value="Technology">Technology</option>
          <option value="Startup">Startup</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Business">Business</option>
          <option value="Travel">Travel</option>
        </select>
        </div>

     
      <label className="mb-5 flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
        <span>Publish Now</span>

        <input
          type="checkbox"
          className="h-4 w-4 accent-black dark:accent-white"
        />
      </label>

      
      <button
        type="button"
        className="h-[43px] w-[175px] rounded-md bg-black text-sm font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
      >
        Add Blog
      </button>

    </div>
  );
};

export default AddBlog;