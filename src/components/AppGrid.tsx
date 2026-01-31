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

  return (
    <div className="app-grid">
      {apps.map((app) => (
        <AppCard key={app.trackId} app={app} />
      ))}
    </div>
  );
}
