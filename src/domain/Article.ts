// Convexから取得したデータはこのクラスに変換して使う
export class Article {
        constructor(
          public id: string,
          public title: string,
          public description: string,
          public author: string,
          public createdAt: number,
          public viewCount: number
        ) {}
      }
      