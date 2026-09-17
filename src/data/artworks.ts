export interface Artwork {
  id: number | string;
  title: string;
  date: string;
  image: string; // 画像のパス（例: "/イラスト 20260910.jpg"）
  description?: string;
  tags?: string[];
}

/**
 * 【イラスト作品データ一覧】
 * public フォルダ内のイラスト5枚を登録しています。
 * タイトルや説明文、タグはいつでも自由に変更できます！
 */
export const artworks: Artwork[] = [
  {
    id: 5,
    title: "イラスト 2026.09.10",
    date: "2026.09.10",
    image: "/イラスト 20260910 2.jpg",
    description: "結構満足なイラストです。",
    tags: [ "オリジナル"],
  },
  {
    id: 4,
    title: "イラスト 2026.08.14",
    date: "2026.08.14",
    image: "/イラスト 20260814.png",
    description: "ワンダーのMVをみて描いたイラストです。",
    tags: [ "ファンアート","ボカロ"],
  },
];
