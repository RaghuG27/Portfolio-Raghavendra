"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaMobileAlt,
  FaDatabase,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaDocker,
} from "react-icons/fa";

export default function About() {
  const cards = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      bgIcons: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaReact />],
      description:
        "Building modern, responsive, and high-performance user interfaces using React.js, Next.js, TypeScript, and Tailwind CSS.",
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      bgIcons: [<FaPython />, <FaServer />, <FaDocker />],
      description:
        "Developing scalable backend systems and REST APIs using Python, Django, Django REST Framework, JWT Authentication, and secure workflows.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Applications",
      bgIcons: [<FaMobileAlt />, <FaReact />, <FaJs />],
      description:
        "Creating cross-platform mobile applications using React Native with real-time features, authentication, and API integrations.",
    },
    {
      icon: <FaDatabase />,
      title: "Database & Cloud",
      bgIcons: [<FaDatabase />, <FaDocker />, <FaServer />],
      description:
        "Working with MySQL, PostgreSQL, CockroachDB, Redis, Docker, Firebase, and Google Cloud Platform for scalable deployments.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-32 bg-[#F7F5EF] overflow-hidden px-6"
    >
      {/* Background Elements */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50" />

     

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-100 rounded-full blur-3xl opacity-50" />


      <div
        className="
       
      "
      />

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
            About Me
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Full Stack Developer
            <br />
            <span className="text-blue-600">
              Building Scalable Applications
            </span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mt-8 max-w-4xl mx-auto">
            Software Developer with 2+ years of experience building scalable
            full-stack web and mobile applications using Next.js, React.js,
            React Native, Python, and Django REST Framework. Experienced in
            developing responsive frontend interfaces, RESTful APIs,
            authentication systems, database-driven applications, and cloud
            deployments.
          </p>
        </motion.div>

        {/* Divider */}

        <div className="max-w-4xl mx-auto mt-16 mb-16">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
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
              {/* Background Icons */}

              <div className="absolute inset-0 overflow-hidden opacity-5">
                <div className="absolute top-4 right-4 text-8xl text-blue-400 rotate-12">
                  {card.bgIcons?.[0]}
                </div>

                <div className="absolute bottom-4 left-4 text-7xl text-indigo-400 -rotate-12">
                  {card.bgIcons?.[1]}
                </div>

                <div className="absolute bottom-10 right-16 text-6xl text-sky-400">
                  {card.bgIcons?.[2]}
                </div>
              </div>

              {/* Icon */}

              <div
                className="
                relative
                z-10
                w-16
                h-16
                rounded-2xl
                bg-blue-50
                flex
                items-center
                justify-center
                text-blue-600
                text-3xl
                mb-6
              "
              >
                {card.icon}
              </div>

              {/* Title */}

              <h3 className="relative z-10 text-2xl font-bold text-gray-900 mb-4">
                {card.title}
              </h3>

              {/* Description */}

              <p className="relative z-10 text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            grid
            grid-cols-3
            gap-8
            mt-24
            max-w-4xl
            mx-auto
          "
        >
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-600">2+</h3>
            <p className="text-gray-600 mt-3">Years Experience</p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-600">10+</h3>
            <p className="text-gray-600 mt-3">Technologies</p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-600">100%</h3>
            <p className="text-gray-600 mt-3">Responsive Design</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}