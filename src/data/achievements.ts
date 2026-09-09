export interface Achievement {
  title: string;
  genre: "Life" | "Study" | "Dev" | "Game" | "Travel" | string;
  date: string;
  rank: "Gold" | "Silver" | "Bronze";
  url?: string;
}

// 実績データ一覧（新しい実績を追加するときは、この配列の先頭に追加します）
export const achievements: Achievement[] = [
  {
    title: "研究室を調べた",
    genre: "Study",
    date: "2026.09.07",
    rank: "Silver",
    url: "",
  },
  {
    title: "webサイトを作成",
    genre: "Dev",
    date: "2026.09.03",
    rank: "Silver",
    url: "",
  },
  {
    title: "部屋の掃除",
    genre: "Life",
    date: "2026.09.02",
    rank: "Silver",
    url: "",
  },
];
