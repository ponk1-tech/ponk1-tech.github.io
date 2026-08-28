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
            <span>Download on the</span>
            App Store
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
