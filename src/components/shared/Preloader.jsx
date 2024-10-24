"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Spinner } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import Brandmark from "./Brandmark";

const Preloader = () => {
  const [mounted, setMounted] = useState(false);

  // menu variants
  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // preloader styles
  const styles = {
    container: "bg-white fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5",
    brandmark: `h-40 mobile:h-28`,
    spinner: `h-8 w-8`,
  };

  return (
    <AnimatePresence>
      {!mounted && (
        <motion.div
          initial="open"
          animate="closed"
          exit="closed"
          transition={{ duration: 0.6, ease: "easeInOut" }}
          variants={variants}
          className={styles.container}
        >
          {/* brandmark */}
          <Brandmark styles={styles.brandmark} />
          {/* spinner */}
          <Spinner color="teal" className={styles.spinner} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
