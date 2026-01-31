import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="copyright">
          © {currentYear} {siteConfig.siteName}
        </p>
        <a href="#" className="top-link">
          Topへ戻る
        </a>
      </div>
    </footer>
  );
}
