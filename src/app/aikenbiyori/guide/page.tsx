import type { Metadata } from "next";
import Breadcrumb from "@/components/aikenbiyori/guide/Breadcrumb";
import GuideHero from "@/components/aikenbiyori/guide/GuideHero";
import GuideNote from "@/components/aikenbiyori/guide/GuideNote";
import HelpFooter from "@/components/aikenbiyori/guide/HelpFooter";
import RelatedGuides from "@/components/aikenbiyori/guide/RelatedGuides";
import TableOfContents from "@/components/aikenbiyori/guide/TableOfContents";
import { guideCategories, supportLinks } from "@/content/aikenbiyori/guide-categories";
import { siteConfig } from "@/lib/siteConfig";

const pageTitle = "使い方ガイド | 愛犬日和 | Ponk1 Tech";
const pageDescription =
  "愛犬日和の基本操作や、今日のケア、AIに相談、記録などの使い方をカテゴリ別にご案内します。";
const canonicalUrl = `${siteConfig.siteUrl}/aikenbiyori/guide/`;

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
  { id: "categories", label: "カテゴリから探す" },
  { id: "help", label: "困ったときは" },
];

export default function AikenbiyoriGuidePage() {
  return (
    <div className="aiken-guide-page">
      <div className="aiken-guide-container">
        <Breadcrumb
          items={[
            { label: "Ponk1 Tech", href: "/" },
            { label: "愛犬日和", href: "/aikenbiyori/" },
            { label: "使い方ガイド" },
          ]}
        />

        <GuideHero
          title="使い方ガイド"
          lead="愛犬日和の基本操作や、毎日のケア、AIへの相談方法をカテゴリ別にご案内します。"
        />

        <TableOfContents items={tocItems} />

        <div id="categories">
          <RelatedGuides title="カテゴリから探す" items={guideCategories} />
        </div>

        <div id="help">
          <RelatedGuides title="困ったときは" items={supportLinks} />
          <GuideNote variant="warning">
            愛犬日和は診断や治療を行うアプリではありません。緊急時や症状が気になる場合は、動物病院へ相談してください。
          </GuideNote>
        </div>

        <HelpFooter />
      </div>
    </div>
  );
}
