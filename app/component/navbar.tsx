"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
  isPrimary?: boolean;
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact", isPrimary: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll position for dynamic glassmorphism and active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scroll on mobile menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        flex
        h-16
        w-full
        items-center
        justify-between
        border-b
        px-5
        transition-all
        duration-300
        sm:h-[70px]
        sm:px-8
        md:px-[6%]
        ${
          scrolled
            ? "border-[#00ffaa]/20 bg-[#0a0a0a]/90 shadow-[0_4px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            : "border-white/10 bg-[#0a0a0a]/70 backdrop-blur-md"
        }
      `}
    >
      {/* Brand Logo - Slim, perfectly clipped, horizontal and visible */}
      <div className="flex h-10 w-44 sm:w-52 md:w-56 items-center justify-start overflow-hidden select-none">
        <Image
          src="/logo3.png"
          alt="Jonathan Avi Biswas"
          width={220}
          height={220}
          priority
          className="h-auto w-full object-contain pointer-events-none drop-shadow-[0_2px_10px_rgba(0,255,170,0.3)]"
        />
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden items-center gap-2 md:flex">
        {NAV_LINKS.filter((l) => !l.isPrimary).map((link) => {
          const sectionName = link.href.replace("#", "");
          const isActive = activeSection === sectionName;

          return (
            <Link
              key={link.label}
              href={link.href}
              className={`
                relative
                rounded-full
                px-4
                py-1.5
                text-sm
                font-medium
                transition-all
                duration-200
                ${
                  isActive
                    ? "text-[#00ffaa] bg-[#00ffaa]/10"
                    : "text-[#b0b0b0] hover:text-white hover:bg-white/5"
                }
              `}
            >
              {link.label}
              {isActive && (
                <span className="absolute bottom-0 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-[#00ffaa]" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Desktop CTA Button */}
      <div className="hidden items-center gap-3 md:flex">
        <Link
          href="#contact"
          className="
            group
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-[#00ffaa]
            px-5
            py-2
            text-xs
            font-bold
            text-[#0a0a0a]
            shadow-[0_0_18px_rgba(0,255,170,0.35)]
            transition-all
            duration-300
            hover:bg-[#00e699]
            hover:shadow-[0_0_26px_rgba(0,255,170,0.55)]
            hover:-translate-y-0.5
            active:translate-y-0
            sm:text-sm
          "
        >
          <span>Let&apos;s Talk</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-lg
          border
          border-white/10
          bg-white/5
          text-white
          transition-all
          duration-200
          hover:border-[#00ffaa]
          hover:text-[#00ffaa]
          md:hidden
        "
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile Glass Dropdown Menu */}
      {isOpen && (
        <div
          className="
            fixed
            inset-x-0
            top-16
            bottom-0
            flex
            flex-col
            gap-3
            border-b
            border-[#00ffaa]/20
            bg-[#0a0a0a]/95
            p-6
            backdrop-blur-2xl
            md:hidden
          "
        >
          {NAV_LINKS.map((link) => {
            const sectionName = link.href.replace("#", "");
            const isActive = activeSection === sectionName;

            return link.isPrimary ? (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="
                  mt-4
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#00ffaa]
                  py-3.5
                  text-center
                  text-sm
                  font-bold
                  text-[#0a0a0a]
                  shadow-[0_0_20px_rgba(0,255,170,0.35)]
                  transition-all
                  active:scale-95
                "
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className={`
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-medium
                  transition-all
                  ${
                    isActive
                      ? "bg-[#00ffaa]/15 text-[#00ffaa] font-semibold"
                      : "text-[#d0d0d0] hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00ffaa] shadow-[0_0_8px_#00ffaa]" />
                )}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
