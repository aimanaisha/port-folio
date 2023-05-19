"use client";
import { useLayoutEffect } from "react"
import Vivus from 'vivus'


const Name = () => {
    
    useLayoutEffect(() => {

            let myVivus = new Vivus('svg', {
                duration: 3000,
                type: "delayed",
                pathTimingFunction: Vivus.EASE,
                file: '/assets/aiman.svg'
            },
            )           
            myVivus.play(myVivus.getStatus() === "end" ? -1 : 1);
        
    }, [])

    return(
      <h1 className="animate__fadeIn animate__animated text-[10rem] text-[#B8B6B6] ml-10">
      I AM <span id="svg" className="inline-block w-[33rem]"></span> 
      

      
    </h1>
    )
}
export default Name