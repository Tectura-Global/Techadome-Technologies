// hooks/useLenis.js
import { useEffect } from 'react';
import Lenis from 'lenis';

let lenisInstance = null;

export function useLenis() {
  useEffect(() => {
    if (lenisInstance) return; // already initialized

    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // Only destroy on full app unmount (rare), not on every re-render
      // lenisInstance.destroy();
      // lenisInstance = null;
    };
  }, []);

  return lenisInstance;
}