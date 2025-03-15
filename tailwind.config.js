
/** @type {import('tailwindcss').Config} */
export default {
// Tailwind CSSやWebpackなど）で、処理対象のファイルを指定するために使用
// ./src/: プロジェクト内のsrcディレクトリを基点とする
// **/: 任意のサブディレクトリ（再帰的）を含む
// *.{js,jsx,ts,tsx}: 拡張子が.js, .jsx, .ts, .tsxのいずれかに一致するファイル

// 指定されたディレクトリ内のすべてのJavaScript（.js, .jsx）およびTypeScript（.ts, .tsx）ファイルを対象に処理を行う
        content: ["./src/**/*.{js,jsx,ts,tsx}"], // 修正
        theme: {
          extend: {},
        },
        plugins: [],
      };