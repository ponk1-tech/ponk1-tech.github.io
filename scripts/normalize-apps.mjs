/**
 * apps-store.json を正規化するスクリプト
 * iTunes API の生レスポンス形式を { updatedAt, apps } 形式に変換
 * 各アプリの全プロパティを保持
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "..", "public", "apps-store.json");

function normalizeAppsStore() {
  if (!fs.existsSync(filePath)) {
    console.log("apps-store.json not found, skipping normalization");
    return;
  }

  const raw = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  // すでに正規化済みの場合は整形のみ
  if (raw.updatedAt && Array.isArray(raw.apps)) {
    fs.writeFileSync(filePath, JSON.stringify(raw, null, 2) + "\n");
    console.log("apps-store.json formatted");
    return;
  }

  // iTunes API レスポンス形式の場合
  if (raw.resultCount !== undefined && Array.isArray(raw.results)) {
    // wrapperType === "software" のみ抽出、全プロパティ保持
    const apps = raw.results
      .filter((r) => r.wrapperType === "software" && r.trackId)
      .sort((a, b) => a.trackId - b.trackId);

    const normalized = {
      updatedAt: new Date().toISOString(),
      apps,
    };

    fs.writeFileSync(filePath, JSON.stringify(normalized, null, 2) + "\n");
    console.log(`Normalized apps-store.json: ${apps.length} apps`);
    return;
  }

  console.log("Unknown format, skipping normalization");
}

normalizeAppsStore();
