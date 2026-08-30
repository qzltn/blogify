const Newsletter = () => {
  return (
    <section className="bg-white px-4 py-12 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl text-center">

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Never Miss a Blog
        </h2>

        <p className="mt-3 text-gray-500 dark:text-gray-400">
          Stay updated with the latest blogs and news.
        </p>

        <form className="mx-auto mt-6 flex max-w-xl items-center gap-2">

          <input
            type="email"
            placeholder="Enter your email"
            className="min-w-0 flex-1 rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500"
          />

          <button
            type="submit"
            className="rounded-md bg-black px-5 py-3 text-sm font-medium text-white dark:bg-white dark:text-black"
          >
            Subscribe
          </button>

        </form>
      </div>
    </section>
  );
};

export default Newsletter;