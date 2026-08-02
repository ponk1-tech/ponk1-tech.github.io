interface DownloadCtaProps {
  appStoreUrl?: string;
}

export default function DownloadCta({ appStoreUrl }: DownloadCtaProps) {
  return (
    <section className="aiken-download" id="download" aria-labelledby="download-title">
      <p className="aiken-section-kicker">DOWNLOAD</p>
      <h2 id="download-title">愛犬との毎日に、愛犬日和を。</h2>
      <p>毎日の小さな判断を、少し分かりやすく。</p>
      <div className="aiken-download-actions">
        {appStoreUrl ? (
          <a
            className="aiken-store-link"
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Download on the</span>
            App Store
          </a>
        ) : (
          <p className="aiken-download-pending">
            ストアでの公開情報は準備中です。公開後、こちらからご案内します。
          </p>
        )}
      </div>
    </section>
  );
}
