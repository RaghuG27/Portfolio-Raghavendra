"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-10">

      {/* Background Blur */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <p className="text-blue-500 text-3xl mb-3">
              Hello, I&apos;m
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Raghavendra
          
              
            </h1>

            <h3 className="text-2xl md:text-6xl font-bold mt-6 text-blue-500">
        <TypeAnimation
          sequence={[
            "Web Developer",
            2000,
            "React Native Developer",
            2000,
            "Frontend Developer",
            2000,
            "Backend Developer",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h3>

            <p className="text-slate-400 mt-6 max-w-2xl text-lg leading-relaxed">
              I build scalable web and mobile applications using
              Next.js, React, Django, React Native, and modern
              backend technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
              <button className="bg-blue-500 hover:bg-blue-600 cursor-pointer px-7 py-3 rounded-2xl transition duration-300 font-medium " onClick={()=>{
              document.getElementById('experience')?.scrollIntoView({
                behavior: 'smooth',
              });
}}>
                View Experience
              </button>

             <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Raghavendra_Gabbur.pdf";
                link.download = "Raghavendra_Gabbur.pdf";
                link.click();
              }}
              className="border border-3 border-slate-600 hover:text-blue-500 cursor-pointer hover:border-blue-500 px-7 py-3 rounded-2xl transition duration-300 font-medium "
            >
              Download CV
            </button>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-6 my-10 text-2xl ">
              <a
                href="https://github.com/RaghuG27/"
                className="text-slate-400 hover:text-blue-500 transition-all duration-300 transform hover:-translate-y-2 hover:scale-125"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/raghavendra-gabbur/"
                className="text-slate-400 hover:text-blue-500 transition-all duration-300 transform hover:-translate-y-2 hover:scale-125"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="text-slate-400 hover:text-blue-500 transition-all duration-300 transform hover:-translate-y-2 hover:scale-125"
              >
                <FaInstagram />
              </a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl"></div>

            <div className="relative border-4 border-blue-500 rounded-full p-2 mt-25 md:mt-0">
              <Image
                src="/profile.jpg"
                alt="profile"
                width={350}
                height={350}
                className="rounded-full object-cover
                w-[200px] h-[200px]
                md:w-[350px] md:h-[350px] "
               
              />
            </div>
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