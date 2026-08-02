import Image from "next/image";

interface FeatureSectionProps {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  points: string[];
  reverse?: boolean;
  note?: string;
}

export default function FeatureSection({
  id,
  number,
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  points,
  reverse = false,
  note,
}: FeatureSectionProps) {
  return (
    <section
      className={`aiken-feature${reverse ? " aiken-feature-reverse" : ""}`}
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <div className="aiken-feature-visual">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 900px) 42vw, 90vw"
        />
      </div>
      <div className="aiken-feature-copy">
        <p className="aiken-feature-label">
          <span>{number}</span>
          {eyebrow}
        </p>
        <h2 id={`${id}-title`}>{title}</h2>
        <p className="aiken-feature-description">{description}</p>
        <ul className="aiken-feature-points">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        {note && <p className="aiken-feature-note">{note}</p>}
      </div>
    </section>
  );
}
