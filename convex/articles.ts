// import { api }:
// 名前付きインポートを示す  api という名前のエクスポートをインポート
// 名前付きインポートは、モジュールが複数のエクスポートを持つ場合に使用される
// from "../../convex/_generated/api":
// インポート元のモジュールのパスを示す
// ../../convex/_generated/api は、現在のファイルから見た相対パスで、_generated ディレクトリ内の api モジュールを指す
import { query } from "./_generated/server";
// Convex のバリデーションライブラリから v オブジェクトをインポートするための文
// v オブジェクトは、引数やデータのバリデーションを行うためのさまざまなユーティリティ関数を提供
// v オブジェクトを使用して、クエリやミューテーションの引数が特定の型や条件を満たしているかどうかを検証する
import { v } from "convex/values";

// queryはGetリクエストで使う
export const get = query({
  // get クエリは引数を受け取らず、データベースから articles コレクションのすべてのドキュメントを取得して返す
  args: {},
  // ConvexClientProviderで囲んでいる範囲ではctxを受け取ることが可能
  // ctxを使うことでDB操作できる
  handler: async (ctx) => {
    const articles = await ctx.db.query("articles").collect();

    const sortedArticles = articles.sort(
      (a, b) => b._creationTime - a._creationTime,
    );

    return sortedArticles.map((article) => {
      return {
        id: article._id,
        title: article.title,
        description: article.description,
        author: article.author,
        createdAt: article._creationTime,
        viewCount: article.viewCount,
      };
    });
  },
});

// 追加
export const getPopular = query({
  // get クエリはオプションの limit 引数を受け取る
  // limit 引数が提供された場合、その値を使用して取得する記事の数を制限
  // 提供されない場合は、すべての記事を取得
  args: {
    // limit 引数がオプションであり、数値型であることを指定
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { limit } = args;
    const articles = await ctx.db.query("articles").collect();

    const sortedArticles = articles
      .sort((a, b) => b.viewCount - a.viewCount)
      // limit が指定されている場合、その値を使用して配列の最初から limit の位置までの要素を抽出
      // limit が指定されていない場合（null または undefined の場合）、デフォルトで最初から10個の要素を抽出
      .slice(0, limit ?? 10);
    return sortedArticles.map((article) => {
      return {
        id: article._id,
        title: article.title,
        description: article.description,
        author: article.author,
        createdAt: article._creationTime,
        viewCount: article.viewCount,
      };
    });
  },
});
