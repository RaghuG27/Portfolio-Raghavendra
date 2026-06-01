export default function Footer() {
  return (
    <footer className="relative bg-[#F7F5EF] overflow-hidden">
      {/* Divider */}

      <div className="max-w-5xl mx-auto px-6">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="text-center">
          {/* Logo */}

          <h3
            className="
              text-3xl
              md:text-4xl
              font-bold
              bg-gradient-to-r
              from-blue-600
              to-indigo-600
              bg-clip-text
              text-transparent
            "
          >
            Raghavendra Gabbur
          </h3>

          {/* Role */}

          <p className="text-gray-600 mt-4 text-lg">
            Full Stack Software Developer
          </p>

          {/* Small Description */}

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Building scalable web applications, mobile applications,
            APIs, and cloud-native solutions with modern technologies.
          </p>

          {/* Bottom */}

          <div className="mt-10">
            <p className="text-gray-400 text-sm">
              © 2026 Raghavendra Gabbur. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}