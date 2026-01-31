export interface App {
  trackId: number;
  trackName: string;
  version: string;
  currentVersionReleaseDate: string;
  releaseNotes?: string;
  artworkUrl100: string;
  trackViewUrl: string;
  // iTunes API の追加プロパティ
  artworkUrl60?: string;
  artworkUrl512?: string;
  description?: string;
  genres?: string[];
  primaryGenreName?: string;
  formattedPrice?: string;
  price?: number;
  currency?: string;
  fileSizeBytes?: string;
  minimumOsVersion?: string;
  releaseDate?: string;
  sellerName?: string;
  bundleId?: string;
  contentAdvisoryRating?: string;
  averageUserRating?: number;
  userRatingCount?: number;
  // その他のプロパティ
  [key: string]: unknown;
}

export interface AppsStoreData {
  updatedAt: string;
  apps: App[];
}

// iTunes API の生レスポンス形式
interface ITunesResponse {
  resultCount: number;
  results: Array<{
    wrapperType: string;
    trackId?: number;
    trackName?: string;
    version?: string;
    currentVersionReleaseDate?: string;
    releaseNotes?: string;
    artworkUrl100?: string;
    trackViewUrl?: string;
  }>;
}

// 静的エクスポート用：ビルド時に JSON を読み込む
import appsStoreJson from "../../public/apps-store.json";

export function getAppsStoreData(): AppsStoreData {
  const raw = appsStoreJson as unknown;
  
  // 正規化済みフォーマット（updatedAt, apps がある場合）
  if (
    raw &&
    typeof raw === "object" &&
    "updatedAt" in raw &&
    "apps" in raw
  ) {
    return raw as AppsStoreData;
  }
  
  // iTunes API 生レスポンス形式（resultCount, results がある場合）
  if (
    raw &&
    typeof raw === "object" &&
    "resultCount" in raw &&
    "results" in raw
  ) {
    const itunes = raw as ITunesResponse;
    const apps: App[] = itunes.results
      .filter((r) => r.wrapperType === "software" && r.trackId)
      .map((r) => ({
        trackId: r.trackId!,
        trackName: r.trackName || "",
        version: r.version || "",
        currentVersionReleaseDate: r.currentVersionReleaseDate || "",
        releaseNotes: r.releaseNotes || "",
        artworkUrl100: r.artworkUrl100 || "",
        trackViewUrl: r.trackViewUrl || "",
      }))
      .sort((a, b) => a.trackId - b.trackId);
    
    return {
      updatedAt: new Date().toISOString(),
      apps,
    };
  }
  
  // フォールバック
  return { updatedAt: "", apps: [] };
}
