/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let mouse = { x: -1000, y: -1000, radius: 150 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      originalRadius: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        // Subtle speed: gentle drift
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.originalRadius = Math.random() * 1.5 + 1;
        this.radius = this.originalRadius;
        // Premium brand color gold-amber hues with subtle alpha variance
        const goldHue = 45; // Golden hue
        const Saturation = Math.floor(Math.random() * 20 + 70); // 70-90%
        const Lightness = Math.floor(Math.random() * 20 + 50); // 50-70%
        const Alpha = Math.random() * 0.4 + 0.3; // 0.3 - 0.7
        this.color = `hsla(${goldHue}, ${Saturation}%, ${Lightness}%, ${Alpha})`;
      }

      update(w: number, h: number) {
        // Simple ambient bounds bounce
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;

        // Apply mouse interaction (subtle push/repulsion away from the cursor)
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const distance = Math.hypot(dx, dy);

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          // Gently push particles out of mouse path
          this.x += Math.cos(angle) * force * 1.5;
          this.y += Math.sin(angle) * force * 1.5;

          // Grow slightly under focus
          this.radius = this.originalRadius * (1 + force * 0.8);
        } else {
          // Shrink back to original scale
          if (this.radius > this.originalRadius) {
            this.radius -= 0.05;
          }
        }

        // Apply basic velocity
        this.x += this.vx;
        this.y += this.vy;
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.fill();
      }
    }

    const initParticles = (w: number, h: number) => {
      // Scale density proportionally to viewport width
      const count = Math.min(Math.floor((w * h) / 16000), 120);
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(w, h));
      }
    };

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles(width, height);
    };

    // Track coordinates
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    // Set initial size & compile particles list
    handleResize();

    // Use resize observer to gracefully handle changes
    const observer = new ResizeObserver(() => {
      handleResize();
    });
    if (canvas.parentElement) {
      observer.observe(canvas.parentElement);
    }

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Animation Tick Flow
    const drawConnections = (c: CanvasRenderingContext2D) => {
      const len = particles.length;
      for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          // Draw connection if particles are close
          if (dist < 110) {
            c.beginPath();
            c.moveTo(p1.x, p1.y);
            c.lineTo(p2.x, p2.y);
            // Alpha gets weaker secondary to long distance
            const alpha = (110 - dist) / 110 * 0.15;
            c.strokeStyle = `rgba(201, 168, 76, ${alpha})`;
            c.lineWidth = 0.5;
            c.stroke();
          }
        }
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render connectors
      drawConnections(ctx);

      // Render separate nodes
      for (const p of particles) {
        p.update(canvas.width, canvas.height);
        p.draw(ctx);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
      style={{ mixBlendMode: 'screen' }}
      id="custom-particle-simulation-canvas"
    />
  );
}
