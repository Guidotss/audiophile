import Image from "next/image";
import HeadPhoneDesktop from "/public/assets/home/desktop/image-hero.jpg";
import "animate.css";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center">
      <section className="bg-audio-carbon-black w-full h-[100vw] flex rounded-b-lg">
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
      <section className="h-full bg-audio-white">
        <div>
          <span>SHOP</span>
        </div>
      </section>
    </main>
  );
}
