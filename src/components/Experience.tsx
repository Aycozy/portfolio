'use client';

import { useEffect, useRef } from 'react';

const experiences = [
    {
        date: '2024 — Present',
        role: 'Blockchain Security Researcher',
        company: 'Code4Arena / Sherlock DeFi (Freelance)',
        description: 'Securing protocols prior to mainnet deployment on Code4Arena and Sherlock DeFi. Utilizing unit and integration tests, static analysis, and fuzz testing to identify vulnerabilities. 12 H/M findings including 6 Highs, 2 Mediums, and 4 Lows across multiple competitive audits.',
        tags: ['Solidity', 'Security Auditing', 'Foundry', 'Slither', 'Fuzz Testing'],
    },
    {
        date: 'April 2023 — Present',
        role: 'Full Stack Web3 Developer',
        company: 'VertexAI',
        description: 'Building web user interfaces using React.js, Next.js, and backend services with Express.js and MongoDB. Co-engineered the MVP for an AI-powered NFT marketplace that creates ERC721 tokens with DALL-E generated images.',
        tags: ['React', 'Next.js', 'MongoDB', 'Express.js', 'ERC721', 'OpenAI'],
    },
    {
        date: '2022 — 2023',
        role: 'Smart Contract Developer',
        company: 'Volex Labs',
        description: 'Development of swaps and staking protocols with Foundry and Hardhat. Implemented Uniswap V2 and V3 integrations alongside Chainlink Oracle for reliable on-chain price feeds.',
        tags: ['Solidity', 'Foundry', 'Hardhat', 'Uniswap V2/V3', 'Chainlink'],
    },
    {
        date: 'Aug 2022 — Mar 2023',
        role: 'Blockchain Developer Bootcamp',
        company: 'Alchemy / Cyfrin Updraft',
        description: 'Completed intensive blockchain developer training at Alchemy covering Ethereum development, smart contract programming, and dApp architecture. Furthered expertise in Web3 security research at Cyfrin Updraft.',
        tags: ['Ethereum', 'Solidity', 'Web3', 'Smart Contracts', 'DApp Development'],
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
