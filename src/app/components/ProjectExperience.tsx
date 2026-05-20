"use client";

import { motion } from "framer-motion";

export default function ProjectExperience() {
  const projects = [
    {
      title: "Regenerative Wellness Platform",

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
      className="py-28 px-4 bg-slate-900 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-blue-500 text-2xl font-medium mb-3">
            Project Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Enterprise & Fintech Platforms
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto text-lg">
            Worked on scalable fintech and enterprise-grade
            applications involving real-time systems,
            payment integrations, APIs, and cloud-native architecture.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="bg-slate-950/80 backdrop-blur-lg border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition duration-300"
            >

              {/* Title */}
              <h3 className="text-3xl font-bold mb-8">
                {project.title}
              </h3>

              {/* Description */}
              <div className="space-y-4">

                {project.description.map((point, pointIndex) => (
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

                {project.tech.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="px-4 py-2 bg-slate-800 rounded-xl text-sm text-slate-300 hover:bg-blue-500 hover:text-white transition duration-300"
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