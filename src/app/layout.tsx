import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Alex Developer | Full-Stack Software Engineer',
  description:
    'Portfolio of Alex Developer — a passionate full-stack engineer specializing in React, Next.js, TypeScript, Node.js, and cloud-native technologies. Building performant, accessible, and beautifully designed web experiences.',
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
    title: 'Alex Developer | Full-Stack Software Engineer',
    description:
      'Portfolio of Alex Developer — crafting performant, accessible, and beautiful web experiences.',
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
