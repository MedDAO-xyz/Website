import { useState, useEffect } from "react";

export const useIsMobile = () => {
  const MOBILE_BREAKPOINT = 768;
  const [width, setWidth] = useState<number | null>(null);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  if (width) {
    return width <= MOBILE_BREAKPOINT;
  }
  console.error(`State width not defined: [${width}]`);
  return;
};
