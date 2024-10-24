import { useEffect, useState } from "react";

const useDimension = () => {
  const [dimension, setDimension] = useState({
    windowWidth: 0,
    windowHeight: 0,
  });

  const updateDimension = () => {
    setDimension({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    // set initial dimension
    updateDimension();

    // change dimension on resize
    window.addEventListener("resize", updateDimension);

    // cleanup
    return () => window.removeEventListener("resize", updateDimension);
  }, []);

  return dimension;
};

export default useDimension;
