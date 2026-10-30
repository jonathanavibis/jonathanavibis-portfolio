"use client";

import { useRef } from "react";
import {
    SiHtml5,
    SiCss,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiTailwindcss,
    SiPython,
    SiFigma,
} from "react-icons/si";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";
import { Camera, GraduationCap, Languages, Sparkles, Award } from "lucide-react";

const ABOUT_TEXT = `Hey, I'm Jonathan Avi Biswas, a passionate web developer with a strong foundation in both front-end and back-end technologies. My journey into web development started with curiosity — I wanted to understand how the websites I used every day actually worked, and that curiosity grew into a genuine love for building things from scratch.

I have a keen eye for design and a deep commitment to creating seamless, user-friendly experiences. I enjoy the balance between crafting clean, responsive interfaces and writing solid, efficient code that powers them behind the scenes — whether it's structuring layouts with HTML and CSS or adding interactivity with JavaScript. I'm always learning new tools and staying curious about the latest trends, pushing myself to grow with every project.

I'm currently looking for opportunities to contribute as a web developer, collaborate with a team, and keep building innovative solutions that make a difference.`;

interface SkillItem {
    name: string;
    icon: React.ReactNode;
}

const SKILLS: SkillItem[] = [
    { name: "HTML5", icon: <SiHtml5 className="text-[#e34f26]" /> },
    { name: "CSS3", icon: <SiCss className="text-[#1572b6]" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-[#f7df1e]" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178c6]" /> },
    { name: "React", icon: <SiReact className="text-[#61dafb]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06b6d4]" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
    { name: "Express", icon: <SiExpress className="text-[#cccccc]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47a248]" /> },
    { name: "Python", icon: <SiPython className="text-[#3776ab]" /> },
    { name: "Figma & Design", icon: <SiFigma className="text-[#f24e1e]" /> },
    { name: "Photoshop Design", icon: <DiPhotoshop className="text-[#31a8ff] text-base" /> },
    { name: "Illustrator Design", icon: <DiIllustrator className="text-[#ff9a00] text-base" /> },
    {
        name: "Canva Design",
        icon: (
            <svg className="w-3.5 h-3.5 fill-[#00c4cc]" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.042 16.5c-2.88 0-4.5-1.92-4.5-4.5 0-2.61 1.62-4.5 4.5-4.5 1.5 0 2.7.57 3.39 1.47l-1.29 1.23c-.45-.6-1.17-.99-2.1-.99-1.74 0-2.67 1.29-2.67 2.79 0 1.5.93 2.79 2.67 2.79.93 0 1.65-.39 2.1-.99l1.29 1.23c-.69.9-1.89 1.47-3.39 1.47z" />
            </svg>
        ),
    },
    { name: "Photography", icon: <Camera className="text-[#00ffaa] w-4 h-4" /> },
];

interface LanguageItem {
    name: string;
    level: string;
    flag: string;
}

const LANGUAGES: LanguageItem[] = [
    { name: "English", level: "Fluent", flag: "🇬🇧" },
    { name: "Bengali", level: "Native", flag: "🇧🇩" },
    { name: "Hindi", level: "Conversational", flag: "🇮🇳" },
];

function CertCard({
    icon,
    title,
    subtitle,
    year,
}: {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    year: string;
}) {
    const cardRef = useRef<HTMLDivElement | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = cardRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--x", `${e.clientX - rect.left}px`);
        el.style.setProperty("--y", `${e.clientY - rect.top}px`);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-[#00ffaa]/25
                bg-[#141414]/50
                p-5
                backdrop-blur-md
                transition-all
                duration-300
                ease-out
                hover:-translate-y-1
                hover:border-[#00ffaa]
                hover:bg-[#141414]/70
                hover:shadow-[0_10px_25px_rgba(0,255,170,0.2)]
            "
        >
            <div
                className="
                    pointer-events-none
                    absolute
                    h-[180px]
                    w-[180px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                "
                style={{
                    top: "var(--y, 50%)",
                    left: "var(--x, 50%)",
                    background:
                        "radial-gradient(circle, rgba(0,255,170,0.25), transparent 70%)",
                }}
            />

            <div className="relative flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#00ffaa]/40 bg-[#00ffaa]/10 text-[#00ffaa]">
                        {icon}
                    </div>
                    <div>
                        <h4 className="text-base font-semibold text-white group-hover:text-[#00ffaa] transition-colors">
                            {title}
                        </h4>
                        <p className="text-xs text-[#aaaaaa] mt-0.5">
                            {subtitle}
                        </p>
                    </div>
                </div>
                <span className="shrink-0 rounded-full border border-[#00ffaa]/30 bg-[#00ffaa]/10 px-3 py-1 text-xs font-semibold text-[#00ffaa]">
                    {year}
                </span>
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

export default function AboutSection() {
    return (
        <section
            id="about"
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
                <SectionTitle>About Me</SectionTitle>

                {/* Main Grid: Open, Floating & Transparent */}
                <div
                    className="
                        grid
                        w-full
                        grid-cols-1
                        gap-6
                        md:grid-cols-2
                        md:gap-8
                        items-start
                    "
                >
                    {/* Left: About Text + Languages directly underneath */}
                    <div
                        className="
                            flex
                            flex-col
                            rounded-[22px]
                            border
                            border-[#00ffaa]/25
                            bg-[#141414]/50
                            p-6
                            backdrop-blur-xl
                            shadow-[0_0_25px_rgba(0,0,0,0.5)]
                            sm:p-8
                        "
                    >
                        <div>
                            <div className="flex items-center gap-2.5 mb-3.5">
                                <Sparkles className="w-5 h-5 text-[#00ffaa]" />
                                <h3 className="text-lg font-semibold text-[#00ffaa]">
                                    Who I Am
                                </h3>
                            </div>

                            <div className="space-y-3.5 text-sm leading-[1.8] text-[#d4d4d4] sm:text-base">
                                {ABOUT_TEXT.split("\n\n").map((para, idx) => (
                                    <p key={idx} className="m-0">
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Languages Section directly under the text - tight and seamless */}
                        <div className="mt-6 pt-5 border-t border-white/10">
                            <div className="flex items-center gap-2 mb-3">
                                <Languages className="w-5 h-5 text-[#00ffaa]" />
                                <h3 className="text-base font-semibold text-[#00ffaa]">
                                    Languages
                                </h3>
                            </div>

                            {/* Inline flex wrap modern row of language badges */}
                            <div className="flex flex-wrap items-center gap-2.5">
                                {LANGUAGES.map((lang) => (
                                    <div
                                        key={lang.name}
                                        className="
                                            inline-flex
                                            items-center
                                            gap-2.5
                                            rounded-full
                                            border
                                            border-[#00ffaa]/25
                                            bg-[#00ffaa]/5
                                            px-4
                                            py-1.5
                                            text-xs
                                            font-medium
                                            text-white
                                            backdrop-blur-md
                                            transition-all
                                            duration-200
                                            hover:-translate-y-0.5
                                            hover:border-[#00ffaa]
                                            hover:bg-[#00ffaa]/15
                                            sm:text-sm
                                        "
                                    >
                                        <span className="text-base leading-none">
                                            {lang.flag}
                                        </span>
                                        <span className="font-semibold text-white">
                                            {lang.name}
                                        </span>
                                        <span className="text-[11px] text-[#00ffaa]/80 font-normal">
                                            ({lang.level})
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right column: Education/Certificate + Skills */}
                    <div className="flex flex-col gap-6">
                        {/* Certificate / Education Section */}
                        <div
                            className="
                                rounded-[22px]
                                border
                                border-[#00ffaa]/25
                                bg-[#141414]/50
                                p-6
                                backdrop-blur-xl
                                shadow-[0_0_25px_rgba(0,0,0,0.5)]
                                sm:p-7
                            "
                        >
                            <h3 className="mb-4 text-lg font-semibold text-[#00ffaa]">
                                Education &amp; Certification
                            </h3>

                            <div className="flex flex-col gap-3.5">
                                <CertCard
                                    icon={<Award className="w-6 h-6" />}
                                    title="Full Stack Web Development"
                                    subtitle="Programming Hero"
                                    year="Running"
                                />

                                <CertCard
                                    icon={<GraduationCap className="w-6 h-6" />}
                                    title="Secondary School Certificate (SSC)"
                                    subtitle="Science Group"
                                    year="2026"
                                />
                            </div>
                        </div>

                        {/* Skills Section (Inline badges with tech icons) */}
                        <div
                            className="
                                rounded-[22px]
                                border
                                border-[#00ffaa]/25
                                bg-[#141414]/50
                                p-6
                                backdrop-blur-xl
                                shadow-[0_0_25px_rgba(0,0,0,0.5)]
                                sm:p-7
                            "
                        >
                            <h3 className="mb-4 text-lg font-semibold text-[#00ffaa]">
                                Technical Skills
                            </h3>

                            {/* Inline flex wrap modern row of badges */}
                            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                                {SKILLS.map((skill) => (
                                    <span
                                        key={skill.name}
                                        className="
                                            group
                                            inline-flex
                                            items-center
                                            gap-2
                                            rounded-full
                                            border
                                            border-[#00ffaa]/25
                                            bg-[#00ffaa]/5
                                            px-3.5
                                            py-1.5
                                            text-xs
                                            font-medium
                                            text-[#e0e0e0]
                                            backdrop-blur-md
                                            transition-all
                                            duration-200
                                            hover:-translate-y-0.5
                                            hover:border-[#00ffaa]
                                            hover:bg-[#00ffaa]/15
                                            hover:text-white
                                            sm:text-sm
                                        "
                                    >
                                        <span className="text-sm shrink-0">
                                            {skill.icon}
                                        </span>
                                        <span>{skill.name}</span>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
