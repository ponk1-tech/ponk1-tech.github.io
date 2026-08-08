import Image from "next/image";
import type { GuideVideoSource } from "@/types/guide";

const isDev = process.env.NODE_ENV !== "production";

type GuideMediaSize = "standard" | "compact";

interface GuideMediaImageProps {
  kind: "image";
  src?: string;
  alt: string;
  caption?: string;
  size?: GuideMediaSize;
}

interface GuideMediaVideoProps {
  kind: "video";
  sources?: GuideVideoSource[];
  poster?: string;
  alt: string;
  caption?: string;
  autoplay?: boolean;
  size?: GuideMediaSize;
}

type GuideMediaProps = GuideMediaImageProps | GuideMediaVideoProps;

function GuideMediaPlaceholder({ label }: { label: string }) {
  return (
    <div className="aiken-guide-media-placeholder">
      {isDev && <span>{label}</span>}
    </div>
  );
}

export default function GuideMedia(props: GuideMediaProps) {
  const { caption, size = "standard" } = props;

  return (
    <figure
      className={
        size === "compact" ? "aiken-guide-media aiken-guide-media-compact" : "aiken-guide-media"
      }
    >
      <div className="aiken-guide-media-frame">
        {props.kind === "image" ? (
          props.src ? (
            <Image
              src={props.src}
              alt={props.alt}
              fill
              sizes="(min-width: 900px) 42vw, 90vw"
            />
          ) : (
            <GuideMediaPlaceholder label={`スクリーンショット未設定: ${props.alt}`} />
          )
        ) : props.sources && props.sources.length > 0 ? (
          <video
            poster={props.poster}
            muted
            playsInline
            loop
            controls={!props.autoplay}
            autoPlay={props.autoplay}
            aria-label={props.alt}
          >
            {props.sources.map((source) => (
              <source key={source.src} src={source.src} type={source.type} />
            ))}
          </video>
        ) : (
          <GuideMediaPlaceholder label={`動画未設定: ${props.alt}`} />
        )}
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
