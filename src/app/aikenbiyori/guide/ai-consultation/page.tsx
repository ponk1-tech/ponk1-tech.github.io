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

const pageTitle = "AIに相談の使い方｜愛犬日和";
const pageDescription =
  "愛犬日和の「AIに相談」の使い方や、相談できる内容、AIに送る情報、回答の見方についてご案内します。";
const canonicalUrl = `${siteConfig.siteUrl}/aikenbiyori/guide/ai-consultation/`;

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
  { id: "about", label: "AIに相談とは" },
  { id: "try", label: "相談してみよう" },
  { id: "topics", label: "こんなことを相談できます" },
  { id: "sharing", label: "AIに送る情報を選べます" },
  { id: "answer", label: "回答の見方" },
  { id: "usage", label: "利用回数と動画広告" },
  { id: "help", label: "困ったとき・利用上の注意" },
];

const relatedItems: RelatedGuideItem[] = [
  {
    title: "はじめての愛犬日和",
    description: "愛犬の登録から、毎日の使い方までをご紹介します。",
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
];

export default function AikenbiyoriGuideAiConsultationPage() {
  return (
    <div className="aiken-guide-page">
      <div className="aiken-guide-container">
        <Breadcrumb
          items={[
            { label: "Ponk1 Tech", href: "/" },
            { label: "愛犬日和", href: "/aikenbiyori/" },
            { label: "使い方ガイド", href: "/aikenbiyori/guide/" },
            { label: "AIに相談の使い方" },
          ]}
        />

        <GuideHero
          badge="AI CONSULTATION"
          title="AIに相談の使い方"
          lead="気になることを入力すると、共有を許可した愛犬の情報も参考にしながら、状況を整理するためのヒントを確認できます。"
        />

        <TableOfContents items={tocItems} />

        <GuideSection
          id="about"
          title="AIに相談とは"
          description="「AIに相談」は、愛犬について気になることを入力し、状況を整理したり、次に何を確認すればよいかを考えるための機能です。"
        >
          <p className="aiken-guide-section-description">
            「設定」→「AIに送る情報」で共有を許可した愛犬の情報も参考にしながら、今できることや、様子を見るポイントなどを確認できます。
          </p>
          <GuideNote variant="warning">
            AIの回答は診断ではありません。緊急時や症状が気になる場合は、回答を待たず動物病院へご相談ください。
          </GuideNote>
        </GuideSection>

        <GuideSection
          id="try"
          title="相談してみよう"
          description="相談したいことを入力し、必要に応じて愛犬や相談カテゴリを選びます。"
          layout="split"
          media={
            <GuideMedia
              kind="image"
              src="/aikenbiyori/guide/ai-consultation/ai-consultation-input.png"
              alt="愛犬日和のAIに相談する入力画面"
              size="standard"
            />
          }
        >
          <p className="aiken-guide-section-description">
            入力後は「送信内容を確認する」をタップし、確認画面で内容を確認してから相談を送信します。
          </p>
          <p className="aiken-guide-section-description">
            相談文は300文字まで。複数の愛犬を登録している場合は、相談する愛犬を選べます。
          </p>
        </GuideSection>

        <GuideSection
          id="topics"
          title="こんなことを相談できます"
          description="体調や行動、天気、食事、散歩、しつけなど、愛犬との暮らしの中で気になることを相談できます。"
        >
          <p className="aiken-guide-section-description">
            相談カテゴリは選択しなくても利用できます。
          </p>
          <p className="aiken-guide-section-description">
            <strong>相談例</strong>
            <br />
            「暑い日の散歩時間に迷っている」「食欲がいつもより少ない」「雷や花火を怖がっている」「留守番中に落ち着かない」「爪切りなど日常のお手入れについて知りたい」など
          </p>
        </GuideSection>

        <GuideSection
          id="sharing"
          title="AIに送る情報を選べます"
          description="AIに相談するときに参考として送る愛犬の情報は、「設定」→「AIに送る情報」から項目ごとに変更できます。"
          layout="split"
          media={
            <GuideMedia
              kind="image"
              src="/aikenbiyori/guide/ai-consultation/ai-consultation-sharing-settings.png"
              alt="AIに送る愛犬情報を選ぶ設定画面"
              size="standard"
            />
          }
        >
          <p className="aiken-guide-section-description">
            名前や犬種、年齢、体重、性格、今日の体調や過去の記録など、必要な情報だけを選べます。
          </p>
          <p className="aiken-guide-section-description">
            愛犬プロフィールから自動的に共有される情報として、写真や正確な住所は送信されません。
          </p>
          <GuideNote variant="note">
            相談文に入力した内容はAIへの相談内容として送信されます。氏名・住所・電話番号など、相談に不要な個人情報を入力する必要はありません。送信前の確認画面で内容をご確認ください。
          </GuideNote>
        </GuideSection>

        <GuideSection
          id="answer"
          title="回答の見方"
          description="回答では、今の状態についての目安や、今すぐできること、動物病院へ相談する目安などを確認できます。"
          layout="split"
          media={
            <GuideMedia
              kind="image"
              src="/aikenbiyori/guide/ai-consultation/ai-consultation-answer.png"
              alt="愛犬日和のAI相談回答画面"
              size="standard"
            />
          }
        >
          <p className="aiken-guide-section-description">
            必要に応じて、追加で確認したいことや詳しい説明も表示されます。
          </p>
          <p className="aiken-guide-section-description">
            回答は愛犬の状態を診断するものではありません。内容に違和感がある場合や判断に迷う場合は、専門家への相談を優先してください。
          </p>
        </GuideSection>

        <GuideSection
          id="usage"
          title="利用回数と動画広告"
          description="AI相談の1日の利用回数はプランによって異なります。"
        >
          <p className="aiken-guide-section-description">
            利用回数を使い切った場合でも、動画広告を1回見ることで、相談1回分を追加できます。
          </p>
          <p className="aiken-guide-section-description">
            詳しい利用回数や各プランの違いは、
            <Link href="/aikenbiyori/guide/plans/">プラン・課金・広告</Link>
            のガイドでご案内しています。
          </p>
        </GuideSection>

        <GuideSection
          id="help"
          title="困ったとき・利用上の注意"
          description="相談を送信できない、回答が表示されない、利用上限が表示されるなどの場合は、通信状態や本日の利用状況をご確認ください。"
        >
          <p className="aiken-guide-section-description">
            詳しくは
            <Link href="/aikenbiyori/faq/">よくある質問</Link>
            や
            <Link href="/aikenbiyori/help/troubleshooting/">トラブルシューティング</Link>
            もあわせてご確認ください。
          </p>
        </GuideSection>

        <RelatedGuides title="関連する使い方" items={relatedItems} />

        <HelpFooter />
      </div>
    </div>
  );
}
