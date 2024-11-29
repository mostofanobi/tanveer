'use client';

import { useEffect, useRef, useState } from 'react';

import gsap from 'gsap';

const useCursor = () => {
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  const circle = useRef();
  const [cursorSize, setCursorSize] = useState(15);
  const [cursorContent, setCursorContent] = useState(null);

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const moveCircle = (x, y) => {
    gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
  };

  const handleMouseEnter = (type) => {
    if (type === 'project') {
      setCursorSize(50);
      setCursorContent(<div>Project</div>);
    } else if (type === 'button') {
      setCursorSize(40);
    } else if (type === 'footer') {
      setCursorSize(200);
    }
  };

  const handleMouseLeave = () => {
    setCursorSize(15);
    setCursorContent(null);
  };

  const animate = () => {
    const { x, y } = delayedMouse.current;
    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.1),
      y: lerp(y, mouse.current.y, 0.1)
    };
    moveCircle(delayedMouse.current.x, delayedMouse.current.y);
    rafId.current = window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();
    return () => {
      window.cancelAnimationFrame(rafId.current);
    };
  }, []);

  return {
    circle,
    cursorSize,
    cursorContent,
    handleMouseEnter,
    handleMouseLeave
  };
};

export default useCursor;
