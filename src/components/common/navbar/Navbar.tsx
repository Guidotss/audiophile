import Image from "next/image";
import logo from "/public/assets/shared/desktop/logo.svg";
import cart from "/public/assets/shared/desktop/icon-cart.svg";
import Link from "next/link";

const navbarItems = [
  {
    title: "HOME",
    url: "/",
  },
  {
    title: "HEADPHONES",
    url: "/headphones",
  },
  {
    title: "SPEAKERS",
    url: "/speakers",
  },
  {
    title: "EARPHONES",
    url: "/earphones",
  },
];
export const Navbar = () => {
  return (
    <header className="bg-transparent absolute h-20 w-full p-16">
      <nav className="flex justify-between items-center">
        <Image src={logo.src} alt="Vercel Logo" width={150} height={100} />
        <ul className="flex items-center gap-x-10">
          {navbarItems.map((item) => (
            <li key={item.title} className="text-white">
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <button>
            <Image src={cart.src} alt="Vercel Logo" width={30} height={30} />
        </button>
      </nav>
    </header>
  );
};
