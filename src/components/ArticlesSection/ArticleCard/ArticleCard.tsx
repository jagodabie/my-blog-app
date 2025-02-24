import { Article } from "@/interfaces";
import "./index.css";
import { ArrowIcon } from "@/assets/ArrowIcon";
import { categoryColorMap } from "@/lib";
import Link from "next/link";

export const ArticleCard = ({ article }: { article: Article }) => {
  const { id, title, description, date, category } = article;

  return (
    <div className="article-card">
      <span
        style={{ color: categoryColorMap[category] }}
        className="article-card__category"
      >
        {category}
      </span>
      <h2 className="article-card__title">{title}</h2>
      <span className="article-card__date">
        {date.split("-").reverse().join(".")}
      </span>
      <p className="article-card__description">{description}</p>
      <Link href={`/${id}`} passHref>
        <div className="article-card__see-more">
          <div className="article-card__see-more-text">zobacz więcej</div>
          <div className="article-card__see-more-icon">
            <ArrowIcon />
          </div>
        </div>
      </Link>
    </div>
  );
};
