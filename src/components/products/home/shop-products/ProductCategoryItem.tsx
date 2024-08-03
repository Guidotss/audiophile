import Image, { type StaticImageData } from "next/image";
import rightArrow from "/public/assets/shared/desktop/icon-arrow-right.svg";
import Link from "next/link";

interface Props {
  title: string;
  image: StaticImageData;
}
export const ProductCategoryItem = ({ title, image }: Readonly<Props>) => {
  return (
    <div className="bg-audio-grey h-48 w-80 flex flex-col items-center animate__animated animate__fadeIn rounded-lg shadow-sm">
      <Image
        className="-mt-16 h-56 w-56"
        src={image}
        alt={title}
        width={240}
        height={240}
      />
      <div className="flex flex-col -mt-10">
        <h6 className="text-lg">{title}</h6>
        <div className="flex justify-center">
          <Link
            className="flex items-center gap-x-1"
            href={`/products/${title.toLowerCase()}`}
          >
            <span className="font-semibold text-gray-500">Shop</span>
            <Image
              className="mt-[1px]"
              src={rightArrow}
              alt="right arrow"
              width={10}
              height={10}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
