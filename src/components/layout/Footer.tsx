import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/jayoohy" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/joy-ogukah-b4aba7275/",
  },
  { name: "Twitter", icon: Twitter, href: "https://x.com/jay_ooh_y" },
  { name: "Email", icon: Mail, href: "mailto:ogukahjoy@gmail.com" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Joy Ogukah. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <Icon size={20} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
