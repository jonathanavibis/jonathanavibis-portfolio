"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Terminal } from "lucide-react";
import { FaGithub, FaEnvelope, FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center px-5 pt-[100px] pb-14 sm:px-8 md:px-[7%] md:pt-[120px] md:pb-[80px]"
    >
      {/* Full-width open container: Clean, Floating Content */}
      <div className="relative w-full max-w-[1200px]">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.3fr_1fr] md:gap-14 lg:gap-20">
          
          {/* Left Column: Typography, Badges & CTA */}
          <div className="text-center md:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00ffaa]/40 bg-[#00ffaa]/10 px-4 py-1.5 text-xs font-semibold text-[#00ffaa] backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(0,255,170,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ffaa] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ffaa]" />
              </span>
              <span>Available for Hire &amp; Projects</span>
            </div>

            <p className="text-sm font-semibold tracking-widest text-[#00ffaa] uppercase sm:text-base">
              Hello, I&apos;m
            </p>

            <h1 className="mt-2 mb-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.1] drop-shadow-md">
              Jonathan Avi Biswas
            </h1>

            {/* Role Header */}
            <div className="mb-6 flex flex-wrap items-center justify-center gap-2.5 text-xl sm:text-2xl font-bold md:justify-start">
              <span className="text-[#e0e0e0]">Full-Stack</span>
              <span className="text-[#00ffaa] drop-shadow-[0_0_12px_rgba(0,255,170,0.35)]">
                Web Developer
              </span>
              <span className="text-xs text-[#aaaaaa] font-mono border border-white/15 px-2.5 py-1 rounded-full bg-white/5 backdrop-blur-sm">
                Next.js &amp; MERN
              </span>
            </div>

            {/* Mobile Profile Photo */}
            <div className="my-8 flex justify-center md:hidden">
              <div className="relative group">
                <div className="absolute -inset-1.5 rounded-[26px] bg-gradient-to-tr from-[#00ffaa] to-[#0fb67e] opacity-75 blur-lg" />
                <Image
                  src="/profile.jpeg"
                  alt="Jonathan Avi Biswas"
                  width={260}
                  height={320}
                  priority
                  className="relative h-[300px] w-[240px] rounded-[22px] border-2 border-[#00ffaa] object-cover shadow-2xl"
                />
              </div>
            </div>

            <p className="mx-auto max-w-[560px] text-sm leading-[1.85] text-[#d4d4d4] md:mx-0 sm:text-base drop-shadow-sm">
              I specialize in crafting high-performance, responsive, and visually modern web applications. From conceptualizing intuitive user interfaces to architecting robust backend systems, I bring creative ideas to life using{" "}
              <span className="font-semibold text-white text-[#00ffaa]/90">
                React, Next.js, Node.js, and MongoDB
              </span>
              .
            </p>

            {/* Quick Metrics Strip */}
            <div className="my-8 grid grid-cols-3 gap-3.5 max-w-[500px] mx-auto md:mx-0">
              <div className="rounded-2xl border border-white/10 bg-[#141414]/50 p-3.5 text-center md:text-left backdrop-blur-md shadow-sm">
                <p className="text-2xl font-black text-[#00ffaa] sm:text-3xl">4+</p>
                <p className="text-[11px] text-[#aaaaaa] uppercase tracking-wider font-semibold mt-0.5">Projects Done</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#141414]/50 p-3.5 text-center md:text-left backdrop-blur-md shadow-sm">
                <p className="text-2xl font-black text-[#00ffaa] sm:text-3xl">100%</p>
                <p className="text-[11px] text-[#aaaaaa] uppercase tracking-wider font-semibold mt-0.5">Responsive</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#141414]/50 p-3.5 text-center md:text-left backdrop-blur-md shadow-sm">
                <p className="text-2xl font-black text-[#00ffaa] sm:text-3xl">24/7</p>
                <p className="text-[11px] text-[#aaaaaa] uppercase tracking-wider font-semibold mt-0.5">Supportive</p>
              </div>
            </div>

            {/* Primary Action Buttons & Socials */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Link
                href="#projects"
                className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#00ffaa] px-7 py-3.5 text-sm font-bold text-[#0a0a0a] transition-all duration-300 hover:bg-[#00e699] hover:shadow-[0_0_30px_rgba(0,255,170,0.45)] hover:-translate-y-1 active:translate-y-0"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="#contact"
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-[#00ffaa]/50 bg-[#141414]/50 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#00ffaa] hover:bg-[#00ffaa]/15 hover:-translate-y-1 active:translate-y-0"
              >
                <span>Contact Me</span>
              </Link>

              {/* Social Icon Pills */}
              <div className="flex items-center gap-3 pt-2 sm:pt-0 sm:ml-3">
                <a
                  href="https://github.com/jonathanavibiswas10"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#141414]/50 text-[#cccccc] backdrop-blur-md transition-all hover:border-[#00ffaa] hover:text-[#00ffaa] hover:scale-105"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com/jonathanavibis"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter) Profile"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#141414]/50 text-[#cccccc] backdrop-blur-md transition-all hover:border-[#00ffaa] hover:text-[#00ffaa] hover:scale-105"
                >
                  <FaXTwitter className="w-4 h-4" />
                </a>
                <a
                  href="mailto:jonathan.avibd24@gmail.com"
                  aria-label="Email Me"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#141414]/50 text-[#cccccc] backdrop-blur-md transition-all hover:border-[#00ffaa] hover:text-[#00ffaa] hover:scale-105"
                >
                  <FaEnvelope className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Desktop Profile Portrait with Modern Floating Glass Pills */}
          <div className="hidden items-center justify-center md:flex">
            <div className="relative">
              {/* Outer Neon Glow Aura */}
              <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-tr from-[#00ffaa] via-[#0fb67e] to-transparent opacity-50 blur-2xl transition duration-500 hover:opacity-75" />

              {/* Main Photo Frame */}
              <div className="relative overflow-hidden rounded-[28px] border-2 border-[#00ffaa] bg-[#141414]/60 shadow-[0_0_40px_rgba(0,255,170,0.3)]">
                <Image
                  src="/profile.jpeg"
                  alt="Jonathan Avi Biswas"
                  width={320}
                  height={410}
                  priority
                  className="h-[410px] w-[320px] object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Floating Pill 1: Tech */}
              <div className="absolute -bottom-5 -left-8 flex items-center gap-3 rounded-2xl border border-[#00ffaa]/50 bg-[#0e0e0e]/85 px-4 py-3 shadow-[0_10px_25px_rgba(0,0,0,0.6)] backdrop-blur-xl">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00ffaa]/15 text-[#00ffaa]">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#888888] font-mono">Specialized in</p>
                  <p className="text-xs font-bold text-white">Full Stack JS / TS</p>
                </div>
              </div>

              {/* Floating Pill 2: UI */}
              <div className="absolute -top-4 -right-6 flex items-center gap-2.5 rounded-2xl border border-[#00ffaa]/50 bg-[#0e0e0e]/85 px-4 py-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.6)] backdrop-blur-xl">
                <Sparkles className="w-4 h-4 text-[#00ffaa]" />
                <span className="text-xs font-bold text-white">Clean Code &amp; UI</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
