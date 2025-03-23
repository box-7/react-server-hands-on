import { ArrowLeft, RefreshCw } from "lucide-react";
import { Link } from "@lazarv/react-server/navigation";
import { PopularArticleList } from "../../components/PopularArticleList";
import { invalidate } from "@lazarv/react-server";

type ArticleJson = {
        id: string;
        title: string;
        description: string;
        author: string;
        createdAt: number;
        viewCount: number;
};

const getArticles = async () => {
        "use cache; ttl=20; tags=articles";
        const response = await fetch("http://localhost:3000/api/articles/blogs?limit=50");
        const data = await response.json();
        return data;
};

// リフレッシュボタンを押した時の挙動
const refreshArticles2 = async () => {
        // use server は、サーバーサイドでのみ実行されることを示す
        // npm run start でサーバーを起動している場合、サーバーサイドでのみ実行される
        "use server";
        // invalidate 関数は、キャッシュを手動で無効化するために使用
        invalidate(getArticles);
};

export default async function Popular() {
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
                                {/* 追加 */}
                                <form
                                        // @ts-expect-error Server Actions are not yet supported in types
                                        action={async () => {
                                                "use server";
                                                await refreshArticles2();
                                        }}
                                >
                                        <button
                                                className="flex items-center px-4 py-2 text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                                                type="submit"
                                        >
                                                <RefreshCw className="w-4 h-4 mr-2" />
                                                Refresh
                                        </button>
                                </form>
                        </div>
                        <div className="mb-12">
                                <h1 className="text-3xl font-bold text-gray-900 mb-8">
                                        Latest Articles
                                </h1>
                                <PopularArticleList articles={articles} />
                        </div>
                </div>
        );
}