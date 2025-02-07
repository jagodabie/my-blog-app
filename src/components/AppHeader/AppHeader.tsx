"use client";
import { AppIcon } from "@/assets/AppIcon";

import "./index.css";
import { useScreenSize } from "@/hooks/useScreenSize";

export const AppHeader = () => {
  const { isMobile } = useScreenSize();
  return (
    <div className="app-header__wrapper">
      <div className="app-header">
        <div className="app-header__logo">
          <AppIcon />
        </div>
        <div className="app-header__title-container">
          <h1 className="app-header__title">ACME</h1>
          <span className="app-header__subtitle">Institute</span>
        </div>
      </div>
      {!isMobile && <span className="app-header-breadcrumbs"> - BLOG </span>}
    </div>
  );
};
