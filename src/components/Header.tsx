import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="site-name">
          {siteConfig.siteName}
        </Link>
        <nav className="nav">
          <Link href="/#apps" className="nav-link">
            Apps
          </Link>
          <a
            href={siteConfig.noteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Note
          </a>
          <Link href="/#contact" className="nav-link">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
