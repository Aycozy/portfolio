'use client';

import { useEffect, useRef } from 'react';

const projects = [
    {
        title: 'CloudSync Dashboard',
        description: 'A real-time cloud infrastructure monitoring dashboard with live metrics, alerting, and team collaboration features.',
        status: 'Production',
        techStack: [
            { name: 'React', color: '#61DAFB' },
            { name: 'TypeScript', color: '#3178C6' },
            { name: 'Node.js', color: '#339933' },
            { name: 'PostgreSQL', color: '#4169E1' },
            { name: 'Redis', color: '#DC382D' },
            { name: 'Docker', color: '#2496ED' },
        ],
        imageBg: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)',
        github: 'https://github.com',
        live: 'https://example.com',
    },
    {
        title: 'DevFlow CLI',
        description: 'An open-source CLI tool that automates development workflows, from project scaffolding to deployment pipelines.',
        status: 'Open Source',
        techStack: [
            { name: 'Go', color: '#00ADD8' },
            { name: 'Cobra', color: '#7ee787' },
            { name: 'Docker', color: '#2496ED' },
            { name: 'GitHub Actions', color: '#2088FF' },
        ],
        imageBg: 'linear-gradient(135deg, #0d1117, #161b22, #21262d)',
        github: 'https://github.com',
        live: null,
    },
    {
        title: 'NeuralChat AI',
        description: 'A conversational AI platform with natural language understanding, multi-model support, and real-time streaming responses.',
        status: 'In Development',
        techStack: [
            { name: 'Next.js', color: '#ffffff' },
            { name: 'Python', color: '#3776AB' },
            { name: 'FastAPI', color: '#009688' },
            { name: 'OpenAI', color: '#412991' },
            { name: 'Vercel', color: '#ffffff' },
        ],
        imageBg: 'linear-gradient(135deg, #1a0533, #2d1b69, #1e3a5f)',
        github: 'https://github.com',
        live: 'https://example.com',
    },
    {
        title: 'FinTrack API',
        description: 'A high-performance RESTful API for financial data aggregation, portfolio tracking, and market analytics with sub-100ms response times.',
        status: 'Production',
        techStack: [
            { name: 'Node.js', color: '#339933' },
            { name: 'Express', color: '#ffffff' },
            { name: 'MongoDB', color: '#47A248' },
            { name: 'AWS', color: '#FF9900' },
            { name: 'Jest', color: '#C21325' },
        ],
        imageBg: 'linear-gradient(135deg, #0a1628, #1a2744, #0f3460)',
        github: 'https://github.com',
        live: 'https://example.com',
    },
];

export default function Projects() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-on-scroll--visible');
                    }
                });
            },
            { threshold: 0.05 }
        );

        const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="section" id="projects" ref={sectionRef}>
            <div className="section-header animate-on-scroll">
                <p className="section-header__label">Featured Work</p>
                <h2 className="section-header__title">Projects I&apos;ve Built</h2>
                <p className="section-header__subtitle">
                    A selection of projects that showcase my skills across the full stack.
                </p>
            </div>

            <div className="projects__grid">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="project-card animate-on-scroll"
                        style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                        <div className="project-card__image">
                            <div
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    background: project.imageBg,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '2.5rem',
                                    color: 'rgba(255,255,255,0.1)',
                                }}
                            >
                                {'</>'}
                            </div>
                            <div className="project-card__image-gradient" />

                            {/* Tech Stack Overlay on Hover */}
                            <div className="project-card__tech-overlay">
                                <span className="project-card__tech-label">Tech Stack</span>
                                <div className="project-card__tech-icons">
                                    {project.techStack.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-icon">
                                            <span
                                                className="tech-icon__dot"
                                                style={{ background: tech.color }}
                                            />
                                            {tech.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="project-card__content">
                            <div className="project-card__status">
                                <span className="project-card__status-dot" />
                                {project.status}
                            </div>
                            <h3 className="project-card__title">{project.title}</h3>
                            <p className="project-card__description">{project.description}</p>
                            <div className="project-card__links">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card__link">
                                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    Source
                                </a>
                                {project.live && (
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-card__link">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                            <polyline points="15 3 21 3 21 9" />
                                            <line x1="10" y1="14" x2="21" y2="3" />
                                        </svg>
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
