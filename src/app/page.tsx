import { siteConfig } from "@/lib/siteConfig";
import { getAppsStoreData } from "@/lib/appStore";
import AppGrid from "@/components/AppGrid";

export default function Home() {
  const appsData = getAppsStoreData();

  const formatUpdatedAt = (dateString: string) => {
    if (!dateString) return "---";
    try {
      const date = new Date(dateString);
      return date.toLocaleString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return dateString;
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <h1 className="hero-title">{siteConfig.siteName}</h1>
        <p className="hero-description">{siteConfig.description}</p>
        <div className="hero-cta">
          <a href="#apps" className="btn-primary">
            アプリを見る
          </a>
          <a href="#contact" className="btn-outline">
            お問い合わせ
          </a>
        </div>
        <p className="hero-updated">
          最終更新: {formatUpdatedAt(appsData.updatedAt)}
        </p>
      </section>

      {/* Apps */}
      <section id="apps" className="section">
        <h2 className="section-title">Apps</h2>
        <AppGrid apps={appsData.apps} />
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <a href={`mailto:${siteConfig.contactEmail}`} className="contact-email">
            ✉️ {siteConfig.contactEmail}
          </a>
          <p className="contact-note">
            ※ ご返信まで数日かかる場合があります。あらかじめご了承ください。
          </p>
        </div>
      </section>
    </>
  );
}
