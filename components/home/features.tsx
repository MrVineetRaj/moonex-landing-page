import { FEATURES } from "@/lib/constants";
import React from "react";

export const FeatureSection = () => {
  return (
    <section className="h-[80%] flex justify-center w-full   overflow-hidden relative">
      <div className="w-full max-w-[1400px] flex flex-col gap-8 items-start px-4 sm:px-8 md:px-16">
        <h1 className="text-3xl font-semibold text-center w-full">
          Our <span className="text-primary">Features</span>?
        </h1>
        <div className="flex justify-center flex-wrap relative p-4 rounded-xl gap-4 w-full">
          {FEATURES.map(({ feature, description, icon: Icon }) => {
            return (
              <div className="bg-white/5 max-w-72 w-full p-6 rounded-xl flex flex-col items-start gap-2">
                <span className="p-3 bg-white/10 rounded-full">
                  <Icon className="size-8" />
                </span>
                <h2 className="text-lg font-semibold mt-4">{feature}</h2>
                <p className="text-description text-sm">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
