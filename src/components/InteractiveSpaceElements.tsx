import { useState, useRef, useEffect } from 'react';

const InteractiveSpaceElements = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
  }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;
        
        // Create explosion effect
        const newParticles = Array.from({ length: 12 }, (_, i) => ({
          id: Date.now() + i,
          x: clickX,
          y: clickY,
          vx: Math.cos((i / 12) * Math.PI * 2) * (3 + Math.random() * 3),
          vy: Math.sin((i / 12) * Math.PI * 2) * (3 + Math.random() * 3),
          life: 100
        }));
        
        setParticles(prev => [...prev, ...newParticles]);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const animateParticles = () => {
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            vy: particle.vy + 0.1, // gravity
            life: particle.life - 2
          }))
          .filter(particle => particle.life > 0)
      );
    };

    const interval = setInterval(animateParticles, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-30"
      style={{ pointerEvents: 'none' }}
    >
      {/* Mouse Follower */}
      <div
        className="absolute w-4 h-4 bg-primary/30 rounded-full blur-sm transition-all duration-100 ease-out"
        style={{
          left: mousePos.x - 8,
          top: mousePos.y - 8,
          boxShadow: '0 0 20px hsl(var(--primary) / 0.5)'
        }}
      />
      
      {/* Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 bg-accent rounded-full"
          style={{
            left: particle.x - 1,
            top: particle.y - 1,
            opacity: particle.life / 100,
            transform: `scale(${particle.life / 100})`,
            boxShadow: '0 0 10px hsl(var(--accent) / 0.8)'
          }}
        />
      ))}

      {/* Floating UI Elements */}
      <div className="absolute top-1/4 right-10 cosmic-float opacity-20">
        <div className="text-6xl">🛸</div>
      </div>
      
      <div className="absolute bottom-1/3 left-10 cosmic-float opacity-20" style={{ animationDelay: '3s' }}>
        <div className="text-5xl">🌍</div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cosmic-float opacity-10" style={{ animationDelay: '1.5s' }}>
        <div className="text-8xl">🌌</div>
      </div>
    </div>
  );
};

export default InteractiveSpaceElements;