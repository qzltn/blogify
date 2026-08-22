

const Hero = () => {
  return (
    <section className="px-5 py-16 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100 px-4 py-2 text-sm text-gray-600"> 
            <span>new:all feature integrated</span>
            <span>*</span>
        </div>
<h1 className="text-4xl font-bold">your own blogging platform</h1>
<p className="mt-9 text-gray-600">This is your space to think out loud, to share what matters, and to write without filters. Whether it's one word or a thousand, your story starts right here.</p>

<div className="flex w-full max-w-xl">
    <input type="text" placeholder="search for blogs" className=" mt-9 flex-1 border border-gray-300 px-4 py-3 outline-none"></input>
    <button className="bg-black px-8  mt-9 py-3 text-white">search</button>
</div>



    </section>
  )
}

export default Hero
