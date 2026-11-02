"use client";

import { useEffect, useState } from "react";

interface Project {
    title: string;
    desc: string;
    longDesc: string;
    img: string;
    link: string;
}

const PROJECTS: Project[] = [
    {
        title: "Portfolio Website",
        desc: "A responsive personal portfolio website built with HTML, CSS, JavaScript, and TypeScript.",
        longDesc:
            "A personal responsive developer portfolio built with Next.js, TypeScript, and Tailwind CSS. Features interactive modern UI components, sleek dark mode aesthetics, and dynamic showcase sections.",
        img: "/project-1.png",
        link: "https://webjonathan.netlify.app/",
    },
    {
        title: "Dev-Stack",
        desc: "A modern, scalable web development stack leveraging React for component-driven interfaces, Tailwind CSS and DaisyUI for responsive styling.",
        longDesc:
            "The Dev Stack Builder application is constructed using a robust and production-ready modern web stack designed for optimal developer experience and user performance. At its core, React drives a modular, component-based UI architecture, ensuring seamless dynamic rendering and state management. Styling is handled via Tailwind CSS alongside DaisyUI.",
        img: "/project-2.png",
        link: "https://dev-stack-silk.vercel.app/",
    },
    {
        title: "FitTrack - Modern Fitness & Workout Logging Application",
        desc: "A modern, sleek fitness management web application for logging workouts, tracking exercise sets, and planning routines.",
        longDesc:
            "FitTrack is a modern and sleek fitness management web application built with Next.js and Tailwind CSS. It empowers fitness enthusiasts to plan custom workout routines, meticulously log exercise sets, and track workout progress through an interactive visual library.",
        img: "/project-3.png",
        link: "https://fitlog-a06.vercel.app/",
    },
    {
        title: "Bazar Dor - Daily Commodity Price Tracker",
        desc: "A modern full-stack web application for monitoring daily essential commodity prices, market-wise rates, and live percentage changes.",
        longDesc:
            "Bazar Dor is a modern full-stack commodity price tracking application built with Next.js, Better Auth, and MongoDB. It empowers users to explore minimum, maximum, and average rates of everyday commodities across major division markets in Bangladesh, featuring live price ticker marquee, division-wise filters, and secure authentication.",
        img: "/project-4.png",
        link: "https://bazardor-a07.vercel.app/",
    },
    {
        title: "FavBook - Online Library",
        desc: "A modern library management web app featuring atomic book borrowing with zero-stock safeguards, in-browser image optimization, and secure multi-provider authentication.",
        longDesc:
            "FavBook is a full-stack digital library platform built with Next.js 16, Express, and MongoDB Atlas, featuring real-time copy tracking, atomic loan management ($inc), and Google/GitHub OAuth.",
        img: "/project-5.png",
        link: "https://favbook-a08.vercel.app/",
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

    const hasLink =
        Boolean(project.link) && project.link !== "#";

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
                bg-black/80
                p-4
                backdrop-blur-sm
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
                    max-w-[520px]
                    rounded-2xl
                    border
                    border-[#00ffaa]/35
                    bg-[#141414]/95
                    p-6
                    shadow-[0_0_40px_rgba(0,255,170,0.2)]
                    backdrop-blur-xl
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

                {/* Project Image */}
                <img
                    src={project.img}
                    alt={project.title}
                    className="
                        mb-5
                        h-[190px]
                        w-full
                        rounded-xl
                        border
                        border-white/10
                        object-cover
                        sm:h-[220px]
                    "
                />

                {/* Title */}
                <h3
                    className="
                        mb-2.5
                        pr-8
                        text-lg
                        font-semibold
                        text-[#00ffaa]
                        sm:text-xl
                    "
                >
                    {project.title}
                </h3>

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
                            inline-block
                            rounded-xl
                            bg-[#00ffaa]
                            px-6
                            py-3
                            text-sm
                            font-bold
                            text-[#0a0a0a]
                            shadow-[0_0_20px_rgba(0,255,170,0.3)]
                            transition-all
                            hover:bg-[#00e699]
                            hover:shadow-[0_0_30px_rgba(0,255,170,0.5)]
                            hover:-translate-y-0.5
                            sm:text-base
                        "
                    >
                        View Project
                    </a>
                ) : (
                    <div>
                        <button
                            type="button"
                            onClick={() =>
                                setShowUnavailable(true)
                            }
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
        <div className="mb-10 flex justify-center md:mb-12">
            <h2 className="relative pb-3 text-3xl font-semibold text-white sm:text-[2.2rem]">
                {children}
                <span className="absolute bottom-0 left-1/2 h-[3px] w-14 -translate-x-1/2 rounded-full bg-[#00ffaa]" />
            </h2>
        </div>
    );
}

export default function ProjectsSection() {
    const [selected, setSelected] = useState<Project | null>(null);

    return (
        <section
            id="projects"
            className="
                relative
                min-h-screen
                w-full
                px-5
                py-16
                sm:px-8
                md:px-[7%]
                md:py-20
            "
        >
            <div className="relative mx-auto w-full max-w-[1200px]">
                <SectionTitle>Featured Projects</SectionTitle>

                {/* Project Grid: Floating, Open & Transparent */}
                <div
                    className="
                        grid
                        w-full
                        grid-cols-1
                        gap-6
                        sm:grid-cols-2
                        lg:grid-cols-3
                        lg:gap-7
                    "
                >
                    {PROJECTS.map((project) => (
                        <button
                            key={project.title}
                            type="button"
                            onClick={() => setSelected(project)}
                            className="
                                group
                                flex
                                min-w-0
                                flex-col
                                overflow-hidden
                                rounded-2xl
                                border
                                border-[#00ffaa]/25
                                bg-[#141414]/50
                                p-0
                                text-left
                                backdrop-blur-xl
                                shadow-[0_0_25px_rgba(0,0,0,0.5)]
                                transition-all
                                duration-300
                                ease-out
                                hover:-translate-y-2
                                hover:border-[#00ffaa]
                                hover:bg-[#141414]/75
                                hover:shadow-[0_15px_30px_rgba(0,255,170,0.2)]
                                focus:outline-none
                                focus:ring-2
                                focus:ring-[#00ffaa]
                            "
                        >
                            {/* Project Image */}
                            <div className="relative h-[200px] w-full overflow-hidden sm:h-[220px]">
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
                                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Project Content */}
                            <div className="flex flex-1 flex-col p-5 sm:p-6">
                                <h3
                                    className="
                                        mb-2.5
                                        text-lg
                                        font-bold
                                        text-[#00ffaa]
                                        group-hover:text-white
                                        transition-colors
                                    "
                                >
                                    {project.title}
                                </h3>

                                <p
                                    className="
                                        mt-0
                                        text-sm
                                        leading-relaxed
                                        text-[#cccccc]
                                    "
                                >
                                    {project.desc}
                                </p>
                            </div>
                        </button>
                    ))}
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
