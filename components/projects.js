"use client";
import { useRef, useEffect } from "react";
import "../src/app/globals.css";
import Image from "next/image";
import data from './projects.json'
import './projects.css'
import 'animate.css'
import TypedText from "./typed";


export default function Projects() {
  
  const imgRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const handleEvent = () => {
      
      let navList = listRef.current.children;
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
    };

    handleEvent();
  }, []);

  return(
    <div className="w-full h-screen flex items-center justify-center">

      <div className=" mr-32">
      <span className="self-end text-[#35445A] font-caveat text-3xl">&#60;img&#62;</span>
      <div ref={imgRef} className='menu-img w-[400px] h-[400px] opacity-80 rounded hover:opacity-100 transition my-5 ml-5'>
        {data.map((img) => {
            return(
                <Image
                className="transition rounded"
              key={img.id}
              width={400}
              height={400}
              src={img.src}
              style={{objectFit: "cover"}}
              alt=""
            />
            )
        })}
      </div>  
      <span className="self-end text-[#35445A] font-caveat text-3xl">&#60;/img&#62;</span>

      </div>

      <div className="border-4 bg-[#0A0E13] w-fit border-[#621AD7] flex flex-col items-center">
        <div className="flex flex-col py-8">
          <span className="text-[#35445A] font-caveat text-xl">&#60;h1&#62;</span>
          <h1 className="animate__fadeInDown animate__animated text-[#7C86A3] text-4xl font-audiowide">
            <span className="font-fira">03.</span> MY PROJECTS
          </h1>
          <span className="self-end text-[#35445A] font-caveat text-xl">&#60;/h1&#62;</span>
        </div>

        <div ref={listRef} className=" w-[500px]">
            {data.map((item) => {
                return(
                     <div cursor-pointer data-index={item.id} key={item.id} className="circle border-t text-lg border-[#621AD7]  text-[#621AD7] hover:text-[#0A0E13] flex justify-between font-fira py-8 px-5 a">
                        <p className="text-[#F5F5F5]">//{item.no}. <TypedText typeSpeed={70} showCursor={false}  strings={item.name}/> </p>
                        <p className="animate__fadeIn animate__animated">{item.type}</p>
                     </div>
                )
            })}
        </div>
      </div>
    </div>
  )


}
