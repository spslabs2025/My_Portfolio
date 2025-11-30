import React, { useEffect, useRef, useState } from 'react';

interface MousePos {
  x: number;
  y: number;
}

const CosmosBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState<MousePos>({ x: 0, y: 0 });
  const starsRef = useRef<Array<{ x: number; y: number; z: number; size: number; brightness: number; color: string }>>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const colors = ['#38bdf8', '#22d3ee', '#2dd4bf', '#0ea5e9', '#06b6d4'];

    if (starsRef.current.length === 0) {
      for (let i = 0; i < 150; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width * 2 - canvas.width,
          y: Math.random() * canvas.height * 2 - canvas.height,
          z: Math.random() * 2000,
          size: Math.random() * 2,
          brightness: Math.random() * 0.5 + 0.5,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    let rotationAngle = 0;

    const animate = () => {
      rotationAngle += 0.0005;

      ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);

      const influence = 0.1;
      const mouseInfluenceX = (mousePos.x - canvas.width / 2) * influence;
      const mouseInfluenceY = (mousePos.y - canvas.height / 2) * influence;
      ctx.rotate(mouseInfluenceX * 0.001);

      const stars = starsRef.current;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        const angle = rotationAngle + (i * Math.PI * 2) / stars.length;
        const orbitRadius = 100 + i * 2;

        star.x = Math.cos(angle) * orbitRadius;
        star.y = Math.sin(angle) * orbitRadius;
        star.z += 2;

        if (star.z > 2000) {
          star.z = 0;
        }

        const scale = star.z / 1000;
        const x = (star.x * scale) / (star.z / 1000);
        const y = (star.y * scale) / (star.z / 1000);

        const brightness = (2000 - star.z) / 2000;
        const size = star.size * brightness;

        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.max(0, Math.min(1, brightness * 0.8));

        ctx.beginPath();
        ctx.arc(x, y, Math.max(0.5, size), 0, Math.PI * 2);
        ctx.fill();

        if (brightness > 0.7) {
          ctx.fillStyle = star.color;
          ctx.globalAlpha = 0.4;
          ctx.beginPath();
          ctx.arc(x, y, size * 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      ctx.restore();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePos]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-30 dark:opacity-60"
      style={{ zIndex: -1, background: 'linear-gradient(135deg, rgba(248, 250, 252, 0) 0%, rgba(248, 250, 252, 0.03) 100%)' }}
    />
  );
};

export default CosmosBackground;
