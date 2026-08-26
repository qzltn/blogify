const Newsletter = () => {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold">
          Never Miss a Blog
        </h2>

        <p className="mt-3 text-gray-500">
          Stay updated with the latest blogs and news.
        </p>

        <form className="mx-auto mt-6 flex max-w-xl items-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="min-w-0 flex-1 rounded-md border border-gray-300 px-4 py-3 outline-none"
          />

          <button
            type="submit"
            className="rounded-md bg-black px-5 py-3 text-sm font-medium text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;