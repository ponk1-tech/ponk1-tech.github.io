import type { ReactNode } from "react";

interface GuideHeroProps {
  badge?: string;
  title: string;
  lead: ReactNode;
}

export default function GuideHero({ badge = "愛犬日和 ヘルプ", title, lead }: GuideHeroProps) {
  return (
    <header className="aiken-guide-hero">
      <p className="aiken-guide-badge">{badge}</p>
      <h1>{title}</h1>
      <p className="aiken-guide-lead">{lead}</p>
    </header>
  );
}
