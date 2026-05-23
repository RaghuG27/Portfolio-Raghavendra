"use client";

import { motion } from "framer-motion";
{/* Add imports */}
import {
  FaReact,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaDatabase,
  FaServer,
} from "react-icons/fa";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "React Native",
      ],
    },

    {
      title: "Backend",
      skills: [
        "Python",
        "Django",
        "Django REST Framework",
        "REST APIs",
        "JWT Authentication",
      ],
    },

    {
      title: "Database",
      skills: [
        "MySQL",
        "PostgreSQL",
        "CockroachDB",
        "Redis",
      ],
    },

    {
      title: "Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "Firebase",
        "Google Cloud",
        "Postman",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-28 px-4 bg-slate-950"
    >
      <div className="container mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-blue-500 text-2xl font-medium mb-3">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Technologies I Work With
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto text-lg">
            Experienced in building scalable web and mobile
            applications using modern frontend, backend,
            database, and cloud technologies.
          </p>
        </motion.div>

       {/* Skills Grid */}
<div className="grid md:grid-cols-2 gap-8 ">

  {skillCategories.map((category, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.2,
      }}
      viewport={{ once: true }}
      className="
        relative
        overflow-hidden
        group
        bg-slate-950
        backdrop-blur-xl
        border border-slate-800
        rounded-3xl
        p-8
        hover:border-blue-500/50
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
        hover:shadow-blue-500/10
      "
    >

      {/* Glow Effect */}
      <div className="
        absolute
        inset-0
        bg-gradient-to-br
        from-blue-500/5
        via-transparent
        to-purple-500/5
        opacity-0
        group-hover:opacity-100
        transition
        duration-500
      "></div>

      {/* Background Blur Circle */}
      <div className="
        absolute
        -top-10
        -right-10
        w-40
        h-40
        bg-blue-500/10
        rounded-full
        blur-3xl
      "></div>

      {/* Title */}
      <h3 className="
        relative
        text-2xl
        font-bold
        mb-8
        text-white
      ">
        {category.title}
      </h3>

      {/* Skills */}
<div className="relative flex flex-wrap gap-4">

  {category.skills.map((skill, skillIndex) => (
    <motion.div
      key={skillIndex}
      whileHover={{
        y: -4,
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className="
        group
        relative
        overflow-hidden
        px-5
        py-3
        rounded-2xl
        bg-slate-900/80
        border border-slate-700/70
        backdrop-blur-xl
        cursor-pointer
        transition-all
        duration-300
        hover:border-blue-500/40
        hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)]
      "
    >

      {/* Animated Glow */}
      <div
        className="
          absolute inset-0
          opacity-0 group-hover:opacity-100
          transition duration-500
          bg-gradient-to-r
          from-blue-500/10
          via-cyan-400/10
          to-purple-500/10
        "
      ></div>

      {/* Shine Effect */}
      <span
        className="
          absolute inset-0
          -translate-x-full
          group-hover:translate-x-full
          transition-transform
          duration-1000
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
        "
      ></span>

      {/* Text */}
      <span
        className="
          relative z-10
          text-slate-300
          font-medium
          tracking-wide
          group-hover:text-white
          transition duration-300
        "
      >
        {skill}
      </span>
    </motion.div>
  ))}
</div>

      
      
    </motion.div>

    
  ))}


</div>
  {/* Bottom Floating Icons */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="
    mt-24
    flex flex-wrap
    justify-center
    text-center
    gap-10
    text-5xl
    text-slate-700
  "
>
  {[
    FaReact,
    FaPython,
    FaDocker,
    FaGitAlt,
    FaDatabase,
    FaServer,
  ].map((Icon, index) => (
    <motion.div
      key={index}
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: index * 0.2,
      }}
      className="
        hover:text-blue-400
        transition duration-300
      "
    >
      <Icon />
    </motion.div>
  ))}
</motion.div>
      </div>
    </section>
  );
}