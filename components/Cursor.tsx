"use client";
import { useEffect } from "react";
import  magicMouse from 'magicmouse.js'



const Cursor = () => {
    useEffect(() => {
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
    }, []);
    return(
        <></>
    )
}
export default Cursor;