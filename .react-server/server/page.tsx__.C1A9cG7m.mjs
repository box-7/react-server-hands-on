import{jsxs as z,Fragment as G,jsx as t}from"react/jsx-runtime";import{g as h,T as Y,h as W,U as J,S as T,V as K,W as Q,c as w}from"./@lazarv/react-server.Bhr5inAZ.mjs";import{u as m}from"./entrypoint.GBmmp3u4.mjs";import R from"./(root).page.ZA6Qa1eX.mjs";import Z from"./(blogsPageName).page.CrjVpNhf.mjs";import{_ as ee}from"./page.CJuumVtk.mjs";import"node:path";import"node:url";import"node:async_hooks";import"node:worker_threads";import"picocolors";import"react";import"react-server-dom-webpack/server.edge";const I={"/Users/torimototaishi/programming/tech-article-app/src/app/@pageName/(root).page.tsx":R,"/Users/torimototaishi/programming/tech-article-app/src/app/blogs/@pageName/(blogsPageName).page.tsx":Z},{default:D,...b}=ee,F=b?.frontmatter?.ttl??b?.frontmatter?.revalidate??b?.ttl??b?.revalidate,te=typeof F=="number"?Y(D,F):D,{default:$,...x}=await import("./(root).layout.D5hdoUuG.mjs"),X=x?.frontmatter?.ttl??x?.frontmatter?.revalidate??x?.ttl??x?.revalidate,re=typeof X=="number"?Y($,X):$;let j=null,O=null;function he(){if(!j||!O){const u=[...h(W)??[]],g=h(J),c=[...h(T)??[]],o=h(K),p=h(Q);if(p){const n=Object.values(p.server).find(a=>a.src?.endsWith("articles/[id]/page.tsx")||a.src?.startsWith("virtual:")&&a.src?.includes("articles/[id]/page.tsx"))?.file;u.unshift(...g?.(n)),c.unshift(...o?.(n));const i=Object.values(p.server).find(a=>a.src?.endsWith("(root).layout.tsx")||a.src?.startsWith("virtual:")&&a.src?.includes("articles/[id]/page.tsx"))?.file;u.unshift(...g?.(i)),c.unshift(...o?.(i));const f=Object.values(p.server).find(a=>a.src?.endsWith("@pageName/(root).page.tsx"))?.file;u.unshift(...g?.(f)),c.unshift(...o?.(f));const N=Object.values(p.server).find(a=>a.src?.endsWith("blogs/@pageName/(blogsPageName).page.tsx"))?.file;u.unshift(...g?.(N)),c.unshift(...o?.(N))}O=[...new Set(u)],j=[...new Set(c)]}w(W,O),w(T,j)}const Ne=u=>{const g={pageName:[["/Users/torimototaishi/programming/tech-article-app/src/app/@pageName/(root).page.tsx","/","pageName","page"],["/Users/torimototaishi/programming/tech-article-app/src/app/blogs/@pageName/(blogsPageName).page.tsx","/blogs","pageName","page"]]},c={},o={},p={},n=Object.fromEntries(Object.entries(g).map(([e,r],ae)=>{const y=[],q=r.filter(([,,,d])=>d==="page");for(const[d,l,_,S]of q){const U=m(l,{exact:!0});if(U){y.push({src:d,type:S,path:l,params:U,loading:typeof loadingComponents=="object"?loadingComponents.get(c[_]?.find(([,s,,])=>l===s)?.[0]??c[_]?.find(([,s])=>m(s))?.[0]??null)??null:null,fallback:typeof fallbackComponents=="object"?fallbackComponents.get(p[_]?.find(([,s,,])=>l===s)?.[0]??p[_]?.find(([,s])=>m(s))?.[0]??null)??null:null,error:typeof errorBoundaryComponents=="object"?errorBoundaryComponents.get(o[_]?.find(([,s,,])=>l===s)?.[0]??o[_]?.find(([,s])=>m(s))?.[0]??null)??null:null});break}}if(y.length===0){const d=r.find(([,,l,_])=>e===l&&_==="default");if(d){const[l,_,,S]=d;y.push({src:l,type:S,path:_,params:m(_,{exact:!1})})}}return[e,y.length>0?y:null]})),i=n.pageName?.find(e=>e.path==="/"),f=I[i?.src],N=i?.error,a=i?.fallback,v=i?.loading,A=N?({key:e,...r})=>t(ErrorBoundary,{component:N,fallback:a?t(a,{}):v?t(v,{}):null,children:t(f,{...r})},e):v?({key:e,...r})=>t(Suspense,{fallback:t(v,{}),children:t(f,{...r})},e):({key:e,...r})=>t(f,{...r},e),L=typeof errorBoundaryComponents=="object"?errorBoundaryComponents.get(o.pageName?.find(([,e,,])=>e==="/")?.[0]??o.pageName?.find(([,e])=>m(e))?.[0]??null)??null:null,C=n.pageName?.find(e=>e.path==="/blogs"),k=I[C?.src],B=C?.error,M=C?.fallback,E=C?.loading,H=B?({key:e,...r})=>t(ErrorBoundary,{component:B,fallback:M?t(M,{}):E?t(E,{}):null,children:t(k,{...r})},e):E?({key:e,...r})=>t(Suspense,{fallback:t(E,{}),children:t(k,{...r})},e):({key:e,...r})=>t(k,{...r},e),P=typeof errorBoundaryComponents=="object"?errorBoundaryComponents.get(o.pageName?.find(([,e,,])=>e==="/blogs")?.[0]??o.pageName?.find(([,e])=>m(e))?.[0]??null)??null:null,V=h(T);return z(G,{children:[V.map(e=>{const r=e?.id||e;return t("link",{rel:"stylesheet",href:r,precedence:"default"},r)}),t(re,{pageName:[n.pageName?.find(e=>e.path==="/")&&A({key:"0_pageName_0",...n.pageName?.find(e=>e.path==="/")?.params??{}})||(L?t(ErrorBoundary,{component:L}):null),n.pageName?.find(e=>e.path==="/blogs")&&H({key:"0_pageName_1",...n.pageName?.find(e=>e.path==="/blogs")?.params??{}})||(P?t(ErrorBoundary,{component:P}):null)],children:t(te,{...b,...u})})]})};export{Ne as default,he as init$};
