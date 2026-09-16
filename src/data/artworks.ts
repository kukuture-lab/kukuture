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
    image: "/イラスト 20260910.jpg",
    description: "最新のイラスト作品です。",
    tags: ["イラスト", "オリジナル"],
  },
  {
    id: 4,
    title: "イラスト 2026.08.14",
    date: "2026.08.14",
    image: "/イラスト 20260814.png",
    description: "夏のイラスト作品です。",
    tags: ["イラスト", "オリジナル"],
  },
  {
    id: 3,
    title: "イラスト 2026.04.04",
    date: "2026.04.04",
    image: "/イラスト 20260404.png",
    description: "4月制作のイラスト作品です。",
    tags: ["イラスト", "オリジナル"],
  },
  {
    id: 2,
    title: "イラスト 2026.03.29",
    date: "2026.03.29",
    image: "/イラスト 20260329.jpg",
    description: "3月制作のイラスト作品です。",
    tags: ["イラスト", "オリジナル"],
  },
  {
    id: 1,
    title: "イラスト 2026.03.06",
    date: "2026.03.06",
    image: "/イラスト 20260306.png",
    description: "3月制作のイラスト作品です。",
    tags: ["イラスト", "オリジナル"],
  },
];
