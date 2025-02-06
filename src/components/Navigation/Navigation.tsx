"use client";

import { usePathname, useRouter } from "next/navigation";
import { BackIcon } from "@/assets/BackIcon";
import "./index.css";

export const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <nav className="navigation">
      {pathname !== "/" && (
        <span
          className="navigation-icon"
          aria-label="Back"
          role="button"
          onClick={handleGoBack}
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleGoBack()}
        >
          <BackIcon />
        </span>
      )}
      <h1 aria-label="Blog Edukacyjny" className="navigation-text">
        Blog Edukacyjny
      </h1>
    </nav>
  );
};
