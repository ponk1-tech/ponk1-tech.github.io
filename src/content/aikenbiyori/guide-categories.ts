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
    href: "/aikenbiyori/guide/ai-consultation/",
    status: "available",
  },
  {
    title: "記録・愛犬プロフィール",
    description: "日々の記録や愛犬のプロフィール登録について紹介します。",
    href: "/aikenbiyori/guide/records/",
    status: "available",
  },
  {
    title: "プラン・課金・広告",
    description: "プランの内容や課金、広告表示について紹介します。",
    href: "/aikenbiyori/guide/plans/",
    status: "available",
  },
  {
    title: "データ・バックアップ・機種変更",
    description: "記録データの保存やバックアップ、機種変更について紹介します。",
    href: "/aikenbiyori/guide/data/",
    status: "available",
  },
];

export const supportLinks = [
  {
    title: "よくある質問",
    description: "よくある疑問への短い回答を確認できます。",
    href: "/aikenbiyori/faq/",
    status: "available",
  },
  {
    title: "トラブルシューティング",
    description: "エラーや操作上の問題の対処方法を確認できます。",
    href: "/aikenbiyori/help/troubleshooting/",
    status: "available",
  },
] satisfies RelatedGuideItem[];
