"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "#" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="
        fixed top-0 left-0 w-full z-50
        bg-slate-950/70
        backdrop-blur-2xl
        border-b border-white/10
      "
    >
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            href="/"
            className="
              text-3xl font-black tracking-wide
              bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500
              bg-clip-text text-transparent
            "
          >
            Portfolio
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.path}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="
                  relative text-slate-300 font-medium
                  hover:text-white
                  transition-all duration-300
                  group
                "
              >
                {link.name}

                {/* Animated Underline */}
                <span
                  className="
                    absolute left-0 -bottom-2
                    w-0 h-[2px]
                    bg-gradient-to-r from-blue-500 to-cyan-400
                    transition-all duration-300
                    group-hover:w-full
                  "
                ></span>
              </motion.a>
            ))}

            
          </div>

          {/* Mobile Button */}
          <button
            className="
              md:hidden
              text-white text-3xl
              transition-transform duration-300
              hover:scale-110
            "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="
              md:hidden
              bg-slate-950/95
              backdrop-blur-2xl
              border-t border-white/10
            "
          >
            <div className="flex flex-col px-6 py-8 gap-6">

              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="
                    text-slate-300
                    hover:text-blue-400
                    transition-all duration-300
                    text-lg font-medium
                    border-b border-slate-800
                    pb-3
                  "
                >
                  {link.name}
                </motion.a>
              ))}

              {/* Mobile Resume Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/Raghavendra_Gabbur.pdf";
                  link.download = "Raghavendra_Gabbur.pdf";
                  link.click();
                }}
                className="
                  bg-blue-500 hover:bg-blue-600
                  text-white
                  py-3 rounded-2xl
                  font-medium
                  transition-all duration-300
                  hover:scale-[1.02]
                  hover:shadow-[0_10px_30px_rgba(59,130,246,0.35)]
                "
              >
                Download Resume
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}