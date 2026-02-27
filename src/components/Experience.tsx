'use client';

import { useEffect, useRef } from 'react';

const experiences = [
    {
        date: '2023 — Present',
        role: 'Senior Full-Stack Engineer',
        company: 'TechCorp Inc.',
        description: 'Leading the frontend architecture team, building scalable micro-frontend solutions, and mentoring junior developers. Reduced page load times by 40% through performance optimizations and implemented a new design system.',
        tags: ['React', 'TypeScript', 'Node.js', 'AWS', 'GraphQL'],
    },
    {
        date: '2021 — 2023',
        role: 'Full-Stack Developer',
        company: 'StartupXYZ',
        description: 'Built the core product from 0 to 1, including real-time collaboration features, payment integrations, and a custom CMS. Scaled the platform to serve 100K+ monthly active users.',
        tags: ['Next.js', 'Python', 'PostgreSQL', 'Docker', 'Redis'],
    },
    {
        date: '2020 — 2021',
        role: 'Frontend Developer',
        company: 'DigitalAgency Co.',
        description: 'Developed responsive web applications for diverse clients across e-commerce, healthcare, and fintech. Introduced component-driven development and automated testing workflows.',
        tags: ['React', 'Vue.js', 'SCSS', 'Jest', 'Figma'],
    },
    {
        date: '2019 — 2020',
        role: 'Junior Developer',
        company: 'WebDev Studio',
        description: 'Started my professional journey building WordPress sites and custom web applications. Quickly progressed to working on full-stack JavaScript projects with React and Express.',
        tags: ['JavaScript', 'HTML/CSS', 'PHP', 'MySQL', 'Git'],
    },
];

export default function Experience() {
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
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="section" id="experience" ref={sectionRef}>
            <div className="section-header animate-on-scroll">
                <p className="section-header__label">Career Path</p>
                <h2 className="section-header__title">Work Experience</h2>
                <p className="section-header__subtitle">
                    A timeline of my professional journey and the impact I&apos;ve made.
                </p>
            </div>

            <div className="experience__timeline">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="timeline-item animate-on-scroll"
                        style={{ transitionDelay: `${index * 0.15}s` }}
                    >
                        <div className="timeline-item__dot" />
                        <p className="timeline-item__date">{exp.date}</p>
                        <div className="timeline-item__card">
                            <h3 className="timeline-item__role">
                                {exp.role}{' '}
                                <span className="timeline-item__company">@ {exp.company}</span>
                            </h3>
                            <p className="timeline-item__description">{exp.description}</p>
                            <div className="timeline-item__tags">
                                {exp.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="skill-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
