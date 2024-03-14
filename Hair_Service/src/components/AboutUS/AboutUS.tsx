"use client";

import { IconButton, Typography } from "@material-tailwind/react";
import { cormorant, mulish } from "@/app/ui/font";

function AboutUS() {
  return (
    // <section>
        <div className="grid lg:grid-cols-5 sm:grid-cols-1 bg-[#FAF6F2]">
          <div className="sm:col-span-2 sm:block hidden">
            <img
              alt=""
              src="/images/Home/img_submain.png"
              className="object-cover h-[480px] "
            />
          </div>

          <div className="col-span-3 sm:my-auto my-16 sm:mx-36 mx-2 divide-dashed px-4 sm:text-start text-center">
            <article className="grid divide-[#A5775E] divide-x divide-solid space-y-4 text-gray-600">
              <div className=""></div>
              <div className="ps-7">
              <h2 className={`text-3xl text-[#494040] mb-8 font-medium uppercase ${cormorant.className}`}>About US</h2>
              <p className={`text-sm text-[#494040] font-thin ${mulish.className}`}>
                Nutrindo a beleza de cada fio há mais de 18 anos, trazemos uma riqueza de experiência e paixão aos nossos clientes. No Paraíso das Princesas, criamos experiências personalizadas que elevam a sua confiança e o seu estilo. Desde a aplicação de extensões, à estética e criações vanguardistas, somos especializados em dar vida à sua visão.
              </p>
              </div>
              
            </article>
          </div>
        </div>
    // </section>
  );
}
export default AboutUS;
