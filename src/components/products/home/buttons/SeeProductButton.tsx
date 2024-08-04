import Link from "next/link";

interface Props {
  productName: string;
  background: string;
  style?: string;
}
export const SeeProductButton = ({
  productName,
  background,
  style,
}: Readonly<Props>) => {
  return (
    <Link
      className={`w-1/4 ${background} text-audio-white uppercase text-sm font-bold py-3 px-8 hover:transition-colors duration-300 ease-in-out ${style}`}
      href={`/products/${productName}`}
    >
      <span>See Product</span>
    </Link>
  );
};
