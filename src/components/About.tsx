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
    { num: 3, parts: [{ text: '  role', color: 'var(--syntax-blue)' }, { text: ': ', color: 'var(--text-primary)' }, { text: 'string[]', color: 'var(--syntax-cyan)' }, { text: ';', color: 'var(--text-primary)' }] },
    { num: 4, parts: [{ text: '  stack', color: 'var(--syntax-blue)' }, { text: ': ', color: 'var(--text-primary)' }, { text: 'string[]', color: 'var(--syntax-cyan)' }, { text: ';', color: 'var(--text-primary)' }] },
    { num: 5, parts: [{ text: '  audits', color: 'var(--syntax-blue)' }, { text: ': ', color: 'var(--text-primary)' }, { text: 'number', color: 'var(--syntax-cyan)' }, { text: ';', color: 'var(--text-primary)' }] },
    { num: 6, parts: [{ text: '}', color: 'var(--text-primary)' }] },
    { num: 7, parts: [] },
    { num: 8, parts: [{ text: 'const ', color: 'var(--syntax-purple)' }, { text: 'me', color: 'var(--syntax-blue)' }, { text: ': ', color: 'var(--text-primary)' }, { text: 'Developer', color: 'var(--syntax-cyan)' }, { text: ' = {', color: 'var(--text-primary)' }] },
    { num: 9, parts: [{ text: '  name', color: 'var(--syntax-blue)' }, { text: ': ', color: 'var(--text-primary)' }, { text: '"Gideon Oluwagbade"', color: 'var(--syntax-green)' }, { text: ',', color: 'var(--text-primary)' }] },
    { num: 10, parts: [{ text: '  role', color: 'var(--syntax-blue)' }, { text: ': ', color: 'var(--text-primary)' }, { text: '[', color: 'var(--text-primary)' }, { text: '"Blockchain Dev"', color: 'var(--syntax-green)' }, { text: ', ', color: 'var(--text-primary)' }, { text: '"Security Researcher"', color: 'var(--syntax-green)' }, { text: ']', color: 'var(--text-primary)' }, { text: ',', color: 'var(--text-primary)' }] },
    { num: 11, parts: [{ text: '  stack', color: 'var(--syntax-blue)' }, { text: ': ', color: 'var(--text-primary)' }, { text: '[', color: 'var(--text-primary)' }, { text: '"Solidity"', color: 'var(--syntax-green)' }, { text: ', ', color: 'var(--text-primary)' }, { text: '"MERN"', color: 'var(--syntax-green)' }, { text: ', ', color: 'var(--text-primary)' }, { text: '"Next.js"', color: 'var(--syntax-green)' }, { text: ']', color: 'var(--text-primary)' }, { text: ',', color: 'var(--text-primary)' }] },
    { num: 12, parts: [{ text: '  audits', color: 'var(--syntax-blue)' }, { text: ': ', color: 'var(--text-primary)' }, { text: '12', color: 'var(--syntax-orange)' }] },
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
                        I&apos;m a <span className="about__highlight">blockchain developer & security researcher</span> with
                        expertise in building decentralized applications, smart contract development, and
                        Web3 security auditing. I also build modern full-stack web applications using the
                        MERN stack and Next.js.
                    </p>
                    <p>
                        My journey spans <span className="about__highlight">DeFi protocols</span>, NFT marketplaces,
                        and smart contract security — participating in competitive audits on Code4rena,
                        Sherlock, and Codehawks with 12 H/M findings. I believe in secure, clean code
                        and building products that push the boundaries of decentralized technology.
                    </p>
                    <p>
                        When I&apos;m not auditing smart contracts, you&apos;ll find me building full-stack
                        web applications, contributing to open-source, or exploring the latest in
                        blockchain security and DeFi innovation.
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
