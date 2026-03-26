// src/styles/CustomCursor.jsx
import React, { useEffect, useRef } from 'react';
import '../styles/CustomCursor.css'; // This will import the CSS from same folder

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const outlinePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Hide default cursor on all elements
    document.body.style.cursor = 'none';
    
    // Add style to hide cursor on all interactive elements
    const style = document.createElement('style');
    style.textContent = `
      * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

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

    const handleMouseLeave = () => {
      cursorDotRef.current?.classList.add('hidden');
      cursorOutlineRef.current?.classList.add('hidden');
    };

    const handleMouseEnter = () => {
      cursorDotRef.current?.classList.remove('hidden');
      cursorOutlineRef.current?.classList.remove('hidden');
    };

    // Smooth follow animation for outline
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

    // Add hover effects to interactive elements
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

    // Initial hover effects
    addHoverEffects();

    // Event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Start animation
    const animationId = requestAnimationFrame(animateOutline);

    // Cleanup
    return () => {
      document.body.style.cursor = '';
      document.head.removeChild(style);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Re-attach hover effects when DOM changes (for dynamic content)
  useEffect(() => {
    const observer = new MutationObserver(() => {
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
        el.removeEventListener('mouseenter', handleMouseEnterInteractive);
        el.removeEventListener('mouseleave', handleMouseLeaveInteractive);
        el.addEventListener('mouseenter', handleMouseEnterInteractive);
        el.addEventListener('mouseleave', handleMouseLeaveInteractive);
      });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={cursorDotRef} className="cursor-dot" />
      <div ref={cursorOutlineRef} className="cursor-outline" />
    </>
  );
};

export default CustomCursor;