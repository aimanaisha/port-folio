/** @format */
import MobileNav from "../../components/MobileNav";
import "./globals.css";
import Nav from "../../components/navbar";
import Github from "../../public/assets/git.png";
import bg from "../../public/assets/bg.png";
import Image from "next/image";
// import Cursor from "../../components/Cursor";
import Link from "next/link";
import dynamic from "next/dynamic";

const Cursor = dynamic(() => import("../../components/Cursor"), { ssr: false }); 


export const metadata = {
  title: "Aiman | Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-hidden bg-[#0E131B] flex h-full ">
        <Cursor />
        <MobileNav />
        <div className="bg-svg-wrap">
          <div className="bg-svg"></div>
        </div>
        <Image
          src={bg}
          alt=""
          className="fixed top-0 right-0 -z-10 opacity-20 md:opacity-50 w-[650px]"
          width={650}
        />
        <Image
          src={bg}
          alt=""
          className="fixed left-20 bottom-0 -z-10 opacity-20 md:opacity-50"
          width={650}
        />
        <Nav />
        {children}
        <div className="mt-auto  md:pr-20 w-7 md:w-auto hidden md:block">
          <Link href="https://github.com/aimanaisha" target="_blank">
            <Image src={Github} alt="" />
          </Link>
        </div>
      </body>
    </html>
  );
}
