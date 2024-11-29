'use client';

import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';

import { useCursor } from '@/providers/CursorProvider';

const Cursor = () => {
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  const circle = useRef();
  const { cursorSize, cursorContent, cursorBg } = useCursor();

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.current = { x: clientX, y: clientY };
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

  const moveCircle = (x, y) => {
    gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
  };

  useEffect(() => {
    animate();
    window.addEventListener('mousemove', manageMouseMove);

    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
      window.cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      style={{
        width: cursorSize,
        height: cursorSize,
        transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`,
        backgroundColor: cursorBg
      }}
      className='pointer-events-none fixed left-0 top-0 z-[99999] flex items-center justify-center rounded-full mix-blend-difference'
      ref={circle}
    >
      {cursorContent}
    </div>
  );
};

export default Cursor;
