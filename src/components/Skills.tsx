'use client';

import { useEffect, useRef } from 'react';

const skillCategories = [
    {
        title: 'Frontend',
        iconClass: 'skill-category__icon--frontend',
        icon: '⚛',
        skills: [
            { name: 'React', dotColor: 'blue' },
            { name: 'Next.js', dotColor: 'blue' },
            { name: 'TypeScript', dotColor: 'blue' },
            { name: 'Vue.js', dotColor: 'green' },
            { name: 'CSS / SCSS', dotColor: 'pink' },
            { name: 'Framer Motion', dotColor: 'purple' },
            { name: 'Tailwind CSS', dotColor: 'cyan' },
        ],
    },
    {
        title: 'Backend',
        iconClass: 'skill-category__icon--backend',
        icon: '⚡',
        skills: [
            { name: 'Node.js', dotColor: 'green' },
            { name: 'Python', dotColor: 'yellow' },
            { name: 'Go', dotColor: 'cyan' },
            { name: 'PostgreSQL', dotColor: 'blue' },
            { name: 'MongoDB', dotColor: 'green' },
            { name: 'Redis', dotColor: 'red' },
            { name: 'GraphQL', dotColor: 'pink' },
        ],
    },
    {
        title: 'DevOps & Cloud',
        iconClass: 'skill-category__icon--devops',
        icon: '☁',
        skills: [
            { name: 'Docker', dotColor: 'blue' },
            { name: 'Kubernetes', dotColor: 'blue' },
            { name: 'AWS', dotColor: 'orange' },
            { name: 'GCP', dotColor: 'red' },
            { name: 'CI/CD', dotColor: 'green' },
            { name: 'Terraform', dotColor: 'purple' },
        ],
    },
    {
        title: 'Tools & Practices',
        iconClass: 'skill-category__icon--tools',
        icon: '🛠',
        skills: [
            { name: 'Git', dotColor: 'orange' },
            { name: 'Linux', dotColor: 'yellow' },
            { name: 'Agile/Scrum', dotColor: 'blue' },
            { name: 'TDD', dotColor: 'green' },
            { name: 'REST APIs', dotColor: 'cyan' },
            { name: 'Figma', dotColor: 'purple' },
        ],
    },
];

export default function Skills() {
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
        <section className="section" id="skills" ref={sectionRef}>
            <div className="section-header animate-on-scroll">
                <p className="section-header__label">Tech Stack</p>
                <h2 className="section-header__title">Skills & Technologies</h2>
                <p className="section-header__subtitle">
                    The tools and technologies I use to bring ideas to life.
                </p>
            </div>

            <div className="skills__categories">
                {skillCategories.map((category, index) => (
                    <div
                        key={index}
                        className="skill-category animate-on-scroll"
                        style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                        <div className={`skill-category__icon ${category.iconClass}`}>
                            {category.icon}
                        </div>
                        <h3 className="skill-category__title">{category.title}</h3>
                        <div className="skill-category__list">
                            {category.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} className="skill-tag">
                                    <span className={`skill-tag__dot skill-tag__dot--${skill.dotColor}`} />
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
