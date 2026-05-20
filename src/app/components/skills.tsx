"use client";

import { motion } from "framer-motion";

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
      className="py-28 px-4 bg-slate-900"
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
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              px-5
              py-3
              rounded-2xl
              bg-slate-800/80
              border
              border-slate-700
              text-slate-300
              font-medium
              tracking-wide
              cursor-pointer
              transition-all
              duration-300
              hover:bg-gradient-to-r
              hover:from-blue-500
              hover:to-purple-500
              hover:text-white
              hover:border-transparent
              hover:shadow-lg
              hover:shadow-blue-500/20
            "
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
}