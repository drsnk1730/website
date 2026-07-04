import { Link } from "wouter";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { Button } from "@/components/ui/button";

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

  return (
    <footer className="bg-gradient-to-tr from-slate-800 to-slate-900 text-white border-t border-slate-700">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Professor Info */}
          <div>
            <h3
              className="font-bold text-xl mb-4"
              data-testid="text-footer-name"
            >
              {professorName}
            </h3>
            <p className="text-sm text-slate-300 mb-2">{institution}</p>
            <p className="text-sm text-slate-300">{email}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/academics"
                  className="relative text-slate-300 hover:text-white transition-colors duration-200 before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-[1px] before:bg-white before:transition-all"
                  data-testid="link-footer-academics"
                >
                  Academics & Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="relative text-slate-300 hover:text-white transition-colors duration-200 before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-[1px] before:bg-white before:transition-all"
                  data-testid="link-footer-projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/publications"
                  className="relative text-slate-300 hover:text-white transition-colors duration-200 before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-[1px] before:bg-white before:transition-all"
                  data-testid="link-footer-publications"
                >
                  Publications
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-semibold text-base tracking-wide mb-4">
              More
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/opportunities"
                  className="relative text-slate-300 hover:text-white transition-colors duration-200 before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-[1px] before:bg-white before:transition-all"
                  data-testid="link-footer-opportunities"
                >
                  Opportunities
                </Link>
              </li>
              <li>
                <Link
                  href="/honors"
                  className="relative text-slate-300 hover:text-white transition-colors duration-200 before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-[1px] before:bg-white before:transition-all"
                  data-testid="link-footer-honors"
                >
                  Honors
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="relative text-slate-300 hover:text-white transition-colors duration-200 before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-[1px] before:bg-white before:transition-all"
                  data-testid="link-footer-research"
                >
                  Research Topics
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h4 className="font-semibold text-base tracking-wide mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              {linkedin && (
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:scale-110 hover:bg-slate-700 transition-transform duration-200 border-slate-600 text-white"
                  asChild
                  data-testid="button-footer-linkedin"
                >
                  <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                </Button>
              )}
              {youtube && (
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:scale-110 hover:bg-slate-700 transition-transform duration-200 border-slate-600 text-white"
                  asChild
                  data-testid="button-footer-youtube"
                >
                  <a href={youtube} target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="h-5 w-5" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-sm text-slate-400">
          <p data-testid="text-copyright">
            © {currentYear} {professorName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
