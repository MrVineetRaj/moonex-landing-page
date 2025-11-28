import { ComparisonSection } from "@/components/home/comparison";
import { HeroSection } from "@/components/home/hero";
import { FeatureSection } from "@/components/home/features";
import Image from "next/image";
import { FaqSection } from "@/components/home/faqs";

export default function Home() {
  return (
    <main className="min-h-screen w-screen space-y-8 gap-4">
      <HeroSection />
      <ComparisonSection />
      <FeatureSection />
      <FaqSection />
    </main>
  );
}
