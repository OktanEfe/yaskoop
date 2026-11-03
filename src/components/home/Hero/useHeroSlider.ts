import { useState, useEffect, useCallback } from 'react';

export function useHeroSlider(count: number, intervalMs = 5500, paused = false) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () => setCurrent((index) => (index + 1) % count),
    [count],
  );
  const goTo = useCallback(
    (index: number) => setCurrent(Math.min(Math.max(index, 0), count - 1)),
    [count],
  );

  useEffect(() => {
    if (count < 2 || paused) return;
    const timer = setInterval(next, intervalMs);
    return () => clearInterval(timer);
  }, [count, next, intervalMs, paused]);

  return { current, next, goTo };
}
