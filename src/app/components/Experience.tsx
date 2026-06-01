"use client";

import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      role: "Software Developer",
      company: "Gowdanar Technosoft Pvt Ltd (GTPL)",
      duration: "Jun 2024 - Present",

      points: [
        "Developed scalable enterprise-grade web and mobile applications using Python, Django, React Native, Next.js, and RESTful APIs.",
        "Built reusable responsive frontend interfaces using Next.js, React Native, Tailwind CSS, and TypeScript.",
        "Implemented secure backend services using JWT authentication, RBAC authorization, and API security mechanisms.",
        "Designed scalable database architectures using PostgreSQL, MySQL, and CockroachDB.",
        "Integrated Firebase, Google Maps API, Razorpay, Google Sign-In, and Apple Sign-In workflows.",
        "Implemented Redis caching to reduce API latency on high-traffic endpoints.",
        "Worked across the complete SDLC including development, testing, deployment, debugging, and production support.",
        "Collaborated using Git/GitHub workflows, Postman, Agile methodologies, and code review practices.",
      ],

      tech: [
        // "Next.js",
        // "React.js",
        // "React Native",
        // "Python",
        // "Django",
        // "DRF",
        // "PostgreSQL",
        // "Docker",
        // "Redis",
        // "Firebase",
        // "GCP",
      ],
    },

    {
      role: "Software Developer Intern",
      company: "Gowdanar Technosoft Pvt Ltd (GTPL)",
      duration: "Dec 2023 - May 2024",

      points: [
        "Contributed to fintech web applications using Django and Next.js.",
        "Designed and tested RESTful API endpoints using Django REST Framework.",
        "Developed responsive UI components using React.js and Next.js.",
        "Performed API integration, debugging, and testing using Postman and browser DevTools.",
        "Collaborated with team members using Git/GitHub workflows and Agile sprint discussions.",
      ],

      tech: [
        // "React.js",
        // "Next.js",
        // "Django",
        // "DRF",
        // "Postman",
        // "GitHub",
      ],
    },
  ];

  return (
    <section
      id="experience"
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
            Experience
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Professional
            <br />
            <span className="text-blue-600">
              Experience
            </span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mt-8 max-w-4xl mx-auto">
            Delivering scalable enterprise applications, secure backend
            systems, and modern responsive user experiences across fintech,
            enterprise, and mobile platforms.
          </p>
        </motion.div>

        {/* Divider */}

        <div className="max-w-4xl mx-auto mt-16 mb-20">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
        </div>

        {/* Timeline */}

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}

          <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-blue-200 hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="relative md:pl-20 mb-14"
            >
              {/* Timeline Icon */}

              <div
                className="
                hidden md:flex
                absolute
                left-0
                top-8
                w-10
                h-10
                rounded-full
                bg-white
                border-4
                border-blue-500
                text-blue-500
                items-center
                justify-center
                shadow-lg
              "
              >
                <FaBriefcase />
              </div>

              {/* Experience Card */}

              <div
                className="
                bg-white
                rounded-[32px]
                border
                border-gray-100
                p-8
                shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)]
                hover:-translate-y-2
                transition-all
                duration-500
              "
              >
                {/* Header */}

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {exp.role}
                    </h3>

                    <p className="text-blue-600 font-semibold mt-2">
                      {exp.company}
                    </p>
                  </div>

                  <div
                    className="
                    px-5
                    py-2
                    rounded-xl
                    bg-blue-50
                    border
                    border-blue-100
                    text-blue-600
                    font-medium
                    w-fit
                  "
                  >
                    {exp.duration}
                  </div>
                </div>

                {/* Points */}

                <div className="mt-8 space-y-4">
                  {exp.points.map((point, pointIndex) => (
                    <div
                      key={pointIndex}
                      className="flex gap-3 items-start"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-3 flex-shrink-0" />

                      <p className="text-gray-600 leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-3 mt-10">
                  {exp.tech.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="
                        px-4
                        py-2
                        rounded-xl
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
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}