"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
  return (
    <section id="skills" className="py-16 md:py-24">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
        >
            <h2 className="text-4xl font-headline font-bold text-foreground">My Skills</h2>
            <p className="text-lg text-foreground/70 mt-2">Technologies and tools I work with.</p>
        </motion.div>
        <div className="max-w-4xl mx-auto space-y-8">
            {skills.map((skillCategory) => (
                <motion.div
                    key={skillCategory.category}
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
            ))}
        </div>
    </section>
  );
}
