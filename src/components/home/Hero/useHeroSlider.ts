import { useState, useEffect, useCallback } from 'react';

export function useHeroSlider(count: number, intervalMs = 5500) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent(i => (i + 1) % count), [count]);
  const prev = useCallback(() => setCurrent(i => (i - 1 + count) % count), [count]);
  const goTo = useCallback((index: number) => setCurrent(index), []);

  useEffect(() => {
    const timer = setInterval(next, intervalMs);
    return () => clearInterval(timer);
  }, [next, intervalMs]);

  return { current, next, prev, goTo };
}
