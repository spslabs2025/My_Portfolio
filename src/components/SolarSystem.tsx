import React, { useEffect, useRef, useState } from 'react';

interface MousePos {
  x: number;
  y: number;
}

const SolarSystem: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState<MousePos>({ x: 0.5, y: 0.5 });
  const rotationsRef = useRef<{
    earth: number;
    venus: number;
    mercury: number;
    mars: number;
    sun: number;
  }>({ earth: 0, venus: 0, mercury: 0, mars: 0, sun: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const planets = [
      { name: 'Mercury', distance: 80, size: 3, color: '#cbd5e1', speed: 0.04, tilt: 0.3 },
      { name: 'Venus', distance: 120, size: 5, color: '#fbbf24', speed: 0.015, tilt: 2.6 },
      { name: 'Earth', distance: 160, size: 5, color: '#38bdf8', speed: 0.01, tilt: 0.41 },
      { name: 'Mars', distance: 200, size: 3, color: '#f87171', speed: 0.008, tilt: 1.88 }
    ];

    let frameCount = 0;

    const drawStar = (x: number, y: number, radius: number) => {
      const step = (Math.PI * 2) / 5;
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const x1 = x + radius * Math.cos(i * step - Math.PI / 2);
        const y1 = y + radius * Math.sin(i * step - Math.PI / 2);
        ctx.lineTo(x1, y1);
        const x2 = x + (radius / 2) * Math.cos(i * step + step / 2 - Math.PI / 2);
        const y2 = y + (radius / 2) * Math.sin(i * step + step / 2 - Math.PI / 2);
        ctx.lineTo(x2, y2);
      }
      ctx.closePath();
      ctx.fill();
    };

    const animate = () => {
      const isDark = document.documentElement.classList.contains('dark');

      ctx.fillStyle = isDark ? 'rgba(15, 23, 42, 0.95)' : 'rgba(248, 250, 252, 0.95)';
      ctx.fillRect(0, 0, width, height);

      frameCount++;
      rotationsRef.current.sun += 0.002;
      rotationsRef.current.earth += 0.01;
      rotationsRef.current.venus += 0.015;
      rotationsRef.current.mercury += 0.04;
      rotationsRef.current.mars += 0.008;

      const centerX = width / 2 + (mousePos.x - 0.5) * 30;
      const centerY = height / 2 + (mousePos.y - 0.5) * 30;

      ctx.save();
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = isDark ? '#38bdf8' : '#0ea5e9';
      ctx.lineWidth = 1;

      planets.forEach(planet => {
        ctx.beginPath();
        ctx.arc(centerX, centerY, planet.distance, 0, Math.PI * 2);
        ctx.stroke();
      });

      ctx.restore();

      const sunGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 8);
      sunGradient.addColorStop(0, '#fbbf24');
      sunGradient.addColorStop(0.5, '#f59e0b');
      sunGradient.addColorStop(1, '#d97706');
      ctx.fillStyle = sunGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 8, 0, Math.PI * 2);
      ctx.fill();

      ctx.shadowColor = '#fbbf24';
      ctx.shadowBlur = 20;
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 8, 0, Math.PI * 2);
      ctx.stroke();
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      planets.forEach((planet, index) => {
        const angle = (frameCount * planet.speed + (index * Math.PI * 2) / planets.length);
        const x = centerX + Math.cos(angle) * planet.distance;
        const y = centerY + Math.sin(angle) * planet.distance;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotationsRef.current.earth + index * 0.5);

        const gradient = ctx.createRadialGradient(-2, -2, 0, 0, 0, planet.size);
        gradient.addColorStop(0, planet.color);
        gradient.addColorStop(1, planet.color.replace('ff', 'cc'));
        ctx.fillStyle = gradient;

        ctx.beginPath();
        ctx.arc(0, 0, planet.size, 0, Math.PI * 2);
        ctx.fill();

        if (planet.name === 'Earth') {
          ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(0, 0, planet.size * 1.3, 0, Math.PI * 2);
          ctx.stroke();
        }

        ctx.restore();

        if (frameCount % 120 === 0) {
          ctx.fillStyle = isDark ? 'rgba(56, 189, 248, 0.3)' : 'rgba(14, 165, 233, 0.3)';
          ctx.beginPath();
          ctx.arc(x, y, planet.size * 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePos]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full rounded-2xl dark:bg-slate-900/30 bg-slate-50/30"
      style={{ background: 'linear-gradient(135deg, rgba(248, 250, 252, 0.5) 0%, rgba(241, 245, 249, 0.3) 100%)' }}
    />
  );
};

export default SolarSystem;
