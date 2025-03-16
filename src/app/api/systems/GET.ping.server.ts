export default async function GetPosts() {
//  new Response:
// Response は、Fetch API の一部であり、HTTPレスポンスを表すオブジェクトを作成するためのコンストラクタ
// new Response を使用して、新しいレスポンスオブジェクトを作成

// JSON.stringify("pong"):
// JSON.stringify は、JavaScriptのオブジェクトや値をJSON形式の文字列に変換する関数
        return new Response(JSON.stringify("pong"));
      }