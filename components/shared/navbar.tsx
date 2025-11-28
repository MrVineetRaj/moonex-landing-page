"use client";
import { images } from "@/lib/assets";
import { NAV_MENU } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-screen flex items-center justify-between px-8 py-6 z-50",
        isScrolled && "backdrop-blur-md"
      )}
    >
      <span className="flex gap-12 items-center">
        <Image
          src={images.logo}
          width={100}
          height={100}
          alt="logo"
          className="w-26"
        />
        {NAV_MENU?.map(({ label, href }) => {
          return (
            <Link
              href={href}
              key={href}
              className={`${
                pathname === href ? "text-primary" : ""
              } font-semibold text-sm`}
            >
              {label}
            </Link>
          );
        })}
      </span>
      <span>
        <button className="btn cta-btn text-sm">Connect Wallet</button>
      </span>
    </nav>
  );
};
