import { NAV_MENU } from "@/lib/constants";
import { icons } from "@/lib/assets";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export const Footer = () => {
  const CONTACT_OPTIONS = [
    { href: "/", iconPath: icons.telegram },
    { href: "/", iconPath: icons.reddit },
    { href: "/", iconPath: icons.twitter },
  ];
  return (
    <footer className="w-full h-52 bg-custom-blue  flex items-center justify-around" id="contact-us">
      <span></span>
      <span className="flex gap-8 text-sm font-semibold">
        {NAV_MENU.map(({ label, href }) => {
          if (href == "/") return null;
          return (
            <Link href={href} key={href}>
              {label}
            </Link>
          );
        })}
      </span>
      <span className="flex items-center flex-col gap-2">

        <h2 className="font-bold">
          Contact <span className="text-primary">Us</span>
        </h2>{" "}
        <span className="flex gap-4 items-center">
          {CONTACT_OPTIONS.map(({ href, iconPath }) => {
            return (
              <Link href={href} key={iconPath}>
                <Image
                  width={40}
                  height={40}
                  src={iconPath}
                  alt="contact-icon"
                  className="size-6"
                />
              </Link>
            );
          })}
        </span>
      </span>
    </footer>
  );
};
