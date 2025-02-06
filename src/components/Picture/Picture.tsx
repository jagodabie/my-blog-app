"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

import "./index.css";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

export const Picture = ({
  src,
  alt,
  priority = false,
}: ResponsiveImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setSize({ width, height });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div ref={containerRef} className="picture-wrapper">
      {size.width > 0 && size.height > 0 && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={`${size.width}px`}
          className="object-cover"
          priority={priority}
        />
      )}
    </div>
  );
};
