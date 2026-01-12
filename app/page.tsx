"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Download, Github, Linkedin, Twitter, Mail } from "lucide-react";
import meImage from "@/img/me.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/jayoohy",
    color: "hover:text-[#333] dark:hover:text-[#f5f5f5]",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/joy-ogukah-b4aba7275/",
    color: "hover:text-[#0077b5]",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://x.com/jay_ooh_y",
    color: "hover:text-[#1da1f2]",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:ogukahjoy@gmail.com",
    color: "hover:text-[#ea4335]",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        className="flex flex-col items-center text-center max-w-2xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div variants={itemVariants}>
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto">
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-[#6366f1] via-[#8b5cf6] to-[#ec4899] p-1 animate-pulse" />
            <div className="relative w-full h-full rounded-full overflow-hidden bg-background p-1">
              <Image
                src={meImage}
                alt="Joy Ogukah"
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl leading-normal text-foreground font-bold mb-3"
          variants={itemVariants}
        >
          Joy Ogukah
        </motion.h1>

        {/* Occupation */}
        <motion.p
          className="text-md sm:text-lg text-muted-foreground mb-6 font-medium"
          variants={itemVariants}
        >
          Software Developer
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          variants={itemVariants}
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`p-3 rounded-full bg-card border border-border text-muted-foreground transition-all ${social.color}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.name}
              >
                <Icon size={17} />
              </motion.a>
            );
          })}
        </motion.div>

        {/* CV Download Button */}
        <motion.div variants={itemVariants}>
          <Link
            href="/Joy_Ogukah_Frontend_CV.pdf"
            download="Joy_Ogukah_Frontend_CV.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-linear-to-r from-[#6366f1] to-[#8b5cf6] text-white font-semibold hover:from-[#4f46e5] hover:to-[#7c3aed] transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Download size={20} />
            Download CV
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
