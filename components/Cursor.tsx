"use client";
import { useEffect } from "react";
import  magicMouse from 'magicmouse.js'
import './magicmouse.css'


const Cursor = () => {
    useEffect(() => {
        if (typeof window !== "undefined"){
            magicMouse(
                {
                    "cursorOuter": "circle-basic",
                    "hoverEffect": "circle-move",
                    "hoverItemMove": false,
                    "defaultCursor": false,
                    "outerWidth": 30,
                    "outerHeight": 30
                      }
            );
        }
            
    }, []);
    return(
        <></>
    )
}
export default Cursor;