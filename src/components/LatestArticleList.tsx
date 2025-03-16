// ファイルがクライアントサイドで実行されることを明示的に指定
"use client";

// import { api }:
// 名前付きインポートを示す  api という名前のエクスポートをインポート
// 名前付きインポートは、モジュールが複数のエクスポートを持つ場合に使用される
// from "../../convex/_generated/api":
// インポート元のモジュールのパスを示す
// ../../convex/_generated/api は、現在のファイルから見た相対パスで、_generated ディレクトリ内の api モジュールを指す
import { api } from "../../convex/_generated/api";
import { useQuery } from "convex/react";
import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import { Article } from "../domain/Article";

export const LatestArticleList = () => {
// ConvexはuseQueryを使って、convex/articles.txのgetメソッドを呼び出す
  const articlesData = useQuery(api.articles.get);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    if (!articlesData) return;

    const articles = articlesData?.map((a) => {
// Convexから取得したデータを Articleクラスに変換して使う
      return new Article(
        a.id,
        a.title,
        a.description,
        a.author,
        a.createdAt,
        a.viewCount
      );
    });
    setArticles(articles);
  }, [articlesData]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <span key={article.id}>
          <ArticleCard article={article} />
        </span>
      ))}
    </div>
  );
};