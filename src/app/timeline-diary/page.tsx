import type { Metadata } from "next";
import Link from "next/link";
import DownloadCta from "@/components/timeline-diary/DownloadCta";
import FeatureSection from "@/components/timeline-diary/FeatureSection";
import HeroSection from "@/components/timeline-diary/HeroSection";
import { getAppsStoreData } from "@/lib/appStore";
import { siteConfig } from "@/lib/siteConfig";

const TIMELINE_DIARY_BUNDLE_ID = "com.ponk1tech.timelineDiary";
const TIMELINE_DIARY_TRACK_ID = 6757142067;

const pageTitle = "タイムライン日記｜時系列でシンプルに残す日記アプリ";
const pageDescription =
  "思ったこと・感じたことを時系列でシンプルに記録できる日記アプリ「タイムライン日記」の公式サイトです。文章・写真・音声入力・タグで記録し、AIによる振り返りもできます。";
const canonicalUrl = `${siteConfig.siteUrl}/timeline-diary/`;

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

export default function TimelineDiaryPage() {
  const timelineDiaryApp = getAppsStoreData().apps.find(
    (app) => app.bundleId === TIMELINE_DIARY_BUNDLE_ID || app.trackId === TIMELINE_DIARY_TRACK_ID,
  );
  const appStoreUrl = timelineDiaryApp?.trackViewUrl || undefined;
  const iconUrl = "/timeline-diary/app-icon.png";

  const softwareApplicationJsonLd = timelineDiaryApp
    ? {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: timelineDiaryApp.trackName,
        url: canonicalUrl,
        applicationCategory: "LifestyleApplication",
        operatingSystem: "iOS",
        downloadUrl: appStoreUrl,
        ...(typeof timelineDiaryApp.price === "number" && timelineDiaryApp.currency
          ? {
              offers: {
                "@type": "Offer",
                price: timelineDiaryApp.price,
                priceCurrency: timelineDiaryApp.currency,
              },
            }
          : {}),
      }
    : null;

  return (
    <div className="td-home">
      {softwareApplicationJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      )}

      <HeroSection appStoreUrl={appStoreUrl} iconUrl={iconUrl} />

      <div className="td-features" id="features">
        <FeatureSection
          id="recording"
          eyebrow="記録する"
          title="文章・写真・音声・タグで、気軽に記録"
          description="ホーム画面の＋ボタンから、すぐに日記を書き始められます。短い文章でも、そのまま記録できます。"
          points={[
            "文章と日時を自由に入力",
            "写真は1件につき最大4枚まで添付",
            "話した内容をそのまま記録できる音声入力",
            "タグを付けてあとから振り返りやすく整理",
          ]}
        />
        <FeatureSection
          id="browsing"
          eyebrow="振り返る"
          title="タイムライン・カレンダー・検索で振り返る"
          description="記録は自動的に時系列で並びます。日付やキーワード、タグからも探せます。"
          points={[
            "ホームは常に新しい記録から順に表示",
            "カレンダーから日付を指定してジャンプ",
            "本文やタグをキーワードで検索",
            "これまでのタグ・写真を一覧で振り返る",
          ]}
        />
        <FeatureSection
          id="ai-reflection"
          eyebrow="AI振り返り"
          title="期間を選んで、AIにまとめてもらう"
          description="日・週・月・年、または好きな期間を選ぶと、AIがその期間の記録をまとめます。"
          points={[
            "日／週／月／年／カスタム期間から選択",
            "文章とタグをもとにAIが振り返りを作成",
            "作成した振り返りは履歴からいつでも読み返せる",
          ]}
          note="AIへ送信されるのは本文・投稿日時・タグのみです。写真は送信されません。"
        />
      </div>

      <section className="td-trust" aria-labelledby="td-trust-title">
        <p className="td-section-kicker">DATA</p>
        <h2 id="td-trust-title">データについて</h2>
        <div className="td-trust-grid">
          <article>
            <h3>会員登録不要</h3>
            <p>アプリ独自のアカウント登録・ログインは必要ありません。</p>
          </article>
          <article>
            <h3>端末内に保存</h3>
            <p>記録・写真・タグは、お使いの端末内に保存されます。</p>
          </article>
          <article>
            <h3>自動クラウド同期はなし</h3>
            <p>データを自動でクラウドに同期する機能はありません。</p>
          </article>
          <article>
            <h3>手動バックアップに対応</h3>
            <p>記録をまとめてファイルに書き出し、機種変更時などに読み込めます。</p>
          </article>
        </div>
      </section>

      <section className="td-premium" aria-labelledby="td-premium-title">
        <p className="td-section-kicker">PREMIUM</p>
        <h2 id="td-premium-title">Premiumについて</h2>
        <p className="td-guide-section-description">
          無料プランとの違いは、AI振り返りを作成できる回数だけです。
        </p>
        <div className="td-premium-compare">
          <article>
            <strong>Free</strong>
            <p>AI振り返りは月1回作成できます。</p>
          </article>
          <article>
            <strong>Premium</strong>
            <p>AI振り返りは月10回作成できます。</p>
          </article>
        </div>
      </section>

      <section className="td-guide-cta" aria-labelledby="td-guide-cta-title">
        <h2 id="td-guide-cta-title">もっと詳しい使い方</h2>
        <p>記録の作り方、AI振り返り、データのバックアップについて説明しています。</p>
        <Link className="td-button td-button-primary" href="/timeline-diary/guide/">
          使い方ガイドを見る
        </Link>
      </section>

      <DownloadCta appStoreUrl={appStoreUrl} />
    </div>
  );
}
