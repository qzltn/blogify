function Blogfilter() {
  return (
    <section className="flex flex-col items-center gap-8 py-8 dark:bg-gray-950">

      <div className="flex flex-wrap justify-center gap-8 text-gray-600 dark:text-gray-400">
        <button className="hover:text-black dark:hover:text-white">
          technology
        </button>

        <button className="hover:text-black dark:hover:text-white">
          startup
        </button>

        <button className="hover:text-black dark:hover:text-white">
          lifestyle
        </button>

        <button className="hover:text-black dark:hover:text-white">
          finance
        </button>
      </div>

    </section>
  );
}

export default Blogfilter;