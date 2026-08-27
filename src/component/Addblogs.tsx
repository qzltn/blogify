const AddBlog = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-3xl mx-auto">

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">
            Upload thumbnail
          </h2>
        </div>

        <div className="bg-gray-100 rounded-xl w-40 h-32 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition">
          <div className="text-3xl text-gray-400">
            ☁
          </div>

          <p className="text-gray-400 mt-2 text-sm">
            Upload
          </p>
        </div>

      </div>
      <div className="mt-8">
  <label className="block text-lg font-medium text-gray-700 mb-3">
    Blog title
  </label>

  <input
    type="text"
    placeholder="Type here"
    className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-gray-400"
  />

  <button className="mt-3 border border-gray-300 rounded-lg px-4 py-2 text-gray-600">
    ✦ AI Generate
  </button>
</div>
<div className="mt-6">
  <label className="block text-lg font-medium text-gray-700 mb-3">
    Sub title
  </label>

  <input
    type="text"
    placeholder="Type here"
    className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-gray-400"
  />
</div>
<div className="mt-6">
  <label className="block text-lg font-medium text-gray-700 mb-3">
    Blog Description
  </label>

  <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
    <div className="flex items-center gap-4 px-4 py-3 border-b border-gray-200 text-gray-600">
      <span>Normal</span>
      <span>↕</span>
      <b>B</b>
      <i>I</i>
      <u>U</u>
      <span>🔗</span>
      <span>☷</span>
      <span>☷</span>
    </div>

    <textarea
      className="w-full h-64 p-4 outline-none resize-none"
      placeholder=""
    />
  </div>
</div>
<div className="mt-6">
  <label className="block text-lg font-medium text-gray-700 mb-3">
    Blog category
  </label>

  <select className="w-48 border border-gray-200 rounded-lg px-4 py-3 text-gray-500 outline-none">
    <option value="">Select category</option>
    <option value="technology">Technology</option>
    <option value="lifestyle">Lifestyle</option>
    <option value="business">Business</option>
    <option value="travel">Travel</option>
  </select>
</div>
<div className="mt-6 flex items-center gap-3">
  <input
    type="checkbox"
    id="publish"
    className="w-4 h-4"
  />

  <label
    htmlFor="publish"
    className="text-lg text-gray-600"
  >
    Publish Now
  </label>
</div>
<button
  type="button"
  className="mt-6 px-6 py-3 bg-black text-white rounded-lg text-base font-medium"
>
  Add Blog
</button>
<div className="mt-8">
<label>blog title</label>
</div>
    </div>
    
  )
}

export default AddBlog