"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Code, Menu, Github } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"
import { useScroll } from "@/contexts/scroll-context";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
];

export default function Navigation() {
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
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "bg-background/80 backdrop-blur-sm border-b border-border/50"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold font-headline text-foreground hover:text-accent transition-colors">
          <Code className="w-6 h-6 text-accent" />
          Pulat Zafarov
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Button variant="ghost" asChild key={item.name} className="transition-shadow duration-300 hover:shadow-[0_0_15px_hsl(var(--accent)/0.5)]">
              <Link
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            </Button>
          ))}
          <Button asChild className="ml-4 transition-shadow duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.7)]">
            <a href="https://github.com/Zafarovpolat" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
        </nav>
        
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background w-[250px]">
               <nav className="flex flex-col gap-6 mt-12">
                {navItems.map((item) => (
                    <SheetClose asChild key={item.name}>
                        <Link href={item.href} onClick={(e) => handleLinkClick(e, item.href)} className="text-xl text-foreground/80 hover:text-foreground transition-colors">
                            {item.name}
                        </Link>
                    </SheetClose>
                ))}
                <Button asChild className="mt-4 transition-shadow duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.7)]">
                    <a href="https://github.com/Zafarovpolat" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                </Button>
               </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
