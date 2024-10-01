import { useEffect, useState } from "react";

export const minScroll = 50;

export function useScroll(stuckHeight: number) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [stuck, setStuck] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    setStuck(position > stuckHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    scrollPosition,
    stuck,
  };
}
