import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isCard, setIsCard] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const isMobile = window.matchMedia('(pointer: coarse)').matches;
    if (isMobile) return;

    const moveCursor = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top = `${ring.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    const onEnter = (e) => {
      const el = e.target;
      if (el.closest('a, button, [role="button"]')) setIsHovering(true);
      if (el.closest('.project-card')) setIsCard(true);
    };
    const onLeave = () => { setIsHovering(false); setIsCard(false); };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-100"
        style={{
          width: isHovering ? '6px' : '5px',
          height: isHovering ? '6px' : '5px',
          background: '#c084fc',
          boxShadow: '0 0 8px rgba(192,132,252,0.8)',
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200"
        style={{
          width: isCard ? '60px' : isHovering ? '40px' : '28px',
          height: isCard ? '60px' : isHovering ? '40px' : '28px',
          border: `1.5px solid ${isHovering ? '#a855f7' : 'rgba(168,85,247,0.5)'}`,
          background: isHovering ? 'rgba(168,85,247,0.08)' : 'transparent',
          boxShadow: isHovering ? '0 0 20px rgba(168,85,247,0.3)' : 'none',
        }}
      />
    </>
  );
}
