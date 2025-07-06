"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;

  constructor(
    public canvasWidth: number,
    public canvasHeight: number
  ) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
  }

  update() {
    if (this.x > this.canvasWidth || this.x < 0) {
        this.speedX *= -1;
    }
    if (this.y > this.canvasHeight || this.y < 0) {
        this.speedY *= -1;
    }
    this.x += this.speedX;
    this.y += this.speedY;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "hsla(185, 94%, 47%, 0.8)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesArray = useRef<Particle[]>([]);
  const animationFrameId = useRef<number>();

  const initParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    particlesArray.current = [];
    const numberOfParticles = (canvas.width * canvas.height) / 12000;
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.current.push(
        new Particle(canvas.width, canvas.height)
      );
    }
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const particle of particlesArray.current) {
      particle.update();
      particle.draw(ctx);
    }
    animationFrameId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const setupCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
    }
    
    setupCanvas();
    animate();

    window.addEventListener("resize", setupCanvas);

    return () => {
      window.removeEventListener("resize", setupCanvas);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [initParticles, animate]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="z-10 flex flex-col items-center gap-6 p-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold font-headline text-foreground [text-shadow:0_0_15px_hsl(var(--primary))]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Pulat Zafarov
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-foreground/80 max-w-2xl [text-shadow:0_0_10px_hsl(var(--accent)/0.8)]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Frontend Developer with 4 years of experience crafting beautiful and performant web experiences.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button asChild size="lg" className="transition-shadow duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.7)]">
            <Link href="#projects">
              View My Work <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
