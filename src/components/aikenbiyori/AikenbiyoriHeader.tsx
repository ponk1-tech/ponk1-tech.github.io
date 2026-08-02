import Link from "next/link";

export default function AikenbiyoriHeader() {
  return (
    <header className="aiken-header">
      <div className="aiken-header-inner">
        <Link className="aiken-brand" href="/aikenbiyori/" aria-label="愛犬日和 トップ">
          <span className="aiken-brand-mark" aria-hidden="true" />
          愛犬日和
        </Link>
        <nav className="aiken-nav" aria-label="愛犬日和 メインメニュー">
          <a className="aiken-nav-secondary" href="/aikenbiyori/#features">
            特徴
          </a>
          <a className="aiken-nav-secondary" href="/aikenbiyori/#guide">
            使い方
          </a>
          <Link href="/aikenbiyori/faq/">FAQ</Link>
          <a className="aiken-nav-download" href="/aikenbiyori/#download">
            ダウンロード
          </a>
        </nav>
      </div>
    </header>
  );
}
