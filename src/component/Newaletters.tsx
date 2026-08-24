const Newaletters = () => {
  return (
    <section className="px-5 py-12 ">
      {" "}
      <div className="mx-auto max-w-3xl   text-center">
        <h1 className="text-3xl font-bold">Never Miss a Blog!</h1>
        <p className="mt-3 text-gray-600">
          Subscribe to get the latest blog, new tech, and exclusive news.
        </p>
        <form className="mx-auto  mt-6 flex max-w-xl items-center  ">
          <input className="min-w-0 flex-1  rounded-md border border-gray-300  px-3 py-2 outline-none font-medium text-white" type="email" placeholder="Enter your email id" />
          <button className="rounded-md px-5 py-3 text-sm  bg-gray-700 text-white ">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newaletters;
