/// <reference types="vite/client" />

// TypeScriptの型定義参照ディレクティブ
// Viteが提供するクライアント側の型定義を参照することにより、Viteの環境で利用可能な型情報がTypeScriptコンパイラに認識される
// Viteの型定義には、様々なファイル拡張子（.css, .svg, .png など）のインポートを許可する設定が含まれ、TypeScriptがCSSファイルのインポートを理解できるようになる
// Viteが提供する他のグローバル型定義（例：import.meta.hot for HMR）も利用可能になる