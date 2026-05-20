"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "Raghu.gabbur27@gmail.com",
    },

    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: "+91 8861455144",
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
      className="py-28 px-4 bg-slate-900 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

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
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Let&apos;s Work Together
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto text-lg">
            Interested in collaborating, hiring, or discussing
            opportunities? Feel free to reach out.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="bg-slate-950/80 backdrop-blur-lg border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition duration-300"
            >

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 text-2xl mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-3">
                {item.title}
              </h3>

              {/* Value */}
              <p className="text-slate-400 break-all">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}