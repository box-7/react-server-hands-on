"use client";

// ConvexはuseQueryを使って先程作ったgetを呼び出すことが可能
// postメソッドなどでmutationならuseMutationを使う
import { useQuery } from "convex/react";
import "./global.css";
import { api } from "../../convex/_generated/api";
import { useEffect, useState } from "react";
import { Article } from "../domain/Article";

export default function Home() {
  const articlesData = useQuery(api.articles.get);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    if (!articlesData) return;
    const articleList = articlesData.map((article) => {
      return new Article(
        article.id,
        article.title,
        article.description,
        article.author,
        article.createdAt,
        article.viewCount
      );
    });
    setArticles(articleList);
  }, [articlesData]);

  return (
    <div>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <p>{article.author}</p>
            <p>{article.createdAt}</p>
            <p>{article.viewCount}</p>
          </div>
        );
      })}
    </div>
  );
}