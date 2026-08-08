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
import TroubleshootingItem from "@/components/aikenbiyori/guide/TroubleshootingItem";
import type { RelatedGuideItem } from "@/types/guide";
import { siteConfig } from "@/lib/siteConfig";

const pageTitle = "トラブルシューティング｜愛犬日和";
const pageDescription =
  "愛犬日和で今日のケア、AI相談、課金、広告、記録、位置情報、バックアップなどに問題が起きたときの確認方法をご案内します。";
const canonicalUrl = `${siteConfig.siteUrl}/aikenbiyori/help/troubleshooting/`;

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
  { id: "first-check", label: "まず確認してほしいこと" },
  { id: "daily-care", label: "今日のケア" },
  { id: "ai-consultation", label: "AIに相談" },
  { id: "plans", label: "プラン・購入" },
  { id: "ads", label: "動画広告" },
  { id: "records", label: "記録・写真" },
  { id: "location", label: "地域・位置情報" },
  { id: "data", label: "データ・バックアップ" },
  { id: "general", label: "アプリ全般" },
  { id: "contact", label: "解決しない場合" },
];

const relatedItems: RelatedGuideItem[] = [
  {
    title: "はじめての愛犬日和",
    description: "愛犬の登録から、毎日の使い方までをご紹介します。",
    href: "/aikenbiyori/guide/getting-started/",
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
  {
    title: "よくある質問",
    description: "カテゴリ別によくある質問と回答を確認できます。",
    href: "/aikenbiyori/faq/",
    status: "available",
  },
];

export default function AikenbiyoriTroubleshootingPage() {
  return (
    <div className="aiken-guide-page">
      <div className="aiken-guide-container">
        <Breadcrumb
          items={[
            { label: "Ponk1 Tech", href: "/" },
            { label: "愛犬日和", href: "/aikenbiyori/" },
            { label: "トラブルシューティング" },
          ]}
        />

        <GuideHero
          badge="TROUBLESHOOTING"
          title="困ったときは"
          lead="愛犬日和を使っていて困ったときに、まず確認してほしいことをまとめています。"
        />

        <TableOfContents items={tocItems} />

        <GuideSection
          id="first-check"
          title="まず確認してほしいこと"
          description="症状にかかわらず、まず次の点をご確認ください。"
        >
          <ol className="aiken-guide-steps">
            <li>Wi-Fi・モバイル通信を確認する</li>
            <li>少し時間を置いて再度試す</li>
            <li>愛犬日和を一度閉じて開き直す</li>
            <li>必要な権限・地域設定を確認する</li>
            <li>App Store・Google Playで最新版がないか確認する</li>
            <li>必要なら端末を再起動する</li>
          </ol>
          <GuideNote variant="warning">
            トラブル解消のために、いきなりアプリを削除・再インストールしないでください。愛犬日和の記録や写真は端末内に保存されています。再インストールが必要な場合は、先に
            <Link href="/aikenbiyori/guide/data/">バックアップ</Link>
            を作成してください。
          </GuideNote>
        </GuideSection>

        <GuideSection id="daily-care" title="今日のケア">
          <div className="aiken-trouble-list">
            <TroubleshootingItem question="今日のケアが表示されない">
              <p>まず自宅エリアの設定と通信状態をご確認ください。</p>
              <p>ホームを再表示するか、少し待ってから再度お試しください。</p>
              <p>
                解決しない場合は
                <Link href="/aikenbiyori/faq/">よくある質問</Link>
                やお問い合わせをご確認ください。
              </p>
            </TroubleshootingItem>
            <TroubleshootingItem question="今日のケアを更新できない">
              <p>本日の利用状況をご確認ください。上限に達している場合は、動画広告での追加が利用できます。</p>
              <p>
                利用回数の詳細は
                <Link href="/aikenbiyori/guide/plans/">プラン・課金・広告</Link>
                のガイドをご確認ください。
              </p>
            </TroubleshootingItem>
            <TroubleshootingItem question="天気が表示されない">
              <p>通信に失敗した場合、保存済みの天気が表示されることがあります。地域設定もあわせてご確認ください。</p>
            </TroubleshootingItem>
            <TroubleshootingItem question="実際の天気と違う">
              <p>表示される天気は取得時点の予報のため、実際の天気と差が生じることがあります。</p>
              <p>市区町村設定や現在地の利用状況を確認し、最新の天気予報もあわせてご確認ください。</p>
            </TroubleshootingItem>
            <TroubleshootingItem question="イベント情報が表示されない">
              <p>イベント情報は、金・土・日・祝日に確認する仕様です。</p>
              <p>
                表示がないことは、イベントが存在しないことの保証ではありません。詳しくは
                <Link href="/aikenbiyori/guide/daily-care/">今日のケア</Link>
                のガイドをご確認ください。
              </p>
            </TroubleshootingItem>
          </div>
        </GuideSection>

        <GuideSection id="ai-consultation" title="AIに相談">
          <div className="aiken-trouble-list">
            <TroubleshootingItem question="相談を送信できない">
              <p>相談文が入力されているか、本日の利用状況、通信状態をご確認ください。</p>
            </TroubleshootingItem>
            <TroubleshootingItem question="回答が表示されない">
              <p>少し待ってから、通信状態を確認して再度お試しください。</p>
            </TroubleshootingItem>
            <TroubleshootingItem question="利用上限に達した">
              <p>
                動画広告を見ることで、1回分を追加できる場合があります。詳しくは
                <Link href="/aikenbiyori/guide/plans/">プラン・課金・広告</Link>
                のガイドをご確認ください。
              </p>
            </TroubleshootingItem>
            <TroubleshootingItem question="回答内容に違和感がある">
              <p>AIの回答は診断ではありません。</p>
              <p>緊急の症状が気になる場合は、トラブルシューティングを続けるのではなく、動物病院への相談を優先してください。詳しくは</p>
              <p>
                <Link href="/aikenbiyori/guide/ai-consultation/">AIに相談</Link>
                のガイドもご確認ください。
              </p>
            </TroubleshootingItem>
          </div>
        </GuideSection>

        <GuideSection id="plans" title="プラン・購入">
          <div className="aiken-trouble-list">
            <TroubleshootingItem question="購入したのに反映されない">
              <p>少し待ってから再度ご確認ください。プラン画面で購入状態を再確認できる場合は、そちらもお試しください。</p>
              <p>反映されない場合は「購入を復元」をお試しください。これはローカルのバックアップ復元とは別の機能です。</p>
            </TroubleshootingItem>
            <TroubleshootingItem question="購入を復元できない">
              <p>購入時と同じApple Account・Google Accountでサインインしているかご確認ください。</p>
              <p>購入情報が存在するか、ストア側の購入履歴もあわせてご確認ください。</p>
              <p>
                解決しない場合は
                <Link href="/aikenbiyori/guide/plans/">プラン・課金・広告</Link>
                のガイド、またはお問い合わせをご確認ください。
              </p>
            </TroubleshootingItem>
            <TroubleshootingItem question="解約したい">
              <p>
                解約はApple・Googleのストア管理画面から行います。詳しくは
                <Link href="/aikenbiyori/guide/plans/">プラン・課金・広告</Link>
                のガイドをご確認ください。
              </p>
            </TroubleshootingItem>
          </div>
        </GuideSection>

        <GuideSection id="ads" title="動画広告">
          <div className="aiken-trouble-list">
            <TroubleshootingItem question="広告が表示されない">
              <p>広告は常に配信されるとは限りません。通信状態を確認し、少し待ってから再度お試しください。</p>
            </TroubleshootingItem>
            <TroubleshootingItem question="最後まで見たが追加されない">
              <p>視聴確認に少し時間がかかる場合があります。少し待ってから利用状況を再度ご確認ください。</p>
              <p>何度も連続して広告を視聴することはおすすめしません。</p>
            </TroubleshootingItem>
          </div>
        </GuideSection>

        <GuideSection id="records" title="記録・写真">
          <div className="aiken-trouble-list">
            <TroubleshootingItem question="記録を保存できない">
              <p>必須項目の入力とカテゴリの選択をご確認のうえ、再度お試しください。</p>
            </TroubleshootingItem>
            <TroubleshootingItem question="写真を追加できない">
              <p>写真へのアクセス権限や、空き容量をご確認ください。</p>
              <p>写真の選択やカメラの操作を途中でキャンセルしていないかもあわせてご確認ください。</p>
              <p>アプリ内に「端末の設定を開く」導線がある場合は、そちらから権限をご確認いただけます。</p>
            </TroubleshootingItem>
          </div>
        </GuideSection>

        <GuideSection
          id="location"
          title="地域・位置情報"
          description="位置情報を許可しなくても、都道府県・市区町村を手動で選択して利用できます。"
          layout="split"
          media={
            <GuideMedia
              kind="image"
              src="/aikenbiyori/help/troubleshooting/location-settings.png"
              alt="位置情報を使わず地域を手動で設定する画面"
              size="standard"
            />
          }
        >
          <p className="aiken-guide-section-description">
            「現在地から設定」が利用できない場合は、位置情報サービス・アプリの権限・通信状態をご確認ください。
          </p>
          <p className="aiken-guide-section-description">
            それでも解決しない場合も、「地域を選ぶ」から手動で設定できます。
          </p>
        </GuideSection>

        <GuideSection id="data" title="データ・バックアップ">
          <div className="aiken-trouble-list">
            <TroubleshootingItem question="バックアップできない">
              <p>保存先の空き容量をご確認ください。写真ファイルなどが不足していると失敗する場合があります。</p>
              <p>表示されたエラーメッセージもあわせてご確認ください。</p>
            </TroubleshootingItem>
            <TroubleshootingItem question="復元できない">
              <p>愛犬日和で作成したZIPバックアップかどうか、ファイルが破損していないかをご確認ください。</p>
              <p>現在のアプリより新しいバージョンで作成されたバックアップでないかもご確認ください。</p>
              <p>復元処理に失敗した場合、元の端末データは維持されるよう設計されています。</p>
              <p>
                詳しくは
                <Link href="/aikenbiyori/guide/data/">データ・バックアップ・機種変更</Link>
                のガイドをご確認ください。
              </p>
            </TroubleshootingItem>
            <TroubleshootingItem question="機種変更後にデータがない">
              <p>愛犬日和には自動的なクラウド同期はありません。旧端末で作成したバックアップから復元する必要があります。</p>
            </TroubleshootingItem>
          </div>
        </GuideSection>

        <GuideSection
          id="general"
          title="アプリ全般"
          description="通信状態、アプリの再起動、最新版へのアップデート、OSの権限設定、端末の再起動をご確認ください。"
        />

        <GuideSection
          id="contact"
          title="解決しない場合"
          description="お問い合わせいただく際は、次の情報があると調査がスムーズです。"
        >
          <ul className="aiken-guide-list">
            <li>iOS・Androidの別</li>
            <li>OSバージョン</li>
            <li>端末名</li>
            <li>愛犬日和のアプリバージョン</li>
            <li>発生日時</li>
            <li>発生までの操作</li>
            <li>表示されたエラーメッセージ</li>
            <li>必要ならスクリーンショット</li>
          </ul>
          <GuideNote variant="warning">
            パスワード、クレジットカード番号などの決済情報、その他調査に不要な個人情報は送らないでください。
          </GuideNote>
        </GuideSection>

        <RelatedGuides title="関連する使い方" items={relatedItems} />

        <HelpFooter />
      </div>
    </div>
  );
}
