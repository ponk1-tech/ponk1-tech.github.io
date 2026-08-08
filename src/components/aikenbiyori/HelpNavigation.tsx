import Link from "next/link";

const helpLinks = [
  {
    title: "使い方ガイド",
    description: "はじめての方から、各機能の詳しい使い方まで",
    href: "/aikenbiyori/guide/",
  },
  {
    title: "よくある質問",
    description: "よくある疑問を短く確認できます",
    href: "/aikenbiyori/faq/",
  },
  {
    title: "困ったとき",
    description: "エラーや操作で困ったときの確認方法",
    href: "/aikenbiyori/help/troubleshooting/",
  },
];

export default function HelpNavigation() {
  return (
    <section className="aiken-support" aria-labelledby="support-title">
      <div className="aiken-section-heading">
        <p className="aiken-section-kicker">SUPPORT</p>
        <h2 id="support-title">使い方・サポート</h2>
        <p>はじめての方も、使い方に迷ったときも、ここから確認できます。</p>
      </div>
      <div className="aiken-support-grid">
        {helpLinks.map((item) => (
          <Link key={item.href} className="aiken-support-card" href={item.href}>
            <strong>{item.title}</strong>
            <span>{item.description}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
