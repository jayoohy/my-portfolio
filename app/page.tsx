"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code, Bot, PenTool } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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
      duration: 0.5,
    },
  },
};

const specialties = [
  {
    icon: PenTool,
    title: "Frontend Designer",
    description: "Creating beautiful and intuitive user interfaces",
  },
  {
    icon: Bot,
    title: "AI Workflow Automation",
    description: "Streamlining processes with intelligent automation",
  },
  {
    icon: Code,
    title: "Chatbots",
    description: "Building conversational AI experiences",
  },
  {
    icon: PenTool,
    title: "Technical Blogging",
    description: "Sharing knowledge and insights",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-6xl w-full py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Joy Ogukah
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl text-muted-foreground mb-4"
            variants={itemVariants}
          >
            Software Developer
          </motion.p>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            variants={itemVariants}
          >
            Specializing in frontend design, AI workflow automation, chatbots,
            and technical blogging. Building modern, efficient, and user-focused
            solutions.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              View My Works
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-border bg-background hover:bg-muted transition-colors font-medium"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>

        {/* Specialties Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          variants={containerVariants}
        >
          {specialties.map((specialty, index) => {
            const Icon = specialty.icon;
            return (
              <motion.div
                key={index}
                className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {specialty.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {specialty.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
