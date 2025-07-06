"use client";

import { motion } from "framer-motion";
import { achievements } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MagicBox from "../magic-box";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-headline font-bold text-foreground">Achievements & Recognition</h2>
        <p className="text-lg text-foreground/70 mt-2">Milestones that mark my journey.</p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {achievements.map((achievement, i) => (
          <MagicBox key={achievement.title} className="h-full">
            <motion.div
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="h-full"
            >
              <Card className="text-center h-full bg-card/50 hover:bg-card/80 transition-all duration-300 backdrop-blur-sm">
                <CardHeader className="items-center">
                  <div className="p-4 bg-primary/20 rounded-full mb-4">
                    <achievement.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          </MagicBox>
        ))}
      </div>
    </section>
  );
}
