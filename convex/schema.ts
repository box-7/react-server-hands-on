import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  articles: defineTable({
    // Convexでは以下に加えてデフォルトで「id」と「作成日」を追加
    title: v.string(),
    description: v.string(),
    author: v.string(),
    viewCount: v.number(),
  }),
});
