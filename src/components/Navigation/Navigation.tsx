"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { BackIcon } from "@/assets/BackIcon";
import "./index.css";
import { Favorite } from "../Favorite/Favorite";

export const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { articleId } = useParams<{ articleId: string }>();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <nav className="navigation">
      <div className="navigation__container">
        {pathname !== "/" && (
          <div
            className="navigation__icon"
            aria-label="Back"
            role="button"
            onClick={handleGoBack}
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && handleGoBack()}
          >
            <BackIcon />
          </div>
        )}

        <p aria-label="Blog Edukacyjny" className="navigation__text">
          Blog Edukacyjny
        </p>
      </div>

      {articleId && <Favorite articleId={articleId} />}
    </nav>
  );
};
