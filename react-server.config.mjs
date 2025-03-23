export default {
  // src/app以降でファイルベースのルーティングを設定
  // root プロパティは、React Server アプリケーションのルートディレクトリ
  // アプリケーションのエントリーポイントとして app ディレクトリを使用することを指定
  root: "src/app",
  // SSGの設定
 // ビルド時に1度だけしかHTMLを生成しない
  export(paths) {
    // スプレッド構文 ... を使用して、元の paths 配列のすべての要素を新しい配列に展開
    // さらに { path: "/popular" } というオブジェクトを追加
    // 新しい配列が返され、元の paths 配列に /popular パスが追加される
    return [...paths, { path: "/popular" }];
  },
};
