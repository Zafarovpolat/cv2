"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Code, Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"

const navItems = [
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-sm border-b border-border/50"
          : "bg-transparent border-b border-transparent"
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
            <Button variant="ghost" asChild key={item.name}>
              <Link
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            </Button>
          ))}
          <Button variant="outline" asChild className="ml-4">
            <a href="https://github.com/Zafarovpolat" target="_blank" rel="noopener noreferrer">
              GitHub
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
                        <Link href={item.href} className="text-xl text-foreground/80 hover:text-foreground transition-colors">
                            {item.name}
                        </Link>
                    </SheetClose>
                ))}
                <Button variant="outline" asChild className="mt-4">
                    <a href="https://github.com/Zafarovpolat" target="_blank" rel="noopener noreferrer">
                        GitHub
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
