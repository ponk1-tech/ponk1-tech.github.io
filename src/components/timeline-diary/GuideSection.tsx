import type { ReactNode } from "react";

interface GuideSectionProps {
  id: string;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
  /** 将来スクリーンショットや動画を差し込むためのスロット（現時点では未使用） */
  media?: ReactNode;
}

export default function GuideSection({ id, title, description, children, media }: GuideSectionProps) {
  return (
    <section className="td-guide-section" id={id} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}>{title}</h2>
      {description && <p className="td-guide-section-description">{description}</p>}
      {media && <div className="td-guide-section-media">{media}</div>}
      {children}
    </section>
  );
}
