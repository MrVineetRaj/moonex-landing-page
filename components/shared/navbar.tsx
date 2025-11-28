"use client";
import { images } from "@/lib/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Navbar = () => {
  const pathname = usePathname();
  const NAV_MENU = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Roadmap", href: "/roadmap" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact Us", href: "/contact-us" },
  ];
  return (
    <nav className="fixed top-0 left-0 w-screen flex items-center justify-between px-8 py-2 bg-transparent z-100">
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
        <button className="btn cta-btn text-sm">
          Connect Wallet
        </button>
      </span>
    </nav>
  );
};
