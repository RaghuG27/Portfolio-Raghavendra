"use client";

import { motion } from "framer-motion";

export default function ProjectExperience() {
  const projects = [
    {
      title: "MVBook — Multi-Tenant SaaS Business Management & Accounting Platform",
      type: "SaaS Platform",
      tech: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Django REST Framework",
        "FastAPI",
        "PostgreSQL",
        "CockroachDB",
        "Redis",
        "Celery",
        "Apache Kafka",
        "OpenAI API",
        "Docker",
        "GCP",
      ],
      description: [
        "Built a multi-tenant SaaS platform for sales, purchase, inventory, reporting, and financial workflows across client organizations.",
        "Secured REST APIs with JWT authentication, RBAC, and tenant-aware access controls to enforce data isolation between organizations.",
        "Engineered a Kafka audit-logging pipeline with a transactional outbox and idempotent consumers for duplicate-free event delivery.",
        "Implemented a Django API Gateway with Redis caching, session management, and rate limiting across accounting, inventory, reporting, OCR, and notification services.",
        "Built an OpenAI-powered OCR pipeline extracting structured invoice and purchase-document data, reducing manual data entry.",
        "Containerized backend services with Docker and deployed the platform on Google Cloud Platform (GCP).",
      ],
    },

    {
      title: "AI Resume Analyzer & Career Assistant",
      type: "Generative AI",
      tech: [
        "Python",
        "FastAPI",
        "Google Gemini",
        "OpenAI API",
        "PostgreSQL",
        "Celery",
        "Redis",
        "Next.js",
        "JWT",
        "Docker",
      ],
      description: [
        "Built a FastAPI and Google Gemini platform that evaluates resumes against job descriptions, matching required and preferred skills, experience, keywords, and education to resume evidence.",
        "Designed prompts and Pydantic response schemas so every analysis returns consistent, validated, application-ready JSON.",
        "Ran analyses as Celery/Redis tasks with status tracking, retries, and failure handling; JWT-secured APIs with ownership checks.",
        "Built a Next.js dashboard showing resume scores, matched and missing requirements, strengths, weaknesses, and learning resources.",
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
            SaaS & Generative AI
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-orange-600 bg-clip-text text-transparent">
              Platforms
            </span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mt-8 max-w-4xl mx-auto">
            Building scalable SaaS and Generative AI applications involving
            multi-tenant architecture, LLM integrations, event-driven pipelines,
            secure APIs, and cloud-native deployments.
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
                    whitespace-nowrap
                  "
                >
                  {project.type}
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