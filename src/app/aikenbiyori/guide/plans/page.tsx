import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/aikenbiyori/guide/Breadcrumb";
import GuideHero from "@/components/aikenbiyori/guide/GuideHero";
import GuideMedia from "@/components/aikenbiyori/guide/GuideMedia";
import GuideNote from "@/components/aikenbiyori/guide/GuideNote";
import GuideSection from "@/components/aikenbiyori/guide/GuideSection";
import HelpFooter from "@/components/aikenbiyori/guide/HelpFooter";
import PlanComparison from "@/components/aikenbiyori/guide/PlanComparison";
import RelatedGuides from "@/components/aikenbiyori/guide/RelatedGuides";
import TableOfContents from "@/components/aikenbiyori/guide/TableOfContents";
import type { RelatedGuideItem } from "@/types/guide";
import { siteConfig } from "@/lib/siteConfig";

const pageTitle = "プラン・課金・広告について｜愛犬日和";
const pageDescription =
  "愛犬日和の無料・ライト・プレミアムの違いや、購入、購入情報の復元、解約、動画広告についてご案内します。";
const canonicalUrl = `${siteConfig.siteUrl}/aikenbiyori/guide/plans/`;

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
  { id: "plans-overview", label: "3つのプラン" },
  { id: "plans-compare", label: "プランごとの違い" },
  { id: "purchase", label: "プランを購入する" },
  { id: "restore", label: "購入情報を復元する" },
  { id: "manage", label: "プランの変更・解約" },
  { id: "ads", label: "動画広告について" },
  { id: "refund", label: "返金について" },
  { id: "help", label: "困ったとき" },
];

