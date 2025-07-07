"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Send } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import MagicBox from "../magic-box";
import { useLanguage } from "@/contexts/language-context";
import { translations, contactInfo } from "@/lib/translations";

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="contact" className="py-16 md:py-24">
      <MagicBox className="max-w-3xl mx-auto">
        <Card className="text-center bg-card/50 border-primary/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-4xl font-headline font-bold text-foreground">
              {t.contact.title}
            </CardTitle>
            <CardDescription className="text-lg text-foreground/70 mt-2">
              {t.contact.subtitle}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Button asChild size="lg" className="transition-shadow duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.7)]">
                <Link href={contactInfo.telegram} target="_blank">
                  <Send className="mr-2 h-5 w-5" /> {t.contact.telegram}
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="transition-shadow duration-300 hover:shadow-[0_0_20px_hsl(var(--accent)/0.6)]">
                <Link href={contactInfo.github} target="_blank">
                  <Github className="mr-2 h-5 w-5" /> {t.nav.github}
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </MagicBox>
    </section>
  );
}
