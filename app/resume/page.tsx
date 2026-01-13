"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Code2 } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";

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
    degree: "B.Eng Mechatronics Engineering",
    institution: "University of Nigeria, Nsukka",
    period: "2019 - 2024",
    description:
      "Graduated top of class with a focus on automation, control systems, and embedded solutions.",
  },
];

const experience = [
  {
    title: "Front-End Developer",
    company: "Freelance",
    period: "Sept 2022 - Present",
    description: [
      "Developed custom websites and web applications for clients on contract basis.",
      "Built responsive, user-friendly interfaces using React, JavaScript, and CSS.",
      "Integrated Firebase for authentication, real-time data, and back-end functionality.",
      "Collaborated with clients to translate requirements into technical solutions.",
    ],
  },
  {
    title: "Programming Tutor",
    company: "SuperProf",
    period: "Jan 2022 - April 2025",
    description: [
      "Explained complex concepts (React, Redux, JavaScript architecture) to diverse learners.",
      "Debugged student code and optimized solutions for scalability.",
      "Created project-based learning modules mirroring real-world workflows.",
    ],
  },
];

const awards = [
  {
    title: "Best Graduating Student, Mechatronics Engineering",
    organization: "University of Nigeria, Nsukka",
    year: "2024",
  },
  {
    title: "Vice President",
    organization:
      "Nigerian Association of Mechatronics Engineering Students (2020/2021)",
    year: "2021",
  },
];

const techStacks = [
  {
    category: "Technical Skills",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Firebase",
      "Responsive UI & UI Frameworks",
      "GraphQL & REST APIs",
      "Version Control (Git)",
      "Jest & React Testing Library",
    ],
  },
  {
    category: "Programming & Tools",
    skills: [
      "Python",
      "C++",
      "JavaScript",
      "TypeScript",
      "Git",
      "VS Code",
      "Arduino IDE",
    ],
  },
  {
    category: "Automation & Control",
    skills: [
      "PLC Systems",
      "Sensor Calibration",
      "Motor Control",
      "Embedded Systems",
    ],
  },
  {
    category: "Web & Software Development",
    skills: ["React", "Firebase", "API Integration"],
  },
  {
    category: "Engineering Tools",
    skills: ["MATLAB", "Solidworks", "CAD basics"],
  },
  {
    category: "Soft Skills",
    skills: [
      "Problem Solving",
      "Team Collaboration",
      "Adaptability",
      "Leadership",
    ],
  },
];

export default function Resume() {
  return (
    <PageContainer>
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
            <div className="p-2 rounded-lg bg-[#25b94a]/10">
              <GraduationCap className="text-[#25b94a]" size={24} />
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
                <p className="text-[#25b94a] mb-2">{edu.institution}</p>
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
            <div className="p-2 rounded-lg bg-[#a86d14]/10">
              <Briefcase className="text-[#a86d14]" size={24} />
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
                <p className="text-[#a86d14] mb-2">{exp.company}</p>
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
          <div className="p-2 rounded-lg bg-[#a9165f]/10">
            <Award className="text-[#a9165f]" size={24} />
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
              <p className="text-[#a9165f] mb-1">{award.organization}</p>
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
          <div className="p-2 rounded-lg bg-[#6366f1]/10">
            <Code2 className="text-[#6366f1]" size={24} />
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
                    className="px-3 py-1 rounded-full bg-linear-to-r from-[#6366f1]/10 to-[#8b5cf6]/10 text-[#6366f1] text-sm font-medium border border-[#6366f1]/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </PageContainer>
  );
}
