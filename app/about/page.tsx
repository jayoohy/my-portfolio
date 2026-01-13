"use client";

import { motion } from "framer-motion";
import { Code, Palette, GitBranch, FileCode, Layers } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";

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
  { name: "React", icon: Layers, category: "Framework" },
  { name: "Next.js", icon: Code, category: "Framework" },
  { name: "TypeScript", icon: FileCode, category: "Language" },
  { name: "JavaScript", icon: Code, category: "Language" },
  { name: "Tailwind CSS", icon: Palette, category: "Styling" },
  { name: "Framer Motion", icon: Layers, category: "Animation" },
  { name: "shadcn/ui", icon: Layers, category: "UI" },
  { name: "Git", icon: GitBranch, category: "Version Control" },
  { name: "Redux", icon: Code, category: "State" },
];

const bioSections = [
  {
    title: "Who Am I?",
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
    <PageContainer>
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
            <p className="text-muted-foreground leading-relaxed text-justify">
              {section.content}
            </p>
          </motion.div>
        ))}
        <motion.div
          className="p-6 rounded-lg border border-border bg-card"
          variants={itemVariants}
        >
          <h2 className="text-xl font-semibold mb-3">Personal Info</h2>
          <p className="text-muted-foreground leading-relaxed">
            <span className="font-bold text-black/80 dark:text-white/80">
              Location
            </span>
            : Available for remote work
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <span className="font-bold text-black/80 dark:text-white/80">
              Availability
            </span>
            : Open to new opportunities
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6">Tools & Technologies</h2>
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
                className="p-4 rounded-lg border border-border bg-card hover:border-[#6366f1]/50 transition-colors text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05, borderColor: "#6366f1" }}
              >
                <div className="flex items-center justify-center mb-2">
                  <Icon size={28} className="text-[#6366f1]" />
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
    </PageContainer>
  );
}
