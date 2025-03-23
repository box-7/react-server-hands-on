// src/app/api/articles/GET.popular.server.ts
// ファイル名にHTTPメソッド（GET、POSTなど）が含まれている場合、そのメソッドに対応するリクエストのみが処理

import { ConvexClient } from "convex/browser";
import { api } from "../../../../convex/_generated/api";

// VITE_CONVEX_URL　サーバーやAPIのURLを指し、ConvexClientの接続先を指定
const convexUrl = import.meta.env.VITE_CONVEX_URL;
if (!convexUrl) {
        throw new Error("VITE_CONVEX_URL is not defined");
}

// ConvexClientクラスのインスタンスを作成
const client = new ConvexClient(convexUrl);

// request: Requestは、HTTPリクエストの情報を含むオブジェクト
export default async function GetPopular(request: Request) {
        // console.log("request url", request.url);

        //  JS標準のURL オブジェクトを作成
        // リクエストのURLを解析して、クエリパラメータなどにアクセスできる
        const url = new URL(request.url);

        // console.log("url", url);

        // url URL {
        //         href: 'http://localhost:3000/api/articles/popular?limit=10',
        //         origin: 'http://localhost:3000',
        //         protocol: 'http:',
        //         username: '',
        //         password: '',
        //         host: 'localhost:3000',
        //         hostname: 'localhost',
        //         port: '3000',
        //         pathname: '/api/articles/popular',
        //         search: '?limit=10',
        //         searchParams: URLSearchParams { 'limit' => '10' },
        //         hash: ''
        //       }

        // url.searchParams.get("limit") を使用
        // URLのクエリパラメータから limit の値を取得
        // limit が存在する場合、その値を数値に変換
        // 存在しない場合はデフォルト値として 20 を使用

        // searchParams: URLSearchParams { 'limit' => '10' },から、10を取得する
        const limit = url.searchParams.get("limit")
                ? Number(url.searchParams.get("limit"))
                : 20;


        // ConvexClientの接続先を確認
        const convexUrl = process.env.CONVEX_URL || import.meta.env.VITE_CONVEX_URL;
        if (!convexUrl) {
                throw new Error("Convex URL is not defined");
        }

        // ConvexClientクラスのインスタンスであるclientの、queryメソッドを使用
        // APIエンドポイントの指定、パラメータの指定、非同期処理
        // import { api } で得たapiから、api.articles.getPopular クエリを実行し、人気の記事を取得
        // api.articles.getPopular　
        // convex/articles.tsで定義　Convexのコンソールで確認可能
        const articles = await client.query(api.articles.getPopular, {
        // limit パラメータをクエリに渡して、取得する記事の数を制限
                limit,
        });

        // new Response　新しい Response オブジェクトを作成
        const response = new Response(JSON.stringify(articles))
        // console.log("response", response);
        return response;
}
