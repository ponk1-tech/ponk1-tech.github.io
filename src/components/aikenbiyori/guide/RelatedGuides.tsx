import Link from "next/link";
import type { RelatedGuideItem } from "@/types/guide";

interface RelatedGuidesProps {
  title?: string;
  items: RelatedGuideItem[];
}

export default function RelatedGuides({ title = "関連する使い方", items }: RelatedGuidesProps) {
  return (
    <section className="aiken-guide-related" aria-labelledby="aiken-guide-related-title">
      <h2 id="aiken-guide-related-title">{title}</h2>
      <ul className="aiken-guide-related-grid">
        {items.map((item) => (
          <li key={item.title}>
            {item.status === "available" && item.href ? (
              <Link className="aiken-guide-related-card" href={item.href}>
                <strong>{item.title}</strong>
                {item.description && <span>{item.description}</span>}
              </Link>
            ) : (
              <div className="aiken-guide-related-card aiken-guide-related-card-planned">
                <strong>{item.title}</strong>
                {item.description && <span>{item.description}</span>}
                <em className="aiken-guide-related-badge">準備中</em>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
