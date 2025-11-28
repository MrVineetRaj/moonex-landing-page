"use client";
import { images } from "@/lib/assets";
import { NAV_MENU } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { HamburgerIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showingMobileNav, setShowingMobileNav] = useState<boolean>(false);

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
        "fixed top-0 left-0 w-screen px-8 py-6 z-50",
        (isScrolled || showingMobileNav) && "backdrop-blur-md"
      )}
    >
      <div className="w-full flex items-center justify-between">
        <span className="flex gap-12 lg:gap-18 items-center ">
          <span className="flex items-center  gap-1">
            <Link href={"/"} className="flex items-center gap-1">
              <Image
                src={images.logo}
                width={100}
                height={100}
                alt="logo"
                className="w-12 lg:w-18 min-w-8"
              />
              <span className="text-primary font-semibold hidden lg:block text-xl">
                Moonex
              </span>
            </Link>
            <MenuIcon
              className="ml-4 block md:hidden"
              onClick={() => {
                setShowingMobileNav((prev) => !prev);
              }}
            />
          </span>
          {NAV_MENU?.map(({ label, href }) => {
            return (
              <Link
                href={href}
                key={href}
                className={cn(
                  `font-semibold text-[14px]  lg:text-base hidden md:block`,
                  pathname === href ? "text-primary" : ""
                )}
              >
                {label}
              </Link>
            );
          })}
        </span>
        <span>
          <button className="btn cta-btn text-sm">Connect Wallet</button>
        </span>
      </div>
      {showingMobileNav && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          {NAV_MENU?.map(({ label, href }) => {
            return (
              <Link
                href={href}
                key={href}
                className={cn(
                  `font-semibold text-sm border-b border-description/20 p-4`,
                  pathname === href ? "text-primary" : ""
                )}
                onClick={()=>{
                  setShowingMobileNav(false)
                }}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};
