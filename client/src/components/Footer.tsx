import { Link } from "wouter";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";

interface FooterProps {
  professorName: string;
  institution: string;
  email: string;
  linkedin?: string;
  youtube?: string;
}

export default function Footer({
  professorName,
  institution,
  email,
  linkedin,
  youtube,
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Academics & Experience", href: "/academics" },
    { label: "Projects", href: "/projects" },
    { label: "Publications", href: "/publications" },
    { label: "News", href: "/news" },
  ];

  const moreLinks = [
    { label: "Opportunities", href: "/opportunities" },
    { label: "Research Topics", href: "/research" },
    { label: "Research Lab", href: "/labs" },
    { label: "People", href: "/people" },
  ];

  return (
    <footer className="bg-[#1a1a2e] text-[#d8d0c4]">
      {/* Top bar accent */}
      <div className="h-[3px] bg-gradient-to-r from-[#8b1a1a] via-[#c0392b] to-[#8b1a1a]" />

      <div className="container mx-auto px-5 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Professor Info */}
          <div className="lg:col-span-1">
            <h3
              className="font-['Lora',Georgia,serif] text-xl font-bold text-white mb-1 leading-tight"
              data-testid="text-footer-name"
            >
              {professorName}
            </h3>
            <div className="w-8 h-[2px] bg-[#8b1a1a] mb-4 rounded-full" />
            <p className="text-sm text-[#a89880] leading-relaxed mb-4 font-['DM_Sans',sans-serif]">
              {institution}
            </p>
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 text-sm text-[#c4b8a8] hover:text-white transition-colors duration-200 font-['DM_Sans',sans-serif] group"
            >
              <Mail className="w-3.5 h-3.5 text-[#8b1a1a] group-hover:text-[#c0392b] transition-colors" />
              {email}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['DM_Sans',sans-serif] text-xs font-semibold tracking-[0.15em] uppercase text-[#8b8070] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#c4b8a8] hover:text-white transition-colors duration-200 font-['DM_Sans',sans-serif] flex items-center gap-2 group"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <span className="w-1 h-1 rounded-full bg-[#8b1a1a] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-['DM_Sans',sans-serif] text-xs font-semibold tracking-[0.15em] uppercase text-[#8b8070] mb-5">
              More
            </h4>
            <ul className="space-y-2.5">
              {moreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#c4b8a8] hover:text-white transition-colors duration-200 font-['DM_Sans',sans-serif] flex items-center gap-2 group"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <span className="w-1 h-1 rounded-full bg-[#8b1a1a] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-['DM_Sans',sans-serif] text-xs font-semibold tracking-[0.15em] uppercase text-[#8b8070] mb-5">
              Connect
            </h4>
            <div className="flex gap-3">
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-footer-linkedin"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#c4b8a8] hover:text-white hover:bg-[#8b1a1a] hover:border-[#8b1a1a] transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
              )}
              {youtube && (
                <a
                  href={youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-footer-youtube"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#c4b8a8] hover:text-white hover:bg-[#8b1a1a] hover:border-[#8b1a1a] transition-all duration-200"
                  aria-label="YouTube"
                >
                  <FaYoutube className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Divider & copyright */}
        <div className="border-t border-white/8 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p
            className="text-xs text-[#7a7060] font-['DM_Sans',sans-serif]"
            data-testid="text-copyright"
          >
            © {currentYear} {professorName}. All rights reserved.
          </p>
          <p className="text-xs text-[#5a5248] font-['DM_Sans',sans-serif]">
            {institution}
          </p>
        </div>
      </div>
    </footer>
  );
}
