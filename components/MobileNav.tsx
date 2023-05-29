"use client";

import "./MobileNav.css";
import { useEffect } from "react";
import Link from "next/link";

export default function MobileNav() {
  useEffect(() => {
    const netflix_open_btn = document.querySelector(".netflix-open-btn");
    const netflix_close_btn = document.querySelector(".netflix-close-btn");
    const netflix_nav = document.querySelectorAll(".netflix-nav");

    const handleNetflixOpen = () => {
      netflix_nav.forEach((nav_el) => {
        nav_el.classList.add("visible");
      });
    };

    const handleNetflixClose = () => {
      netflix_nav.forEach((nav_el) => {
        nav_el.classList.remove("visible");
      });
    };

    netflix_open_btn?.addEventListener("click", handleNetflixOpen);
    netflix_close_btn?.addEventListener("click", handleNetflixClose);

    return () => {
      netflix_open_btn?.removeEventListener("click", handleNetflixOpen);
      netflix_close_btn?.removeEventListener("click", handleNetflixClose);
    };
  }, []);

  return (
    <main className="z-50 md:hidden">
      <button className="animate-pulse netflix-nav-btn netflix-open-btn font-fira text-3xl text-[#B8B6B6]">
        &#60;/&#62;
      </button>

      <div className="netflix-nav netflix-nav-black">
        <div className="netflix-nav netflix-nav-red">
          <div className="netflix-nav netflix-nav-white">
            <button className="netflix-nav-btn netflix-close-btn text-[#B8B6B6]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="font-monoton text-7xl text-[#621AD7] h-44 border-b-2 border-[#444242] w-full justify-center flex items-center">
              <Link className="magic-hover magic-hover__square" href="/">
                A
              </Link>
            </div>

            <div className="font-fira text-[#938989] text-base w-full  flex flex-col justify-evenly text-center ">
              <div className=" border-b-2 border-[#444242] h-20 flex items-center justify-center">
                <Link
                  className=" magic-hover magic-hover__square"
                  href="/about"
                >
                  &#60;About/&#62;
                </Link>
              </div>
              <div className=" border-b-2 border-[#444242] h-20 flex items-center justify-center">
                <Link
                  className="magic-hover magic-hover__square"
                  href="/skills"
                >
                  &#60;Skills/&#62;
                </Link>
              </div>
              <div className=" border-b-2 border-[#444242] h-20 flex items-center justify-center">
                <Link
                  className="magic-hover magic-hover__square"
                  href="/projects"
                >
                  &#60;Projects/&#62;
                </Link>
              </div>
              <div className=" border-b-2 border-[#444242] h-20 flex items-center justify-center">
                <Link
                  className="magic-hover magic-hover__square"
                  href="/contact"
                >
                  &#60;Contact/&#62;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
