"use client";
import { Icon } from "@iconify/react";

export default function Hero() {
  return (
    <div className="bg-[url('/images/background/hero.jpg')] bg-center bg-no-repeat bg-cover   border-b">
      <div className="">
        <div className="max-w-[80%] mx-auto pt-10 pb-10 box-border flex gap-5 w-full ">
          <div className="bg-[url('/images/background/homepage-new-slider-1.jpg')] bg-center relative bg-no-repeat bg-cover w-full pl-14 pt-14 pb-14 rounded-md">
            <div className="z-10 absolute pt-5 space-y-5">
              <h2 className="text-4xl font-medium tracking-tighter max-w-[80%] text-left">
                Best for summer with juice milk 300ml
              </h2>
              <div>
                <p className="tracking-tighter font-normal max-w-[50%] text-left">
                  New arrival with nature fruits, juice milk, essential for
                  summer
                </p>
              </div>
            </div>
            <button className="bg-white px-5 py-2 rounded absolute  bottom-20">
              Shop Now
            </button>
          </div>
          <div className="bg-[#FAC251] relative w-[50%] h-[400px] text-left p-10 rounded-md">
            <img
              className="absolute bottom-0 right-0 z-0"
              src="/images/banner/homepage-new-banner-1.jpg"
              alt=""
            />
            <div className="z-10 absolute pt-5 space-y-5">
              <h2 className="text-4xl font-medium tracking-tighter">
                50% SALE OFF
              </h2>
              <div>
                <p className="tracking-tighter font-normal">Synthetic seeds</p>
                <p className="tracking-tighter font-normal">
                  Get discount 50% OFF
                </p>
              </div>
            </div>
            <button className="bg-white px-5 py-2 rounded absolute  bottom-20">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
