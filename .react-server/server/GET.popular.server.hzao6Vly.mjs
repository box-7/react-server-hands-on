import{ConvexClient as s}from"convex/browser";import{a as i}from"./src/app/editor/page.BXiOx3H1.mjs";import"convex/server";import"react-server-dom-webpack/server.edge";const n="https://precious-husky-190.convex.cloud",c=new s(n);async function m(e){const t=new URL(e.url),r=t.searchParams.get("limit")?Number(t.searchParams.get("limit")):20;process.env.CONVEX_URL;const o=await c.query(i.articles.getPopular,{limit:r});return new Response(JSON.stringify(o))}export{m as default};
