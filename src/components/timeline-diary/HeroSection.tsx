import Link from "next/link";

interface HeroSectionProps {
  appStoreUrl?: string;
  iconUrl?: string;
}

export default function HeroSection({ appStoreUrl, iconUrl }: HeroSectionProps) {
  return (
    <section className="td-hero" aria-labelledby="td-hero-title">
      <div className="td-hero-copy">
        <h1 id="td-hero-title">
          <span>日々の出来事を、</span>
          <span>タイムラインで</span>
          <span>手軽に残す。</span>
        </h1>
        <p className="td-hero-description">
          思ったこと・感じたことを、時系列でシンプルに記録できる日記アプリです。文章は短くてもかまいません。一言メモのように、その日の出来事や気持ちを残せます。
        </p>
        <div className="td-hero-actions">
          {appStoreUrl ? (
            <a
              className="td-button td-button-primary"
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M16.7 12.9c0-2.4 2-3.6 2.1-3.7a4.6 4.6 0 0 0-3.6-2c-1.5-.2-3 .9-3.8.9-.8 0-2-1-3.2-.9a4.8 4.8 0 0 0-4 2.5c-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3.1 2.4 1.2 0 1.7-.8 3.3-.8 1.5 0 2 .8 3.3.8 1.4 0 2.3-1.2 3.1-2.4a10.7 10.7 0 0 0 1.4-2.9 4.2 4.2 0 0 1-2.9-3.7ZM14.2 5.6a4.3 4.3 0 0 0 1-3.1 4.4 4.4 0 0 0-2.9 1.5 4.1 4.1 0 0 0-1.1 3c1.1.1 2.2-.5 3-1.4Z" />
              </svg>
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
      <div className="td-hero-visual" aria-label="タイムライン日記の画面イメージ">
        <div className="td-hero-brand-row">
          {iconUrl && (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src={iconUrl} alt="タイムライン日記のアプリアイコン" />
          )}
          <div>
            <strong>タイムライン日記</strong>
            <span>一日を、時間の流れで。</span>
          </div>
        </div>
        <div className="td-timeline-preview" aria-hidden="true">
          <div className="td-preview-header">
            <div>
              <span>8月28日</span>
              <strong>今日</strong>
            </div>
            <span className="td-preview-count">3件</span>
          </div>
          <div className="td-preview-entry">
            <time>8:42</time>
            <span className="td-preview-rail" />
            <p>朝の空がきれいだった。</p>
          </div>
          <div className="td-preview-entry">
            <time>13:10</time>
            <span className="td-preview-rail" />
            <p>ひと息ついて、午後の予定を整理。</p>
          </div>
          <div className="td-preview-entry td-preview-entry-last">
            <time>20:35</time>
            <span className="td-preview-rail" />
            <p>今日もうれしかったことを記録。</p>
          </div>
        </div>
      </div>
    </section>
  );
}
