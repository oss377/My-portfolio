import './globals.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Aweke Adisie - Portfolio',
  description: 'Professional web and mobile app developer and video editor portfolio showcasing projects, skills, and blog.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="am" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Ethiopic:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 font-noto-serif-ethiopic">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar className="block text-gray-900 dark:text-white" />
            <main className="flex-1">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}