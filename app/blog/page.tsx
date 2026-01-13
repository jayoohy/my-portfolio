"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
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

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 14 App Router",
    excerpt:
      "A comprehensive guide to building modern web applications with Next.js 14's new App Router and React Server Components.",
    date: "2025-11-15",
    readTime: "5 min read",
    category: "Web Development",
    slug: "getting-started-with-nextjs-14",
  },
  {
    id: 2,
    title: "Building AI-Powered Chatbots with OpenAI",
    excerpt:
      "Learn how to create intelligent chatbots using OpenAI's API, including best practices for prompt engineering and conversation flow.",
    date: "2025-12-10",
    readTime: "8 min read",
    category: "AI & Automation",
    slug: "building-ai-chatbots-openai",
  },
  {
    id: 3,
    title: "Modern Frontend Design Patterns",
    excerpt:
      "Exploring modern design patterns and best practices for building scalable and maintainable frontend applications.",
    date: "2025-12-20",
    readTime: "6 min read",
    category: "Design",
    slug: "modern-frontend-design-patterns",
  },
  {
    id: 4,
    title: "Workflow Automation with LangChain",
    excerpt:
      "A deep dive into automating business workflows using LangChain and AI agents to streamline processes.",
    date: "2025-11-28",
    readTime: "10 min read",
    category: "AI & Automation",
    slug: "workflow-automation-langchain",
  },
  {
    id: 5,
    title: "TypeScript Best Practices for React",
    excerpt:
      "Essential TypeScript patterns and practices for writing type-safe React applications with better developer experience.",
    date: "2025-12-28",
    readTime: "7 min read",
    category: "Web Development",
    slug: "typescript-best-practices-react",
  },
  {
    id: 6,
    title: "Responsive Design with Tailwind CSS",
    excerpt:
      "Mastering responsive design using Tailwind CSS utility classes and modern CSS techniques for mobile-first development.",
    date: "2026-01-07",
    readTime: "4 min read",
    category: "Design",
    slug: "responsive-design-tailwind",
  },
];

export default function Blog() {
  return (
    <PageContainer>
      {/* Page Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground">
          Thoughts, tutorials, and insights on web development, AI, and design
        </p>
      </motion.div>

      {/* Blog Posts Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            className="group rounded-lg border border-border bg-card hover:border-[#6366f1]/50 transition-all overflow-hidden"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="p-6">
                <div className="mb-3">
                  <span className="px-3 py-1 rounded-full text-xs bg-linear-to-r from-[#6366f1]/10 to-[#8b5cf6]/10 text-[#6366f1] font-medium border border-[#6366f1]/20">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-3 group-hover:text-[#6366f1] transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#6366f1] text-sm font-medium group-hover:gap-3 transition-all">
                  Read more
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </PageContainer>
  );
}
