const Hero = () => {
  return (
    <section className="px-5 py-16 text-center dark:bg-gray-950">

      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100 px-4 py-2 text-sm text-gray-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
        <span>new:all feature integrated</span>
        <span>*</span>
      </div>

      <h1 className="text-4xl font-bold dark:text-white">
        your own blogging platform
      </h1>

      <p className="mt-9 text-gray-600 dark:text-gray-400">
        This is your space to think out loud, to share what matters, and to
        write without filters. Whether it's one word or a thousand, your story
        starts right here.
      </p>

      <div className="mx-auto mt-9 flex w-full max-w-xl">
  <input
    type="text"
    placeholder="search for blogs"
    className="min-w-0 flex-1 rounded-l-md border border-gray-300 bg-white px-3 py-3 text-sm outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500 sm:px-4"
  />

  <button className="shrink-0 rounded-r-md bg-black px-4 py-3 text-sm text-white dark:bg-white dark:text-black sm:px-8">
    search
  </button>
</div>

    </section>
  );
};

export default Hero;