'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function AnimatedCodeShare() {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1 });

    tl.to(el, {
      scale: 2,
      duration: 1,
      ease: "power2.out",
    }).to(el, {
      scale: 1.1,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
  }, []);

  return (
    <span
      ref={textRef}
      className="text-lg font-semibold bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 text-transparent bg-clip-text origin-center inline-block"
    >
      C
    </span>
  );
}
