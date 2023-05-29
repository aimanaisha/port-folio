"use client";
import { useRef, useEffect } from "react";
import "../src/app/globals.css";
import Image from "next/image";
import data from "./projects.json";
import "./projects.css";
import "animate.css";
import TypedText from "./typed";

export default function Projects() {
  const imgRef = useRef<any>(null);
  const listRef = useRef<any>(null);
  const str = "//";
  useEffect(() => {
    const handleEvent = () => {

      // let navList = listRef.current.children
      // let imgList = imgRef.current.children;

      if(imgRef.current !== null  && listRef.current !== null){


      let navList = listRef.current.children
      let imgList = imgRef.current.children;

        for (let li of navList) {
          li.addEventListener("mouseenter", () => {
            let img = imgList[li.dataset.index];
            img.style.opacity = 1;
          });
          li.addEventListener("mouseleave", () => {
            let img = imgList[li.dataset.index];
            img.style.opacity = 0;
          });
        }
      }
      
    };

    handleEvent();
  }, []);

  return (
    <div className="w-full h-screen flex flex-col md:flex-row items-center justify-center pb-10 md:pb-0">
      <div className=" md:mr-32 hidden md:block">
        <span className="self-end text-[#35445A] font-caveat text-sm md:text-3xl">
          &#60;img&#62;
        </span>
        <div
          ref={imgRef}
          className="menu-img md:w-[400px] md:h-[400px] opacity-80 rounded hover:opacity-100 transition my-5 ml-5"
        >
          {data.map((img) => {
            return (
              <Image
                className="transition rounded"
                key={img.id}
                width={400}
                height={400}
                src={img.src}
                style={{ objectFit: "cover" }}
                alt=""
              />
            );
          })}
        </div>
        <span className="self-end text-[#35445A] font-caveat text-sm md:text-3xl">
          &#60;/img&#62;
        </span>
      </div>

      <div className="border-2 md:border-4 bg-[#0A0E13] w-[95%] md:w-fit border-[#621AD7] flex flex-col items-center">
        <div className="flex flex-col py-4 md:py-8">
          <span className="text-[#35445A] font-caveat text-xs md:text-xl">
            &#60;h1&#62;
          </span>
          <h1 className="animate__fadeInDown animate__animated text-[#7C86A3] text-2xl md:text-4xl font-audiowide">
            <span className="font-fira">03.</span> MY PROJECTS
          </h1>
          <span className="self-end text-[#35445A] font-caveat text-xs md:text-xl">
            &#60;/h1&#62;
          </span>
        </div>

        <div ref={listRef} className="w-full md:w-[500px]">
          {data.map((item) => {
            return (
              <div
                data-index={item.id}
                key={item.id}
                className="fill border-t text-sm md:text-lg border-[#621AD7] text-[#621AD7] hover:text-[#0A0E13] flex justify-between font-fira px-2 py-6 md:py-8 md:px-5 a"
              >
                <p className="text-[#F5F5F5]">
                  {str}
                  {item.no}.{" "}
                  <TypedText
                    typeSpeed={70}
                    showCursor={false}
                    strings={item.name}
                  />{" "}
                </p>
                <p className="animate__fadeIn animate__animated">{item.type}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
