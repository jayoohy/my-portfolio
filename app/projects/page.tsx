"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Globe, Smartphone, Bot, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

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

type ProjectCategory = "all" | "web" | "mobile" | "ai";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js and TypeScript, featuring real-time inventory management and payment integration.",
    category: "web" as ProjectCategory,
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    image: "/project-1.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "AI Workflow Automation",
    description:
      "An intelligent automation system that streamlines business processes using AI and machine learning.",
    category: "ai" as ProjectCategory,
    tags: ["Python", "OpenAI", "LangChain", "FastAPI"],
    image: "/project-2.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description:
      "A secure mobile banking application with biometric authentication and real-time transaction updates.",
    category: "mobile" as ProjectCategory,
    tags: ["React Native", "TypeScript", "Firebase", "Stripe"],
    image: "/project-3.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Customer Support Chatbot",
    description:
      "An intelligent chatbot that handles customer inquiries using natural language processing and AI.",
    category: "ai" as ProjectCategory,
    tags: ["OpenAI", "Node.js", "WebSocket", "React"],
    image: "/project-4.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing projects and skills with smooth animations.",
    category: "web" as ProjectCategory,
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    image: "/project-5.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    description:
      "A mobile app for tracking workouts, nutrition, and fitness goals with social features.",
    category: "mobile" as ProjectCategory,
    tags: ["React Native", "Firebase", "GraphQL", "TypeScript"],
    image: "/project-6.jpg",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const categories: {
  id: ProjectCategory;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
}[] = [
  { id: "all", label: "All Projects", icon: Globe },
  { id: "web", label: "Web", icon: Globe },
  { id: "mobile", label: "Mobile", icon: Smartphone },
  { id: "ai", label: "AI & Automation", icon: Bot },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

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
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">My Works</h1>
          <p className="text-lg text-muted-foreground">
            A collection of projects I&apos;ve worked on
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-2 rounded-full border transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background border-border hover:border-primary/50"
                }`}
              >
                <Icon size={18} />
                <span>{category.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary/50 transition-all"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Globe className="text-primary/50" size={48} />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 rounded text-xs bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <Link
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </Link>
                  <Link
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                  >
                    <Github size={16} />
                    Code
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-muted-foreground">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
