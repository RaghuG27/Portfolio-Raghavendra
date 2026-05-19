"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";


export default function NavBar() {
  const [menuOpen,setMenuOpen] = useState(false)
  const navLinks = [
    {name:'Home',path:'#'},
    {name:'About',path:'#about'},
    {name:'Skills',path:'#skills'},
    {name:'Projects',path:'#projects'},
    {name:'Contact',path:'#contact'}
  ]
  return (
   <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-20 text-lg">
        <Link href='/' className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Portfolio
        </Link>

         {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 " >
            {navLinks.map((link)=>(
              <a
      key={link.name}
      href={link.path}
      className="relative text-slate-300 hover:text-white transition duration-300 no-underline after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full"
    >
      {link.name}
    </a>
           ))}
         
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white text-3xl" onClick={()=>setMenuOpen(!menuOpen)}>
           {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

         {/* Mobile Menu */}
        
          <div
            className={`md:hidden absolute top-20 left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 transition-all duration-300 overflow-hidden ${
              menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col px-6 py-6 gap-5">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-300 hover:text-blue-500 transition duration-300 text-lg font-medium no-underline border-b border-slate-800 pb-3"
                >
                  {link.name}
                </a>
              ))}

               <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Raghavendra_Gabbur.pdf";
                link.download = "Raghavendra_Gabbur.pdf";
                link.click();
              }}
              className="border border-3 border-slate-600 hover:text-blue-500 cursor-pointer hover:border-blue-500 px-7 py-3 rounded-2xl transition duration-300 font-medium"
            >
              Download Resume
            </button>
            </div>
          </div>

      </div>
    </div>
   </nav>
  )
}


