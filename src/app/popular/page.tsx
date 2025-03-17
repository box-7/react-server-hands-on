// SSG(StaticSiteGeneration)
// ビルド時に1度だけしかHTMLを生成しないという特徴がある

// SSRよりも初期画面が早く表示されてサーバー負荷も少ない
// 1度しか生成されないのでリアルタイム性は失われる

import { ArrowLeft } from "lucide-react";
import { Link } from "@lazarv/react-server/navigation";
import { PopularArticleList } from "../../components/PopularArticleList";
import { Suspense } from "react";

type ArticleJson = {
  id: string;
  title: string;
  description: string;
  author: string;
  createdAt: number;
  viewCount: number;
};

const getArticles = async () => {
  const response = await fetch(
    "http://localhost:3000/api/articles/popular?limit=50",
  );
  const data = await response.json();
  return data;
};

export default async function Popular() {
  // ArticleJson[]:
  // ArticleJson 型の配列を意味する
  // as:
  // 型アサーションを行うためのキーワードでawait getArticles() の結果を ArticleJson[] 型として扱う
  const articles = (await getArticles()) as ArticleJson[];

  if (!articles) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <Link
          to="/"
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </div>
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Popular Articles
        </h1>
        <Suspense fallback={<div>Loading...</div>}>
          <PopularArticleList articles={articles} />
        </Suspense>
      </div>
    </div>
  );
}
