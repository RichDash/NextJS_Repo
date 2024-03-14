"use client";

import { IconButton, Typography } from "@material-tailwind/react";
import { cormorant, mulish} from "@/app/ui/font";

function Hero() {
  return (
    <div className={`${cormorant.className}`}>
      <div className="sm:min-h-screen sm:w-screen">
        <img src="/images/Home/img_main.png" className="relative sm:min-h-screen h-[600px] sm:w-full object-cover object-right" />
        <div className="absolute inset-0 grid min-h-screen sm:px-8 px-2">
          <div className="container relative z-10 sm:mt-20 mt-30 mx-20 grid sm:place-content-start place-self-center sm:text-start text-center sm:ms-20">
            <p className="italic text-3xl sm:mb-2 sm:text-8xl leading-10 sm:font-light sm:tracking-tighter uppercase" color="white">
              Cabelo Sedoso
            </p>
            <div className={`${cormorant.className}`}>
            <p color="white" className="text-xl sm:text-5xl sm:font-normal uppercase tracking-tighter mb-1 w-full md:max-w-full lg:max-w-3xl">
              Não acontece por acaso
            </p>
            </div>
            
            <p color="white" className="text-xl sm:mb-3 sm:text-5xl sm:font-normal tracking-tighter uppercase sm:mb-6 w-full md:max-w-full lg:max-w-3xl">
              Acontece por marcação
            </p>
            <div className="sm:mt-5">
              <button type="button" className="py-3 px-12 sm:w-auto inline-flex items-center gap-x-2 text-lg font-thin rounded-sm border border-transparent bg-[#A5775E]">FAZER MARCAÇÃO</button>
            </div>
            <div className="sm:flex mt-24 divide-x divide-dashed gap-6">
              <div className="flex-shrink-0 group block">
                <div className={`sm:flex items-center ${mulish.className}`}>
                  <img className="inline-block justify-center size-[36px] rounded-full" src="/images/Home/location.png" alt="Image Description" />
                  <div className="ms-3">
                    <p className="font-thin text-xs dark:text-gray-300">Address:</p>
                    <p className="text-xs font-bold text-white dark:text-white">Rua Aquiles Machado 5</p>
                    <p className="text-xs font-bold text-white dark:text-white">1900-077 Lisboa</p>
                  </div>
                </div>
              </div>
              <div className="ps-4 flex-shrink-0 group sm:block hidden">
                <div className={`sm:flex items-center ${mulish.className}`}>
                  <img className="inline-block justify-center size-[36px] rounded-full" src="/images/Home/routing1.png" alt="Image Description" />
                  <div className="ms-3">
                    <p className="font-thin text-xs dark:text-gray-300">Parking:</p>
                    <p className="text-xs font-bold text-white dark:text-white">Rua Aquiles Machado 5</p>
                    <p className="text-xs font-bold text-white dark:text-white">1900-077 Lisboa</p>
                  </div>
                </div>
              </div>
              <div className="ps-4 flex-shrink-0 group sm:block hidden">
                <div className={`sm:flex items-center ${mulish.className}`}>
                  <img className="inline-block justify-center size-[36px] rounded-full" src="/images/Home/routing2.png" alt="Image Description" />
                  <div className="ms-3">
                    <p className="font-thin text-xs dark:text-gray-300">Metro:</p>
                    <p className="text-xs font-bold text-white dark:text-white">Rua Aquiles Machado 5</p>
                    <p className="text-xs font-bold text-white dark:text-white">1900-077 Lisboa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
