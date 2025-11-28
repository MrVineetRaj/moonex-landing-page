"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const NotFoundPage = () => {
  return (
    <main className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="text-center z-10 space-y-8">
        <div className="relative">
          <h1 className="text-9xl md:text-[12rem] font-bold text-transparent bg-linear-to-r from-primary to-secondary bg-clip-text animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 text-9xl md:text-[12rem] font-bold text-primary opacity-20 blur-sm">
            404
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-description max-w-md mx-auto">
            The page you're looking for seems to have vanished into the digital
            void. Don't worry, even the best explorers get lost sometimes.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/" className="btn cta-btn group">
            <span className="flex items-center gap-2">
              Take Me Home
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="btn border-2 border-primary text-primary hover:bg-primary hover:text-background rounded-3xl font-semibold transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
