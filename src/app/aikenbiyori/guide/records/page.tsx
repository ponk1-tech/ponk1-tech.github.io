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

const pageTitle = "記録・愛犬プロフィールの使い方｜愛犬日和";
const pageDescription =
  "愛犬日和の記録機能と愛犬プロフィールについて、記録の追加・振り返り・編集や、プロフィールの登録・変更方法をご案内します。";
const canonicalUrl = `${siteConfig.siteUrl}/aikenbiyori/guide/records/`;

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
  { id: "daily-record", label: "毎日の様子を記録する" },
  { id: "add-record", label: "記録を追加する" },
  { id: "review", label: "過去の記録を振り返る" },
  { id: "edit-delete", label: "記録を編集・削除する" },
  { id: "dog-profile", label: "愛犬プロフィールを登録する" },
  { id: "manage-dogs", label: "愛犬を追加・編集・削除する" },
  { id: "relation", label: "今日のケア・AI相談との関係" },
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
    title: "AIに相談",
    description: "気になることをAIと整理する使い方を紹介します。",
    href: "/aikenbiyori/guide/ai-consultation/",
    status: "available",
  },
  {
    title: "プラン・課金・広告",
    description: "プランの内容や課金、広告表示について紹介します。",
    href: "/aikenbiyori/guide/plans/",
    status: "available",
  },
  {
    title: "トラブルシューティング",
    description: "困ったときの対処方法を紹介します。",
    href: "/aikenbiyori/help/troubleshooting/",
    status: "available",
  },
  {
    title: "よくある質問",
    description: "カテゴリ別によくある質問と回答を確認できます。",
    href: "/aikenbiyori/faq/",
    status: "available",
  },
];

