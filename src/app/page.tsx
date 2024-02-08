import React from "react";
import Header from "./Header";
import Image from "next/image";


const Home = () => {
  return (
    <main className="max-w-6xl mx-5 md:mx-auto py-10 md:py-20">
      <Header />
      <section className="w-full flex justify-between flex-col md:flex-row ">
        <div className="w-full md:w-[70%]">
          {/* middle image */}

          <img src="/image-web-3-desktop.jpg" alt=""  />
          <div className="flex justify-center md:justify-between  my-10 flex-col md:flex-row gap-5 md:gap-0">
            {/* text of middle */}
            <p className="font-extrabold  text-5xl w-full md:w-1/3">
              The Bright Future of Web 3.0 ?
            </p>
            <p className=" w-full md:w-1/2 flex-col flex  items-center md:items-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              asperiores, culpa neque vero delectus necessitatibus minus quidem
              odit consequuntur, harum est aliquid doloremque quod nihil iusto
              maxime? Quaerat, qui fugit!
              <button className="btn text-white tracking-wider w-2/5 px-5 py-2 mt-7 cursor-pointer">
                Read me
              </button>
            </p>
          </div>
        </div>

        <aside className="bg-[#00000d] text-white w-ful md:w-[28%] p-5">
          <h1 className="text-orange-400 text-3xl font-bold mb-4">News</h1>
          <div className="my-2">
            <p className="text-white font-bold text-xl my-2">
              Hydrogen VS Electric Cars
            </p>
            <p className="text-base text-[#b9bbc9]  pb-6 border-b-[1px] border-slate-400">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>
          <div className="my-8">
            <p className="text-white font-bold text-xl my-2 ">
              The Downside of AI Artistry
            </p>
            <p className="text-base text-[#b9bbc9] pb-6 border-b-[1px] border-slate-400">
              what are the posssible adverse effect of on-demand AI image
              generation?
            </p>
          </div>
          <div className="my-8">
            <p className="text-white font-bold text-xl my-2">
              Hydrogen VS Electric Cars
            </p>
            <p className="text-base text-[#b9bbc9]  pb-6 border-b-[1px] border-slate-400">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default Home;
