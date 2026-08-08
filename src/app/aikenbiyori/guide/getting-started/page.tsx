import type { Metadata } from "next";
import Breadcrumb from "@/components/aikenbiyori/guide/Breadcrumb";
import GuideHero from "@/components/aikenbiyori/guide/GuideHero";
import GuideMedia from "@/components/aikenbiyori/guide/GuideMedia";
import GuideNote from "@/components/aikenbiyori/guide/GuideNote";
import GuideSection from "@/components/aikenbiyori/guide/GuideSection";
import HelpFooter from "@/components/aikenbiyori/guide/HelpFooter";
import RelatedGuides from "@/components/aikenbiyori/guide/RelatedGuides";
import TableOfContents from "@/components/aikenbiyori/guide/TableOfContents";
import { guideCategories } from "@/content/aikenbiyori/guide-categories";
import { siteConfig } from "@/lib/siteConfig";

const pageTitle = "はじめての愛犬日和｜使い方ガイド";
const pageDescription =
  "愛犬日和を初めて使う方へ。愛犬の登録から「今日のケア」、AI相談、記録まで、最初に知っておきたい使い方をご案内します。";
const canonicalUrl = `${siteConfig.siteUrl}/aikenbiyori/guide/getting-started/`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: canonicalUrl,
    siteName: "愛犬日和",
    title: pageTitle,
    description: pageDescription,
  },
  twitter: {
    card: "summary",
    title: pageTitle,
    description: pageDescription,
  },
};

const tocItems = [
  { id: "register-dog", label: "愛犬を登録する" },
  { id: "area-walk-time", label: "地域と散歩する時間を設定" },
  { id: "daily-care", label: "「今日のケア」を見てみよう" },
  { id: "ai-consultation", label: "気になることは「AIに相談」" },
  { id: "daily-record", label: "毎日の様子を記録する" },
  { id: "change-settings", label: "設定はあとから変更できます" },
  { id: "plans", label: "もっと使いたくなったら" },
  { id: "help", label: "困ったときは" },
];

const relatedItems = guideCategories.filter(
  (category) => category.title !== "はじめての方・基本操作",
);

export default function AikenbiyoriGuideGettingStartedPage() {
  return (
    <div className="aiken-guide-page">
      <div className="aiken-guide-container">
        <Breadcrumb
          items={[
            { label: "Ponk1 Tech", href: "/" },
            { label: "愛犬日和", href: "/aikenbiyori/" },
            { label: "使い方ガイド", href: "/aikenbiyori/guide/" },
            { label: "はじめての愛犬日和" },
          ]}
        />

        <GuideHero
          badge="GETTING STARTED"
          title="はじめての愛犬日和"
          lead="愛犬の登録から、毎日の使い方まで。最初に知っておきたいことを、順番にご紹介します。"
        />

        <TableOfContents items={tocItems} />

        <GuideSection
          id="register-dog"
          title="愛犬を登録する"
          description="まずは、一緒に暮らしている愛犬のことを登録します。名前や誕生日、体重などの情報は、「今日のケア」や「AIに相談」の内容を考える材料になります。"
          layout="split"
          media={
            <GuideMedia
              kind="image"
              src="/aikenbiyori/guide/getting-started/dog-profile.png"
              alt="愛犬日和の愛犬プロフィール編集画面"
            />
          }
        >
          <GuideNote variant="note">
            プロフィールはあとから変更できます。最初からすべてを細かく決める必要はありません。
          </GuideNote>
        </GuideSection>

        <GuideSection
          id="area-walk-time"
          title="地域と散歩する時間を設定"
          description="地域を設定すると、その地域の天気などを「今日のケア」に反映します。いつも散歩する時間帯も登録しておくと、時間帯ごとの過ごし方を確認しやすくなります。"
          layout="split"
          media={
            <GuideMedia
              kind="image"
              src="/aikenbiyori/guide/getting-started/walk-time-settings.png"
              alt="愛犬日和の散歩する時間帯の設定画面"
            />
          }
        />

        <GuideSection
          id="daily-care"
          title="「今日のケア」を見てみよう"
          description="ホームでは、その日の天気や愛犬の情報に合わせた「今日のケア」を確認できます。まずはここを見るだけでも、その日の過ごし方を考えるきっかけになります。"
          layout="split"
          media={
            <GuideMedia
              kind="image"
              src="/aikenbiyori/guide/getting-started/daily-care-home.png"
              alt="愛犬日和のホームに表示された今日のケア"
            />
          }
        />

        <GuideSection
          id="ai-consultation"
          title="気になることは「AIに相談」"
          description="散歩や過ごし方、いつもと少し違う様子など、気になることがあれば「AIに相談」から入力できます。愛犬の情報を踏まえて、考えるための材料を整理します。"
          layout="split"
          media={
            <GuideMedia
              kind="image"
              src="/aikenbiyori/guide/getting-started/ai-consultation.png"
              alt="愛犬日和のAIに相談する入力画面"
            />
          }
        >
          <GuideNote variant="warning">
            AIの回答は診断ではありません。緊急時や症状が気になる場合は、動物病院へ相談してください。
          </GuideNote>
        </GuideSection>

        <GuideSection
          id="daily-record"
          title="毎日の様子を記録する"
          description="食事や散歩、体調、できごとなど、毎日の様子を記録できます。写真も一緒に残せるので、あとから振り返るときにも役立ちます。"
          layout="split"
          media={
            <GuideMedia
              kind="image"
              src="/aikenbiyori/guide/getting-started/daily-record.png"
              alt="愛犬日和の毎日の記録一覧画面"
            />
          }
        />

        <GuideSection
          id="change-settings"
          title="設定はあとから変更できます"
          description="愛犬のプロフィールや散歩する時間などは、あとから変更できます。生活の変化に合わせて、必要なときに見直してください。"
        />

        <GuideSection
          id="plans"
          title="もっと使いたくなったら"
          description="愛犬日和は無料で始められます。必要に応じて、ライトプラン・プレミアムプランも選べます。各プランの違いは、プランガイドでご案内します。"
        />

        <GuideSection
          id="help"
          title="困ったときは"
          description="使い方に迷ったときや、うまく動かないときは、よくある質問やヘルプをご確認ください。"
        />

        <RelatedGuides title="関連する使い方" items={relatedItems} />

        <HelpFooter />
      </div>
    </div>
  );
}
