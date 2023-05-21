"use client";
import { useLayoutEffect } from "react"
import Vivus from 'vivus'


const Name = () => {
    
    useLayoutEffect(() => {

            let myVivus = new Vivus('svg', {
                duration: 2000,
                type: "delayed",
                pathTimingFunction: Vivus.EASE,
                file: '/assets/aiman.svg',
            }, () => {
              setTimeout(() => {
                myVivus.reset().play();
              }, 100);
            });        
            myVivus.play();
        
    }, [])

    const play = () => {

    }

    return(
      <h1 className="animate__fadeIn animate__animated text-[4rem] sm:text-[5rem] md:text-[10rem] text-[#B8B6B6] ml-5 md:ml-10">
      I AM <span id="svg" className="inline-block w-[15rem] md:w-[33rem]"></span> 
      

      
    </h1>
    )
}
export default Name