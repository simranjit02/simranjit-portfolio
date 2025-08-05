"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <hr className="pt-4 h-[1px]" />
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-lg font-semibold mb-4 md:mb-0"
        >
          © {new Date().getFullYear()} Simranjit Singh
        </motion.div>

        {/* Social Links */}
        <div className="flex space-x-6 text-xl">
          <Link
            href="https://www.linkedin.com/in/simranjitsingh22"
            target="_blank"
          >
            <FaLinkedin className="hover:text-blue-500 transition" />
          </Link>
          <Link href="https://github.com/simranjit-singh" target="_blank">
            <FaGithub className="hover:text-white transition" />
          </Link>
          <Link href="mailto:simranjitsingh58648@gmail.com">
            <FaEnvelope className="hover:text-red-400 transition" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
