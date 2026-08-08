import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/aikenbiyori/guide/Breadcrumb";
import GuideHero from "@/components/aikenbiyori/guide/GuideHero";
import GuideMedia from "@/components/aikenbiyori/guide/GuideMedia";
import GuideNote from "@/components/aikenbiyori/guide/GuideNote";
import GuideSection from "@/components/aikenbiyori/guide/GuideSection";
import HelpFooter from "@/components/aikenbiyori/guide/HelpFooter";
import RelatedGuides from "@/components/aikenbiyori/guide/RelatedGuides";
import TableOfContents from "@/components/aikenbiyori/guide/TableOfContents";
import type { RelatedGuideItem } from "@/types/guide";
import { siteConfig } from "@/lib/siteConfig";

const pageTitle = "今日のケアの使い方｜愛犬日和";
const pageDescription =
  "愛犬日和の「今日のケア」の見方や、散歩時間・天気・イベント情報、更新方法についてご案内します。";
const canonicalUrl = `${siteConfig.siteUrl}/aikenbiyori/guide/daily-care/`;

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
  { id: "about", label: "今日のケアとは" },
  { id: "home-screen", label: "ホーム画面の見方" },
  { id: "walk-time", label: "散歩する時間ごとのケア" },
  { id: "weather-event", label: "天気とイベント情報について" },
  { id: "update", label: "今日のケアを更新する" },
  { id: "profile-change", label: "愛犬の情報を変更したとき" },
  { id: "help", label: "困ったときは" },
];

const relatedItems: RelatedGuideItem[] = [
  {
    title: "はじめての愛犬日和",
    description: "愛犬の登録から、毎日の使い方までをご紹介します。",
    href: "/aikenbiyori/guide/getting-started/",
    status: "available",
  },
  {
    title: "AIに相談",
    description: "気になることをAIと整理する使い方を紹介します。",
    status: "planned",
  },
  {
    title: "プラン・課金・広告",
    description: "プランの内容や課金、広告表示について紹介します。",
    status: "planned",
  },
  {
    title: "トラブルシューティング",
    description: "困ったときの対処方法を紹介します。",
    status: "planned",
  },
];

