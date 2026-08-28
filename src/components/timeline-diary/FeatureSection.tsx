interface FeatureSectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  note?: string;
}

export default function FeatureSection({
  id,
  eyebrow,
  title,
  description,
  points,
  note,
}: FeatureSectionProps) {
  return (
    <section
      className={`td-feature td-feature-${id}`}
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <p className="td-feature-label">
        <strong>{eyebrow}</strong>
      </p>
      <h2 id={`${id}-title`}>{title}</h2>
      <p className="td-feature-description">{description}</p>
      <ul className="td-feature-points">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      {note && <p className="td-feature-note">{note}</p>}
    </section>
  );
}
