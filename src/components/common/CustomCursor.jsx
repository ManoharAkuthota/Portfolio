import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [rippleKey, setRippleKey] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => {
      setIsClicked(true);
      setRippleKey((prev) => prev + 1);
    };

    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e) => {
      const target = e.target;
      const isInteractive = target.closest('button, a, input, textarea, [role="button"], .interactive-hover');
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', handleElementHover);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', handleElementHover);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* 1. Mouse Spotlight Light Reflection (illuminates cards and 3D objects) */}
      <div
        className="fixed pointer-events-none z-30 rounded-full transition-transform duration-75 ease-out"
        style={{
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.07) 0%, rgba(168, 85, 247, 0.03) 40%, transparent 70%)',
          mixBlendMode: 'screen',
        }}
      />

      {/* 2. Outer Glowing Orb with Spring Damping & Magnetic Morph */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full"
        animate={{
          x: mousePosition.x - (isHovered ? 30 : 18),
          y: mousePosition.y - (isHovered ? 30 : 18),
          width: isHovered ? 60 : 36,
          height: isHovered ? 60 : 36,
          scale: isClicked ? 0.75 : 1,
          backgroundColor: isHovered ? 'rgba(56, 189, 248, 0.15)' : 'rgba(56, 189, 248, 0.05)',
          borderColor: isHovered ? 'rgba(168, 85, 247, 0.9)' : 'rgba(56, 189, 248, 0.65)',
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 350,
          mass: 0.15,
        }}
        style={{
          borderWidth: isHovered ? '2px' : '1.5px',
          boxShadow: isHovered
            ? '0 0 25px rgba(168, 85, 247, 0.7), inset 0 0 12px rgba(56, 189, 248, 0.4)'
            : '0 0 16px rgba(56, 189, 248, 0.45)',
        }}
      />

      {/* 3. Center Sharp Core */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 w-2 h-2 rounded-full bg-cyan-300"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 0 : 1,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 40,
          stiffness: 900,
          mass: 0.1,
        }}
        style={{
          boxShadow: '0 0 10px #38bdf8',
        }}
      />

      {/* 4. Click Ripple Wave */}
      {isClicked && (
        <motion.div
          key={rippleKey}
          className="fixed top-0 left-0 pointer-events-none z-40 rounded-full border border-cyan-400"
          initial={{
            x: mousePosition.x - 25,
            y: mousePosition.y - 25,
            width: 50,
            height: 50,
            opacity: 0.9,
            scale: 0.4,
          }}
          animate={{
            scale: 2.5,
            opacity: 0,
          }}
          transition={{
            duration: 0.55,
            ease: 'easeOut',
          }}
        />
      )}
    </>
  );
}
