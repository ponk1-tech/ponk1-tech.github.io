import Link from "next/link";

interface HeroSectionProps {
  appStoreUrl?: string;
  iconUrl?: string;
}

export default function HeroSection({ appStoreUrl, iconUrl }: HeroSectionProps) {
  return (
    <section className="td-hero" aria-labelledby="td-hero-title">
      <div className="td-hero-copy">
        <p className="td-kicker">シンプルな時系列日記</p>
        <h1 id="td-hero-title">
          日々の出来事を、
          <br />
          タイムラインで手軽に残す。
        </h1>
        <p className="td-hero-description">
          思ったこと・感じたことを、時系列でシンプルに記録できる日記アプリです。文章が長くなくても大丈夫。一言メモのような感覚で、その日の出来事や気持ちを残せます。
        </p>
        <div className="td-hero-actions">
          {appStoreUrl ? (
            <a
              className="td-button td-button-primary"
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              App Storeでダウンロード
            </a>
          ) : (
            <p className="td-store-status">ストア公開情報は現在準備中です。</p>
          )}
          <Link className="td-button td-button-secondary" href="/timeline-diary/guide/">
            使い方を見る
          </Link>
        </div>
      </div>
      {iconUrl && (
        <div className="td-hero-visual">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={iconUrl} alt="タイムライン日記のアプリアイコン" />
        </div>
      )}
    </section>
  );
}
