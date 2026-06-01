"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "raghu.gabbur27@gmail.com",
    },

    {
      icon: <FaPhoneAlt />,
      title: "+91 8861455144",
      value: "Available for opportunities",
    },

    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "linkedin.com/in/raghavendra-gabbur",
    },

    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Bangalore, Karnataka",
    },
  ];

  return (
    <section
      id="contact"
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
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Let's Build Something
            <br />
            <span className="text-blue-600">
              Amazing Together
            </span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mt-8 max-w-4xl mx-auto">
            Open to full-time opportunities, freelance projects,
            collaborations, and exciting software engineering challenges.
          </p>
        </motion.div>

        {/* Divider */}

        <div className="max-w-4xl mx-auto mt-16 mb-20">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
        </div>

        {/* Main Contact Card */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            max-w-6xl
            mx-auto
            bg-white
            rounded-[32px]
            border
            border-gray-100
            p-8
            md:p-12
            shadow-[0_10px_40px_rgba(0,0,0,0.05)]
          "
        >
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left */}

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Let's Connect
              </h3>

              <p className="text-gray-600 leading-relaxed mb-10">
                Whether you have a project in mind, an opportunity,
                or simply want to connect, feel free to reach out.
                I'm always interested in discussing technology,
                product ideas, and engineering challenges.
              </p>

              <div className="space-y-5">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      x: 5,
                    }}
                    className="
                      flex
                      items-center
                      gap-4
                      p-4
                      rounded-2xl
                      bg-blue-50
                      border
                      border-blue-100
                    "
                  >
                    <div
                      className="
                        w-12
                        h-12
                        rounded-xl
                        bg-white
                        flex
                        items-center
                        justify-center
                        text-blue-600
                        shadow-sm
                      "
                    >
                      {item.icon}
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {item.title}
                      </h4>

                      <p className="text-gray-600 text-sm break-all">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right */}

            <div
              className="
                bg-blue-50
                border
                border-blue-100
                rounded-[28px]
                p-8
                flex
                flex-col
                justify-center
              "
            >
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-blue-600 text-2xl shadow-sm mb-6">
                <FaPaperPlane />
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Collaborate?
              </h3>

              <p className="text-gray-600 leading-relaxed mb-8">
                I'm currently available for software development
                opportunities, freelance projects, and technical
                consulting engagements.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:raghu.gabbur27@gmail.com"
                  className="
                    w-full
                    flex
                    items-center
                    justify-center
                    py-4
                    rounded-2xl
                    bg-blue-600
                    text-white
                    font-semibold
                    hover:bg-blue-700
                    transition-all
                    duration-300
                  "
                >
                  Send Email
                </a>

                <a
                  href="https://linkedin.com/in/raghavendra-gabbur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full
                    flex
                    items-center
                    justify-center
                    py-4
                    rounded-2xl
                    bg-white
                    border
                    border-gray-200
                    text-gray-700
                    font-semibold
                    hover:border-blue-500
                    hover:text-blue-600
                    transition-all
                    duration-300
                  "
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}

        <div className="text-center mt-16">
          <p className="text-gray-500">
            © 2026 Raghavendra Gabbur. Built with Next.js,
            TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}