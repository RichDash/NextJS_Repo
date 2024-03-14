"use client";

import { cormorant, mulish } from "@/app/ui/font";

function Service() {
  return (
    <div className="relative flex sm:min-h-screen flex-col justify-center overflow-hidden bg-white py- sm:py-12">
      <div className="min-h-28 ">
        <div className="max-w-screen-xl mx-auto py-4 ">
          <div className="grid divide-x-2 divide-solid divide-gray-300 ms-4 sm:ms-0">
            <div></div>
            <p className={`font-semibold text-start uppercase font-thin text-3xl text-[#494040] ps-8 ${cormorant.className}`}>
              Our Services
            </p>
          </div>
         

          <div className="rounded-sm overflow-hidden mt-10 relative">
            {/* <div className="absolute inset-0 h-full w-full bg-gray-900/75" /> */}
            <img src="/images/Home/img_type_main.png" className="sm:w-full sm:h-[700px] h-[600px] object-center object-cover" alt="" />
            
            <div className="absolute sm:inset-y-0 sm:left-0 sm:h-full sm:w-1/2 inset-x-0 bottom-0 h-1/2 w-full bg-gray-700/75" >
              <div className="sm:my-48 my-5 mx-16">
                <p className={`font-thin sm:text-3xl text-2xl uppercase sm:mt-16 ${cormorant.className}`}>VENDA DE</p>
                <div></div>
                <p className={`sm:italic font-thin sm:text-6xl text-2xl uppercase ${cormorant.className}`} color="white">
                  CABELO NATURAL
                </p>
                <p color="white" className={`text-sm font-thin sm:mt-12 mt-3 w-full md:max-w-full lg:max-w-3xl ${mulish.className}`}>
                  Transforme o seu visual com extensões luxuosas e perucas feitas à medida e aplicadas no Paraíso das Princesa. Explore a nossa coleções, disponíveis em diversas texturas e cores para combinar com o seu estilo único
                </p>
                <div className={`sm:mt-12 mt-3 gap-8 flex mb-5 ${cormorant.className}`}>
                  <button type="button" className="py-4 px-12 inline-flex items-center gap-x-2 text-base rounded-sm border border-transparent bg-[#A5775E]">FAZER MARCAÇÃO</button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
            <article className="hidden sm:block sm:flex bg-[#FAF3F2] transition hover:shadow-xl">
              <div className="sm:basis-56">
                <img
                  alt=""
                  src="/images/Home/img_type1.png"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <a href="#">
                    <h3 className={`uppercase text-[#84635C] text-xl ${cormorant.className}`}>
                      CUIDADOS COM CABELO NATURAL
                    </h3>
                  </a>

                  <p className="mt-6 line-clamp-3 font-light text-sm/relaxed text-[#494040]">
                    Celebre a beleza do seu cabelo natural com cuidados direcionados e personalizados no Paraíso das Princesas. Os nossos serviços de cuidados com cabelo natural destinam-se a indivíduos que procuram realçar e manter a textura única do seu cabelo.
                  </p>
                </div>
              </div>
            </article>

            <article className="hidden sm:block sm:flex bg-[#EFEDE7] transition hover:shadow-xl">
              <div className="sm:basis-56">
                <img
                  alt=""
                  src="/images/Home/img_type2.png"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <a href="#">
                    <h3 className={`uppercase text-[#84635C] text-xl ${cormorant.className}`}>
                      CUIDADOS COM CABELO NATURAL
                    </h3>
                  </a>

                  <p className="mt-6 line-clamp-3 font-light text-sm/relaxed text-[#494040]">
                    Celebre a beleza do seu cabelo natural com cuidados direcionados e personalizados no Paraíso das Princesas. Os nossos serviços de cuidados com cabelo natural destinam-se a indivíduos que procuram realçar e manter a textura única do seu cabelo.
                  </p>
                </div>
              </div>
            </article>

            <article className="hidden sm:block sm:flex bg-[#FAF3F2] transition hover:shadow-xl">
              <div className="sm:basis-56">
                <img
                  alt=""
                  src="/images/Home/img_type3.png"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <a href="#">
                    <h3 className={`uppercase text-[#84635C] text-xl ${cormorant.className}`}>
                      CUIDADOS COM CABELO NATURAL
                    </h3>
                  </a>

                  <p className="mt-6 line-clamp-3 font-light text-sm/relaxed text-[#494040]">
                    Celebre a beleza do seu cabelo natural com cuidados direcionados e personalizados no Paraíso das Princesas. Os nossos serviços de cuidados com cabelo natural destinam-se a indivíduos que procuram realçar e manter a textura única do seu cabelo.
                  </p>
                </div>
              </div>
            </article>

            <article className="hidden sm:block sm:flex bg-[#FAF3F2] transition hover:shadow-xl">
              <div className="sm:basis-56">
                <img
                  alt=""
                  src="/images/Home/img_type4.png"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <a href="#">
                    <h3 className={`uppercase text-[#84635C] text-xl ${cormorant.className}`}>
                      CUIDADOS COM CABELO NATURAL
                    </h3>
                  </a>

                  <p className="mt-6 line-clamp-3 font-light text-sm/relaxed text-[#494040]">
                    Celebre a beleza do seu cabelo natural com cuidados direcionados e personalizados no Paraíso das Princesas. Os nossos serviços de cuidados com cabelo natural destinam-se a indivíduos que procuram realçar e manter a textura única do seu cabelo.
                  </p>
                </div>
              </div>
            </article>

            <article className="hidden sm:block sm:flex bg-[#EFEDE7] transition hover:shadow-xl">
              <div className="sm:basis-56">
                <img
                  alt=""
                  src="/images/Home/img_type5.png"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <a href="#">
                    <h3 className={`uppercase text-[#84635C] text-xl ${cormorant.className}`}>
                      CUIDADOS COM CABELO NATURAL
                    </h3>
                  </a>

                  <p className="mt-6 line-clamp-3 font-light text-sm/relaxed text-[#494040]">
                    Celebre a beleza do seu cabelo natural com cuidados direcionados e personalizados no Paraíso das Princesas. Os nossos serviços de cuidados com cabelo natural destinam-se a indivíduos que procuram realçar e manter a textura única do seu cabelo.
                  </p>
                </div>
              </div>
            </article>

            <article className="flex bg-[#A5775E] transition hover:shadow-xl">
              <div className="flex flex-1 flex-col justify-between">
                <div className={`border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6 ${cormorant.className}`}>
                  <h3 className={`text-5xl uppercase text-white `}>
                    -15% DESCONTO
                  </h3>
                  <p className="mt-2 line-clamp-3 italic text-2xl uppercase font-thin text-white">
                    na sua primeira visita
                  </p>
                  <div className="mt-12 flex items-center justify-between">
                    <p className="text-xl text-white font-thin">
                      FAZER MARCAÇÃO
                    </p>
                    <button className="border border-white p-2 font-thin">
                      <svg className="w-[16px] h-[16px] fill-white" viewBox="20 20 320 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
