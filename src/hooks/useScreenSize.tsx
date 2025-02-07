"use client";
import { useState, useEffect } from "react";

export const useScreenSize = (): {
  isMobile: boolean;
  isSmallDesktop: boolean;
} => {
  const getViewportWidth = (): number =>
    typeof window !== "undefined"
      ? window.visualViewport?.width ?? window.innerWidth
      : 0;

  const [screenSize, setScreenSize] = useState<{
    isMobile: boolean;
    isSmallDesktop: boolean;
  }>(() => ({
    isMobile: getViewportWidth() < 768,
    isSmallDesktop: getViewportWidth() < 1024,
  }));

  useEffect(() => {
    const handleResize = () => {
      const width = getViewportWidth();
      setScreenSize({
        isMobile: width < 768,
        isSmallDesktop: width < 1024,
      });
    };

    window.visualViewport?.addEventListener("resize", handleResize);
    return () =>
      window.visualViewport?.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};
