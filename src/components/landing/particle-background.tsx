"use client";

import { useEffect, useRef, useCallback } from "react";

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
    ctx.fillStyle = "hsla(195, 100%, 50%, 0.8)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesArray = useRef<Particle[]>([]);
  const animationFrameId = useRef<number>();

  const initParticles = useCallback((width: number, height: number) => {
    particlesArray.current = [];
    const numberOfParticles = (width * height) / 12000;
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.current.push(
        new Particle(width, height)
      );
    }
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.current.length; i++) {
      const p1 = particlesArray.current[i];
      p1.update();
      p1.draw(ctx);

      for (let j = i + 1; j < particlesArray.current.length; j++) {
        const p2 = particlesArray.current[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          ctx.beginPath();
          ctx.strokeStyle = `hsla(195, 100%, 50%, ${1 - distance / 150})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
          ctx.closePath();
        }
      }
    }
    animationFrameId.current = requestAnimationFrame(animate);
  }, []);
  
  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = document.body.scrollHeight;
    initParticles(canvas.width, canvas.height);
  },[initParticles]);

  useEffect(() => {
    setupCanvas();
    animate();

    const resizeObserver = new ResizeObserver(setupCanvas);
    resizeObserver.observe(document.body);
    window.addEventListener("resize", setupCanvas);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", setupCanvas);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [setupCanvas, animate]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}
