"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPosition = window.scrollY;

      const progress =
        (scrollPosition / totalHeight) * 100;

      setScroll(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="
        fixed
        top-0
        left-0
        w-full
        h-[3px]
        z-[999]
      "
    >
      <motion.div
        className="
          h-full
          rounded-r-full
          bg-gradient-to-r
          from-blue-500
          via-indigo-500
          to-blue-600
          shadow-[0_0_20px_rgba(59,130,246,0.5)]
        "
        animate={{
          width: `${scroll}%`,
        }}
        transition={{
          duration: 0.15,
          ease: "easeOut",
        }}
      />
    </div>
  );
}