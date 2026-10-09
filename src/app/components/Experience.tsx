"use client";

import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Software Engineer",
      company: "Gowdanar Technosoft Pvt Ltd (GTPL)",
      duration: "Apr 2024 - Present",

      points: [
        "Built full-stack web and mobile applications using Python, Django REST Framework, FastAPI, React.js, Next.js, and React Native.",
        "Designed and maintained 40+ REST APIs for authentication, onboarding, user management, document verification, and workflow automation.",
        "Developed Generative AI features with Google Gemini and OpenAI APIs (document analysis, OCR extraction, resume analysis) using prompt engineering and Pydantic structured outputs.",
        "Implemented JWT authentication, RBAC, API-level permissions, and Google/Apple OAuth 2.0 sign-in across multiple user roles and business workflows.",
        "Built asynchronous, event-driven processing with Celery, Redis, and Kafka for long-running workflows, notifications, and AI tasks.",
        "Improved application performance by 20–30% and reduced database load via PostgreSQL/CockroachDB indexing, ORM query optimization, and Redis caching.",
        "Improved frontend rendering performance by ~60% on performance-sensitive interfaces by reducing unnecessary re-renders.",
        "Delivered real-time features with WebSockets and Django Channels, and push notifications through Firebase Cloud Messaging (FCM).",
        "Dockerized services, contributed to CI/CD pipelines, and automated third-party API integrations, reducing manual effort.",
        "Supported production deployments, debugging, root-cause analysis, and performance tuning for business-critical applications.",
      ],

      tech: [
        "Python",
        "Django REST Framework",
        "FastAPI",
        "React.js",
        "Next.js",
        "React Native",
        "Google Gemini",
        "OpenAI",
        "Celery",
        "Kafka",
        "Redis",
        "PostgreSQL",
        "Docker",
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
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-orange-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mt-8 max-w-4xl mx-auto">
            Building scalable web, mobile, and Generative AI applications with
            secure REST APIs, event-driven processing, and modern responsive
            user experiences across enterprise and SaaS platforms.
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
                group
                relative
                overflow-hidden
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
                {/* Hover Accent Bar */}

                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

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