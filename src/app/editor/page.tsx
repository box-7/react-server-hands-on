// クライアントコンポーネントの指定：
// "use client";を追加することで、そのファイル内のコンポーネントがクライアントサイドでレンダリングされることを示す
// クライアントサイドでのみ利用可能な機能（例えば、イベントハンドリングやブラウザAPIの使用など）が可能になる
"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useClient } from "@lazarv/react-server/client";
import { MDEditorComponent } from "../../components/MDEditorComponent";

export default function Editor() {
        // Convex関数を呼ぶためにuseMutationを使う
        const insertArticle = useMutation(api.articles.insert);
        // 内容(MDEditorの値)はコンポーネントが違うためformDataから取得できないのでステートで管理
        const [content, setContent] = useState("");
        const { navigate } = useClient();

        const handleAddArticle = async (formData: FormData) => {
                const title = formData.get("title") as string;
                await insertArticle({
                        title,
                        description: content,
                });

                alert("Article created successfully!");
                navigate("/");
        };

        return (
                <div className="max-w-3xl mx-auto px-4 py-8" data-color-mode="light">
                        <h1 className="text-3xl font-bold mb-8">Create New Article</h1>
                        <form
                                // @ts-expect-error Server Actions are not yet supported in types
                                action={handleAddArticle}
                                className="space-y-6"
                        >
                                <div>
                                        <label
                                                htmlFor="title"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                                Title
                                        </label>
                                        <input
                                                type="text"
                                                name="title"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                                required
                                        />
                                </div>

                                <div>
                                        <label
                                                htmlFor="content"
                                                className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                                Content
                                        </label>
                                        <div className="prose max-w-none">
                                        {/* MDEditorにvalueとonChangeを渡すことで、エディタの入力が変わったらonChangeが発火してcontentのステートの値が変わる */}
                                                <MDEditorComponent
                                                        value={content}
                                                        onChange={(value) => setContent(value || "")}
                                                />
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">
                                                Supports Markdown formatting. You can use **bold**, *italic*, and
                                                other Markdown syntax.
                                        </p>
                                </div>

                                <button
                                        type="submit"
                                        className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                        Publish Article
                                </button>
                        </form>
                </div>
        );
}