const relatedItems: RelatedGuideItem[] = [
  {
    title: "はじめての愛犬日和",
    description: "愛犬の登録から、毎日の使い方までをご紹介します。",
    href: "/aikenbiyori/guide/getting-started/",
    status: "available",
  },
  {
    title: "記録・愛犬プロフィール",
    description: "日々の記録や愛犬のプロフィール登録について紹介します。",
    href: "/aikenbiyori/guide/records/",
    status: "available",
  },
  {
    title: "データ・バックアップ・機種変更",
    description: "記録データの保存やバックアップ、機種変更について紹介します。",
    href: "/aikenbiyori/guide/data/",
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

export default function AikenbiyoriGuidePlansPage() {
  return (
    <div className="aiken-guide-page">
      <div className="aiken-guide-container">
        <Breadcrumb
          items={[
            { label: "Ponk1 Tech", href: "/" },
            { label: "愛犬日和", href: "/aikenbiyori/" },
            { label: "使い方ガイド", href: "/aikenbiyori/guide/" },
            { label: "プラン・課金・広告について" },
          ]}
        />

        <GuideHero
          badge="PLANS & BILLING"
          title="プラン・課金・広告について"
          lead="愛犬日和には、無料・ライト・プレミアムの3つのプランがあります。利用できる回数や登録できる愛犬の数、購入や解約についてご案内します。"
        />

        <TableOfContents items={tocItems} />

        <GuideSection
          id="plans-overview"
          title="3つのプラン"
          description="愛犬日和は無料プランでも、今日のケアやAI相談、記録などの主要な機能を利用できます。"
        >
          <p className="aiken-guide-section-description">
            ライトプラン・プレミアムプランでは、AIに相談できる回数や、今日のケアを広告なしで手動更新できる回数、登録できる愛犬の数が増えます。
          </p>
          <p className="aiken-guide-section-description">
            設定のプラン画面から、現在のプランや利用状況をいつでも確認できます。
          </p>
          <div className="aiken-guide-section-media">
            <GuideMedia
              kind="image"
              src="/aikenbiyori/guide/plans/plans-overview.png"
              alt="設定画面に表示された愛犬日和のプラン案内"
              size="standard"
            />
          </div>
        </GuideSection>

        <GuideSection
          id="plans-compare"
          title="プランごとの違い"
          description="登録できる愛犬の数、AIに相談できる回数、今日のケアを更新できる回数が、プランによって異なります。"
        >
          <PlanComparison
            plans={[
              {
                name: "無料",
                features: [
                  { label: "登録できる愛犬", value: "2頭" },
                  { label: "AIに相談", value: "1日1回" },
                  {
                    label: "今日のケア",
                    value: "自動作成 1日1回 / 広告なし手動更新 0回",
                  },
                  { label: "動画広告での追加", value: "利用可" },
                ],
              },
              {
                name: "ライト",
                highlight: true,
                features: [
                  { label: "登録できる愛犬", value: "5頭" },
                  { label: "AIに相談", value: "1日3回" },
                  {
                    label: "今日のケア",
                    value: "自動作成 1日1回 / 広告なし手動更新 1日3回",
                  },
                  { label: "動画広告での追加", value: "利用可" },
                ],
              },
              {
                name: "プレミアム",
                features: [
                  { label: "登録できる愛犬", value: "無制限" },
                  { label: "AIに相談", value: "1日10回" },
                  {
                    label: "今日のケア",
                    value: "自動作成 1日1回 / 広告なし手動更新 1日3回",
                  },
                  { label: "動画広告での追加", value: "利用可" },
                ],
              },
            ]}
          />
          <p className="aiken-guide-section-description">
            現在の料金は、アプリ内の購入画面に表示される価格をご確認ください。
          </p>
        </GuideSection>

        <GuideSection
          id="purchase"
          title="プランを購入する"
          description="設定からプラン画面を開き、ライトまたはプレミアムを選んで購入できます。"
          layout="split"
          media={
            <GuideMedia
              kind="image"
              src="/aikenbiyori/guide/plans/restore-purchases.png"
              alt="設定画面の購入を復元する項目"
              size="standard"
            />
          }
        >
          <p className="aiken-guide-section-description">
            iPhone・iPadではApp Storeを通じて、AndroidではGoogle Playを通じて購入します。
          </p>
          <p className="aiken-guide-section-description">
            価格は購入確定前にストア上で表示されるので、内容を確認してから購入してください。
          </p>
          <p className="aiken-guide-section-description">
            購入後は通常アプリへ自動的に反映されます。反映に少し時間がかかる場合があるため、購入直後に利用回数が変わっていない場合は、少し待ってから再度ご確認ください。
          </p>
        </GuideSection>

        <GuideSection
          id="restore"
          title="購入情報を復元する"
          description="機種変更や再インストール後などに、以前購入したプランが表示されない場合は「購入を復元」を利用できます。"
        >
          <GuideNote variant="note">
            「購入を復元」は、サブスクリプションの購入状態を確認する機能です。愛犬プロフィールや記録、写真を復元する機能ではありません。ローカルデータの復元については
            <Link href="/aikenbiyori/guide/data/">データ・バックアップ・機種変更</Link>
            のガイドをご確認ください。
          </GuideNote>
        </GuideSection>

        <GuideSection
          id="manage"
          title="プランの変更・解約"
          description="愛犬日和アプリ内に直接解約する操作はありません。「プランを管理」から、App Store・Google Playの管理画面へ移動して手続きします。"
        >
          <p className="aiken-guide-section-description">
            <strong>iPhone・iPad</strong>
            <br />
            「設定」→「Apple Account」→「サブスクリプション」などから契約を確認・解約できます。詳しい手順は、Apple公式の
            <a href="https://support.apple.com/ja-jp/118428" target="_blank" rel="noopener noreferrer">
              「Appleのサブスクリプションを解約する必要がある場合」
            </a>
            をご確認ください。
          </p>
          <p className="aiken-guide-section-description">
            <strong>Android</strong>
            <br />
            Google Playの定期購入管理から解約・変更できます。詳しい手順は、Google Play公式の
            <a
              href="https://support.google.com/googleplay/answer/7018481?hl=ja"
              target="_blank"
              rel="noopener noreferrer"
            >
              「Google Play での定期購入の解約、一時停止、変更」
            </a>
            をご確認ください。
          </p>
          <p className="aiken-guide-section-description">
            Google Play公式では、定期購入を解約しても、通常は支払済みの期間中は利用できると案内されています。ただし国や契約形態などによって扱いが異なる場合があるため、最終的な有効期限はGoogle Play画面でご確認ください。
          </p>
          <GuideNote variant="warning">
            アプリを削除しただけでは、サブスクリプションの解約にはなりません。
          </GuideNote>
        </GuideSection>

        <GuideSection
          id="ads"
          title="動画広告について"
          description="AI相談や「今日のケア」で利用回数を追加したいときは、動画広告を利用できます。"
        >
          <p className="aiken-guide-section-description">
            広告を1回最後まで視聴し、視聴確認が完了すると、対象機能を1回追加できます。
          </p>
          <p className="aiken-guide-section-description">
            無料プランだけでなく、ライトプラン・プレミアムプランでも、通常の利用回数を使い切った後などに広告が表示される場合があります。
          </p>
          <p className="aiken-guide-section-description">
            広告の配信状況によっては、表示できないことがあります。広告視聴後すぐに反映されない場合は、少し待ってから再度ご確認ください。
          </p>
        </GuideSection>

        <GuideSection
          id="refund"
          title="返金について"
          description="愛犬日和アプリ内に返金処理の機能はありません。購入したストア側の手続きをご案内します。"
        >
          <p className="aiken-guide-section-description">
            <strong>Apple</strong>
            <br />
            Apple公式の
            <a href="https://support.apple.com/ja-jp/118223" target="_blank" rel="noopener noreferrer">
              「Appleから購入したアプリやコンテンツの返金手続きをする」
            </a>
            をご確認ください。一部の購入は返金対象となる場合がありますが、必ず返金されるとは限りません。
          </p>
          <p className="aiken-guide-section-description">
            <strong>Google Play</strong>
            <br />
            Google Play公式の
            <a
              href="https://support.google.com/googleplay/answer/15574897?hl=ja"
              target="_blank"
              rel="noopener noreferrer"
            >
              「Google Play で払い戻しをリクエストする」
            </a>
            をご確認ください。Google Playの返金ポリシーに基づいて判断されます。
          </p>
        </GuideSection>

        <GuideSection
          id="help"
          title="困ったとき"
          description="購入したのに反映されない、購入を復元できない、広告が表示されない、広告を見たのに追加されないなどの場合は、トラブルシューティングをご確認ください。"
        >
          <p className="aiken-guide-section-description">
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
