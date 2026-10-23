export interface LinkItem {
  title: string;
  url: string;
  description: string;
  tag?: string;
}

export interface LinkCategory {
  categoryName: string;
  categoryIcon: string;
  links: LinkItem[];
}

/**
 * 【役立ちリンクまとめデータ】
 * カテゴリーごとに役立つサイトやツールのリンクをまとめています。
 * URLや説明文、ジャンルは自由に編集・追加できます！
 */
export const linkCategories: LinkCategory[] = [
  {
    categoryName: "イラスト・創作",
    categoryIcon: "🎨",
    links: [
      {
        title: "Coolors",
        url: "https://coolors.co/",
        description:
          "スペースキーを押すだけで美しいカラーパレットを自動生成してくれるツール。",
        tag: "配色",
      },
      {
        title: "Posemaniacs",
        url: "https://www.posemaniacs.com/ja",
        description:
          "3D人型モデルによるポーズ・デッサン練習用リファレンスサイト。",
        tag: "ポーズ",
      },
      {
        title: "Pinterest",
        url: "https://www.pinterest.jp/",
        description:
          "イラストの構図・衣装・背景などのアイデア出しや資料集めに重宝するサイト。",
        tag: "資料",
      },
      {
        title: "Aphrite PoseSearch",
        url: "https://pose.aphrite.com",
        description:
          "3Dモデルや棒人間を動かして、イメージ通りのポーズや構図を検索できるポーズリファレンスツール。",
        tag: "ポーズ",
      },
      {
        title: "Artbreeder",
        url: "https://www.artbreeder.com/",
        description:
          "画像を掛け合わせて新しいキャラクターや背景などのインスピレーションを得られるツール。",
        tag: "アイデア",
      },
    ],
  },
  {
    categoryName: "Web制作・開発",
    categoryIcon: "💻",
    links: [
      {
        title: "Astro 公式ドキュメント",
        url: "https://docs.astro.build/ja/",
        description:
          "このホームページを構築しているWebフレームワークの日本語ドキュメント。",
        tag: "フレームワーク",
      },
      {
        title: "Simple Icons",
        url: "https://simpleicons.org/",
        description:
          "世界中のSNSやツールの公式ベクターロゴ（SVG）が無料で手に入るサイト。",
        tag: "アイコン",
      },
      {
        title: "MDN Web Docs",
        url: "https://developer.mozilla.org/ja/",
        description:
          "HTML、CSS、JavaScriptの仕様や使い方が網羅された信頼できるリファレンス。",
        tag: "リファレンス",
      },
    ],
  },
  {
    categoryName: "学習・研究",
    categoryIcon: "📚",
    links: [
      {
        title: "Google Scholar",
        url: "https://scholar.google.co.jp/",
        description:
          "国内外の学術論文や研究資料を幅広く横断検索できる検索エンジン。",
        tag: "論文検索",
      },
      {
        title: "CiNii Research",
        url: "https://cir.nii.ac.jp/",
        description:
          "日本の学術論文・研究データ・大学の研究室情報を探せるポータルサイト。",
        tag: "学術情報",
      },
    ],
  },
  {
    categoryName: "便利ツール",
    categoryIcon: "🛠️",
    links: [
      {
        title: "TinyPNG",
        url: "https://tinypng.com/",
        description:
          "PNGやJPG画像の画質を落とさずにファイルサイズを軽量化できる便利ツール。",
        tag: "画像圧縮",
      },
      {
        title: "Notion",
        url: "https://www.notion.so/ja-jp",
        description:
          "タスク管理、アイデア整理、読書記録などを一元管理できる万能ノートアプリ。",
        tag: "タスク管理",
      },
    ],
  },
];
