import { ConvexClient } from "convex/browser";
import { api } from "../../../../convex/_generated/api";

// VITE_CONVEX_URLを読み込み
const convexUrl = import.meta.env.VITE_CONVEX_URL;
if (!convexUrl) {
  throw new Error("VITE_CONVEX_URL is not defined");
}

const client = new ConvexClient(convexUrl);

export default async function GetPopular(request: Request) {
  // request.url を使用して URL オブジェクトを作成
  // リクエストのURLを解析して、クエリパラメータなどにアクセスできる
  const url = new URL(request.url);

  // url.searchParams.get("limit") を使用して、URLのクエリパラメータから limit の値を取得
  // limit が存在する場合、その値を数値に変換します。存在しない場合はデフォルト値として 20 を使用
  const limit = url.searchParams.get("limit")
    ? Number(url.searchParams.get("limit"))
    : 20;

  // client.query を使用して、api.articles.getPopular クエリを実行し、人気の記事を取得
  // limit パラメータをクエリに渡して、取得する記事の数を制限
  // await を使用して、非同期クエリの結果を待つ
  const articles = await client.query(api.articles.getPopular, {
    limit,
  });
  return new Response(JSON.stringify(articles));
}
