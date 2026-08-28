interface DownloadCtaProps {
  appStoreUrl?: string;
}

export default function DownloadCta({ appStoreUrl }: DownloadCtaProps) {
  return (
    <section className="td-download" id="download" aria-labelledby="td-download-title">
      <p className="td-section-kicker">DOWNLOAD</p>
      <h2 id="td-download-title">今日の気持ちを、ひとことから。</h2>
      <p>アカウント登録は不要です。すぐに書き始められます。</p>
      <div className="td-download-actions">
        {appStoreUrl ? (
          <a
            className="td-store-link"
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M16.7 12.9c0-2.4 2-3.6 2.1-3.7a4.6 4.6 0 0 0-3.6-2c-1.5-.2-3 .9-3.8.9-.8 0-2-1-3.2-.9a4.8 4.8 0 0 0-4 2.5c-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3.1 2.4 1.2 0 1.7-.8 3.3-.8 1.5 0 2 .8 3.3.8 1.4 0 2.3-1.2 3.1-2.4a10.7 10.7 0 0 0 1.4-2.9 4.2 4.2 0 0 1-2.9-3.7ZM14.2 5.6a4.3 4.3 0 0 0 1-3.1 4.4 4.4 0 0 0-2.9 1.5 4.1 4.1 0 0 0-1.1 3c1.1.1 2.2-.5 3-1.4Z" />
            </svg>
            <span>
              <small>Download on the</small>
              App Store
            </span>
          </a>
        ) : (
          <p className="td-download-pending">
            ストアでの公開情報は準備中です。公開後、こちらからご案内します。
          </p>
        )}
      </div>
    </section>
  );
}
