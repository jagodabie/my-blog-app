"use client";

import { Favorite } from "@/components/Favorite/Favorite";
import { Picture } from "@/components/Picture/Picture";
import { useArticles } from "@/hooks/useArticles";
import { Article, Section } from "@/interfaces";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";

import "./index.css";

const ArticlePage = () => {
  const { articleId } = useParams<{ articleId: string }>();

  const { data, loading, error } = useArticles({ id: articleId });
  const article = data as Article | null;

  if (loading) return <p className="article-page__loading">Loading...</p>;
  if (error) return <p className="article-page__error">Error: {error}</p>;
  if (!article) return notFound();

  return (
    <div className="article-page">
      <Favorite articleId={article.id} />
      <h1 className="article-page__title">{article.title}</h1>
      <p className="article-page__description">{article.description}</p>

      {article?.sections.length > 0 &&
        article.sections.map((section: Section, index) => (
          <section
            key={section.id ?? `section-${index}`}
            className="article-page__section"
          >
            <h2 className="article-page__section-heading">{section.heading}</h2>
            <p className="article-page__section-content">{section.content}</p>
          </section>
        ))}
      <div className="article-page__picture">
        <Picture src="/picture/dummyPic.png" alt={article.title} priority />
      </div>
    </div>
  );
};

export default ArticlePage;
