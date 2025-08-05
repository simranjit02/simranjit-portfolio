"use client";
import { motion } from "framer-motion";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="relative text-white font-sans overflow-x-hidden bg-gradient-to-br from-gray-800 to-gray-900">
      {/* Background Blobs */}
      <div className="blob absolute top-[-200px] left-[-200px] z-0"></div>
      <div className="blob absolute top-[300px] right-[-150px] z-0"></div>

      {/* Hero Section */}
      <section id="hero" className="">
        <div className="items-center justify-center text-center mt-32">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🚧 Development in Progress
          </h1>
          <p className="text-lg text-gray-300">
            I'm currently building this portfolio. Please check back soon!
          </p>
        </div>
        <div className="relative min-h-screen flex items-center justify-center text-center px-6">
          <div className="relative z-10">
            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
              className="text-5xl md:text-6xl font-extrabold mb-4"
            >
              Hi, I'm Simranjit Singh
            </motion.h1>

            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.3 }}
              className="text-2xl md:text-3xl font-semibold mb-6"
            >
              Full Stack Software Engineer | SAP UI5 & ABAP Developer
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.6 }}
              className="max-w-xl mx-auto text-lg text-gray-300 mb-8"
            >
              I build fast, scalable apps — from SAP enterprise tools to modern
              web portals.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full text-lg font-medium"
            >
              View My Work ↓
            </motion.button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen bg-gray-900 px-6 py-20 text-center"
      >
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold mb-4"
        >
          Projects
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-400"
        >
          (Your projects will go here...)
        </motion.p>
      </section>

      {/* Inline styles for blobs */}
      <style jsx>{`
        .blob {
          width: 600px;
          height: 600px;
          background: rgba(59, 130, 246, 0.3);
          border-radius: 50%;
          filter: blur(120px);
          animation: blob 20s infinite;
        }
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(-100px, 60px);
          }
          66% {
            transform: translate(80px, -40px);
          }
        }
      `}</style>
    </main>
  );
}
