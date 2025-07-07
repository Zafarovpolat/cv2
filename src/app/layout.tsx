import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster";
import ParticleBackground from '@/components/landing/particle-background';
import { ScrollProvider } from '@/contexts/scroll-context';
import { ThemeProvider } from '@/contexts/theme-context';
import { LanguageProvider } from '@/contexts/language-context';

export const metadata: Metadata = {
  title: "Polat Zafarov | Frontend Developer",
  description: "Interactive portfolio of Polat Zafarov, a frontend developer with 4 years of experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;700;800&family=Plus+Jakarta+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased')}>
        <ThemeProvider>
          <LanguageProvider>
            <ParticleBackground />
            <ScrollProvider>
              {children}
            </ScrollProvider>
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
