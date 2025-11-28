import {
  DollarSignIcon,
  PhoneOffIcon,
  ShieldCheckIcon,
  SlidersHorizontalIcon,
} from "lucide-react";
const NAV_MENU = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Posts", href: "/posts" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact Us", href: "#contact-us" },
];

const COMPARISON = [
  {
    feat: "Point number one",
    moonex: true,
    uniswap: false,
  },
  {
    feat: "Point number two",
    moonex: true,
    uniswap: false,
  },
  {
    feat: "Point number three",
    moonex: true,
    uniswap: false,
  },
  {
    feat: "Point number four",
    moonex: true,
    uniswap: false,
  },
  {
    feat: "Point number five",
    moonex: true,
    uniswap: false,
  },
];

const FEATURES = [
  {
    icon: DollarSignIcon,
    feature: "Cheapest TXs",
    description:
      "Exchange popular digital currencies at the cheapest possible transaction price",
  },
  {
    icon: ShieldCheckIcon,
    feature: "CerTIK",
    description:
      "We are Audited by Certik. Certik is the leading security-focused ranking platform to",
  },
  {
    icon: PhoneOffIcon,
    feature: "No Contract Sells",
    description: "No contract sells to fund the marketing wallets",
  },
  {
    icon: SlidersHorizontalIcon,
    feature: "CrossDex Support",
    description:
      "Exchange popular digital currencies at the cheapest possible transaction price",
  },
];

export { COMPARISON, FEATURES, NAV_MENU };
