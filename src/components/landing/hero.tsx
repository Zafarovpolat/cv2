"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { useScroll } from "@/contexts/scroll-context";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export default function Hero() {
  const { scrollbar } = useScroll();
  const { language } = useLanguage();
  const t = translations[language];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement && scrollbar) {
      scrollbar.scrollIntoView(targetElement as HTMLElement, {
        offsetTop: -50,
      });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center">
      <div className="z-10 flex flex-col items-center gap-6 p-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold font-headline text-foreground [text-shadow:0_0_10px_hsl(var(--foreground)/0.3)] dark:[text-shadow:0_0_15px_hsl(var(--primary))]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Polat Zafarov
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-foreground/80 max-w-2xl [text-shadow:0_0_10px_hsl(var(--accent)/0.8)]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t.hero.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button asChild size="lg" className="transition-shadow duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.7)]">
            <Link href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>
              {t.hero.button} <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
