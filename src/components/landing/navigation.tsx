"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Code, Menu, Github, Sun, Moon, Languages } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useScroll } from "@/contexts/scroll-context";
import { useTheme } from "@/contexts/theme-context";
import { useLanguage } from "@/contexts/language-context";
import { translations, contactInfo } from "@/lib/translations";


export default function Navigation() {
  const { scrollbar } = useScroll();
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const navItems = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.achievements, href: "#achievements" },
  ];

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
          Polat Zafarov
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
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> {t.nav.github}
            </a>
          </Button>

          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Languages className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Change language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage('en')}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('ru')}>
                Русский
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

        </nav>
        
        <div className="md:hidden flex items-center">
           <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
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
                    <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> {t.nav.github}
                    </a>
                </Button>
                <div className="flex justify-center gap-4 mt-4">
                  <Button variant="outline" onClick={() => setLanguage('en')}>EN</Button>
                  <Button variant="outline" onClick={() => setLanguage('ru')}>RU</Button>
                </div>
               </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
