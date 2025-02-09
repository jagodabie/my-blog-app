"use client";

import { Picture } from "@/components/Picture/Picture";
import { useArticles } from "@/hooks/useArticles";
import { Article, Section } from "@/interfaces";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";

import "./index.css";
import { Loading } from "@/components/Loading/Loading";
import { ErrorMessage } from "@/components/Error/Error";

const ArticlePage = () => {
  const { articleId } = useParams<{ articleId: string }>();

  const { data, loading, error } = useArticles({ id: articleId });
  const article = data as Article | null;

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (!article) return notFound();

  return (
    <div className="article-page">
      <h1 className="article-page__title">{article.title}</h1>
      <p className="article-page__description">{article.description}</p>

      <div className="article-page__article">
        {article?.sections.length > 0 &&
          article.sections.map((section: Section, index) => (
            <section
              key={section.id ?? `section-${index}`}
              className="article-page__section"
            >
              <h2 className="article-page__section-heading">
                {section.heading}
              </h2>
              <p className="article-page__section-content">{section.content}</p>
            </section>
          ))}
      </div>
      <div className="article-page__picture">
        <Picture src="/picture/dummyPic.png" alt={article.title} priority />
      </div>
    </div>
  );
};

export default ArticlePage;
