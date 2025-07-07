"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import MagicBox from "../magic-box";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.3,
    },
  }),
};

export default function Skills() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="skills" className="py-16 md:py-24">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
        >
            <h2 className="text-4xl font-headline font-bold text-foreground">{t.skills.title}</h2>
            <p className="text-lg text-foreground/70 mt-2">{t.skills.subtitle}</p>
        </motion.div>
        <div className="max-w-4xl mx-auto space-y-8">
            {t.skills.items.map((skillCategory) => (
                <MagicBox key={skillCategory.category}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">{skillCategory.category}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="flex flex-wrap gap-3">
                                    {skillCategory.technologies.map((tech, index) => (
                                        <motion.li
                                            key={tech}
                                            variants={fadeInAnimationVariants}
                                            initial="initial"
                                            whileInView="animate"
                                            viewport={{ once: true }}
                                            custom={index}
                                        >
                                            <Badge variant="secondary" className="text-base px-4 py-2 transition-all hover:shadow-[0_0_15px_hsl(var(--accent)/0.6)]">{tech}</Badge>
                                        </motion.li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.div>
                </MagicBox>
            ))}
        </div>
    </section>
  );
}
