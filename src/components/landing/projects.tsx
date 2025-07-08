"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import MagicBox from "../magic-box";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

// Static imports for project images
import projectImage1 from '../../../public/1.png';
import projectImage2 from '../../../public/2.png';
import projectImage3 from '../../../public/3.png';
import projectImage4 from '../../../public/4.png';

// Map project images to their titles or image paths
const imageMap: { [key: string]: any } = {
  'Testana': projectImage1,
  'FUTURA Architects': projectImage2,
  'University Website': projectImage3,
  'Food Ideology': projectImage4,
  'Сайт для университета': projectImage3,
  'Идеология Еды': projectImage4,
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="projects" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-headline font-bold text-foreground">{t.projects.title}</h2>
        <p className="text-lg text-foreground/70 mt-2">{t.projects.subtitle}</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {t.projects.items.map((project, i) => (
          <MagicBox key={project.title} className="h-full">
            <motion.div
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="h-full"
            >
              <Card className="h-full flex flex-col bg-card/50 transition-all duration-300 group overflow-hidden backdrop-blur-sm">
                <CardHeader>
                  <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                    <Image
                      src={imageMap[project.title]} // Use static import from imageMap
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      data-ai-hint={project.imageHint}
                      placeholder="blur" // Enable blur placeholder
                      priority={false} // Enable lazy loading
                    />
                  </div>
                  <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Button variant="outline" asChild className="transition-shadow duration-300 hover:shadow-[0_0_15px_hsl(var(--accent)/0.6)]">
                    <Link href={project.liveUrl} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                  <Button variant="ghost" asChild className="transition-shadow duration-300 hover:shadow-[0_0_15px_hsl(var(--accent)/0.6)]">
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="mr-2 h-4 w-4" /> Source
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </MagicBox>
        ))}
      </div>
    </section>
  );
}