"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import {
    ChevronLeft,
    ChevronRight,
    Sparkles,
    ExternalLink,
    Eye,
    Layers,
    Pause,
    Play,
} from "lucide-react";

interface Project {
    title: string;
    desc: string;
    longDesc: string;
    img: string;
    link: string;
    isLatest?: boolean;
    category: string;
    tags: string[];
}

const PROJECTS: Project[] = [
    {
        title: "Zaraz.app - Daraz Inspired E-Commerce Platform",
        desc: "A modern, high-performance Bangladeshi e-commerce shopping platform featuring brand authentic stores, coupon discounts, and instant express delivery.",
        longDesc:
            "Zaraz.app is a full-scale e-commerce web platform inspired by Daraz, built with React, Next.js, and Tailwind CSS. It delivers a fast, seamless shopping experience featuring official brand store showcases, interactive category browsing, voucher discounts (ZARAZ100), product filters, cart management, and real-time order tracking.",
        img: "/project-6.jpg",
        link: "https://zaraz-shopping.vercel.app",
        isLatest: true,
        category: "Full Stack E-Commerce",
        tags: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
    },
    {
        title: "Zaraz Admin Panel - Backend Administrator Portal",
        desc: "A mission-control administrator portal and backend monitoring system with real-time server telemetry, MongoDB Atlas sync, and product management.",
        longDesc:
            "Zaraz Admin Panel is a dedicated backend control center for the Zaraz e-commerce ecosystem, powered by Node.js, Express, and MongoDB Atlas. Features live server telemetry (CPU/RAM metrics, event loop latency), instant revalidation, two-way database synchronization, catalog DB and auth vault monitoring, active node cluster oversight, and comprehensive order logistics tracking.",
        img: "/project-7.jpg",
        link: "https://zaraz-server30.vercel.app",
        isLatest: true,
        category: "Backend & Admin Portal",
        tags: ["Node.js", "Express", "MongoDB Atlas", "Vercel"],
    },
    {
        title: "WedPlan - Luxury Wedding Planning Portal",
        desc: "An all-in-one role-based wedding marketplace connecting couples with verified wedding venues, photographers, florists, and stylists.",
        longDesc:
            "WedPlan is a modern role-based wedding ecosystem and marketplace built with Next.js (App Router, TypeScript), Tailwind CSS, and Framer Motion. It enables couples to discover, compare, and book verified wedding services, while providing specialized dashboards for Customers, Vendors, and Administrators, complete with direct vendor messaging and verified booking workflows.",
        img: "/project-8.jpg",
        link: "https://wedplan-a09.vercel.app",
        isLatest: true,
        category: "Role-Based Marketplace",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
        title: "FavBook - Online Library",
        desc: "A modern library management web app featuring atomic book borrowing with zero-stock safeguards, in-browser image optimization, and secure multi-provider authentication.",
        longDesc:
            "FavBook is a full-stack digital library platform built with Next.js 16, Express, and MongoDB Atlas, featuring real-time copy tracking, atomic loan management ($inc), and Google/GitHub OAuth.",
        img: "/project-5.png",
        link: "https://favbook-a08.vercel.app/",
        isLatest: false,
        category: "Digital Library",
        tags: ["Next.js 16", "Express", "MongoDB Atlas", "OAuth"],
    },
    {
        title: "Bazar Dor - Daily Commodity Price Tracker",
        desc: "A modern full-stack web application for monitoring daily essential commodity prices, market-wise rates, and live percentage changes.",
        longDesc:
            "Bazar Dor is a modern full-stack commodity price tracking application built with Next.js, Better Auth, and MongoDB. It empowers users to explore minimum, maximum, and average rates of everyday commodities across major division markets in Bangladesh, featuring live price ticker marquee, division-wise filters, and secure authentication.",
        img: "/project-4.png",
        link: "https://bazardor-a07.vercel.app/",
        isLatest: false,
        category: "Real-Time Market Tracker",
        tags: ["Next.js", "Better Auth", "MongoDB", "Real-Time API"],
    },
    {
        title: "FitTrack - Modern Fitness & Workout Logging",
        desc: "A modern, sleek fitness management web application for logging workouts, tracking exercise sets, and planning routines.",
        longDesc:
            "FitTrack is a modern and sleek fitness management web application built with Next.js and Tailwind CSS. It empowers fitness enthusiasts to plan custom workout routines, meticulously log exercise sets, and track workout progress through an interactive visual library.",
        img: "/project-3.png",
        link: "https://fitlog-a06.vercel.app/",
        isLatest: false,
        category: "Health & Fitness",
        tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
        title: "Dev-Stack - Tech Stack Builder",
        desc: "A modern, scalable web development stack leveraging React for component-driven interfaces, Tailwind CSS and DaisyUI for responsive styling.",
        longDesc:
            "The Dev Stack Builder application is constructed using a robust and production-ready modern web stack designed for optimal developer experience and user performance. At its core, React drives a modular, component-based UI architecture, ensuring seamless dynamic rendering and state management. Styling is handled via Tailwind CSS alongside DaisyUI.",
        img: "/project-2.png",
        link: "https://dev-stack-silk.vercel.app/",
        isLatest: false,
        category: "Developer Tool",
        tags: ["React", "Tailwind CSS", "DaisyUI"],
    },
    {
        title: "Portfolio Website",
        desc: "A responsive personal portfolio website built with HTML, CSS, JavaScript, and TypeScript.",
        longDesc:
            "A personal responsive developer portfolio built with Next.js, TypeScript, and Tailwind CSS. Features interactive modern UI components, sleek dark mode aesthetics, and dynamic showcase sections.",
        img: "/project-1.png",
        link: "https://webjonathan.netlify.app/",
        isLatest: false,
        category: "Personal Portfolio",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
];

function ProjectModal({
    project,
    onClose,
}: {
    project: Project;
    onClose: () => void;
}) {
    const [visible, setVisible] = useState(false);
    const [showUnavailable, setShowUnavailable] = useState(false);

    const hasLink = Boolean(project.link) && project.link !== "#";

    useEffect(() => {
        const id = requestAnimationFrame(() => {
            setVisible(true);
        });

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", onKey);

        return () => {
            cancelAnimationFrame(id);
            window.removeEventListener("keydown", onKey);
        };
    }, [onClose]);

    return (
        <div
            className="
                fixed
                inset-0
                z-[100]
                flex
                items-center
                justify-center
                overflow-y-auto
                bg-black/85
                p-4
                backdrop-blur-md
                sm:p-5
            "
            onClick={onClose}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`
                    relative
                    my-4
                    w-full
                    max-w-[560px]
                    rounded-2xl
                    border
                    border-[#00ffaa]/40
                    bg-[#121212]/95
                    p-6
                    shadow-[0_0_50px_rgba(0,255,170,0.25)]
                    backdrop-blur-2xl
                    transition-all
                    duration-300
                    ease-out
                    sm:p-8
                    ${
                        visible
                            ? "scale-100 opacity-100"
                            : "scale-90 opacity-0"
                    }
                `}
            >
                {/* Close Button */}
                <button
                    type="button"
                    aria-label="Close"
                    onClick={onClose}
                    className="
                        absolute
                        right-4
                        top-4
                        z-10
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        text-2xl
                        text-white
                        transition-colors
                        hover:border-[#00ffaa]
                        hover:bg-[#00ffaa]/15
                        hover:text-[#00ffaa]
                    "
                >
                    &times;
                </button>

                {/* Project Image & Floating Tags */}
                <div className="relative mb-5 overflow-hidden rounded-xl border border-white/10">
                    <img
                        src={project.img}
                        alt={project.title}
                        className="
                            h-[200px]
                            w-full
                            object-cover
                            sm:h-[240px]
                        "
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-70" />

                    {/* Floating Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2">
                        {project.isLatest && (
                            <span className="flex items-center gap-1.5 rounded-full border border-[#00ffaa]/60 bg-[#00ffaa]/20 px-3 py-1 text-xs font-semibold text-[#00ffaa] shadow-[0_0_15px_rgba(0,255,170,0.4)] backdrop-blur-md">
                                <span className="h-2 w-2 rounded-full bg-[#00ffaa] animate-ping" />
                                Latest Release
                            </span>
                        )}
                        <span className="rounded-full border border-white/15 bg-black/60 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-md">
                            {project.category}
                        </span>
                    </div>
                </div>

                {/* Title */}
                <h3
                    className="
                        mb-2.5
                        pr-8
                        text-xl
                        font-bold
                        text-[#00ffaa]
                        sm:text-2xl
                    "
                >
                    {project.title}
                </h3>

                {/* Tech Stack Chips */}
                <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-md border border-[#00ffaa]/20 bg-[#00ffaa]/10 px-2.5 py-1 text-xs font-mono text-[#00ffaa]/90"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Description */}
                <p
                    className="
                        mb-6
                        text-sm
                        leading-relaxed
                        text-[#cccccc]
                        sm:text-base
                    "
                >
                    {project.longDesc}
                </p>

                {/* View Project */}
                {hasLink ? (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-xl
                            bg-[#00ffaa]
                            px-6
                            py-3
                            text-sm
                            font-bold
                            text-[#0a0a0a]
                            shadow-[0_0_25px_rgba(0,255,170,0.35)]
                            transition-all
                            hover:bg-[#00e699]
                            hover:shadow-[0_0_35px_rgba(0,255,170,0.55)]
                            hover:-translate-y-0.5
                            sm:text-base
                        "
                    >
                        <span>Launch Live Project</span>
                        <ExternalLink className="h-4 w-4" />
                    </a>
                ) : (
                    <div>
                        <button
                            type="button"
                            onClick={() => setShowUnavailable(true)}
                            className="
                                inline-block
                                rounded-xl
                                border
                                border-white/20
                                bg-white/10
                                px-6
                                py-3
                                text-sm
                                font-semibold
                                text-[#aaaaaa]
                                cursor-not-allowed
                                sm:text-base
                            "
                        >
                            View Project
                        </button>

                        {showUnavailable && (
                            <p
                                className="
                                    mt-3
                                    text-sm
                                    leading-relaxed
                                    text-[#ff8a8a]
                                "
                            >
                                This project isn&apos;t available to
                                view right now — check back soon.
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

function SectionTitle({ children }: { children: string }) {
    return (
        <div className="mb-8 flex flex-col items-center justify-center text-center md:mb-10">
            <h2 className="relative pb-3 text-3xl font-bold tracking-tight text-white sm:text-[2.2rem]">
                {children}
                <span className="absolute bottom-0 left-1/2 h-[3px] w-16 -translate-x-1/2 rounded-full bg-[#00ffaa] shadow-[0_0_10px_#00ffaa]" />
            </h2>
            <p className="mt-3 text-sm text-[#aaaaaa] max-w-lg">
                Explore my full-stack applications, modern client web apps, and live backend systems.
            </p>
        </div>
    );
}

export default function ProjectsSection() {
    const [selected, setSelected] = useState<Project | null>(null);
    const [filter, setFilter] = useState<"all" | "latest">("all");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsVisible, setItemsVisible] = useState(3);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    // Touch & Swipe tracking
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    // Responsive items per view
    useEffect(() => {
        const updateItemsVisible = () => {
            if (window.innerWidth < 640) {
                setItemsVisible(1);
            } else if (window.innerWidth < 1024) {
                setItemsVisible(2);
            } else {
                setItemsVisible(3);
            }
        };

        updateItemsVisible();
        window.addEventListener("resize", updateItemsVisible);
        return () => window.removeEventListener("resize", updateItemsVisible);
    }, []);

    // Filter projects
    const filteredProjects =
        filter === "latest"
            ? PROJECTS.filter((p) => p.isLatest)
            : PROJECTS;

    const maxIndex = Math.max(0, filteredProjects.length - itemsVisible);

    // Reset index if out of range on filter or screen change
    useEffect(() => {
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex);
        }
    }, [maxIndex, currentIndex]);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    }, [maxIndex]);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    // Auto Play functionality
    useEffect(() => {
        if (!isAutoPlay || isHovered || selected !== null) return;

        const interval = setInterval(() => {
            handleNext();
        }, 4500);

        return () => clearInterval(interval);
    }, [isAutoPlay, isHovered, selected, handleNext]);

    // Touch handlers for mobile swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;
        const diff = touchStartX.current - touchEndX.current;
        if (diff > 50) {
            handleNext();
        } else if (diff < -50) {
            handlePrev();
        }
        touchStartX.current = null;
        touchEndX.current = null;
    };

    return (
        <section
            id="projects"
            className="
                relative
                min-h-screen
                w-full
                px-4
                py-16
                sm:px-8
                md:px-[6%]
                md:py-20
                overflow-hidden
            "
        >
            <div className="relative mx-auto w-full max-w-[1280px]">
                <SectionTitle>Featured Projects</SectionTitle>

                {/* Filter and Carousel Controls Header */}
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    {/* Filter Pills */}
                    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#121212]/60 p-1.5 backdrop-blur-md">
                        <button
                            type="button"
                            onClick={() => {
                                setFilter("all");
                                setCurrentIndex(0);
                            }}
                            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${
                                filter === "all"
                                    ? "bg-[#00ffaa] text-[#0a0a0a] shadow-[0_0_15px_rgba(0,255,170,0.3)]"
                                    : "text-white/70 hover:text-white hover:bg-white/5"
                            }`}
                        >
                            <Layers className="h-3.5 w-3.5" />
                            <span>All Projects</span>
                            <span
                                className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                                    filter === "all"
                                        ? "bg-black/20 text-black font-bold"
                                        : "bg-white/10 text-white/70"
                                }`}
                            >
                                {PROJECTS.length}
                            </span>
                        </button>

                        <button
                            type="button"
                            onClick={() => {
                                setFilter("latest");
                                setCurrentIndex(0);
                            }}
                            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${
                                filter === "latest"
                                    ? "bg-[#00ffaa] text-[#0a0a0a] shadow-[0_0_15px_rgba(0,255,170,0.3)]"
                                    : "text-white/70 hover:text-white hover:bg-white/5"
                            }`}
                        >
                            <Sparkles className="h-3.5 w-3.5" />
                            <span>Latest Projects</span>
                            <span
                                className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                                    filter === "latest"
                                        ? "bg-black/20 text-black font-bold"
                                        : "bg-[#00ffaa]/20 text-[#00ffaa]"
                                }`}
                            >
                                {PROJECTS.filter((p) => p.isLatest).length}
                            </span>
                        </button>
                    </div>

                    {/* Slider Navigation Buttons */}
                    <div className="flex items-center justify-between sm:justify-end gap-3">
                        {/* Auto-Play Toggle */}
                        <button
                            type="button"
                            onClick={() => setIsAutoPlay(!isAutoPlay)}
                            aria-label={isAutoPlay ? "Pause Auto-Slide" : "Play Auto-Slide"}
                            className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-[#121212]/60 px-3 py-2 text-xs text-white/70 transition-all hover:border-[#00ffaa]/40 hover:text-[#00ffaa]"
                            title={isAutoPlay ? "Pause Slideshow" : "Resume Slideshow"}
                        >
                            {isAutoPlay ? (
                                <>
                                    <Pause className="h-3.5 w-3.5" />
                                    <span className="hidden sm:inline">Auto</span>
                                </>
                            ) : (
                                <>
                                    <Play className="h-3.5 w-3.5" />
                                    <span className="hidden sm:inline">Play</span>
                                </>
                            )}
                        </button>

                        {/* Arrows */}
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={handlePrev}
                                aria-label="Previous Slide"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#00ffaa]/30 bg-[#141414]/80 text-[#00ffaa] backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all hover:border-[#00ffaa] hover:bg-[#00ffaa]/15 hover:shadow-[0_0_20px_rgba(0,255,170,0.25)] active:scale-95"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>

                            <button
                                type="button"
                                onClick={handleNext}
                                aria-label="Next Slide"
                                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#00ffaa]/30 bg-[#141414]/80 text-[#00ffaa] backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all hover:border-[#00ffaa] hover:bg-[#00ffaa]/15 hover:shadow-[0_0_20px_rgba(0,255,170,0.25)] active:scale-95"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Carousel Slider Viewport */}
                <div
                    className="relative w-full overflow-hidden py-3"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / itemsVisible)}%)`,
                        }}
                    >
                        {filteredProjects.map((project) => (
                            <div
                                key={project.title}
                                className="flex-shrink-0 px-2.5 sm:px-3"
                                style={{
                                    width: `${100 / itemsVisible}%`,
                                }}
                            >
                                <div
                                    className={`
                                        group
                                        relative
                                        flex
                                        h-full
                                        flex-col
                                        overflow-hidden
                                        rounded-2xl
                                        border
                                        ${
                                            project.isLatest
                                                ? "border-[#00ffaa]/40 hover:border-[#00ffaa] hover:shadow-[0_0_35px_rgba(0,255,170,0.25)]"
                                                : "border-white/10 hover:border-[#00ffaa]/50 hover:shadow-[0_0_25px_rgba(0,255,170,0.15)]"
                                        }
                                        bg-[#121212]/75
                                        backdrop-blur-xl
                                        transition-all
                                        duration-300
                                        hover:-translate-y-2
                                    `}
                                >
                                    {/* Card Image Wrapper */}
                                    <div className="relative h-[210px] w-full overflow-hidden bg-black/40 sm:h-[220px]">
                                        <img
                                            src={project.img}
                                            alt={project.title}
                                            className="
                                                h-full
                                                w-full
                                                object-cover
                                                transition-transform
                                                duration-500
                                                group-hover:scale-105
                                            "
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-75" />

                                        {/* Floating Badge Header */}
                                        <div className="absolute top-3 inset-x-3 flex items-start justify-between gap-2">
                                            {/* Latest Tag */}
                                            {project.isLatest ? (
                                                <span className="flex items-center gap-1.5 rounded-full border border-[#00ffaa]/60 bg-[#00ffaa]/20 px-2.5 py-1 text-[11px] font-bold text-[#00ffaa] shadow-[0_0_15px_rgba(0,255,170,0.35)] backdrop-blur-md">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-[#00ffaa] animate-pulse" />
                                                    LATEST
                                                </span>
                                            ) : (
                                                <span className="rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-[10px] font-medium text-white/60 backdrop-blur-md">
                                                    FEATURED
                                                </span>
                                            )}

                                            {/* Category Tag */}
                                            <span className="rounded-full border border-white/15 bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white/80 backdrop-blur-md truncate max-w-[150px]">
                                                {project.category}
                                            </span>
                                        </div>

                                        {/* Quick Overlay Action on Image */}
                                        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                                            <button
                                                type="button"
                                                onClick={() => setSelected(project)}
                                                className="flex items-center gap-1.5 rounded-xl border border-[#00ffaa] bg-[#00ffaa]/20 px-3.5 py-2 text-xs font-semibold text-[#00ffaa] backdrop-blur-md transition-all hover:bg-[#00ffaa] hover:text-[#0a0a0a]"
                                            >
                                                <Eye className="h-3.5 w-3.5" />
                                                <span>Details</span>
                                            </button>

                                            {project.link && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1.5 rounded-xl border border-white/30 bg-white/15 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-md transition-all hover:bg-white hover:text-black"
                                                >
                                                    <ExternalLink className="h-3.5 w-3.5" />
                                                    <span>Live</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="flex flex-1 flex-col p-5">
                                        <h3
                                            onClick={() => setSelected(project)}
                                            className="
                                                mb-2
                                                text-lg
                                                font-bold
                                                text-[#00ffaa]
                                                transition-colors
                                                group-hover:text-white
                                                cursor-pointer
                                                line-clamp-1
                                            "
                                        >
                                            {project.title}
                                        </h3>

                                        <p
                                            className="
                                                mb-4
                                                flex-1
                                                text-sm
                                                leading-relaxed
                                                text-[#cccccc]
                                                line-clamp-2
                                            "
                                        >
                                            {project.desc}
                                        </p>

                                        {/* Tech Stack Chips */}
                                        <div className="mb-4 flex flex-wrap gap-1.5">
                                            {project.tags.slice(0, 3).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-mono text-[#a0aec0]"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                            {project.tags.length > 3 && (
                                                <span className="rounded-md border border-white/5 bg-white/5 px-1.5 py-0.5 text-[10px] text-white/40">
                                                    +{project.tags.length - 3}
                                                </span>
                                            )}
                                        </div>

                                        {/* Card Footer Buttons */}
                                        <div className="flex items-center justify-between border-t border-white/10 pt-3">
                                            <button
                                                type="button"
                                                onClick={() => setSelected(project)}
                                                className="text-xs font-semibold text-[#00ffaa] hover:underline"
                                            >
                                                Learn more &rarr;
                                            </button>

                                            {project.link && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1 text-xs text-white/60 hover:text-white transition-colors"
                                                >
                                                    <span>Visit Demo</span>
                                                    <ExternalLink className="h-3 w-3" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Slide Indicators / Pagination Dots */}
                <div className="mt-8 flex flex-col items-center justify-center gap-3">
                    <div className="flex items-center gap-1.5">
                        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                            <button
                                key={idx}
                                type="button"
                                onClick={() => setCurrentIndex(idx)}
                                aria-label={`Go to slide ${idx + 1}`}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    currentIndex === idx
                                        ? "w-8 bg-[#00ffaa] shadow-[0_0_10px_#00ffaa]"
                                        : "w-2 bg-white/20 hover:bg-white/40"
                                }`}
                            />
                        ))}
                    </div>

                    <p className="text-xs text-[#888888] font-mono">
                        Showing slide {currentIndex + 1} of {maxIndex + 1} ({filteredProjects.length} total)
                    </p>
                </div>
            </div>

            {/* Modal */}
            {selected && (
                <ProjectModal
                    key={selected.title}
                    project={selected}
                    onClose={() => setSelected(null)}
                />
            )}
        </section>
    );
}
