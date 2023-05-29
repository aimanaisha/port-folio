"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

interface TypedTextProps {
  strings: string;
  typeSpeed: number;
  showCursor: boolean;
}

const TypedText: React.FC<TypedTextProps> = ({
  strings,
  typeSpeed,
  showCursor,
}) => {
  const a = "hello";
  const ref = useRef(null);

  useEffect(() => {
    const typed = new Typed(ref.current, {
      strings: [strings],
      typeSpeed: typeSpeed,
      showCursor: showCursor,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={ref}></span>;
};
export default TypedText;
