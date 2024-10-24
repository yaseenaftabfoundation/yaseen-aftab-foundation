import { useEffect, useState } from "react";

const useElementDimension = (elementRef) => {
  const [dimension, setDimension] = useState({
    elementWidth: 0,
    elementHeight: 0,
    elementTop: 0,
    elementBottom: 0,
    elementLeft: 0,
    elementRight: 0,
  });

  useEffect(() => {
    const updateDimension = () => {
      if (!elementRef.current) return;

      const { width, height, top, bottom, left, right } = elementRef.current.getBoundingClientRect();

      setDimension({
        elementWidth: width,
        elementHeight: height,
        elementTop: top,
        elementBottom: bottom,
        elementLeft: left,
        elementRight: right,
      });
    };

    // set initial dimension
    updateDimension();

    // update dimension on resize
    window.addEventListener("resize", updateDimension);

    // cleanup
    return () => window.removeEventListener("resize", updateDimension);
  }, [elementRef]);

  return dimension;
};

export default useElementDimension;
