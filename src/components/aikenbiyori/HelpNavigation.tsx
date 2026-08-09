import Link from "next/link";
import { supportLinks } from "@/content/aikenbiyori/guide-categories";

export default function HelpNavigation() {
  return (
    <section className="aiken-support" aria-labelledby="support-title">
      <div className="aiken-section-heading">
        <p className="aiken-section-kicker">SUPPORT</p>
        <h2 id="support-title">困ったときのサポート</h2>
        <p>短い疑問への回答と、エラーや操作上の問題の対処方法を確認できます。</p>
      </div>
      <div className="aiken-support-grid">
        {supportLinks.map((item) => (
          <Link key={item.href} className="aiken-support-card" href={item.href}>
            <strong>{item.title}</strong>
            <span>{item.description}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
