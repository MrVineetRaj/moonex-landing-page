"use client";
import { cn } from "@/lib/utils";
import { ChevronUpIcon, PlusIcon } from "lucide-react";
import React, { useState } from "react";

export const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState<number>(-1);
  const FAQs = [
    {
      question: "How do I get a Referral Code?",
      answer: "You can ask your friend who is already using MoonEX",
    },
    {
      question: "Do I get rewarded in tokens or ETH when I refer buyers?",
      answer:
        "You receive your rewards in ETH instantly once someone you refer makes a transaction",
    },
    {
      question: "How do I use Referral Code from my friend?",
      answer: "You can use it while signing up on the platform.",
    },
  ];
  return (
    <section
      className="h-[90svh] min-h-150 flex justify-center items-center w-full   overflow-hidden relative"
      id="faqs"
    >
      <div className="w-full max-w-[1600px] flex flex-col gap-8 items-center px-4 sm:px-8 md:px-16">
        <div className="flex justify-around flex-wrap relative p-8 rounded-xl gap-4 w-full max-w-[1000px] bg-white/5">
          <h1 className="text-3xl lg:text-4xl font-semibold text-center w-full px-2 sm:px-4 md:px-10">
            <span className="text-primary">FAQs</span>
          </h1>
          <div className="w-full">
            {FAQs.map(({ question, answer }, idx) => {
              return (
                <div
                  className={cn(
                    "w-full border-description/20 border-t py-6 px-4",
                    idx === FAQs.length - 1 && "border-b"
                  )}
                  key={idx}
                >
                  <span
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => {
                      setOpenFaq((prev) => (prev === idx ? -1 : idx));
                    }}
                  >
                    <p>{question}</p>
                    <button className="p-2 bg-white/10 rounded-full cursor-pointer relative">
                      <PlusIcon
                        className={cn(
                          "transition-all duration-200",
                          openFaq === idx
                            ? "opacity-0 h-0"
                            : "opacity-100 block rotate-180"
                        )}
                      />
                      <ChevronUpIcon
                        className={cn(
                          "transition-all duration-200",
                          openFaq != idx
                            ? "opacity-0 h-0"
                            : "opacity-100 block -rotate-180"
                        )}
                      />
                    </button>
                  </span>
                  <span
                    className={cn(
                      "overflow-hidden transition-all duration-200 block text-description",
                      openFaq === idx ? "opacity-100 mt-2" : "max-h-0 opacity-0"
                    )}
                  >
                    {answer}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Background */}
      <div className="w-full h-full absolute top-0 left-0 min-w-[1400px] -z-10">
        <span className="block w-48 h-72 bg-primary/40 blur-[120px] rounded-full  absolute bottom-4 -left-32" />
        <span className="block w-48 h-72 bg-primary/40 blur-[100px] rounded-full  absolute top-24 -right-28" />
      </div>
    </section>
  );
};
