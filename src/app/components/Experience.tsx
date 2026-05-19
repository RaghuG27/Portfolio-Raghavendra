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

        "Designed high-performance REST APIs supporting payment gateway workflows, transaction management, and real-time features.",

        "Implemented secure backend services using JWT authentication, RBAC authorization, and API security mechanisms.",

        "Designed scalable database architectures using PostgreSQL, MySQL, and CockroachDB.",

        "Integrated Firebase, Google Maps API, Razorpay, Google Sign-In, and Apple Sign-In workflows.",

        "Containerized applications using Docker and deployed services on Google Cloud Platform (GCP).",

        "Implemented Redis caching to reduce API latency on high-traffic endpoints.",

        "Worked across the complete SDLC including development, testing, deployment, debugging, and production support.",

        "Collaborated using Git/GitHub workflows, Postman, Agile methodologies, and code review practices.",
      ],

      tech: [
        "Next.js",
        "React.js",
        "React Native",
        "Python",
        "Django",
        "DRF",
        "PostgreSQL",
        "Docker",
        "Redis",
        "Firebase",
        "GCP",
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
        "React.js",
        "Next.js",
        "Django",
        "DRF",
        "Postman",
        "GitHub",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-28  px-4 bg-slate-950 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-blue-500 font-medium mb-3">
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Professional Experience
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto text-lg">
            Delivering scalable enterprise applications,
            secure backend systems, and modern responsive
            user experiences across fintech and mobile platforms.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-slate-700 max-w-5xl mx-auto">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="ml-10 mb-20 relative"
            >

              {/* Timeline Icon */}
              <div className="absolute -left-[58px] top-2 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                <FaBriefcase />
              </div>

              {/* Card */}
              <div className="bg-slate-900/80 backdrop-blur-lg border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition duration-300">

                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

                  <div>
                    <h3 className="text-2xl font-bold">
                      {exp.role}
                    </h3>

                    <p className="text-blue-500 text-lg mt-2">
                      {exp.company}
                    </p>
                  </div>

                  <div className="bg-slate-800 text-slate-300 px-5 py-2 rounded-xl w-fit">
                    {exp.duration}
                  </div>
                </div>

                {/* Points */}
                <div className="mt-8 space-y-4">

                  {exp.points.map((point, pointIndex) => (
                    <p
                      key={pointIndex}
                      className="text-slate-400 leading-relaxed"
                    >
                      • {point}
                    </p>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mt-10">

                  {exp.tech.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="px-4 py-2 bg-slate-800 rounded-xl text-sm text-slate-300 hover:bg-blue-500 hover:text-white transition duration-300"
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