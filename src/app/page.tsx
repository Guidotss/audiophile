import Image from "next/image";
import HeadPhoneDesktop from "/public/assets/home/desktop/image-hero.jpg"

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center">
      <section
        className="bg-audio-carbon-black w-full h-screen flex justify-between"
      >
        <div
          className="flex flex-col justify-center flex-1"
        >
          <span className="uppercase text-lg font-light text-gray-300 tracking-[10px] mb-5 mt-16">
            NEW PRODUCT
          </span>
          <h1
            className=" text-audio-grey text-6xl font-bold tracking-[10px] text-start"
          >
            XX99 MARK II HEADPHONES
          </h1>
          <span
            className="w-[370px] h-[2px] text-gray-300 text-pretty-gray mt-8"
          >
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </span>
          <button 
            className="w-1/6 bg-audio-orange text-audio-white uppercase text-sm font-bold py-3 px-8 mt-24 hover:bg-audio-orange-chiffon hover:transition-colors duration-300 ease-in-out"
          >
            <span>
              See Product
            </span>
          </button>
        </div>
        <Image
          src={HeadPhoneDesktop}
          alt="HeadPhone"
        /> 
      </section>
      <section className="h-full bg-audio-white">
        <div>
          <span>
            SHOP
          </span>
        </div>
      </section>
    </main>
  );
}
