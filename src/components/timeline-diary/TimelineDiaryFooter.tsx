import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

const PRIVACY_POLICY_URL =
  "https://tested-snapdragon-e94.notion.site/2d92f954671980a4842bc3a4783b0a29?source=copy_link";

export default function TimelineDiaryFooter() {
  return (
    <footer className="td-footer">
      <div className="td-footer-inner">
        <div>
          <Link className="td-footer-brand" href="/timeline-diary/">
            タイムライン日記
          </Link>
          <p>運営: {siteConfig.siteName}</p>
        </div>
        <nav className="td-footer-links" aria-label="フッターメニュー">
          <Link href="/timeline-diary/guide/">使い方ガイド</Link>
          <a href={PRIVACY_POLICY_URL} target="_blank" rel="noopener noreferrer">
            プライバシーポリシー
          </a>
          <a href={`mailto:${siteConfig.contactEmail}`}>お問い合わせ</a>
          <Link href="/">Ponk1 Tech公式サイト</Link>
        </nav>
      </div>
      <p className="td-footer-copyright">
        © {new Date().getFullYear()} {siteConfig.siteName}
      </p>
    </footer>
  );
}
