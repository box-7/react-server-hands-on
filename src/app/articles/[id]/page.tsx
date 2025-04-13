"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
import { useEffect, useState } from "react";
// マークダウンを利用するためのライブラリ
import type MDEditorType from "@uiw/react-md-editor";

export default function ArticlePage({ id }: { id: string }) {
        const article = useQuery(api.articles.getById, {
                // ConvexのTypeScript型で、特定のテーブル（この場合は "articles"）のドキュメントIDを表す
                id: id as Id<"articles">,
        });
        const incrementViewCount = useMutation(api.articles.incrementViewCount);
        const [MDEditor, setMDEditor] = useState<typeof MDEditorType | null>(null);

        useEffect(() => {
                // 動的インポートという方法でライブラリをインポート
                // MDEditorがクライアントサイドでインポートしないとエラーになるため、動的インポートを使用
                // 完全にクライアントサイドのときのみにインポートする
                import("@uiw/react-md-editor").then((mod) => {
                        setMDEditor(mod.default);
                });

                incrementViewCount({ id: id as Id<"articles"> });
        }, [incrementViewCount, id]);

        if (!article || !MDEditor) {
                return (
                        <div className="min-h-screen flex items-center justify-center">
                                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-teal-500"></div>
                        </div>
                );
        }

        // console.log("mde", MDEditor);

        return (
                <div className="max-w-3xl mx-auto px-4 py-8">
                        <div className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900">
                                        記事詳細ページ
                                        (CSR クライアントサイドレンダリング)
                                </h2>
                                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                        {article.title}
                                </h1>
                                <div className="flex items-center space-x-4">
                                        <div className="flex items-center">
                                                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-medium">
                                                        {article.author.charAt(0)}
                                                </div>
                                                <div className="ml-3">
                                                        <div className="font-medium text-gray-900">{article.author}</div>
                                                        <div className="text-sm text-gray-500 flex">
                                                                <div>
                                                                        <span className="mr-2">Published on</span>
                                                                        {new Date(article.createdAt).toLocaleDateString("ja-JP", {
                                                                                year: "numeric",
                                                                                month: "long",
                                                                                day: "numeric",
                                                                        })}
                                                                </div>
                                                                <div className="text-gray-500">
                                                                        ・ {article.viewCount} views
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>

                        <div data-color-mode="light" className="prose max-w-none">
                                <MDEditor.Markdown source={article.description} />
                        </div>
                </div>
        );
}