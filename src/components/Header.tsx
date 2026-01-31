"use client";

import { siteConfig } from "@/lib/siteConfig";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <a href="#" className="site-name">
          {siteConfig.siteName}
        </a>
        <nav className="nav">
          <a href="#apps" className="nav-link">
            Apps
          </a>
          <a
            href={siteConfig.noteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Note
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
