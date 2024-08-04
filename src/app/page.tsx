import Image from "next/image";
import HeadPhoneDesktop from "/public/assets/home/desktop/image-hero.jpg";
import zx9Desktop from "/public/assets/home/desktop/image-speaker-zx9.png";
import patternCircles from "/public/assets/home/desktop/pattern-circles.svg";
import speakerzx7 from "/public/assets/home/desktop/image-speaker-zx7.jpg";
import earphonesyx1 from "/public/assets/home/desktop/image-earphones-yx1.jpg";
import { SeeProductButton, ShopProductsList } from "@/components/products";
import "animate.css";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <section className="bg-audio-carbon-black w-full h-ful flex rounded-b-xl mb-20">
        <div className="flex flex-col justify-center px-16 mt-16 py-16">
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
          <SeeProductButton
            background="bg-audio-orange"
            productName="XX99-mark-two-headphones"
            style="py-4 text-center mt-32 hover:bg-audio-orange-chiffon"
          />
        </div>
        <Image
          className="w-[80vw] animate__animated animate__fadeIn animate__slow rounded-b-lg"
          src={HeadPhoneDesktop}
          alt="HeadPhone"
          layout="intrinsic"
        />
      </section>
      <section className="bg-audio-white flex flex-col gap-y-14">
        <ShopProductsList />
        <div className="flex w-full h-[560px] bg-audio-orange rounded-lg px-20 overflow-hidden">
          <div className="flex flex-col justify-center items-center w-1/2">
            <div className="flex h-full items-end justify-end">
              <Image
                className="z-10"
                src={zx9Desktop}
                alt="zx9Desktop"
                width={430}
                height={700}
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
            className="flex flex-col py-24 w-3/4 px-20"
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
            <SeeProductButton
              productName="zx9-speaker"
              background="bg-audio-black"
              style="mt-10 w-36 px-3 py-4 text-center z-20 hover:bg-opacity-80"
            />
          </div>
        </div>
        <div className="flex flex-col w-full h-auto justify-center bg-audio-grey z-10">
          <div className="absolute flex flex-col gap-y-10 px-10">
            <h5
              className="text-audio-carbon-black text-3xl font-bold tracking-[10px] text-center"
              style={{ maxWidth: 500 }}
            >
              ZX7 SPEAKER
            </h5>
            <SeeProductButton
              background="transparent"
              productName="zx7-speaker"
              style="text-center border-[1px] border-audio-black z-20 w-32 px-0 text-audio-carbon-black hover:bg-audio-carbon-black hover:text-audio-white"
            />
          </div>
          <Image
            className="w-full rounded-lg"
            src={speakerzx7}
            alt="speakerzx7"
            width={800}
            height={800}
          />
        </div>
        <div className="flex gap-x-5">
          <Image
            className="w-1/2 rounded-lg"
            src={earphonesyx1}
            alt="earphonesyx1"
            width={800}
            height={800}
          />
          <div className="bg-audio-grey w-1/2 flex flex-col justify-center rounded-lg px-16">
            <div className="flex flex-col gap-y-5">
              <h5 className="text-audio-carbon-black text-3xl font-bold tracking-[10px]">
                YX1 EARPHONES
              </h5>
              <SeeProductButton
                background="transparent"
                productName="yx1-earphones"
                style="text-center border-[1px] border-audio-black z-20 w-32 px-0 text-audio-carbon-black hover:bg-audio-carbon-black hover:text-audio-white"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
