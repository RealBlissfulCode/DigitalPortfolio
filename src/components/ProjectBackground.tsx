import React, { useEffect, useRef } from 'react';

export default function ProjectBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawHexagon = (x: number, y: number, size: number, rotation: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3 + rotation;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const gridSize = 100;
      const hexSize = 30;

      for (let x = 0; x < canvas.width + gridSize; x += gridSize) {
        for (let y = 0; y < canvas.height + gridSize; y += gridSize) {
          const offsetX = (y % (gridSize * 2)) === 0 ? 0 : gridSize / 2;
          const posX = x + offsetX;
          const posY = y;

          const distance = Math.sqrt(
            Math.pow((posX - canvas.width / 2) / canvas.width, 2) +
            Math.pow((posY - canvas.height / 2) / canvas.height, 2)
          );

          const rotation = time * 0.5 + distance * 2;
          const scale = Math.sin(time + distance * 5) * 0.2 + 0.8;

          ctx.strokeStyle = `rgba(147, 51, 234, ${0.3 - distance * 0.3})`;
          ctx.lineWidth = 1;

          drawHexagon(posX, posY, hexSize * scale, rotation);
          ctx.stroke();
        }
      }

      time += 0.01;
      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 bg-black"
    />
  );
}