export default function AikenbiyoriGuideDailyCarePage() {
  return (
    <div className="aiken-guide-page">
      <div className="aiken-guide-container">
        <Breadcrumb
          items={[
            { label: "Ponk1 Tech", href: "/" },
            { label: "愛犬日和", href: "/aikenbiyori/" },
            { label: "使い方ガイド", href: "/aikenbiyori/guide/" },
            { label: "今日のケアの使い方" },
          ]}
        />

        <GuideHero
          badge="DAILY CARE"
          title="今日のケアの使い方"
          lead="その日の天気や愛犬の情報をもとに、散歩や過ごし方のヒントをまとめて確認できます。"
        />

        <TableOfContents items={tocItems} />

        <GuideSection
          id="about"
          title="今日のケアとは"
          description="「今日のケア」は、登録した愛犬の情報や散歩する時間、地域の天気などをもとに、その日の過ごし方を考えるためのヒントをまとめて確認できる機能です。"
        >
          <p className="aiken-guide-section-description">
            愛犬ごとに内容が作られるので、同じ天気の日でも表示される内容が変わることがあります。
          </p>
          <GuideNote variant="note">
            「今日のケア」は、飼い主さんが判断するための参考情報です。診断や治療を行うものではありません。体調に気になる変化がある場合は、動物病院へご相談ください。
          </GuideNote>
        </GuideSection>

        <GuideSection
          id="home-screen"
          title="ホーム画面の見方"
          description="ホームでは、その日の天気と一緒に「今日のケア」を確認できます。"
          layout="split"
          media={
            <GuideMedia
              kind="image"
              src="/aikenbiyori/guide/daily-care/daily-care-home.png"
              alt="愛犬日和のホームに表示された今日のケア"
              size="standard"
            />
          }
        >
          <p className="aiken-guide-section-description">
            登録している散歩の時間に合わせたコメントや、その日に気をつけたいことがある場合は注意情報も表示されます。
          </p>
          <p className="aiken-guide-section-description">
            必要に応じて「続きを読む」から詳しい内容を確認できます。
          </p>
        </GuideSection>

        <GuideSection
          id="walk-time"
          title="散歩する時間ごとのケア"
          description="散歩する時間を登録しておくと、その時間ごとの過ごし方のヒントを確認できます。"
          layout="split"
          media={
            <GuideMedia
              kind="image"
              src="/aikenbiyori/guide/daily-care/walk-slot-alternative.png"
              alt="散歩時間ごとのケアと別の時間の提案"
              size="standard"
            />
          }
        >
          <p className="aiken-guide-section-description">
            登録した時間の天気などを見ながら、散歩しやすい時間かどうかを考える材料として使えます。
          </p>
          <p className="aiken-guide-section-description">
            条件によっては、登録した時間とは別に過ごしやすそうな時間が案内されることもあります。
          </p>
          <p className="aiken-guide-section-description">
            散歩する時間を登録していない場合でも、朝と夜については一般的な目安が表示されます。
          </p>
        </GuideSection>

        <GuideSection
          id="weather-event"
          title="天気とイベント情報について"
          description="「今日のケア」では、地域の天気や気温、降水確率、風などの情報を参考にしています。"
          layout="split"
          media={
            <GuideMedia
              kind="image"
              src="/aikenbiyori/guide/daily-care/daily-care-detail.png"
              alt="愛犬日和の今日のケア詳細と近隣イベント情報"
              caption="イベント情報が見つかった場合の表示例です。"
              size="standard"
            />
          }
        >
          <p className="aiken-guide-section-description">
            表示される天気は取得時点の予報です。実際の天気と異なる場合があるため、外出前には最新の天気予報もあわせてご確認ください。
          </p>
          <p className="aiken-guide-section-description">
            <strong>イベント情報</strong>
            <br />
            金・土・日・祝日には、周辺の花火大会やお祭りなど、大きな音や混雑につながりそうなイベント情報を確認することがあります。
          </p>
          <p className="aiken-guide-section-description">
            イベント情報が表示されていなくても、周辺でイベントが行われていないことを保証するものではありません。
          </p>
        </GuideSection>

        <GuideSection
          id="update"
          title="今日のケアを更新する"
          description="アプリを開いたとき、その日の「今日のケア」がまだ用意されていなければ自動で作成されます。"
          layout="split"
          media={
            <GuideMedia
              kind="image"
              src="/aikenbiyori/guide/daily-care/refresh-dialog.png"
              alt="今日のケアを更新する無料プランのダイアログ"
              size="standard"
            />
          }
        >
          <p className="aiken-guide-section-description">
            一度作成された内容はその日の間保存され、必要なときは手動で更新できます。
          </p>
          <p className="aiken-guide-section-description">
            <strong>手動更新</strong>
            <br />
            内容を更新したいときは、ホームの更新ボタンから「今日のケアを更新」できます。
          </p>
          <p className="aiken-guide-section-description">
            無料プランでは、動画広告を見ることで追加の更新ができます。ライトプラン・プレミアムプランでは、1日に数回まで広告なしで更新できます。利用回数や各プランの詳しい違いは、「プラン・課金・広告」ガイドでご案内する予定です。
          </p>
          <p className="aiken-guide-section-description">
            <strong>広告</strong>
            <br />
            広告を1回見ると、更新1回分を追加できます。
          </p>
        </GuideSection>

        <GuideSection
          id="profile-change"
          title="愛犬の情報を変更したとき"
          description="愛犬のプロフィールや散歩する時間を変更した場合、変更した内容は次に「今日のケア」が作られるときに反映されます。"
        >
          <p className="aiken-guide-section-description">
            その日にすでに表示されている内容は、プロフィールを変更しただけではすぐには変わりません。すぐに新しい情報を反映したい場合は、「今日のケアを更新」してください。
          </p>
          <p className="aiken-guide-section-description">
            複数の愛犬を登録している場合、今日のケアは1頭ずつ内容が異なります。表示する愛犬は、設定の愛犬一覧から切り替えられます。
          </p>
        </GuideSection>

        <GuideSection
          id="help"
          title="困ったときは"
          description="今日のケアが表示されない、更新できない、天気を取得できないなどの場合は、まず通信状態や地域設定をご確認ください。"
        >
          <p className="aiken-guide-section-description">
            詳しくは
            <Link href="/aikenbiyori/faq/">よくある質問</Link>
            もあわせてご確認ください。トラブルシューティングガイドは、現在準備中です。
          </p>
        </GuideSection>

        <RelatedGuides title="関連する使い方" items={relatedItems} />

        <HelpFooter />
      </div>
    </div>
  );
}
