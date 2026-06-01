"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowDown,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#F7F5EF] relative overflow-hidden flex items-center px-6 md:px-12 py-30">

      {/* Background Effects */}

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50" />

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-100 rounded-full blur-3xl opacity-50" />

      <div
        className="
      
        "
      />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-20">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-center lg:text-left"
          >
          

            {/* Heading */}

            <h1
              className="
              text-5xl
              md:text-7xl
              font-bold
              text-gray-900
              leading-[1.05]
              tracking-tight
            "
            >
              Hi, I'm
              <br />

              <span
                className="
                bg-gradient-to-r
                from-blue-600
                via-indigo-600
                to-orange-600
                bg-clip-text
                text-transparent
              "
              >
                Raghavendra Gabbur
              </span>
            </h1>

            {/* Role */}

            <div className="mt-6 text-2xl md:text-4xl text-gray-600 font-medium h-[60px]">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "React Developer",
                  2000,
                  "React Native Developer",
                  2000,
                  "Next.js Developer",
                  2000,
                ]}
                repeat={Infinity}
                speed={50}
              />
            </div>

            {/* Description */}

            <p
              className="
              mt-8
              text-gray-600
              text-lg
              leading-relaxed
              max-w-2xl
            "
            >
              Passionate about building
              <span className="font-semibold text-gray-900">
                {" "}high-performance web and mobile applications
              </span>
              {" "}with modern UI, scalable backend architecture, and seamless
              user experiences using Next.js, React, Django, React Native,
              TypeScript, and modern cloud technologies.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start">
              <button
                onClick={() => {
                  document
                    .getElementById("experience")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="
                px-8
                py-4
                rounded-2xl
                bg-blue-600
                text-white
                font-semibold
                shadow-lg
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
                cursor-pointer
              "
              >
                View Experience
              </button>

              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/Raghavendra_Gabbur.pdf";
                  link.download = "Raghavendra_Gabbur.pdf";
                  link.click();
                }}
                className="
                px-8
                py-4
                rounded-2xl
                bg-white
                border
                border-gray-200
                text-gray-800
                font-semibold
                shadow-md
                hover:border-blue-500
                hover:text-blue-600
                hover:-translate-y-1
                transition-all
                duration-300
                cursor-pointer
              "
              >
                Download CV
              </button>
            </div>

            {/* Social Icons */}

            <div className="flex gap-5 mt-12 justify-center lg:justify-start">
              {[
                {
                  icon: FaGithub,
                  link: "https://github.com/RaghuG27",
                },
                {
                  icon: FaLinkedin,
                  link: "https://linkedin.com/in/raghavendra-gabbur",
                },
                {
                  icon: FaInstagram,
                  link: "https://instagram.com",
                },
              ].map((social, index) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                    }}
                    className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-white/80
                    backdrop-blur-md
                    border
                    border-gray-200
                    shadow-md
                    flex
                    items-center
                    justify-center
                    text-gray-700
                    text-xl
                    hover:text-blue-600
                    hover:border-blue-500
                    hover:shadow-xl
                    transition-all
                    duration-300
                  "
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className="relative"
          >
            {/* Glow */}

            <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-30 scale-110"></div>

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Ring */}

              <div
                className="
                absolute
                inset-0
                rounded-full
                border-[12px]
                border-white
                shadow-[0_20px_80px_rgba(0,0,0,0.12)]
              "
              />

              <Image
                src="/my_profile.png"
                alt="Profile"
                width={420}
                height={420}
                priority
                className="
                rounded-full
                object-cover
                w-[250px]
                h-[250px]
                md:w-[420px]
                md:h-[420px]
                relative
                z-10
              "
              />
            </motion.div>

            {/* Experience Card */}

            <div
              className="
              absolute
              -left-8
              top-10
              bg-white
              rounded-2xl
              px-5
              py-3
              shadow-lg
              border
              border-gray-100
            "
            >
              <p className="text-gray-500 text-sm">
                Experience
              </p>

              <h3 className="font-bold text-sm text-gray-900">
                2+ Years
              </h3>
            </div>

           
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          opacity: [0.4, 1, 0.4],
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
        absolute
        bottom-8
        left-1/2
    
        -translate-x-1/2
        flex
        flex-col
        items-center
        text-gray-500
        text-xs
        tracking-[4px]
        uppercase
      "
      >
        Scroll

        <FaArrowDown className="mt-3 text-blue-600 text-lg" />
      </motion.div>
    </section>
  );
}