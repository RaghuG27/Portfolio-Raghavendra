"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-10">

      {/* Background Blur */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

  {/* LEFT CONTENT */}
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.25,
        },
      },
    }}
    className="text-center lg:text-left"
  >

    {/* Status Badge */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6 }}
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-sm mb-6 backdrop-blur-md"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
      </span>
      Available for opportunities
    </motion.div>

    {/* Greeting */}
    <motion.p
      variants={{
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.7 }}
      className="text-blue-400 text-lg font-medium tracking-widest uppercase mb-2"
    >
      Hello, I&apos;m
    </motion.p>

    {/* Heading */}
    <motion.h1
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.8 }}
      className="text-6xl md:text-7xl font-black leading-none tracking-tight"
    >
      <span className="text-white">Ragha</span>

      <span
        style={{
          WebkitTextStroke: "2px rgb(59,130,246)",
          color: "transparent",
        }}
      >
        vendra
      </span>
    </motion.h1>

    {/* Role */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.7 }}
      className="mt-5 h-14 flex items-center justify-center lg:justify-start"
    >
      <span className="text-2xl md:text-4xl font-bold text-slate-400">
        {"< "}
        <span className="text-blue-400">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "React Native Dev",
              2000,
              "Frontend Engineer",
              2000,
              "Backend Engineer",
              2000,
            ]}
            wrapper="span"
            speed={55}
            repeat={Infinity}
          />
        </span>
        {" />"}
      </span>
    </motion.div>

    {/* Description */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.8 }}
      className="relative mt-6 max-w-2xl"
    >
      <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-3xl opacity-60 pointer-events-none"></div>

      <p className="relative text-slate-400 text-lg leading-relaxed tracking-wide backdrop-blur-sm">
        Passionate about building
        <span className="text-slate-200 font-medium">
          {" "}high-performance web and mobile applications
        </span>
        {" "}with clean UI, scalable backend architecture, and seamless user
        experiences using modern technologies like Next.js, React, Django,
        and React Native.
      </p>
    </motion.div>

    {/* Buttons */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.8 }}
      className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8"
    >
      <button
        className="bg-blue-500 hover:bg-blue-600 cursor-pointer px-7 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.35)] active:scale-95"
      >
        View Experience
      </button>

      <button
        className="border border-slate-600 hover:text-blue-500 hover:border-blue-500 cursor-pointer px-7 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.2)] active:scale-95 backdrop-blur-sm"
      >
        Download CV
      </button>
    </motion.div>

    {/* Social Icons */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.8 }}
      className="flex justify-center lg:justify-start gap-6 mt-12"
    >
      {[FaGithub, FaLinkedin, FaInstagram].map((Icon, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.15, y: -5 }}
          className="w-14 h-14 flex items-center justify-center rounded-2xl
          bg-white/5 border border-slate-700/50 backdrop-blur-xl
          text-slate-400 text-2xl
          hover:text-blue-400 hover:border-blue-500
          hover:shadow-[0_0_30px_rgba(34,211,238,0.45)]
          transition-all duration-300"
        >
          <Icon />
        </motion.div>
      ))}
    </motion.div>
  </motion.div>

  {/* RIGHT IMAGE */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 1,
      delay: 1.5,
    }}
    className="relative flex items-center justify-center"
  >



  

    {/* Floating Image */}
<motion.div
  animate={{
    y: [0, -10, 0],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="relative mt-25 md:mt-0"
>

  {/* Complete Ring */}
<div
  className="
    absolute
    -inset-2
    rounded-full
    border-[5px]
    border-blue-500
    shadow-[0_0_25px_rgba(59,130,246,0.35)]
  "
/>

{/* Image */}
<div
  className="
    relative
    rounded-full
    p-2
    bg-[#020617]
  "
>
  <Image
    src="/profile.jpg"
    alt="profile"
    width={350}
    height={350}
    className="
      rounded-full object-cover
      w-[200px] h-[200px]
      md:w-[350px] md:h-[350px]
    "
  />
</div>
</motion.div>
  </motion.div>
</div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:block absolute bottom-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-500 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}