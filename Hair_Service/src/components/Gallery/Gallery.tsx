"use client";
import { Button } from "@material-tailwind/react";
import { cormorant } from "@/app/ui/font";

function Gallery() {
  return (
    <section>
      <div className="max-w-screen-xl bg-white mx-auto sm:mt-1 mt-8">
        <div className="grid divide-x-2 divide-solid divide-gray-300 ms-4 sm:ms-0">
          <div></div>
          <div className="flex justify-between ps-8 ">
            <p className={`font-semibold text-start uppercase font-thin text-3xl text-[#10173C] ${cormorant.className}`}>
              Galeria
            </p>
            <div className="flex gap-6 items-center">
              <p className="text-[#494040] text-sm">Woman</p>
              <p className="text-[#BBA39B] text-sm">Man</p>
              <div className="flex">
                <div className="border border-[#DDC3BB] p-2 aspect-square content-center self-center">
                  <svg className="w-[10px] h-[10px] fill-[#8e8e8e]" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path>
                  </svg>
                </div>
                <div className="border border-[#DDC3BB] p-2 aspect-square content-center self-center">
                  <svg className="w-[10px] h-[10px] fill-[#8e8e8e]" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <li>
            <a href="#" className="group block overflow-hidden">
              <img
                src="/images/Home/img_slide1.png"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[540px]"
              />
            </a>
          </li>

          <li>
            <a href="#" className="group sm:block hidden overflow-hidden">
              <img
                src="/images/Home/img_slide2.png"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[540px]"
              />
            </a>
          </li>

          <li>
            <a href="#" className="group sm:block hidden overflow-hidden">
              <img
                src="/images/Home/img_slide3.png"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[540px]"
              />
            </a>
          </li>

          <li>
            <a href="#" className="group sm:block hidden overflow-hidden">
              <img
                src="/images/Home/img_slide4.png"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[540px]"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Gallery;
