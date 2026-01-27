// src/hooks/useRevealOnScroll.js
import { useEffect, useRef, useState } from "react";

export default function useRevealOnScroll(options = {}) {
  const { threshold = 0.2, rootMargin = "0px 0px -10% 0px" } = options;

  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      const id = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  // ⬇️ RETURN AS TUPLE
  return [elementRef, isVisible];
}
