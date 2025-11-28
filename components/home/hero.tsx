import { images } from "@/lib/assets";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="h-screen min-h-164 flex justify-center w-full   overflow-hidden relative">
      <div className="w-full max-w-[1600px] flex flex-col gap-8 items-start justify-center px-6 sm:px-12 md:px-26">
        <span className="flex flex-col gap-2 px">
          <h1 className="text-[64px] lg:text-[78px] font-bold">
            Trusted Multi-Chain <br />
            <span className="text-primary">DEX</span> Platform
          </h1>
          <p className="text-lg text-gray-300">
            Trade, earn and own crypto on the all-in-one multi-chain DEX
          </p>
        </span>
        <span className="flex items-center gap-2">
          <button className="btn cta-btn text-sm">Connect Wallet</button>
          <button className="btn border-2 rounded-4xl text-primary border-primary font-semibold text-sm hover:text-background hover:bg-primary hover:border-primary">
            Trade Crypto
          </button>
        </span>
      </div>
      {/* Background */}
      <div className="absolute w-full min-w-[1000px] h-full top-0 left-0 -z-10">
        {/* Layer 1 */}
        <Image
          src={images.bgCircles}
          width={1000}
          height={1000}
          alt="bg-circles"
          className="absolute w-full h-full top-0 left-0 -z-9"
        />
        {/* Layer 2 */}
        <span className="block w-48 h-72 bg-primary/80 blur-[150px] rounded-full  absolute right-28 bottom-[40%] -z-8" />{" "}
        <span className="block w-48 h-72 bg-primary/80 blur-[150px] rounded-full  absolute left-28 top-[32] -z-8" />
        {/* Layer 3 */}
        <Image
          src={images.star1}
          width={1000}
          height={1000}
          alt="bg-circles"
          className="absolute top-32 left-32 w-12 -z-7"
        />{" "}
        <Image
          src={images.star2}
          width={1000}
          height={1000}
          alt="bg-circles"
          className="absolute top-32 right-32 w-12 -z-7"
        />
        <Image
          src={images.star1}
          width={1000}
          height={1000}
          alt="bg-circles"
          className="absolute bottom-48 right-32 w-12 -z-7"
        />
        {/* :ayer 4 */}
        <Image
          src={images.bgMoon}
          width={1000}
          height={1000}
          alt="bg-circles"
          className="absolute top-0 right-20 w-120  md:w-[600px]  -z-6"
        />
      </div>
    </section>
  );
};
