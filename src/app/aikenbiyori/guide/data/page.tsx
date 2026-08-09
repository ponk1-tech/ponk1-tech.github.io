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

const pageTitle = "データ・バックアップ・機種変更｜愛犬日和";
const pageDescription =
  "愛犬日和のデータ保存、バックアップ、復元、機種変更、アプリを削除する前の注意点についてご案内します。";
const canonicalUrl = `${siteConfig.siteUrl}/aikenbiyori/guide/data/`;

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
  { id: "where", label: "データはどこに保存される？" },
  { id: "create-backup", label: "バックアップを作成する" },
  { id: "restore-backup", label: "バックアップから復元する" },
  { id: "device-change", label: "機種変更するとき" },
  { id: "before-delete", label: "アプリを削除する前に" },
  { id: "photos", label: "写真について" },
  { id: "delete-all", label: "端末内データを削除する" },
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
    title: "プラン・課金・広告",
    description: "プランの内容や課金、広告表示について紹介します。",
    href: "/aikenbiyori/guide/plans/",
    status: "available",
  },
];

export default function AikenbiyoriGuideDataPage() {
  return (
    <div className="aiken-guide-page">
      <div className="aiken-guide-container">
        <Breadcrumb
          items={[
            { label: "Ponk1 Tech", href: "/" },
            { label: "愛犬日和", href: "/aikenbiyori/" },
            { label: "使い方ガイド", href: "/aikenbiyori/guide/" },
            { label: "データ・バックアップ・機種変更" },
          ]}
        />

        <GuideHero
          badge="DATA & BACKUP"
          title="データ・バックアップ・機種変更"
          lead="愛犬日和の記録や写真は、基本的にお使いの端末内に保存されます。大切な記録を失わないために、バックアップ方法をご確認ください。"
        />

        <TableOfContents items={tocItems} />

        <GuideSection
          id="where"
          title="データはどこに保存される？"
          description="愛犬日和のデータは、大きく「端末内に保存されるもの」と「アプリ外で管理されるもの」に分かれます。"
          layout="split"
          media={
            <GuideMedia
              kind="image"
              src="/aikenbiyori/guide/data/data-settings.png"
              alt="愛犬日和のデータ管理画面"
              size="standard"
            />
          }
        >
          <p className="aiken-guide-section-description">
            <strong>端末内に保存</strong>
            <br />
            愛犬プロフィール、記録、写真、AI相談履歴、散歩する時間、地域設定、AIに送る情報の設定、その他のアプリ設定
          </p>
          <p className="aiken-guide-section-description">
            <strong>アプリ外で管理</strong>
            <br />
            サブスクリプションの購入状態、AI相談などの当日の利用回数、動画広告による追加利用分
          </p>
          <p className="aiken-guide-section-description">
            購入情報はApp Store・Google Playなどと連携して扱われます。詳しくは
            <Link href="/aikenbiyori/guide/plans/">プラン・課金・広告</Link>
            のガイドをご確認ください。
          </p>
          <GuideNote variant="note">
            愛犬日和には、ユーザーアカウントへログインしてデータをクラウド同期する機能はありません。iCloudやGoogle
            Driveへ自動的にバックアップされるものではないため、大切な記録は次でご案内する方法でバックアップしてください。
          </GuideNote>
        </GuideSection>

        <GuideSection
          id="create-backup"
          title="バックアップを作成する"
          description="「設定」→「データ管理」→「バックアップを書き出す」から、OSの共有画面を通じて、任意の安全な場所にZIPファイルを保存できます。"
        >
          <p className="aiken-guide-section-description">
            <strong>バックアップに含まれる主な内容</strong>
            <br />
            愛犬情報、記録、写真、AI相談履歴、散歩する時間、各種設定
          </p>
          <p className="aiken-guide-section-description">
            <strong>含まれないもの</strong>
            <br />
            サブスクリプションの購入状態、当日の利用回数、動画広告による追加利用分、端末固有の一時的な生成状態
          </p>
          <GuideNote variant="warning">
            バックアップファイルは暗号化されていません。愛犬の名前、健康に関するメモ、相談内容、地域、写真などが含まれるため、共有先を確認し、ご自身で安全に保管してください。
          </GuideNote>
        </GuideSection>

        <GuideSection
          id="restore-backup"
          title="バックアップから復元する"
          description="「設定」→「データ管理」→「バックアップから復元する」→ZIPファイルを選択→内容を確認→全置換して復元、という手順で行います。"
        >
          <GuideNote variant="warning">
            復元は追加やマージではありません。現在の端末内データは、選択したバックアップの内容ですべて置き換えられます。復元前に、バックアップの作成日時や内容を必ずご確認ください。
          </GuideNote>
          <p className="aiken-guide-section-description">
            検証や復元処理に失敗した場合、元の端末データは維持されるよう設計されています。
          </p>
        </GuideSection>

        <GuideSection
          id="device-change"
          title="機種変更するとき"
          description="次の手順で、記録データを新しい端末へ引き継げます。"
        >
          <ol className="aiken-guide-steps">
            <li>古い端末でバックアップを書き出す</li>
            <li>バックアップZIPを新しい端末へ安全に移す</li>
            <li>新しい端末へ愛犬日和をインストール</li>
            <li>「バックアップから復元する」でZIPを選択</li>
            <li>サブスクリプション利用者は、必要に応じて「購入を復元」</li>
          </ol>
          <p className="aiken-guide-section-description">
            購入情報の復元とデータバックアップの復元は別の操作です。自動的なクラウド同期はありません。
          </p>
          <p className="aiken-guide-section-description">
            バックアップファイルを新しい端末へ移すことで、iPhoneとAndroidの間でも復元できる形式になっています。自動同期ではないため、バックアップファイルの移動が必要です。すべての端末で必ず成功するとは限らないため、復元後は内容をご確認ください。
          </p>
        </GuideSection>

        <GuideSection
          id="before-delete"
          title="アプリを削除する前に"
          description="愛犬日和の主要なデータは、端末内のアプリ専用領域に保存されています。"
        >
          <GuideNote variant="warning">
            愛犬日和を削除する前に、必ず必要なデータのバックアップを作成してください。バックアップを作成せずにアプリを削除すると、愛犬日和に保存した端末内データは失われます。
          </GuideNote>
          <p className="aiken-guide-section-description">
            iPhoneの「非使用のAppを取り除く」「Appを取り除く」は書類とデータを保持する別の操作ですが、愛犬日和のデータ保護策としてこの機能に頼らず、バックアップの作成をおすすめします。
          </p>
        </GuideSection>

        <GuideSection
          id="photos"
          title="写真について"
          description="記録に追加した写真や愛犬の写真も端末内に保存され、バックアップの対象になります。"
        >
          <p className="aiken-guide-section-description">
            バックアップ作成時に、必要な画像ファイルが見つからない場合はバックアップが失敗することがあります。
          </p>
          <p className="aiken-guide-section-description">
            記録を削除すると、その記録に付けた写真も削除されます。
          </p>
        </GuideSection>

        <GuideSection
          id="delete-all"
          title="端末内データを削除する"
          description="設定の「この端末のデータをすべて削除」から、愛犬日和に保存された端末内データをまとめて削除できます。"
          layout="split"
          media={
            <GuideMedia
              kind="image"
              src="/aikenbiyori/guide/data/backup-delete-confirm.png"
              alt="端末内データをすべて削除する確認画面"
              size="standard"
            />
          }
        >
          <p className="aiken-guide-section-description">
            この操作は、愛犬プロフィールや記録、写真、AI相談履歴などを端末から削除するためのものです。動作の不具合を解消する目的では利用しないでください。
          </p>
          <GuideNote variant="warning">
            削除した内容は、バックアップがない限り元に戻せません。実行前に必ずバックアップをご確認ください。
          </GuideNote>
        </GuideSection>

        <GuideSection
          id="help"
          title="困ったとき"
          description="バックアップできない、ファイルを保存できない、復元できない、機種変更後にデータが見つからない、写真が戻らないなどの場合は、トラブルシューティングをご確認ください。"
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
