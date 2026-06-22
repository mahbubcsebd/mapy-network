"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({ target, suffix = "", decimals = 0, duration = 2000 }) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    const startValue = 0;

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      const current = startValue + (target - startValue) * eased;
      setValue(parseFloat(current.toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [started, target, decimals, duration]);

  return (
    <span ref={ref}>
      {decimals > 0 ? value.toFixed(decimals) : Math.floor(value)}
      {suffix}
    </span>
  );
}
