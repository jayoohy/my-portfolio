"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Globe, Bot, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import Image from "next/image";
import Pic1 from "@/img/project1.jpg";
import Pic2 from "@/img/project2.jpg";
import Pic3 from "@/img/project3.jpg";
import Pic4 from "@/img/project4.jpg";
import Pic5 from "@/img/project5.jpg";
import Pic6 from "@/img/project6.jpg";

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

type ProjectCategory = "all" | "web" | "ai";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce web application built with React, Redux, Vite, Firebase and Stripe for payments.",
    category: "web" as ProjectCategory,
    tags: ["TypeScript", "Stripe", "Redux", "Firebase"],
    image: Pic1,
    liveUrl: "https://crwnbrand.netlify.app/",
    githubUrl: "https://github.com/jayoohy/crwn-brand",
  },
  {
    id: 2,
    title: "PantryPal",
    description:
      "A recipe search app where users can enter ingredients and get recipes with images, instructions, and nutrition details.",
    category: "web" as ProjectCategory,
    tags: ["TypeScript", "Redux", "TailwindCSS", "Vite"],
    image: Pic2,
    liveUrl: "https://dpantrypal.netlify.app/",
    githubUrl: "https://github.com/jayoohy/pantrypal",
  },
  {
    id: 3,
    title: "Money Trail",
    description:
      "A simple expense and income tracker where users can log financial transactions, categorize them, and see charts of their spending habits.",
    category: "web" as ProjectCategory,
    tags: ["TypeScript", "Recharts", "Redux Toolkit", "PWA"],
    image: Pic3,
    liveUrl: "https://moneyytrail.netlify.app/",
    githubUrl: "https://github.com/jayoohy/money-trail",
  },
  {
    id: 4,
    title: "Monsters Rolodex",
    description:
      "A simple React + TypeScript app that displays a list of 'monsters' (users) fetched from an API",
    category: "web" as ProjectCategory,
    tags: ["TypeScript", "React", "CSS", "Vite"],
    image: Pic4,
    liveUrl: "#",
    githubUrl: "https://github.com/jayoohy/monsters-rolodex",
  },
  {
    id: 5,
    title: "Keeper App",
    description:
      "A minimalist note taking app, where users can add and delete notes, built with React.",
    category: "web" as ProjectCategory,
    tags: ["React", "JavaScript", "CSS"],
    image: Pic5,
    liveUrl: "#",
    githubUrl: "https://github.com/jayoohy/keeper-app",
  },
  {
    id: 6,
    title: "Gatsby Blog",
    description: "Blog built with GatsbyJS and Graphql.",
    category: "web" as ProjectCategory,
    tags: ["GatsbyJS", "JavaScript", "GraphQL"],
    image: Pic6,
    liveUrl: "#",
    githubUrl: "https://github.com/jayoohy/gatsby-blog",
  },
];

const categories: {
  id: ProjectCategory;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
}[] = [
  { id: "all", label: "All Projects", icon: Globe },
  { id: "web", label: "Web", icon: Globe },
  { id: "ai", label: "AI & Automation", icon: Bot },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <PageContainer>
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
                  ? "bg-linear-to-r from-[#6366f1] to-[#8b5cf6] text-white border-transparent shadow-lg"
                  : "bg-background border-border hover:border-[#6366f1]/50"
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
            className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-[#6366f1]/50 transition-all"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            {/* Project Image Placeholder */}
            <div className="relative aspect-video bg-linear-to-br from-[#6366f1]/20 via-[#8b5cf6]/20 to-[#ec4899]/20 flex items-center justify-center">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <Globe className="text-[#6366f1]/50" size={48} />
              )}
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
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
                {project.liveUrl !== "#" ? (
                  <Link
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-sm text-[#6366f1] hover:text-[#8b5cf6] hover:underline font-medium"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </Link>
                ) : (
                  <span className="flex items-center gap-2 text-sm text-muted-foreground font-medium opacity-60 cursor-not-allowed">
                    <ExternalLink size={16} />
                    Live Demo
                  </span>
                )}
                <Link
                  href={project.githubUrl}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#6366f1] font-medium"
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
    </PageContainer>
  );
}
