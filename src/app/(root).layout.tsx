// (root).layout.tsxmの(root)は、意味をわかりやすくするためにつけている名前
// ファイルベースルーティングにはファイル名自体に意味がある
// 情報を追加するにはこのようにする必要がある

import "./global.css";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import ConvexClientProvider from "./ConvexClientProvider";

export default function RootLayout({
// 引数:
  pageName,
  children,
// 型定義:
// React.PropsWithChildren は、children プロパティを含む型を作成するためのユーティリティ型
// (ユーティリティ型は、TypeScriptで提供される型の操作を簡単にするための組み込みの型)
}: React.PropsWithChildren<{
  pageName: React.ReactNode; // pageName が React.ReactNode 型(Reactコンポーネントがレンダリングできるすべての要素（文字列、数値、React要素、配列、フラグメントなど))であることを指定
}>) {
  return (
    <html lang="ja">
      <body>
      {/* ConvexClientProviderでchildrenを囲むことで、Convexクライアントを囲んでいる範囲(すべてのページ)で利用することが可能 */}
        <ConvexClientProvider>
          <div className="flex flex-col min-h-screen">


            <Header pageName={pageName} />
            <main className="flex-grow">{children}</main>
            <Footer />


          </div>
        </ConvexClientProvider>
      </body>
    </html>
  );
}