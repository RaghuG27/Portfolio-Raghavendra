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
      bgIcons: [
      <FaPython />,
      <FaServer />,
      <FaDocker />,
  
    ],
      description:
        "Developing scalable backend systems and REST APIs using Python, Django, Django REST Framework, JWT Authentication, and secure workflows.",
    },

    {
      icon: <FaMobileAlt />,
      bgIcons: [
      <FaMobileAlt />,
      <FaReact />,
      <FaJs />,
    
    ],
      title: "Mobile Applications",
      
      description:
        "Creating cross-platform mobile applications using React Native with real-time features, authentication, and API integrations.",
    },

    {
      icon: <FaDatabase />,
      bgIcons: [
      <FaDatabase />,
      <FaDocker />,
      <FaServer />,
    
    ],
      title: "Database & Cloud",
      description:
        "Working with MySQL, PostgreSQL, CockroachDB, Redis, Docker, Firebase, and Google Cloud Platform for scalable deployments.",
    },
  ];

  return (
    <section
      id="about"
      className="py-28 bg-slate-900 px-4 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-blue-500 text-2xl font-medium mb-3">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Full Stack Developer
            <span className="text-blue-500"> Building Scalable Applications</span>
          </h2>

          <p className="text-slate-400 mt-8 max-w-4xl mx-auto text-lg leading-relaxed">
            Software Developer with 2 years of experience building
            scalable full-stack web and mobile applications using
            Next.js, React.js, React Native, Python, and Django REST Framework.
            Experienced in developing responsive frontend interfaces,
            RESTful APIs, authentication systems, and database-driven applications.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="bg-slate-950/70 backdrop-blur-lg border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition duration-300 hover:-translate-y-2"
            >

               {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 text-3xl mb-6">
                {card.icon}
              </div>
              {/* absolute inset-0 overflow-hidden opacity-10 */}
                        {/* Background Icons */}
          <div className="absolute inset-0 overflow-hidden opacity-10">

            <div className="absolute top-4 right-4 text-7xl text-blue-500 rotate-12">
              {card.bgIcons?.[0]}
            </div>

            <div className="absolute bottom-6 left-6 text-6xl text-purple-500 -rotate-12">
              {card.bgIcons?.[1]}
            </div>

            <div className=" absolute bottom-10 right-20 text-5xl text-cyan-500">
              {card.bgIcons?.[2]}
            </div>

         

        </div>


              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-24"
        >
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-500">
              2+
            </h3>

            <p className="text-slate-400 mt-2">
              Years Experience
            </p>
          </div>

         

          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-500">
              10+
            </h3>

            <p className="text-slate-400 mt-2">
              Technologies
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-500">
              100%
            </h3>

            <p className="text-slate-400 mt-2">
              Responsive Design
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}