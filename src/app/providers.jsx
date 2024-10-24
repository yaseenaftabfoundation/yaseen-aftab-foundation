"use client";

import { ThemeProvider } from "@material-tailwind/react";
import { ReactLenis } from "lenis/react";

const Providers = ({ children }) => {
  return (
    <ReactLenis root options={{ wheelMultiplier: 1.2 }}>
      <ThemeProvider>{children}</ThemeProvider>
    </ReactLenis>
  );
};

export default Providers;
