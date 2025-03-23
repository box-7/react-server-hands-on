import { Link } from "@lazarv/react-server/navigation";
import { ArrowRight, Clock } from "lucide-react";
import { LatestArticleList } from "../components/LatestArticleList";
import { PopularArticleList } from "../components/PopularArticleList";

type ArticleJson = {
        id: string;
        title: string;
        description: string;
        author: string;
        createdAt: number;
        viewCount: number;
};

const getArticles = async () => {
        // fetch は、JavaScriptの標準APIで、ネットワークリクエストを行うために使用される
        const response = await fetch(
                // 作成したAPIを叩く
                // src/app/api/articles/GET.popular.server.tsを呼ぶ
                "http://localhost:3000/api/articles/popular?limit=10",
        );
// データはない
// console.log("response777", response);

// // レスポンスのステータスを表示
// console.log("Status:", response.status);

// // レスポンスのステータステキストを表示
// console.log("Status Text:", response.statusText);

// // レスポンスのヘッダーを表示
// console.log("Headers:", response.headers);

// // レスポンスのURLを表示
// console.log("URL:", response.url);

// // レスポンスの本文を表示（JSON形式に変換する前）　エラーになる
// const responseText = await response.text();
// console.log("Response Text:", responseText);

// // レスポンスをjson形式に変換
// const data2 = JSON.parse(responseText);
// console.log("Data:", data2);

        // レスポンスをjson形式に変換
        const data = await response.json();
        // console.log("data", data);
        return data;
};

export default async function Home() {
        // const articles = (await getArticles()) as ArticleJson[]; は、非同期関数 getArticles を呼び出す
        // その結果を ArticleJson 型の配列として扱う
        const articles = (await getArticles()) as ArticleJson[];

        return (
                <div className="max-w-5xl mx-auto px-4 py-12">
                        <div className="text-center mb-16">
                                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                        Welcome to TechShare
                                </h1>
                                <p className="text-xl t ext-gray-600 mb-8">
                                        Discover and share valuable insights in technology.
                                </p>
                                <Link
                                        to="/editor"
                                        className="inline-flex items-center bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition duration-300"
                                >
                                        Start Writing <ArrowRight className="ml-2" size={20} />
                                </Link>
                        </div>

                        {/* Latest Articles */}
                        <div className="mb-12">
                                {/* <div className="flex items-center mb-8"> */}
                                <div className="flex items-center justify-between mb-8">
                                        <div className="flex items-center">
                                                <Clock size={24} className="text-gray-600 mr-2" />
                                                <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
                                        </div>
                                        <Link
                                                        to="/blogs"
                                                        className="inline-flex items-center text-teal-600 hover:text-teal-700"
                                                >
                                                View all
                                                <ArrowRight className="w-5 h-5 ml-1" />
                                        </Link>
                                </div>

                                <LatestArticleList />
                        </div>

                        {/* Popular Articles */}
                        <div className="mb-12">
                                <div className="flex items-center justify-between mb-8">
                                        <div className="flex items-center">
                                                <Clock size={24} className="text-gray-600 mr-2" />
                                                <h2 className="text-2xl font-bold text-gray-900">
                                                        Popular Articles
                                                </h2>
                                        </div>

                                        <Link
                                                to="/popular"
                                                className="inline-flex items-center text-teal-600 hover:text-teal-700"
                                        >
                                                View all
                                                <ArrowRight className="w-5 h-5 ml-1" />
                                        </Link>
                                </div>

                                {/* PopularArticleListを呼び出し */}
                                {/* articlesがPopularArticleListに渡される popularを呼ばれた時とは異なる */}
                                <PopularArticleList articles={articles} />
                        </div>
                </div>
        );
}

// "use client";

// // ConvexはuseQueryを使って先程作ったgetを呼び出すことが可能
// // postメソッドなどでmutationならuseMutationを使う
// import { useQuery } from "convex/react";
// import "./global.css";
// import { api } from "../../convex/_generated/api";
// import { useEffect, useState } from "react";
// import { Article } from "../domain/Article";

// export default function Home() {
//   const articlesData = useQuery(api.articles.get);
//   const [articles, setArticles] = useState<Article[]>([]);

//   useEffect(() => {
//     if (!articlesData) return;
//     const articleList = articlesData.map((article) => {
//       return new Article(
//         article.id,
//         article.title,
//         article.description,
//         article.author,
//         article.createdAt,
//         article.viewCount
//       );
//     });
//     setArticles(articleList);
//   }, [articlesData]);

//   return (
//     <div>
//       {articles.map((article) => {
//         return (
//           <div key={article.id}>
//             <h1>{article.title}</h1>
//             <p>{article.description}</p>
//             <p>{article.author}</p>
//             <p>{article.createdAt}</p>
//             <p>{article.viewCount}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
