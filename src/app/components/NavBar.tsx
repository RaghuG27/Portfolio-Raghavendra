"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "#" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Experience", path: "#experience" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Raghavendra_Gabbur.pdf";
    link.download = "Raghavendra_Gabbur.pdf";
    link.click();
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="
        fixed
        top-5
        left-1/2
        -translate-x-1/2
        z-50
        w-[95%]
        max-w-7xl
      "
    >
      <div
        className={`
          transition-all duration-500
          rounded-[28px]
          border
          backdrop-blur-xl
          ${
            scrolled
              ? "bg-white/90 border-white/60 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
              : "bg-white/70 border-white/50"
          }
        `}
      >
        <div className="px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}

            <Link href="/">
              <h2
                className="
                  text-2xl
                  md:text-3xl
                  font-bold
                  bg-gradient-to-r
                  from-blue-600
                  to-indigo-600
                  bg-clip-text
                  text-transparent
                "
              >
                Raghavendra
              </h2>
            </Link>

            {/* Desktop Menu */}

            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.path}
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -2,
                  }}
                  className="
                    relative
                    px-4
                    py-2
                    rounded-xl
                    text-gray-600
                    hover:text-blue-600
                    font-medium
                    transition-all
                    duration-300
                    group
                  "
                >
                  <span
                    className="
                      absolute
                      inset-0
                      rounded-xl
                      bg-blue-50
                      scale-0
                      group-hover:scale-100
                      transition-all
                      duration-300
                    "
                  />

                  <span className="relative z-10">
                    {link.name}
                  </span>
                </motion.a>
              ))}

              
            </div>

            {/* Mobile Menu Button */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                md:hidden
                text-gray-800
                text-3xl
              "
            >
              {menuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                md:hidden
                border-t
                border-gray-100
                overflow-hidden
              "
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.path}
                    onClick={() => setMenuOpen(false)}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    className="
                      text-gray-700
                      hover:text-blue-600
                      font-medium
                      border-b
                      border-gray-100
                      pb-4
                    "
                  >
                    {link.name}
                  </motion.a>
                ))}

             
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}