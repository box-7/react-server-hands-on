// Convex のバリデーションライブラリから v オブジェクトをインポート
// v オブジェクト
// 引数やデータのバリデーションを行うためのさまざまなユーティリティ関数を提供
// クエリやミューテーションの引数が特定の型や条件を満たしているかどうかを検証
import { v } from "convex/values";

// queryはGetリクエストで使う
// mutationはPOSTリクエストで使う
import { mutation, query } from "./_generated/server";
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
//       .sort((a, b) => b.viewCount - a.viewCount)
      .sort((a, b) => (b.viewCount ?? 0) - (a.viewCount ?? 0))
      // limit がある場合、その値を使用して配列の最初から limit の位置までの要素を抽出
      // limit がない場合（null または undefined の場合）、デフォルトで最初から10個の要素を抽出
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

export const insert = mutation({
        args: {
          title: v.string(),
          description: v.string(),
        },
        handler: async (ctx, { title, description }) => {
          await ctx.db.insert("articles", {
            title,
            description,
            author: "@Sicut_study",
            viewCount: 0,
          });
        },
});