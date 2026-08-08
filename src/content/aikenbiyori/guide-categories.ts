import type { RelatedGuideItem } from "@/types/guide";

export const guideCategories: RelatedGuideItem[] = [
  {
    title: "はじめての方・基本操作",
    description: "アプリの基本的な使い方を確認できます。",
    href: "/aikenbiyori/guide/getting-started/",
    status: "available",
  },
  {
    title: "今日のケア",
    description: "その日のケアや過ごし方の確認方法を紹介します。",
    href: "/aikenbiyori/guide/daily-care/",
    status: "available",
  },
  {
    title: "AIに相談",
    description: "気になることをAIと整理する使い方を紹介します。",
    status: "planned",
  },
  {
    title: "記録・愛犬プロフィール",
    description: "日々の記録や愛犬のプロフィール登録について紹介します。",
    status: "planned",
  },
  {
    title: "プラン・課金・広告",
    description: "プランの内容や課金、広告表示について紹介します。",
    status: "planned",
  },
  {
    title: "データ・バックアップ",
    description: "記録データの保存やバックアップについて紹介します。",
    status: "planned",
  },
  {
    title: "トラブルシューティング",
    description: "困ったときの対処方法を紹介します。",
    status: "planned",
  },
  {
    title: "よくある質問",
    description: "カテゴリ別によくある質問と回答を確認できます。",
    href: "/aikenbiyori/faq/",
    status: "available",
  },
];
