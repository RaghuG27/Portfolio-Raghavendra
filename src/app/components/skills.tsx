"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaDatabase,
  FaServer,
  FaTools,
} from "react-icons/fa";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      level: "Expert",
      icon: <FaReact />,
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
      title: "Backend Development",
      level: "Advanced",
      icon: <FaServer />,
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
      level: "Advanced",
      icon: <FaDatabase />,
      skills: [
        "MySQL",
        "PostgreSQL",
        "CockroachDB",
        "Redis",
      ],
    },

    {
      title: "Tools & Cloud",
      level: "Advanced",
      icon: <FaTools />,
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
      className="relative py-32 bg-[#F7F5EF] overflow-hidden px-6"
    >
      {/* Background Elements */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-100 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto relative z-10">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto"
        >
          <p className="text-blue-600 uppercase tracking-[4px] font-semibold mb-5">
            Skills
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Technologies
            <br />
            <span className="text-blue-600">
              I Work With
            </span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mt-8 max-w-4xl mx-auto">
            Building scalable web applications, mobile applications,
            APIs and cloud-ready solutions using modern technologies
            and industry best practices.
          </p>
        </motion.div>

        {/* Divider */}

        <div className="max-w-4xl mx-auto mt-16 mb-16">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="
                relative
                overflow-hidden
                bg-white
                rounded-[32px]
                p-8
                border
                border-gray-100
                shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)]
                hover:-translate-y-2
                transition-all
                duration-500
              "
            >
              {/* Background Decoration */}

              <div className="absolute inset-0 overflow-hidden opacity-5">
                <div className="absolute top-4 right-4 text-[120px] font-black text-blue-500">
                  {index + 1}
                </div>
              </div>

              {/* Header */}

              <div className="relative z-10 flex items-center gap-4 mb-6">
                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-blue-50
                    flex
                    items-center
                    justify-center
                    text-blue-600
                    text-3xl
                  "
                >
                  {category.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {category.title}
                  </h3>

                  <p className="text-blue-600 uppercase tracking-[3px] text-xs mt-1 font-semibold">
                    {category.level}
                  </p>
                </div>
              </div>

              {/* Skills */}

              <div className="relative z-10 flex flex-wrap gap-3 mt-8">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-blue-50
                      border
                      border-blue-100
                      text-gray-700
                      text-sm
                      font-medium
                      hover:bg-blue-600
                      hover:text-white
                      hover:border-blue-600
                      transition-all
                      duration-300
                      cursor-default
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Tech Stack
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "JavaScript",
              "Python",
              "Django",
              "DRF",
              "MySQL",
              "PostgreSQL",
              "CockroachDB",
              "Redis",
              "Docker",
              "Git",
              "GitHub",
              "Firebase",
              "Google Cloud",
              "Postman",
            ].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                className="
                  px-5
                  py-3
                  rounded-full
                  bg-white
                  border
                  border-gray-200
                  text-gray-700
                  shadow-sm
                  hover:text-blue-600
                  hover:border-blue-500
                  hover:shadow-md
                  transition-all
                "
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating Icons */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            mt-24
            flex
            flex-wrap
            justify-center
            gap-10
            text-5xl
            text-gray-300
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
                hover:text-blue-600
                transition-all
                duration-300
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