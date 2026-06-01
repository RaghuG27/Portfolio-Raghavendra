"use client";
import NavBar from '@/app/components/NavBar'
import Hero from '@/app/components/Hero'
import Skills from '@/app/components/skills'
import About from '@/app/components/About'
import Experience from "@/app/components/Experience";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import ScrollProgress from "@/app/components/ScrollProgress";
import ProjectExperience from "@/app/components/ProjectExperience";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#F7F5EF] text-white overflow-x-hidden">
      <ScrollProgress/>
      <NavBar/>
     
     <Hero/>
     <About/>
     <Skills/>
     <Experience/>
     <ProjectExperience />
      <Contact />
      
      <Footer />
    </main>
  );
}