import React from 'react'

const Home = () => {
  return (
    <div>
    <section className="flex flex-col items-center justify-center text-center h-screen">
      <h1 className="uppercase font-bold text-4xl tracking-wode mb-5 md:text-6xl lg:text-8xl">
        Vivek Yadav Blog
      </h1>
      <button className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-5-- hover:text-black font-bold">
        Read my Blog
      </button>
    </section>
    </div>
  )
}

export default Home;