"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Code2 } from "lucide-react";

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const education = [
  {
    degree: "Bachelor's Degree",
    institution: "University Name",
    period: "2018 - 2022",
    description: "Computer Science or related field",
  },
  {
    degree: "Certifications",
    institution: "Various Platforms",
    period: "Ongoing",
    description: "Continuous learning and skill development",
  },
];

const experience = [
  {
    title: "Software Developer",
    company: "Company Name",
    period: "2022 - Present",
    description: [
      "Developed and maintained web applications using React and Next.js",
      "Implemented AI workflow automation solutions",
      "Built and deployed chatbot systems",
      "Collaborated with cross-functional teams",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Previous Company",
    period: "2020 - 2022",
    description: [
      "Created responsive user interfaces",
      "Optimized application performance",
      "Worked with modern JavaScript frameworks",
    ],
  },
];

const awards = [
  {
    title: "Outstanding Developer",
    organization: "Tech Community",
    year: "2023",
  },
  {
    title: "Best Project Award",
    organization: "Hackathon",
    year: "2022",
  },
];

const techStacks = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "GraphQL"],
  },
  {
    category: "AI/ML",
    skills: ["OpenAI API", "LangChain", "Workflow Automation"],
  },
  { category: "Tools", skills: ["Git", "Docker", "CI/CD", "AWS", "Vercel"] },
];

export default function Resume() {
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Resume</h1>
          <p className="text-lg text-muted-foreground">
            My education, experience, and technical expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <h2 className="text-2xl font-bold">Education</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-lg border border-border bg-card"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold mb-1">{edu.degree}</h3>
                  <p className="text-primary mb-2">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {edu.period}
                  </p>
                  <p className="text-muted-foreground">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase className="text-primary" size={24} />
              </div>
              <h2 className="text-2xl font-bold">Experience</h2>
            </div>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-lg border border-border bg-card"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold mb-1">{exp.title}</h3>
                  <p className="text-primary mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {exp.period}
                  </p>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground text-sm flex items-start"
                      >
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Awards */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <Award className="text-primary" size={24} />
            </div>
            <h2 className="text-2xl font-bold">Awards & Achievements</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg border border-border bg-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-1">{award.title}</h3>
                <p className="text-primary mb-1">{award.organization}</p>
                <p className="text-sm text-muted-foreground">{award.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stacks */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <Code2 className="text-primary" size={24} />
            </div>
            <h2 className="text-2xl font-bold">Technical Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techStacks.map((stack, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg border border-border bg-card"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-4">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
