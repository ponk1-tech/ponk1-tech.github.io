import type { Metadata } from "next";
import Link from "next/link";
import DownloadCta from "@/components/aikenbiyori/DownloadCta";
import FeatureSection from "@/components/aikenbiyori/FeatureSection";
import HelpNavigation from "@/components/aikenbiyori/HelpNavigation";
import HeroSection from "@/components/aikenbiyori/HeroSection";
import { getAppsStoreData } from "@/lib/appStore";
import { siteConfig } from "@/lib/siteConfig";

const pageTitle = "愛犬日和｜愛犬の毎日のケアと判断をサポート";
const pageDescription =
  "天気や愛犬の情報をもとに、毎日のケア、記録、AI相談をサポートするアプリ「愛犬日和」の公式サイトです。";
const canonicalUrl = `${siteConfig.siteUrl}/aikenbiyori/`;
const ogImageUrl = `${siteConfig.siteUrl}/aikenbiyori/illustrations/hero.png`;

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
    images: [
      {
        url: ogImageUrl,
        width: 1024,
        height: 1536,
        alt: "愛犬日和の水彩風イラスト",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [ogImageUrl],
  },
};

export default function AikenbiyoriPage() {
  const aikenApp = getAppsStoreData().apps.find(
    (app) => app.trackName.trim() === "愛犬日和",
  );
  const appStoreUrl = aikenApp?.trackViewUrl || undefined;

  const softwareApplicationJsonLd = aikenApp
    ? {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: aikenApp.trackName,
        url: canonicalUrl,
        applicationCategory: "LifestyleApplication",
        operatingSystem: "iOS",
        downloadUrl: appStoreUrl,
        ...(typeof aikenApp.price === "number" && aikenApp.currency
          ? {
              offers: {
                "@type": "Offer",
                price: aikenApp.price,
                priceCurrency: aikenApp.currency,
              },
            }
          : {}),
      }
    : null;

  return (
    <div className="aiken-home">
      {softwareApplicationJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      )}

      <HeroSection hasStoreLink={Boolean(appStoreUrl)} />

      <section className="aiken-overview" id="features" aria-labelledby="features-title">
        <div className="aiken-section-heading">
          <p className="aiken-section-kicker">FEATURES</p>
          <h2 id="features-title">愛犬日和でできること</h2>
          <p>
            毎日のケア、気になることの整理、大切な記録。愛犬との暮らしに必要な情報を、ひとつの場所で確認できます。
          </p>
        </div>
        <div className="aiken-overview-links">
          <a href="#daily-care">
            <span>01</span>
            <strong>今日のケア</strong>
            <small>その日の過ごし方を確認</small>
          </a>
          <a href="#ai-consultation">
            <span>02</span>
            <strong>AIに相談</strong>
            <small>気になることを整理</small>
          </a>
          <a href="#daily-record">
            <span>03</span>
            <strong>記録</strong>
            <small>毎日の様子を残す</small>
          </a>
        </div>
      </section>

      <div className="aiken-features">
        <FeatureSection
          id="daily-care"
          number="01"
          eyebrow="今日のケア"
          title="その子に合った、今日の過ごし方"
          description="天気や登録した散歩時間、愛犬の情報をもとに、その日のケアや注意したいことを確認できます。"
          imageSrc="/aikenbiyori/illustrations/daily-care.png"
          imageAlt="愛犬と毎日のケア項目を描いた水彩風イラスト"
          points={[
            "時間帯ごとの散歩情報",
            "天気や気温の確認",
            "周辺イベントの注意情報",
            "愛犬のプロフィールに合わせた内容",
          ]}
        />
        <FeatureSection
          id="ai-consultation"
          number="02"
          eyebrow="AIに相談"
          title="気になることを、AIと整理する"
          description="共有を許可した愛犬のプロフィール情報と相談内容をもとに、次に確認したいことや、今できる対応を分かりやすく整理します。"
          imageSrc="/aikenbiyori/illustrations/ai-consultation.png"
          imageAlt="愛犬とAI相談の会話画面を描いた水彩風イラスト"
          points={[
            "共有を許可した愛犬情報を踏まえて相談",
            "気になる状況を文章で入力",
            "次に確認したいことを整理",
          ]}
          note="愛犬日和は診断や治療を行うアプリではありません。緊急時や症状が気になる場合は、動物病院へ相談してください。"
          reverse
        />
        <FeatureSection
          id="daily-record"
          number="03"
          eyebrow="記録"
          title="毎日の様子を、かんたんに記録"
          description="食事、散歩、体調、できごとを、文章や写真と一緒に残せます。"
          imageSrc="/aikenbiyori/illustrations/daily-record.png"
          imageAlt="愛犬が日々の様子をノートへ記録する水彩風イラスト"
          points={[
            "今日の様子を自由に入力",
            "食事・散歩・体調・できごとで分類",
            "写真を一緒に保存",
            "カレンダーや一覧から振り返る",
          ]}
        />
      </div>

      <section className="aiken-values" aria-labelledby="values-title">
        <div className="aiken-section-heading">
          <p className="aiken-section-kicker">OUR APPROACH</p>
          <h2 id="values-title">愛犬日和が大切にしていること</h2>
        </div>
        <div className="aiken-value-grid">
          <article>
            <span aria-hidden="true">01</span>
            <h3>愛犬ごとの違いを大切にする</h3>
            <p>登録したプロフィールや日々の情報をもとに、その子との暮らしに合わせて考えられる形を目指します。</p>
          </article>
          <article>
            <span aria-hidden="true">02</span>
            <h3>判断材料を分かりやすく伝える</h3>
            <p>天気や記録などの情報を整理し、飼い主さんが次の行動を考えやすい形で届けます。</p>
          </article>
          <article>
            <span aria-hidden="true">03</span>
            <h3>できることの範囲を明確にする</h3>
            <p>AIの案内を診断として扱わず、必要なときに専門家へ相談するための注意も分かりやすく伝えます。</p>
          </article>
        </div>
      </section>

      <section className="aiken-guide" id="guide" aria-labelledby="guide-title">
        <div className="aiken-section-heading">
          <p className="aiken-section-kicker">GUIDE</p>
          <h2 id="guide-title">初めて使う方へ</h2>
          <p>愛犬の登録から、毎日の使い方へ進むための入口です。</p>
        </div>
        <div className="aiken-guide-links">
          <Link href="/aikenbiyori/guide/getting-started/">
            <span>最初の使い方</span>
            <strong>はじめての愛犬日和</strong>
            <small>愛犬の登録から、最初の使い方まで</small>
          </Link>
          <Link href="/aikenbiyori/guide/">
            <span>機能別に確認</span>
            <strong>使い方ガイド</strong>
            <small>今日のケア、AI相談、記録など詳しい使い方</small>
          </Link>
        </div>
      </section>

      <HelpNavigation />

      <DownloadCta appStoreUrl={appStoreUrl} />
    </div>
  );
}
