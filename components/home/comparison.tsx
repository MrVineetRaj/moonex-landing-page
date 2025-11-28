import { images } from "@/lib/assets";
import { COMPARISON } from "@/lib/constants";
import Image from "next/image";
import React from "react";
import { CheckIcon, XIcon } from "lucide-react";

export const ComparisonSection = () => {
  return (
    <section className="flex justify-center w-full   overflow-hidden relative">
      <div className="w-full max-w-[1400px] flex flex-col gap-8 items-start px-4 sm:px-8 md:px-16">
        <h1 className="text-3xl font-semibold">
          Why <span className="text-primary">MoonEX</span>?
        </h1>
        <div
          className="w-full overflow-x-auto overflow-y-hidden"
          style={{
            scrollbarWidth: "thin",
            scrollbarGutter: "red",
            
          }}
        >
          <div className="grid grid-cols-7 w-full min-w-[600px] relative p-4 border rounded-xl border-gray-400/20 bg-white/5 ">
            <span className="col-span-3 flex items-center justify-start px-12 text-2xl font-semibold  border-b border-r border-gray-400/20 py-6">
              <h2 className="text-primary">Comparison</h2>
            </span>
            <span className="col-span-2 flex justify-center items-center border-b border-r border-gray-400/20">
              <Image
                src={images.logo}
                width={100}
                height={100}
                alt="logo"
                className="w-[60%]"
              />
            </span>
            <span className="col-span-2  flex justify-center items-center border-b border-gray-400/20 ">
              <Image
                src={images.logo}
                width={100}
                height={100}
                alt="uniswap_logo"
                className="w-[60%]"
              />
            </span>
            {COMPARISON.map(({ feat, moonex, uniswap }, idx) => {
              return (
                <>
                  <div
                    className="col-span-3 border-b border-r border-gray-400/20 flex justify-start items-center p-6"
                    key={`${idx}${feat}`}
                  >
                    {idx + 1 + " " + feat}
                  </div>{" "}
                  <div
                    className="col-span-2 flex justify-center items-center border-b border-r border-gray-400/20 "
                    key={`${idx}-moonex`}
                  >
                    {moonex ? (
                      <CheckIcon className="text-green-500" />
                    ) : (
                      <XIcon className="text-red-500" />
                    )}
                  </div>
                  <div
                    className="col-span-2 flex justify-center items-center border-b  border-gray-400/20"
                    key={`${idx}-moonex`}
                  >
                    {uniswap ? (
                      <CheckIcon className="text-green-500" />
                    ) : (
                      <XIcon className="text-red-500" />
                    )}
                  </div>
                </>
              );
            })}
            <span className="col-span-3 border-r border-gray-400/20 h-4 block"></span>
            <span className="col-span-2 border-r border-gray-400/20 h-4 block"></span>

            {/* Background layer */}
            <div className="-z-5 absolute top-0 left-0">
              <Image
                src={images.bgGradient1}
                width={1000}
                height={1000}
                alt="bg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
