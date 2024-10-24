import { useState, useEffect } from "react";

// Custom hook: useScrollPosition
const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  const updatePosition = () => setScrollY(window.scrollY);

  useEffect(() => {
    // set initial position
    updatePosition();

    // change position on scroll
    window.addEventListener("scroll", updatePosition);

    // Cleanup
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollY;
};

export default useScrollPosition;
