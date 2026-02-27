'use client';

import { useEffect, useRef } from 'react';

const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '30+', label: 'Projects Delivered' },
    { number: '15+', label: 'Technologies' },
    { number: '99%', label: 'Client Satisfaction' },
];

const codeLines = [
    { num: 1, parts: [{ text: 'interface ', color: 'var(--syntax-purple)' }, { text: 'Developer ', color: 'var(--syntax-cyan)' }, { text: '{', color: 'var(--text-primary)' }] },
    { num: 2, parts: [{ text: '  name', color: 'var(--syntax-blue)' }, { text: ': ', color: 'var(--text-primary)' }, { text: 'string', color: 'var(--syntax-cyan)' }, { text: ';', color: 'var(--text-primary)' }] },
    { num: 3, parts: [{ text: '  role', color: 'var(--syntax-blue)' }, { text: ': ', color: 'var(--text-primary)' }, { text: 'string', color: 'var(--syntax-cyan)' }, { text: ';', color: 'var(--text-primary)' }] },
    { num: 4, parts: [{ text: '  skills', color: 'var(--syntax-blue)' }, { text: ': ', color: 'var(--text-primary)' }, { text: 'string[]', color: 'var(--syntax-cyan)' }, { text: ';', color: 'var(--text-primary)' }] },
    { num: 5, parts: [{ text: '  passion', color: 'var(--syntax-blue)' }, { text: ': ', color: 'var(--text-primary)' }, { text: 'boolean', color: 'var(--syntax-cyan)' }, { text: ';', color: 'var(--text-primary)' }] },
    { num: 6, parts: [{ text: '}', color: 'var(--text-primary)' }] },
    { num: 7, parts: [] },
    { num: 8, parts: [{ text: 'const ', color: 'var(--syntax-purple)' }, { text: 'me', color: 'var(--syntax-blue)' }, { text: ': ', color: 'var(--text-primary)' }, { text: 'Developer', color: 'var(--syntax-cyan)' }, { text: ' = {', color: 'var(--text-primary)' }] },
    { num: 9, parts: [{ text: '  name', color: 'var(--syntax-blue)' }, { text: ': ', color: 'var(--text-primary)' }, { text: '"Alex Developer"', color: 'var(--syntax-green)' }, { text: ',', color: 'var(--text-primary)' }] },
    { num: 10, parts: [{ text: '  role', color: 'var(--syntax-blue)' }, { text: ': ', color: 'var(--text-primary)' }, { text: '"Full-Stack Engineer"', color: 'var(--syntax-green)' }, { text: ',', color: 'var(--text-primary)' }] },
    { num: 11, parts: [{ text: '  skills', color: 'var(--syntax-blue)' }, { text: ': ', color: 'var(--text-primary)' }, { text: '[', color: 'var(--text-primary)' }, { text: '"TS"', color: 'var(--syntax-green)' }, { text: ', ', color: 'var(--text-primary)' }, { text: '"React"', color: 'var(--syntax-green)' }, { text: ', ', color: 'var(--text-primary)' }, { text: '"Node"', color: 'var(--syntax-green)' }, { text: ']', color: 'var(--text-primary)' }, { text: ',', color: 'var(--text-primary)' }] },
    { num: 12, parts: [{ text: '  passion', color: 'var(--syntax-blue)' }, { text: ': ', color: 'var(--text-primary)' }, { text: 'true', color: 'var(--syntax-orange)' }] },
    { num: 13, parts: [{ text: '};', color: 'var(--text-primary)' }] },
];

export default function About() {
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
        <section className="section" id="about" ref={sectionRef}>
            <div className="section-header animate-on-scroll">
                <p className="section-header__label">About Me</p>
                <h2 className="section-header__title">Crafting Digital Experiences</h2>
                <p className="section-header__subtitle">
                    A brief overview of who I am, what I do, and the technologies I work with.
                </p>
            </div>

            <div className="about__grid">
                <div className="about__text animate-on-scroll">
                    <p>
                        I&apos;m a <span className="about__highlight">full-stack software engineer</span> with
                        5+ years of experience building scalable web applications and distributed systems.
                        I specialize in creating exceptional digital experiences that live at the intersection
                        of design and engineering.
                    </p>
                    <p>
                        My journey started with <span className="about__highlight">curiosity</span> — tinkering
                        with HTML in my teenage years. Today, I architect and build production systems that
                        serve millions of users. I believe in clean code, thoughtful architecture, and
                        shipping products that make a difference.
                    </p>
                    <p>
                        When I&apos;m not coding, you&apos;ll find me contributing to open-source projects,
                        writing technical articles, or exploring the latest in cloud-native technologies.
                    </p>

                    <div className="about__stats">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <div className="stat-card__number">{stat.number}</div>
                                <div className="stat-card__label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="about__skills-code animate-on-scroll">
                    <div className="about__skills-header">
                        <div className="about__skills-tab">
                            <span className="about__skills-tab-icon">TS</span>
                            <span>developer.ts</span>
                        </div>
                    </div>
                    <div className="about__skills-body">
                        {codeLines.map((line) => (
                            <div key={line.num} className="line">
                                <span className="line-number">{line.num}</span>
                                <span>
                                    {line.parts.length === 0 ? (
                                        <br />
                                    ) : (
                                        line.parts.map((part, i) => (
                                            <span key={i} style={{ color: part.color }}>
                                                {part.text}
                                            </span>
                                        ))
                                    )}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
