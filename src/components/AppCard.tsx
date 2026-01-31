import type { App } from "@/lib/appStore";

interface AppCardProps {
  app: App;
}

export default function AppCard({ app }: AppCardProps) {
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  const truncateNotes = (notes: string, maxLength: number = 100) => {
    if (!notes) return "";
    if (notes.length <= maxLength) return notes;
    return notes.slice(0, maxLength) + "...";
  };

  return (
    <div className="app-card">
      <div className="app-card-header">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={app.artworkUrl100}
          alt={`${app.trackName} icon`}
          className="app-icon"
        />
        <div className="app-info">
          <h3 className="app-name">{app.trackName}</h3>
          <p className="app-version">
            v{app.version} • {formatDate(app.currentVersionReleaseDate)}
          </p>
        </div>
      </div>
      {app.description && (
        <p className="app-notes">{truncateNotes(app.description)}</p>
      )}
      <a
        href={app.trackViewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="app-store-button"
      >
        App Storeで見る
      </a>
    </div>
  );
}
