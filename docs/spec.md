# Ponk1 Tech 公式サイト 要件定義・仕様・デザイン（現時点）

## 0. ゴール
- 独自ドメインの「個人開発アプリ公式サイト」を運用コスト最小で公開する
- アプリをリリースしたら（定期ジョブ経由で）サイトのアプリ一覧が自動更新される状態にする
- まずはホーム1ページのみで成立させる（将来拡張は可能）

---

## 1. 体制・運用方針（最重要）
- ホスティング: GitHub Pages
- CI/CD: GitHub Actions
- リポジトリ: 公開（Public）前提
- 更新方式:
  - 1日1回、GitHub Actionsのscheduleで実行（時刻はUTC基準）
  - iTunes Search API を叩いてアプリ一覧を取得
  - `public/apps-store.json` を生成し、毎回コミットする（更新がなくてもコミット&デプロイでOK）
  - Next.js を静的書き出し（export）して Pages へデプロイ
- 障害時の挙動:
  - iTunes API が失敗（HTTPエラー/空/非JSON/アプリ0件）した場合はジョブを失敗扱いで止める
  - その場合、コミット/デプロイは行わず「前回のサイトが残る」

---

## 2. 技術要件
### 2.1 フレームワーク/構成
- Next.js（App Router）
- 静的サイトとして配信（SSR/API Routesなし）
- `next.config.js`
  - `output: "export"`
  - `trailingSlash: true`
  - `images.unoptimized: true`（App Storeアイコンの表示を簡易化）

### 2.2 取得データ（iTunes Search API）
- エンドポイント（開発者ID）
  - `https://itunes.apple.com/lookup?id=1859879501&entity=software&country=JP`
- 取得項目（公開情報のみ）
  - trackId, trackName, version, currentVersionReleaseDate, releaseNotes, artworkUrl100, trackViewUrl
- 正規化JSON出力先
  - `public/apps-store.json`
  - 形式:
    - `updatedAt: ISO8601`
    - `apps: App[]`（trackIdで安定ソート）

---

## 3. 画面/情報設計（現時点）
### 3.1 ページ構成（ホーム1ページのみ）
- ヘッダー（sticky）
  - 左: サイト名
  - 右メニュー:
    - Apps（#appsへスクロール）
    - Note（外部リンク、別タブ）
    - Contact（#contactへスクロール）
- ヒーロー
  - 見出し: サイト名
  - サブ説明文（自然な日本語、過度な煽りなし）
  - CTA:
    - 「アプリを見る」→ #apps
    - 「お問い合わせ」→ #contact
  - 「最終更新日時」（apps-store.jsonのupdatedAtを表示）
- Appsセクション（#apps）
  - アプリカードのグリッド（レスポンシブ）
    - スマホ: 1列
    - タブレット: 2列
    - PC: 3列
  - カード内要素:
    - アイコン（角丸）
    - アプリ名
    - バージョン + 更新日
    - リリースノート抜粋（数行、省略表示）
    - App Storeボタン（外部リンク）
- Contactセクション（#contact）
  - メールリンク
  - 注意書き（返信に数日かかる場合がある）
- フッター
  - © 年号 + サイト名
  - Topリンク（任意）

### 3.2 サイト固定情報（確定）
- siteName: Ponk1 Tech
- noteUrl: https://note.com/ponk1_tech
- contactEmail: ponk1.tech@gmail.com

---

## 4. デザイン方針（現時点）
### 4.1 トーン
- シンプル、静か、安心感、実用的
- 誇張しないが、ちゃんと良さが伝わる
- 余白広め、読みやすさ優先

### 4.2 カラー
- 背景: 白に近いベージュ（温かみのあるオフホワイト）
- カード背景: 白
- 文字: 濃いグレー（真っ黒は避ける）
- アクセント: ティール（青緑）
  - CTAボタン、リンク、ホバー、軽い強調に使用
- ボーダー: 薄いグレー/薄いベージュ
- 影: 弱いソフトシャドウ（hoverで少し浮く）
- ダークモード: 今回不要

### 4.3 UIコンポーネント
- ボタン
  - Primary: ティール塗り + 白文字 + 角丸
  - Outline: ティール枠 + hoverで淡いティール背景
- カード
  - 角丸 + 薄い境界線 + 弱い影
  - hoverで軽く浮く/影を少し強く

---

## 5. セキュリティ/公開リポ運用ルール（必須）
- 秘密情報（.env, APIキー, トークン, 証明書, 個人情報を含むファイル）は絶対にコミットしない
- 依存パッケージは最小化し、lock固定（`npm ci`）
- Actionsの権限は必要最小限（Pages deploy + JSONコミットに必要な範囲）
- 取得データは公開情報のみ（iTunes Search API）

---

## 6. 追加予定（未実装/将来）
- ページ分割（/apps/[slug] などの詳細ページ）
- Privacy / Terms の追加（必要に応じて）
- Android対応（Google Play情報の取り込みは別途検討）
