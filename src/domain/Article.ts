// Convexから取得したデータはこのクラスに変換して使う
// constructor は、クラスのインスタンスを初期化するための特別なメソッド
// クラスの新しいインスタンスが作成されるときに自動的に呼び出され、そのクラスのプロパティを初期化するために使用される

export class Article {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public author: string,
    public createdAt: number,
    public viewCount: number,
  ) {}
}
