'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function TypingText() {
  const textRef = useRef<HTMLSpanElement>(null);
  const fullText = "Interactive Code Editor";

  useEffect(() => {
    const span = textRef.current;
    if (!span) return;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    // Typing effect
    for (let i = 0; i <= fullText.length; i++) {
      tl.to(span, {
        duration: 0.1,
        onUpdate: () => {
          span.innerText = fullText.slice(0, i);
        },
      });
    }

    // Erasing effect
    for (let i = fullText.length; i >= 0; i--) {
      tl.to(span, {
        duration: 0.03,
        onUpdate: () => {
          span.innerText = fullText.slice(0, i);
        },
      });
    }
  }, []);

  return (
    <span
      ref={textRef}
      className="block text-xs text-blue-400/60 font-medium font-mono"
    ></span>
  );
}
