import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/aikenbiyori/FaqAccordion";
import faqJson from "@/content/aikenbiyori/faq.json";
import { siteConfig } from "@/lib/siteConfig";
import type { FaqData } from "@/types/faq";

const faqData: FaqData = faqJson;

const pageTitle = `よくある質問 | 愛犬日和 | ${siteConfig.siteName}`;
const pageDescription =
  "愛犬日和のはじめかたや今日のケア、AIに相談、記録・愛犬プロフィール、料金・広告、データ・機種変更についてのよくある質問をご案内します。";
const canonicalUrl = `${siteConfig.siteUrl}/aikenbiyori/faq/`;

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

export default function AikenbiyoriFaqPage() {
  return (
    <div className="faq-page">
      <div className="faq-container">
        <nav className="breadcrumb" aria-label="パンくず">
          <ol>
            <li>
              <Link href="/">Ponk1 Tech</Link>
            </li>
            <li>
              <span aria-hidden="true">/</span>
              <Link href="/aikenbiyori/">愛犬日和</Link>
            </li>
            <li aria-current="page">
              <span aria-hidden="true">/</span>
              <span>よくある質問</span>
            </li>
          </ol>
        </nav>

        <header className="faq-hero">
          <p className="faq-app-name">愛犬日和 ヘルプ</p>
          <h1>よくある質問</h1>
          <p className="faq-lead">
            愛犬日和の使い方や、困ったときの対処方法をご案内します。
          </p>
        </header>

        <nav className="faq-category-nav" aria-label="FAQカテゴリ">
          <p className="faq-category-nav-title">カテゴリから探す</p>
          <ul>
            {faqData.categories.map((category) => (
              <li key={category.id}>
                <a href={`#${category.id}`}>{category.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="faq-sections">
          {faqData.categories.map((category) => (
            <section
              className="faq-category-section"
              id={category.id}
              key={category.id}
              aria-labelledby={`${category.id}-title`}
            >
              <h2 id={`${category.id}-title`}>{category.label}</h2>
              <FaqAccordion items={category.items} />
            </section>
          ))}
        </div>

        <section className="faq-contact" aria-labelledby="faq-contact-title">
          <p className="faq-contact-label">サポート</p>
          <h2 id="faq-contact-title">解決しない場合</h2>
          <p>
            FAQで解決しないご質問や不具合については、メールでお問い合わせください。
          </p>
          <a
            className="faq-contact-button"
            href={`mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent("愛犬日和についてのお問い合わせ")}`}
          >
            メールで問い合わせる
          </a>
          <p className="faq-contact-note">
            ご返信まで数日かかる場合があります。あらかじめご了承ください。
          </p>
        </section>
      </div>
    </div>
  );
}
