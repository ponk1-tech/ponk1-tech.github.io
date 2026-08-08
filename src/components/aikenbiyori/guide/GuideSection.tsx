import type { ReactNode } from "react";

interface GuideSectionProps {
  id: string;
  title: string;
  description?: ReactNode;
  media?: ReactNode;
  layout?: "stacked" | "split";
  children?: ReactNode;
}

export default function GuideSection({
  id,
  title,
  description,
  media,
  layout = "stacked",
  children,
}: GuideSectionProps) {
  return (
    <section
      className={`aiken-guide-section${layout === "split" ? " aiken-guide-section-split" : ""}`}
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <div className="aiken-guide-section-copy">
        <h2 id={`${id}-title`}>{title}</h2>
        {description && <p className="aiken-guide-section-description">{description}</p>}
        {children}
      </div>
      {media && <div className="aiken-guide-section-media">{media}</div>}
    </section>
  );
}
