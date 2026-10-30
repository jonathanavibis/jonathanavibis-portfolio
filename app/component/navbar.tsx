"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

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

  // Track scroll position for dynamic styling and active section highlighting
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
    <>
      {/* Top Navigation Bar */}
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
          px-4
          transition-all
          duration-300
          sm:h-[70px]
          sm:px-8
          md:px-[6%]
          ${
            isOpen
              ? "border-[#00ffaa]/25 bg-[#0a0a0a]"
              : scrolled
              ? "border-[#00ffaa]/20 bg-[#0a0a0a]/95 shadow-[0_4px_30px_rgba(0,0,0,0.85)] backdrop-blur-xl"
              : "border-white/10 bg-[#0a0a0a]/85 backdrop-blur-md"
          }
        `}
      >
        {/* Brand Logo */}
        <div className="flex h-9 sm:h-10 w-36 sm:w-48 md:w-56 items-center justify-start overflow-hidden select-none">
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
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-white/10
            bg-white/5
            text-white
            transition-all
            duration-200
            hover:border-[#00ffaa]
            hover:text-[#00ffaa]
            hover:bg-[#00ffaa]/10
            md:hidden
          "
        >
          {isOpen ? <X className="h-5 w-5 text-[#00ffaa]" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      {/* Mobile Drawer Overlay: Sibling element to prevent stacking context & backdrop bugs */}
      {isOpen && (
        <div
          className="
            fixed
            inset-x-0
            top-16
            bottom-0
            z-40
            flex
            flex-col
            justify-between
            bg-[#0a0a0a]
            px-6
            py-8
            md:hidden
            overflow-y-auto
          "
        >
          {/* Mobile Links */}
          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#666666] mb-1">
              Navigation
            </p>

            {NAV_LINKS.filter((l) => !l.isPrimary).map((link) => {
              const sectionName = link.href.replace("#", "");
              const isActive = activeSection === sectionName;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className={`
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    px-5
                    py-3.5
                    text-base
                    font-medium
                    transition-all
                    ${
                      isActive
                        ? "border border-[#00ffaa]/35 bg-[#00ffaa]/10 text-[#00ffaa] font-semibold shadow-[0_0_15px_rgba(0,255,170,0.1)]"
                        : "border border-white/5 bg-white/[0.03] text-[#d4d4d4] hover:border-white/15 hover:bg-white/10 hover:text-white"
                    }
                  `}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-[#00ffaa] shadow-[0_0_8px_#00ffaa]" />
                  )}
                </Link>
              );
            })}

            {/* Mobile Let's Talk Button */}
            <Link
              href="#contact"
              onClick={closeMenu}
              className="
                mt-4
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-[#00ffaa]
                py-4
                text-center
                text-base
                font-bold
                text-[#0a0a0a]
                shadow-[0_0_25px_rgba(0,255,170,0.35)]
                transition-all
                active:scale-95
              "
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Drawer Bottom: Socials */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-xs text-[#888888] mb-3">Connect with me</p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/jonathanavibiswas10"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#cccccc] hover:border-[#00ffaa] hover:text-[#00ffaa] transition-colors"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/jonathanavibis"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#cccccc] hover:border-[#00ffaa] hover:text-[#00ffaa] transition-colors"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a
                href="mailto:jonathan.avibd24@gmail.com"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#cccccc] hover:border-[#00ffaa] hover:text-[#00ffaa] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
