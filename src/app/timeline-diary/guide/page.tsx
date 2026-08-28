import type { Metadata } from "next";
import Breadcrumb from "@/components/timeline-diary/Breadcrumb";
import GuideNote from "@/components/timeline-diary/GuideNote";
import GuideSection from "@/components/timeline-diary/GuideSection";
import { siteConfig } from "@/lib/siteConfig";

const PRIVACY_POLICY_URL =
  "https://tested-snapdragon-e94.notion.site/2d92f954671980a4842bc3a4783b0a29?source=copy_link";

const pageTitle = "使い方ガイド｜タイムライン日記";
const pageDescription =
  "タイムライン日記の記録の作り方、振り返り方、AI振り返り、Premium、データの守り方、表示設定についてご案内します。";
const canonicalUrl = `${siteConfig.siteUrl}/timeline-diary/guide/`;

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
    siteName: "タイムライン日記",
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
  { id: "intro", label: "はじめに" },
  { id: "recording", label: "記録する" },
  { id: "browsing", label: "振り返る" },
  { id: "ai-reflection", label: "AIに振り返ってもらう" },
  { id: "premium", label: "Premiumについて" },
  { id: "data", label: "データを守る" },
  { id: "preferences", label: "好みに合わせる" },
  { id: "privacy", label: "プライバシーとお問い合わせ" },
];

