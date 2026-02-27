import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gideon | Full-Stack Software Engineer',
  description:
    'Portfolio of Gideon — a passionate full-stack engineer specializing in React, Next.js, TypeScript, Node.js, and cloud-native technologies. Building performant, accessible, and beautifully designed web experiences.',
  keywords: [
    'Full-Stack Developer',
    'Software Engineer',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Portfolio',
  ],
  openGraph: {
    title: 'Gideon | Full-Stack Software Engineer',
    description:
      'Portfolio of Gideon — crafting performant, accessible, and beautiful web experiences.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
