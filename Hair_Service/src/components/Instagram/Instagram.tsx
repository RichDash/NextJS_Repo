"use client";
import { cormorant, mulish } from "@/app/ui/font";

function Instagram() {
  return (
    <section id="contact">
      <div className="container max-w-screen-xl bg-white sm:py-12">
      <div className="grid divide-x-2 divide-solid divide-gray-300 ms-4 sm:ms-0">
          <div></div>
          <div className="flex justify-between ps-8 mb-12">
            <p className={`font-semibold text-start uppercase font-thin text-3xl text-[#10173C] ${cormorant.className}`}>
              Testimonals
            </p>
            <div className="flex gap-2 items-center">
              <p className={`text-[#494040] text-sm ${mulish.className}`}>Follow us</p>
              <svg className="w-[20px] h-[20px] fill-[#8e8e8e]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-[#FAF6F2] w-full sm:flex grid-flow-col">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            className="sm:aspect-square h-[290px] sm:object-cover sm:mb-1 mb-4"
          />
          <img
            alt=""
            src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            className="sm:aspect-square h-[290px] object-cover sm:block hidden"
          />
          <img
            alt=""
            src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            className="sm:aspect-square h-[290px] object-cover "
          />
          <img
            alt=""
            src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            className="sm:aspect-square h-[290px] object-cover sm:block hidden"
          />
        </div>
        <div className="bg-[#FAF6F2] w-full">
          <div className={`pt-12 ${cormorant.className}`}>
            <p className="uppercase text-6xl italic font-thin text-center mb-6 text-[#84635C]">Follow us</p>
            <p className="text-[#84635C] text-2xl uppercase font-thin text-center">ON INSTAGRAM and other social networks</p>
            <div className="flex gap-2 text-center place-content-center mt-8 pb-24">
              <button className="uppercase bg-[#A5775E] text-white py-4 px-12">Instagram</button>
              <button className="uppercase bg-white border border-[#A5775E] text-[#A5775E] py-4 px-12 border-solid-[#84635C]">Facebook</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
