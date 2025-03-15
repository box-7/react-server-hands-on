// (root).layout.tsxmの(root)は、意味をわかりやすくするためにつけている名前
// ファイルベースルーティングにはファイル名自体に意味がある
// 情報を追加するにはこのようにする必要がある

import { Footer } from "../components/Footer";
import Header from "../components/Header";
import "./global.css";
export default function RootLayout({
  // pageName  src/app/@pageNameのpage.tsxを取得
  pageName,
  children,
}: React.PropsWithChildren<{
  // pageName  src/app/@pageNameのpage.tsxを取得
  pageName: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <div className="flex flex-col min-h-screen">
        {/* pageNameをHeaderコンポーネントに渡して埋め込み */}
          <Header pageName={pageName} />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
