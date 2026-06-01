"use client";

import { motion } from "framer-motion";

export default function ProjectExperience() {
  const projects = [
    {
      title: "Real-Time Booking & Tracking System",
      tech: [
        "Django",
        "REST APIs",
        "CockroachDB",
        "Kafka",
        "React Native",
        "Next.js",
        "TypeScript",
      ],
      description: [
        "Developed cross-platform mobile applications using React Native and admin dashboards using Next.js.",
        "Integrated booking systems, live tracking, push notifications, OAuth login, and payment workflows using WebSockets and Google Maps API.",
        "Implemented API Gateway patterns including caching, rate limiting, and circuit breaker mechanisms.",
        "Implemented event-driven communication using Apache Kafka for asynchronous processing across services.",
      ],
    },

    {
      title: "Composable Core Banking & Lending Platform",
      tech: [
        "Django",
        "DRF",
        "CockroachDB",
        "Next.js",
        "React Native",
        "Tailwind CSS",
        "TypeScript",
      ],
      description: [
        "Developed responsive lending dashboards and workflow interfaces using Next.js and Tailwind CSS.",
        "Built frontend interfaces for onboarding, loan processing, document submission, and verification systems.",
        "Assisted in developing REST APIs using Django REST Framework for loan and transaction management workflows.",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-32 bg-[#F7F5EF] overflow-hidden px-6"
    >
      {/* Background */}

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
            Projects
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Enterprise & Fintech
            <br />
            <span className="text-blue-600">
              Platforms
            </span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mt-8 max-w-4xl mx-auto">
            Worked on scalable fintech and enterprise-grade applications
            involving real-time systems, payment integrations,
            APIs, event-driven architecture, and cloud-native platforms.
          </p>
        </motion.div>

        {/* Divider */}

        <div className="max-w-4xl mx-auto mt-16 mb-20">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
        </div>

        {/* Project Cards */}

        <div className="space-y-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
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
                <h3 className="text-3xl font-bold text-gray-900">
                  {project.title}
                </h3>

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
                  Enterprise Project
                </div>
              </div>

              {/* Description */}

              <div className="mt-8 space-y-4">
                {project.description.map((point, pointIndex) => (
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
                {project.tech.map((tech, techIndex) => (
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}