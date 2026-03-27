// src/styles/CustomCursor.jsx
import React, { useEffect, useRef, useState } from 'react';
import '../styles/CustomCursor.css';

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const outlinePosition = useRef({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Check if device has mouse and is desktop
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isLargeScreen = window.innerWidth >= 1024;
    const shouldEnable = !isTouchDevice && isLargeScreen;
    
    setIsActive(shouldEnable);
    
    if (!shouldEnable) {
      // Restore default cursor
      document.body.style.cursor = '';
      const style = document.getElementById('custom-cursor-style');
      if (style) style.remove();
      return;
    }

    // Hide default cursor
    document.body.style.cursor = 'none';
    
    // Add style to hide cursor
    let style = document.getElementById('custom-cursor-style');
    if (!style) {
      style = document.createElement('style');
      style.id = 'custom-cursor-style';
      style.textContent = `
        * {
          cursor: none !important;
        }
      `;
      document.head.appendChild(style);
    }

    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${e.clientX - 4}px`;
        cursorDotRef.current.style.top = `${e.clientY - 4}px`;
      }
    };

    const handleMouseDown = () => {
      cursorDotRef.current?.classList.add('click');
      cursorOutlineRef.current?.classList.add('click');
    };

    const handleMouseUp = () => {
      cursorDotRef.current?.classList.remove('click');
      cursorOutlineRef.current?.classList.remove('click');
    };

    const animateOutline = () => {
      const { x, y } = mousePosition.current;
      const outlineX = outlinePosition.current.x;
      const outlineY = outlinePosition.current.y;
      
      outlinePosition.current.x += (x - outlineX) * 0.15;
      outlinePosition.current.y += (y - outlineY) * 0.15;
      
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.left = `${outlinePosition.current.x - 20}px`;
        cursorOutlineRef.current.style.top = `${outlinePosition.current.y - 20}px`;
      }
      
      requestAnimationFrame(animateOutline);
    };

    // Add hover effects
    const addHoverEffects = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], .interactive, .cursor-pointer'
      );

      const handleMouseEnterInteractive = () => {
        cursorDotRef.current?.classList.add('hover');
        cursorOutlineRef.current?.classList.add('hover');
      };

      const handleMouseLeaveInteractive = () => {
        cursorDotRef.current?.classList.remove('hover');
        cursorOutlineRef.current?.classList.remove('hover');
      };

      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnterInteractive);
        el.addEventListener('mouseleave', handleMouseLeaveInteractive);
      });
    };

    addHoverEffects();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    const animationId = requestAnimationFrame(animateOutline);

    return () => {
      document.body.style.cursor = '';
      if (style) style.remove();
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Don't render on mobile/touch devices
  if (!isActive) return null;

  return (
    <>
      <div ref={cursorDotRef} className="cursor-dot" />
      <div ref={cursorOutlineRef} className="cursor-outline" />
    </>
  );
};

export default CustomCursor;