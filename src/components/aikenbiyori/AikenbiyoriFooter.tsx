import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function AikenbiyoriFooter() {
  return (
    <footer className="aiken-footer">
      <div className="aiken-footer-inner">
        <div>
          <Link className="aiken-footer-brand" href="/aikenbiyori/">
            愛犬日和
          </Link>
          <p>運営: {siteConfig.siteName}</p>
        </div>
        <nav className="aiken-footer-links" aria-label="フッターメニュー">
          <span>プライバシーポリシー（準備中）</span>
          <span>利用規約（準備中）</span>
          <a href={`mailto:${siteConfig.contactEmail}`}>お問い合わせ</a>
          <Link href="/">Ponk1 Tech公式サイト</Link>
        </nav>
      </div>
      <p className="aiken-footer-copyright">
        © {new Date().getFullYear()} {siteConfig.siteName}
      </p>
    </footer>
  );
}
