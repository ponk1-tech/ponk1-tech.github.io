import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

interface HelpFooterProps {
  contactSubject?: string;
}

export default function HelpFooter({
  contactSubject = "愛犬日和についてのお問い合わせ",
}: HelpFooterProps) {
  return (
    <section className="aiken-guide-help" aria-labelledby="aiken-guide-help-title">
      <div className="aiken-guide-help-faq">
        <p className="aiken-guide-help-label">困ったときは</p>
        <h2 id="aiken-guide-help-title">よくある質問もご確認ください</h2>
        <p>使い方で分からないことがあれば、まずはFAQをご覧ください。</p>
        <Link className="aiken-guide-help-button" href="/aikenbiyori/faq/">
          よくある質問を見る
        </Link>
      </div>
      <div className="aiken-guide-help-contact">
        <p>それでも解決しない場合は、メールでお問い合わせください。</p>
        <a
          className="aiken-guide-help-button aiken-guide-help-button-secondary"
          href={`mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(contactSubject)}`}
        >
          メールで問い合わせる
        </a>
        <p className="aiken-guide-help-note">
          ご返信まで数日かかる場合があります。あらかじめご了承ください。
        </p>
      </div>
    </section>
  );
}
