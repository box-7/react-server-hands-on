import { query } from "./_generated/server";

// queryはGetリクエストで使う
export const get = query({
  args: {},
// ConvexClientProviderで囲んでいる範囲ではctxを受け取ることが可能
// ctxを使うことでDB操作をかんたんに行うことが可能
  handler: async (ctx) => {
    const articles = await ctx.db.query("articles").collect();

    const sortedArticles = articles.sort(
      (a, b) => b._creationTime - a._creationTime
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
