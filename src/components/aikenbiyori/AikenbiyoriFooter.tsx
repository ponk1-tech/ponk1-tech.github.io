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
          <Link href="/aikenbiyori/guide/">使い方ガイド</Link>
          <Link href="/aikenbiyori/faq/">よくある質問</Link>
          <Link href="/aikenbiyori/help/troubleshooting/">困ったとき</Link>
          <a
            href="https://tested-snapdragon-e94.notion.site/3a82f954671980d1a039fd2606a825c7"
            target="_blank"
            rel="noopener noreferrer"
          >
            プライバシーポリシー
          </a>
          <a
            href="https://tested-snapdragon-e94.notion.site/3a82f954671980d885fbebabfe4b6c75"
            target="_blank"
            rel="noopener noreferrer"
          >
            利用規約
          </a>
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
