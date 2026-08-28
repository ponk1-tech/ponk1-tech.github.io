import Link from "next/link";

export default function TimelineDiaryHeader() {
  return (
    <header className="td-header">
      <div className="td-header-inner">
        <Link className="td-brand" href="/timeline-diary/" aria-label="タイムライン日記 トップ">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="td-brand-icon" src="/timeline-diary/app-icon.png" alt="" />
          <span>タイムライン日記</span>
        </Link>
        <nav className="td-nav" aria-label="タイムライン日記 メインメニュー">
          <a className="td-nav-secondary" href="/timeline-diary/#features">
            特徴
          </a>
          <Link href="/timeline-diary/guide/">使い方</Link>
          <a className="td-nav-download" href="/timeline-diary/#download">
            ダウンロード
          </a>
        </nav>
      </div>
    </header>
  );
}
