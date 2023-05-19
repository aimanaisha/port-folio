"use client";
import { useEffect, useRef } from "react"
import Typed from 'typed.js';

export default function TypedText() {
  
  const ref = useRef(null);

  useEffect(() => {
    const typed = new Typed(ref.current, {
      strings: ['sudo echo $THINGS_I_KNOW'],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    
      <span ref={ref}></span>
    
  );
}