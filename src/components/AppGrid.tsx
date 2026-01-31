import type { App } from "@/lib/appStore";
import AppCard from "./AppCard";

interface AppGridProps {
  apps: App[];
}

export default function AppGrid({ apps }: AppGridProps) {
  if (apps.length === 0) {
    return (
      <div className="no-apps">
        <p>現在公開中のアプリはありません。</p>
      </div>
    );
  }

  // 新しいアプリが上に来るようにソート（currentVersionReleaseDateの降順）
  const sortedApps = [...apps].sort((a, b) => {
    const dateA = new Date(a.currentVersionReleaseDate || 0).getTime();
    const dateB = new Date(b.currentVersionReleaseDate || 0).getTime();
    return dateB - dateA;
  });

  return (
    <div className="app-grid">
      {sortedApps.map((app) => (
        <AppCard key={app.trackId} app={app} />
      ))}
    </div>
  );
}
