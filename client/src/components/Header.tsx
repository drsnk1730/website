import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "News", path: "/news" },
  { name: "Academics", path: "/academics" },
  { name: "People", path: "/people" },
  { name: "Projects", path: "/projects" },
  { name: "Publications", path: "/publications" },
  { name: "Opportunities", path: "/opportunities" },
  { name: "Research", path: "/research" },
  { name: "Research Lab", path: "/labs" },
];

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#f8f5f0]/95 shadow-[0_2px_24px_0_rgba(26,26,46,0.08)] backdrop-blur-md"
          : "bg-[#f8f5f0]"
      } border-b border-[#e8e2d9]`}
    >
      <div className="container mx-auto px-5 lg:px-10">
        <div className="flex h-[68px] items-center justify-between">
          {/* Logo / Name */}
          <Link href="/" data-testid="link-home">
            <div className="flex flex-col cursor-pointer group select-none">
              <span
                className="font-['Lora',Georgia,serif] text-[1.15rem] font-bold text-[#1a1a2e] leading-tight tracking-[-0.01em] group-hover:text-[#8b1a1a] transition-colors duration-200"
              >
                Dr. S. Neelakandan
              </span>
              <span className="text-[0.68rem] text-[#7a7060] tracking-[0.12em] uppercase font-['DM_Sans',sans-serif]">
                Professor &amp; Researcher
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5" data-testid="nav-desktop">
            {navItems.map((item) => {
              const isActive = location === item.path;
              return (
                <Link key={item.path} href={item.path} data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, "-")}`}>
                  <span
                    className={`relative px-3 py-1.5 text-[0.82rem] font-['DM_Sans',sans-serif] font-medium tracking-[0.02em] rounded-sm transition-colors duration-200 cursor-pointer
                      ${isActive
                        ? "text-[#8b1a1a]"
                        : "text-[#3a3630] hover:text-[#8b1a1a]"
                      }`}
                  >
                    {item.name}
                    {/* Active underline */}
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#8b1a1a] transition-all duration-300 origin-left
                        ${isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`}
                    />
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-[#3a3630] hover:text-[#8b1a1a] hover:bg-[#8b1a1a]/5 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav
            className="lg:hidden pb-5 pt-1 border-t border-[#e8e2d9] mt-0"
            data-testid="nav-mobile"
          >
            {navItems.map((item) => {
              const isActive = location === item.path;
              return (
                <Link key={item.path} href={item.path}>
                  <span
                    className={`flex items-center gap-2 px-2 py-2.5 text-[0.875rem] font-['DM_Sans',sans-serif] font-medium cursor-pointer transition-colors duration-150 rounded-md
                      ${isActive
                        ? "text-[#8b1a1a] bg-[#8b1a1a]/5"
                        : "text-[#3a3630] hover:text-[#8b1a1a] hover:bg-[#8b1a1a]/5"
                      }`}
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`link-mobile-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {isActive && <span className="w-1 h-1 rounded-full bg-[#8b1a1a] inline-block" />}
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