export default function TimelineDiaryGuidePage() {
  return (
    <div className="td-guide-page">
      <Breadcrumb
        items={[
          { label: "Ponk1 Tech", href: "/" },
          { label: "タイムライン日記", href: "/timeline-diary/" },
          { label: "使い方ガイド" },
        ]}
      />

      <div className="td-guide-hero">
        <h1>使い方ガイド</h1>
        <p>
          タイムライン日記の基本的な使い方から、AI振り返り、Premium、データの守り方まで、順番にご案内します。
        </p>
      </div>

      <nav className="td-guide-toc" aria-label="ページ内目次">
        <p>目次</p>
        <ol>
          {tocItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ol>
      </nav>

      <GuideSection
        id="intro"
        title="はじめに"
        description="タイムライン日記は、会員登録なしですぐに使い始められます。アプリを開くと、そのまま日記の画面が表示されます。"
      >
        <ul className="td-guide-list">
          <li>会員登録・ログインは不要です</li>
          <li>アプリを開いてすぐに記録を始められます</li>
          <li>記録・写真はお使いの端末内に保存されます</li>
        </ul>
      </GuideSection>

      <GuideSection
        id="recording"
        title="記録する"
        description="新しい記録は、ホーム画面右下の「＋」ボタンから作成します。"
      >
        <ul className="td-guide-list">
          <li>本文を入力します（文章が短くても構いません）</li>
          <li>日時はタップして変更できます（既定では現在時刻です）</li>
          <li>写真は1件の記録につき最大4枚まで添付できます</li>
          <li>マイクのアイコンから、話した内容をそのまま記録できます（音声入力）</li>
          <li>タグを付けて、あとから同じタグの記録をまとめて振り返れます</li>
          <li>「AI振り返りに含める」のスイッチで、その記録をAI振り返りの対象にするか選べます</li>
        </ul>
        <p className="td-guide-section-description">
          記録は、詳細画面を開いて編集アイコンから内容を書き換えられます。削除も同じ編集画面から行います。
        </p>
        <GuideNote variant="warning">
          記録を削除すると、元に戻すことはできません。
        </GuideNote>
      </GuideSection>

      <GuideSection
        id="browsing"
        title="振り返る"
        description="ホーム画面には、記録が新しい日付から順にタイムライン表示されます。"
      >
        <ul className="td-guide-list">
          <li>ホームは常に新しい記録から順に並びます</li>
          <li>カレンダーアイコンから日付を指定して、その日の記録に直接ジャンプできます</li>
          <li>検索アイコンから、本文やタグをキーワードで検索できます</li>
        </ul>
        <p className="td-guide-section-description">
          「記録」タブでは、これまで付けたタグや撮った写真を一覧で振り返れます。
        </p>
        <GuideNote variant="note">
          「記録」タブは新しい日記を書く画面ではありません。新しい記録は、ホーム画面右下の「＋」から作成します。
        </GuideNote>
      </GuideSection>

      <GuideSection
        id="ai-reflection"
        title="AIに振り返ってもらう"
        description="「振り返り」タブでは、選んだ期間の記録をもとに、AIが振り返りをまとめてくれます。"
      >
        <ul className="td-guide-list">
          <li>期間の種類（日／週／月／年／カスタム範囲）を選びます</li>
          <li>「振り返りを作成」で、その期間の記録をもとにAIが振り返りを作成します</li>
          <li>一度作成した振り返りは、履歴からいつでも読み返せます</li>
          <li>作成済みの振り返りは、再生成して内容を更新することもできます</li>
        </ul>
        <p className="td-guide-section-description">
          AI振り返りを作成できる回数は、Freeプランは月1回、Premiumプランは月10回です。回数を使い切った場合、動画広告を視聴すると1回分を追加できます。
        </p>
        <GuideNote variant="note">
          AIに送信されるのは本文・投稿日時・タグのみです。写真は送信されません。また、記録ごとに「AI振り返りに含める」をOFFにしている場合、その記録は送信対象になりません。
        </GuideNote>
      </GuideSection>

      <GuideSection
        id="premium"
        title="Premiumについて"
        description="Premiumプランで変わるのは、AI振り返りを作成できる回数だけです。"
      >
        <ul className="td-guide-list">
          <li>Freeプラン：AI振り返りは月1回作成できます</li>
          <li>Premiumプラン：AI振り返りは月10回作成できます</li>
          <li>プランは月額・年額から選べます。価格はApp Store／Google Playの表示に従います</li>
          <li>機種変更やアプリの再インストール後も、「購入を復元」から同じアカウントで復元できます</li>
        </ul>
        <p className="td-guide-section-description">
          Premiumの購入・復元・プラン変更に、アプリ独自のアカウント登録は必要ありません。
        </p>
      </GuideSection>

      <GuideSection
        id="data"
        title="データを守る"
        description="記録・写真・タグは、すべてお使いの端末内に保存されます。自動でクラウドに同期される機能はありません。"
      >
        <ul className="td-guide-list">
          <li>設定画面から、記録・写真・タグ・AI振り返りをまとめてZIPファイルに書き出せます（データのエクスポート）</li>
          <li>書き出したZIPファイルを選んで読み込むこともできます（データのインポート）</li>
          <li>機種変更のときは、エクスポートしたファイルを新しい端末に移してインポートしてください</li>
          <li>記録は1件ずつ削除できます</li>
          <li>使われなくなった画像だけをまとめて整理する機能もあります</li>
        </ul>
        <GuideNote variant="note">
          エクスポート・インポートは手動でファイルをやり取りする機能で、自動的なクラウド同期ではありません。また、記録をまとめて一括削除する機能は現在ありません。
        </GuideNote>
      </GuideSection>

      <GuideSection
        id="preferences"
        title="好みに合わせる"
        description="設定画面から、見た目や表示のしかたを変更できます。"
      >
        <ul className="td-guide-list">
          <li>外観：ライト／ダーク／システムの設定に合わせる</li>
          <li>週の始まりの曜日</li>
          <li>日付の表示形式</li>
          <li>タイムラインの文字の大きさ</li>
        </ul>
      </GuideSection>

      <GuideSection
        id="privacy"
        title="プライバシーとお問い合わせ"
        description="プライバシーポリシーは、以下からご確認いただけます。"
      >
        <p className="td-guide-section-description">
          <a href={PRIVACY_POLICY_URL} target="_blank" rel="noopener noreferrer">
            プライバシーポリシーを見る
          </a>
        </p>
        <GuideNote variant="note">
          AI振り返りの作成時にAIへ送信されるのは本文・投稿日時・タグのみです。写真や、AI振り返りの対象からOFFにした記録は送信されません。
        </GuideNote>
        <p className="td-guide-section-description">
          使い方についてのご不明点は、メールでお問い合わせください。
        </p>
        <a
          className="td-guide-help-button"
          href={`mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent("タイムライン日記についてのお問い合わせ")}`}
        >
          メールで問い合わせる
        </a>
        <p className="td-guide-section-description">
          ご返信まで数日かかる場合があります。あらかじめご了承ください。
        </p>
      </GuideSection>
    </div>
  );
}
