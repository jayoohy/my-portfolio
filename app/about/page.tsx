"use client";

import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Smartphone,
  Database,
  Cloud,
  GitBranch,
  FileCode,
  Layers,
  Cpu,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const tools = [
  { name: "TypeScript", icon: FileCode, category: "Language" },
  { name: "React", icon: Layers, category: "Framework" },
  { name: "Next.js", icon: Code, category: "Framework" },
  { name: "Node.js", icon: Cpu, category: "Runtime" },
  { name: "Tailwind CSS", icon: Palette, category: "Styling" },
  { name: "Git", icon: GitBranch, category: "Version Control" },
  { name: "Cloud Services", icon: Cloud, category: "Infrastructure" },
  { name: "Mobile Dev", icon: Smartphone, category: "Platform" },
  { name: "Databases", icon: Database, category: "Data" },
];

const bioSections = [
  {
    title: "About Me",
    content:
      "I'm a passionate software developer with a focus on creating exceptional user experiences through modern web technologies. My journey in tech has been driven by curiosity and a desire to solve real-world problems.",
  },
  {
    title: "My Approach",
    content:
      "I believe in writing clean, maintainable code and building applications that are both beautiful and functional. I'm always learning and staying up-to-date with the latest technologies and best practices.",
  },
  {
    title: "What I Do",
    content:
      "I specialize in frontend development, AI workflow automation, chatbot development, and technical writing. I enjoy turning complex problems into simple, elegant solutions.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, skills, and the tools I use
          </p>
        </motion.div>

        {/* Bio Sections */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {bioSections.map((section, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg border border-border bg-card"
              variants={itemVariants}
            >
              <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Personal Info */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="p-6 rounded-lg border border-border bg-card">
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">Available for remote work</p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-card">
              <h3 className="font-semibold mb-2">Availability</h3>
              <p className="text-muted-foreground">Open to new opportunities</p>
            </div>
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Tools & Technologies
          </h2>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={index}
                  className="p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors text-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <h3 className="text-sm font-medium">{tool.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {tool.category}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
