import { useRef, useEffect } from "react";

class Vector2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Particle {
  constructor(x, y, r, color) {
    this.position = new Vector2(x, y);
    this.velocity = new Vector2(Math.random() * 2 - 1, Math.random() * 2 - 1);
    this.r = r;
    this.color = color;
    this.lifeTime = Math.random() * 120;
    this.currentTime = 0;
  }
}

export const CanvasBackground = () => {
  const canvasRef = useRef(null);

  const FPS = 1000 / 60;
  // const FPS = 1000 / 1;
  const PARTICLE_COUNT = 100;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const r = 20 + Math.random() * 50;
      const color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      }, 0.3)`;
      particles.push(new Particle(x, y, r, color));
    }

    let loop = setInterval(() => {
      // Update background
      ctx.fillStyle = "#141319";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Particle count
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(
          particle.position.x,
          particle.position.y,
          (particle.r * (particle.lifeTime - particle.currentTime)) /
            particle.lifeTime,
          0,
          2 * Math.PI
        );
        ctx.fillStyle = particle.color;
        ctx.fill();
        // Update particle status
        particle.currentTime += 1;
        if (particle.currentTime >= particle.lifeTime) {
          particle.position.x = Math.random() * canvas.width;
          particle.position.y = Math.random() * canvas.height;
          particle.velocity.x = Math.random() * 2 - 1;
          particle.velocity.y = Math.random() * 2 - 1;
          particle.r = 20 + Math.random() * 50;
          particle.color = `rgba(${Math.random() * 255}, ${
            Math.random() * 255
          }, ${Math.random() * 255}, 0.1)`;
          particle.lifeTime = Math.random() * 120;
          particle.currentTime = 0;
        }
      });
    }, FPS);

    return () => {
      clearInterval(loop);
    };
  }, [FPS]);

  return (
    <canvas
      className="fixed top-0 left-0 w-full h-full -z-50"
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
    ></canvas>
  );
};
