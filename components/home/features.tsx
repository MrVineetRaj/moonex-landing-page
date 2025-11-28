import { FEATURES } from "@/lib/constants";
import React from "react";

export const FeatureSection = () => {
  return (
    <section className="flex justify-center w-full mt-16 overflow-hidden relative">
      <div className="w-full max-w-[1600px] flex flex-col gap-8 items-start px-4 sm:px-8 md:px-16">
        <h1 className="text-3xl lg:text-4xl font-bold text-center w-full">
          Our <span className="text-primary">Features</span>?
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 justify-center  relative p-4 rounded-xl gap-4 w-full">
          {FEATURES.map(({ feature, description, icon: Icon }) => {
            return (
              <div
                className="bg-white/5 w-full p-6 rounded-xl flex flex-col items-start gap-2"
                key={feature}
              >
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
