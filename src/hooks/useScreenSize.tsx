"use client";
import { useState, useEffect } from "react";

export const useIsMobile = (): { isMobile: boolean } => {
  const getViewportWidth = (): number =>
    typeof window !== "undefined"
      ? window.visualViewport?.width ?? window.innerWidth
      : 0;

  const [isMobile, setIsMobile] = useState<boolean>(
    () => getViewportWidth() <= 768
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(getViewportWidth() <= 768);

    window.visualViewport?.addEventListener("resize", handleResize);
    return () =>
      window.visualViewport?.removeEventListener("resize", handleResize);
  }, []);

  return { isMobile };
};
