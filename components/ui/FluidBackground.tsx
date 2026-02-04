"use client";

import { useEffect, useRef } from "react";

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;

  constructor(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 300 + 200; // Large orbs
    // Violet, Purple, Amber palette
    const colors = [
      "rgba(139, 92, 246, 0.15)", // Violet
      "rgba(124, 58, 237, 0.1)", // Purple
      "rgba(251, 191, 36, 0.05)", // Amber (faint)
      "rgba(76, 29, 149, 0.1)", // Deep Violet
    ];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  update(width: number, height: number) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < -this.size) this.x = width + this.size;
    if (this.x > width + this.size) this.x = -this.size;
    if (this.y < -this.size) this.y = height + this.size;
    if (this.y > height + this.size) this.y = -this.size;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    const gradient = ctx.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      this.size,
    );
    gradient.addColorStop(0, this.color);
    gradient.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = gradient;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

export function FluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    const particles: Particle[] = [];
    const particleCount = 15;

    // Init particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(width, height));
    }

    const animate = () => {
      ctx.fillStyle = "#050505"; // Deep dark background
      ctx.fillRect(0, 0, width, height);

      // Composite mode for blending
      ctx.globalCompositeOperation = "screen";

      particles.forEach((p) => {
        p.update(width, height);
        p.draw(ctx);
      });

      ctx.globalCompositeOperation = "source-over"; // Reset
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ filter: "blur(60px)" }} // Extra blur for fluid effect
    />
  );
}
