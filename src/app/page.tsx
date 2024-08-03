import Image from "next/image";
import HeadPhoneDesktop from "/public/assets/home/desktop/image-hero.jpg";
import zx9Desktop from "/public/assets/home/desktop/image-speaker-zx9.png";
import patternCircles from "/public/assets/home/desktop/pattern-circles.svg";
import { ShopProductsList } from "@/components/products";
import "animate.css";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center">
      <section className="bg-audio-carbon-black w-full h-screen flex rounded-b-lg min-h-[70vh] mt-80">
        <div className="flex flex-col justify-center px-16">
          <span className="uppercase text-lg font-light text-gray-300 tracking-[10px] mb-5 mt-16">
            NEW PRODUCT
          </span>
          <h1 className=" text-audio-grey text-6xl font-bold tracking-[10px] text-start">
            XX99 MARK II HEADPHONES
          </h1>
          <span className="w-[370px] h-[2px] text-gray-300 text-pretty-gray mt-8">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </span>
          <button className="w-1/4 bg-audio-orange text-audio-white uppercase text-sm font-bold py-3 px-8 mt-32 hover:bg-audio-orange-chiffon hover:transition-colors duration-300 ease-in-out">
            <span>See Product</span>
          </button>
        </div>
        <Image
          className="w-[52vw] animate__animated animate__fadeIn animate__slow rounded-b-lg"
          src={HeadPhoneDesktop}
          alt="HeadPhone"
          layout="intrinsic"
        />
      </section>
      <section className=" bg-audio-white">
        <ShopProductsList />
        <div className="flex w-full h-[560px] bg-audio-orange mt-28 rounded-lg px-20">
          <div className="flex flex-col justify-center items-center w-1/2">
            <div className="flex h-full items-end justify-end">
              <Image
                className="w-full z-10"
                src={zx9Desktop}
                alt="zx9Desktop"
                width={300}
                height={300}
              />
            </div>
            <div className="absolute w-auto">
              <Image
                className="w-full mt-80"
                src={patternCircles}
                alt="patternCircles"
                width={800}
                height={200}
              />
            </div>
          </div>
          <div
            className="flex flex-col justify-center items-start w-3/4 px-20"
            style={{ maxWidth: 500 }}
          >
            <h2 className="text-audio-grey text-5xl font-bold tracking-[10px] text">
              ZX9 SPEAKER
            </h2>
            <br />
            <span className="text-gray-200">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
