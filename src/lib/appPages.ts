// bundleId をキーに、サイト内に個別ページを持つアプリのURLを登録する。
// ここに存在しないアプリは従来通りApp Storeリンクのみのカード表示になる。
export const appPageByBundleId: Record<string, string> = {
  "com.ponk1tech.timelineDiary": "/timeline-diary/",
};
