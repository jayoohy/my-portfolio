"use client";

import { motion } from "framer-motion";
// import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  // Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import TallyEmbed from "@/components/TallyEmbed";
import { usePathname } from "next/navigation";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ogukahjoy@gmail.com",
    href: "mailto:ogukahjoy@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+234 8148050257",
    href: "tel:+2348148050257",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Available for remote work",
    href: "#",
  },
];

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/jayoohy" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/joy-ogukah-b4aba7275/",
  },
  { name: "Twitter", icon: Twitter, href: "https://x.com/jay_ooh_y" },
];

export default function Contact() {
  const pathname = usePathname();

  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });
  // const [isSubmitting, setIsSubmitting] = useState(false);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   // Simulate form submission
  //   setTimeout(() => {
  //     setIsSubmitting(false);
  //     alert("Thank you for your message! I'll get back to you soon.");
  //     setFormData({ name: "", email: "", subject: "", message: "" });
  //   }, 1000);
  // };

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  return (
    <PageContainer>
      {/* Page Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h1>
        <p className="text-lg text-muted-foreground">
          Have a project in mind? Let&apos;s work together!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-6 mb-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {info.label}
                    </p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="p-3 rounded-lg border border-border bg-card hover:border-[#6366f1]/50 hover:bg-[#6366f1]/10 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon
                      className="text-muted-foreground hover:text-[#6366f1]"
                      size={20}
                    />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        {/* <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#a9165f] text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </motion.button>
        </motion.form> */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-lg border bg-white border-border p-4"
        >
          <TallyEmbed key={pathname} />
        </motion.div>
      </div>
    </PageContainer>
  );
}
