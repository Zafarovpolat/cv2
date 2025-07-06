"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Send } from "lucide-react";
import { about } from "@/lib/data";
import { useScroll } from "@/contexts/scroll-context";

export default function About() {
  const { scrollbar } = useScroll();

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
    <section id="about" className="py-16 md:py-24 bg-card/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative aspect-square max-w-md mx-auto">
            <Image
              src="https://placehold.co/500x500.png"
              alt="Pulat Zafarov"
              fill
              className="rounded-lg object-cover shadow-lg"
              data-ai-hint="man portrait"
            />
             <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full bg-primary/20 rounded-lg animate-glow"></div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-4xl font-headline font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-foreground/80 mb-6">
            {about.description}
          </p>
          <p className="text-lg text-foreground/80 mb-8">
            {about.details}
          </p>
          <Button asChild size="lg" className="transition-shadow duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.7)]">
            <Link href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>
              Contact <Send className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