export default function AikenbiyoriGuideRecordsPage() {
  return (
    <div className="aiken-guide-page">
      <div className="aiken-guide-container">
        <Breadcrumb
          items={[
            { label: "Ponk1 Tech", href: "/" },
            { label: "愛犬日和", href: "/aikenbiyori/" },
            { label: "使い方ガイド", href: "/aikenbiyori/guide/" },
            { label: "記録・愛犬プロフィールの使い方" },
          ]}
        />

        <GuideHero
          badge="RECORDS & PROFILE"
          title="記録・愛犬プロフィールの使い方"
          lead="毎日の様子を記録したり、愛犬のプロフィールを登録・変更する方法をご案内します。"
        />

        <TableOfContents items={tocItems} />

        <GuideSection
          id="daily-record"
          title="毎日の様子を記録する"
          description="食事や散歩、体調、できごとなど、愛犬の毎日の様子を記録できます。"
          layout="split"
          media={
            <GuideMedia
              kind="image"
              src="/aikenbiyori/guide/records/records-list.png"
              alt="愛犬日和の記録一覧画面"
              size="standard"
            />
          }
        >
          <p className="aiken-guide-section-description">
            記録には写真を1枚まで追加できます。
          </p>
          <p className="aiken-guide-section-description">
            選べるカテゴリは、食事・散歩・体調・できごとの4つです。
          </p>
        </GuideSection>

        <GuideSection
          id="add-record"
          title="記録を追加する"
          description="記録タブから「今日の体調を記録」や「日々のことを記録」を選ぶと、新しい記録を追加できます。"
          layout="split"
          media={
            <GuideMedia
              kind="image"
              src="/aikenbiyori/guide/records/record-edit.png"
              alt="愛犬日和で毎日の記録を追加する画面"
              size="standard"
            />
          }
        >
          <p className="aiken-guide-section-description">
            カテゴリを選び、「今日の様子」を入力したら「記録を保存」をタップします。
          </p>
          <p className="aiken-guide-section-description">
            必要に応じて写真も追加できます。「今日の様子」は必須で、写真は任意です。
          </p>
        </GuideSection>

        <GuideSection
          id="review"
          title="過去の記録を振り返る"
          description="「振り返る」では、カレンダーや記録一覧から過去の記録を確認できます。"
        >
          <p className="aiken-guide-section-description">
            記録一覧では、キーワード検索やカテゴリでの絞り込みもできます。
          </p>
          <p className="aiken-guide-section-description">
            複数の愛犬を登録している場合は、現在選択している愛犬の記録が表示されます。
          </p>
        </GuideSection>

        <GuideSection
          id="edit-delete"
          title="記録を編集・削除する"
          description="過去の記録を開くと、内容を編集できます。"
        >
          <p className="aiken-guide-section-description">
            削除する場合は編集画面の削除ボタンから行います。
          </p>
          <GuideNote variant="warning">
            削除した記録は元に戻せません。写真を追加している場合、その写真も一緒に削除されます。
          </GuideNote>
          <p className="aiken-guide-section-description">
            記録に追加した写真は端末内に保存されます。アプリを削除すると写真も消えるためご注意ください。バックアップの詳細は
            <Link href="/aikenbiyori/guide/data/">データ・バックアップ・機種変更</Link>
            のガイドでご案内しています。
          </p>
        </GuideSection>

        <GuideSection
          id="dog-profile"
          title="愛犬プロフィールを登録する"
          description="愛犬プロフィールには、名前や犬種、年齢、体重、性格などを登録できます。"
          layout="split"
          media={
            <GuideMedia
              kind="image"
              src="/aikenbiyori/guide/records/dog-profile.png"
              alt="愛犬日和の愛犬プロフィール編集画面"
              size="standard"
            />
          }
        >
          <p className="aiken-guide-section-description">
            散歩する時間帯や健康についてのメモも、必要に応じて追加できます。
          </p>
          <p className="aiken-guide-section-description">
            登録した内容は、「今日のケア」や「AIに相談」で愛犬に合わせた内容を考える材料になります。
          </p>
        </GuideSection>

        <GuideSection
          id="manage-dogs"
          title="愛犬を追加・編集・削除する"
          description="設定の愛犬一覧から、新しい愛犬の追加やプロフィールの編集ができます。"
          layout="split"
          media={
            <GuideMedia
              kind="image"
              src="/aikenbiyori/guide/records/dog-list.png"
              alt="設定画面の愛犬プロフィール一覧"
              size="standard"
            />
          }
        >
          <p className="aiken-guide-section-description">
            複数の愛犬を登録している場合は、ここから表示する愛犬を切り替えられます。
          </p>
          <p className="aiken-guide-section-description">
            登録できる頭数はプランによって異なります。詳しい違いは
            <Link href="/aikenbiyori/guide/plans/">プラン・課金・広告</Link>
            のガイドでご案内しています。
          </p>
          <GuideNote variant="warning">
            愛犬を削除すると元に戻すための操作はありません。削除前に対象の愛犬をよくご確認ください。
          </GuideNote>
          <p className="aiken-guide-section-description">
            愛犬を削除しても、その愛犬の過去の記録・AI相談履歴・今日のケアの記録は削除されません。
          </p>
          <p className="aiken-guide-section-description">
            登録されている愛犬が1頭だけの場合は削除できません。
          </p>
        </GuideSection>

        <GuideSection
          id="relation"
          title="今日のケア・AI相談との関係"
          description={
            <>
              プロフィールに登録した情報は、
              <Link href="/aikenbiyori/guide/daily-care/">今日のケア</Link>や
              <Link href="/aikenbiyori/guide/ai-consultation/">AIに相談</Link>
              の内容を考える材料になります。
            </>
          }
        >
          <p className="aiken-guide-section-description">
            「今日のケア」は、プロフィールを変更しただけではその日に表示中の内容がすぐには変わりません。変更した内容をすぐ反映したい場合は、「今日のケアを更新」してください。
          </p>
          <p className="aiken-guide-section-description">
            AI相談で送るプロフィール情報は、「設定」→「AIに送る情報」から項目ごとに変更できます。
          </p>
        </GuideSection>

        <RelatedGuides title="関連する使い方" items={relatedItems} />

        <HelpFooter />
      </div>
    </div>
  );
}
