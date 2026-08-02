import Image from "next/image";

interface HeroSectionProps {
  hasStoreLink: boolean;
}

export default function HeroSection({ hasStoreLink }: HeroSectionProps) {
  return (
    <section className="aiken-hero" aria-labelledby="aiken-hero-title">
      <div className="aiken-hero-copy">
        <p className="aiken-kicker">愛犬との毎日に、やさしい判断材料を。</p>
        <h1 id="aiken-hero-title">
          愛犬のために、<br />
          より良い判断ができるアプリ。
        </h1>
        <p className="aiken-hero-description">
          AIが天気や愛犬の情報をもとに、その子に合った毎日のお世話や、気になることへの判断をサポートします。
        </p>
        <div className="aiken-hero-actions">
          <a className="aiken-button aiken-button-primary" href="#download">
            アプリをダウンロード
          </a>
          <a className="aiken-button aiken-button-secondary" href="#features">
            愛犬日和について知る
          </a>
        </div>
        {!hasStoreLink && (
          <p className="aiken-store-status">ストア公開情報は現在準備中です。</p>
        )}
      </div>
      <div className="aiken-hero-visual">
        <Image
          src="/aikenbiyori/illustrations/hero.png"
          alt="愛犬と、今日のケアを表示したスマートフォンの水彩風イラスト"
          fill
          priority
          sizes="(min-width: 900px) 42vw, 88vw"
        />
      </div>
    </section>
  );
}
