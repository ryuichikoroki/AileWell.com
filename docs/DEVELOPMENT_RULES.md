# AileWell コーポレートサイト開発ルール

## プロジェクト概要
- 通信インフラ企業「AileWell」のコーポレートサイト
- ビルドツール不使用。静的HTML構成
- ホスティング: GitHub Pages（カスタムドメイン: ailewell.com）
- ライブラリは `vendor/` にローカル格納（オフライン動作対応）
- ヘッダー・フッターは `js/components.js`（JA）/ `en/js/components.js`（EN）で一元管理
- 日本語版: ルート（`/`）、英語版: `/en/`

## 技術スタック（ローカル配布・オフライン対応）
- ライブラリは `vendor/` に格納し、インターネット接続なしで動作
- **Tailwind CSS (Play CDN版)** — ユーティリティCSS、レスポンシブ対応の中心
- **Alpine.js v3.14.3** — モバイルメニュー・トグル等の軽量リアクティブ（`defer` で読み込み）
- **AOS v2** — `data-aos` 属性によるスクロールアニメーション
- **Font Awesome 6.5.1** — アイコン（※ `fa-brain` は使用禁止）
- **フォント** — Noto Sans JP + Inter（`vendor/fonts/` にローカル格納）
- **Cormorant Garamond** — ロゴ書体（Google Fonts、`components.js` で動的読込）
- **Yuji Syuku** — 企業理念書体（Google Fonts、`about.html` の `<head>` で読込）

## ディレクトリ構成
```
AileWell.com/
├── index.html           # トップページ（JA）
├── about.html           # 会社概要（JA）
├── service.html         # 事業・サービス（JA）
├── news.html            # ニュース（JA）
├── access.html          # アクセス（JA）
├── contact.html         # お問い合わせ（JA）
├── privacy.html         # プライバシーポリシー（JA）
├── en/                  # 英語版
│   ├── index.html       # Home
│   ├── about.html       # About Us
│   ├── service.html     # Services
│   ├── news.html        # News
│   ├── access.html      # Access
│   ├── contact.html     # Contact
│   ├── privacy.html     # Privacy Policy
│   └── js/
│       └── components.js  # ヘッダー・フッター（EN）
├── css/custom.css       # Tailwindで表現しにくいカスタムスタイルのみ
├── js/
│   ├── components.js    # ヘッダー・フッターテンプレート（JA）
│   └── main.js          # AOS初期化・カウントアップ等のカスタムロジック
├── vendor/              # ローカルライブラリ
│   ├── tailwind/        # Tailwind CSS
│   ├── alpinejs/        # Alpine.js
│   ├── aos/             # AOS
│   ├── fontawesome/     # Font Awesome + webfonts
│   └── fonts/           # Inter, Noto Sans JP (woff2)
├── assets/images/       # 画像素材
├── docs/                # ドキュメント
│   ├── DESIGN_DOCUMENT.md   # 設計書
│   ├── DEVELOPMENT_RULES.md # 本ファイル
│   ├── DESIGN.md            # デザインガイド
│   └── NEXT_STEPS.md        # 今後のタスク
├── .cursor/rules/       # Cursorルールファイル
├── robots.txt           # クローラー制御
├── sitemap.xml          # サイトマップ
└── CNAME                # GitHub Pages カスタムドメイン設定
```

## コーディング規約

### HTML
- セマンティックHTMLタグを使用（header, main, section, nav, footer, article 等）
- `lang="ja"` / `lang="en"` を必ず指定
- 画像には必ず `alt` 属性を付与
- Tailwindのユーティリティクラスを直接HTML上で使用
- Alpine.js のディレクティブ（`x-data`, `x-show`, `@click` 等）をHTMLに記述
- AOS は `data-aos="fade-up"` 等の属性で適用
- インデントはスペース4つ
- ヘッダー・フッターのプレースホルダーは `<header id="site-header"></header>` / `<footer id="site-footer"></footer>`

### head セクションの順序
1. `<meta charset="UTF-8">`
2. `<meta name="viewport">`
3. `<meta http-equiv="Content-Security-Policy">`
4. `<meta name="referrer">`
5. `<title>`
6. `<meta name="description">`
7. OGP タグ
8. `<link rel="alternate" hreflang>`
9. `<link rel="icon">`, `<link rel="apple-touch-icon">`
10. CSS / JS 読み込み

### スクリプト読み込み順
```html
<!-- head内 -->
<link rel="stylesheet" href="vendor/fonts/fonts.css">
<script src="vendor/tailwind/tailwind.min.js"></script>
<link href="vendor/aos/aos.css" rel="stylesheet">
<link rel="stylesheet" href="vendor/fontawesome/all.min.css">
<link rel="stylesheet" href="css/custom.css">

<!-- body閉じタグ直前 -->
<script defer src="js/components.js"></script>
<script defer src="vendor/alpinejs/cdn.min.js"></script>
<script src="vendor/aos/aos.js"></script>
<script src="js/main.js"></script>
```

### CSS（css/custom.css）
- Tailwindで実現困難なスタイルのみ記述
- `!important` は原則使用禁止（`header-scrolled` クラスは例外）

### JavaScript（js/main.js）
- Alpine.js / AOS で実現困難なロジックのみ記述
- `'use strict';` を使用
- DOM操作は `DOMContentLoaded` 後に実行
- ES6+構文を積極利用

## 多言語対応ルール
- JA版を変更したら必ずEN版も同様に変更する
- `components.js` を変更したら `en/js/components.js` も同様に変更する
- 新ページ追加時は JA/EN 両方を作成し、`sitemap.xml` と `hreflang` タグも更新する

## セキュリティ
- 全ページに CSP（Content-Security-Policy）meta タグを設定済み
- 全ページに Referrer-Policy meta タグを設定済み
- 新ページ追加時は同様のセキュリティ meta タグを含めること
- 外部リソース追加時は CSP ディレクティブも更新すること
- `target="_blank"` 使用時は `rel="noopener noreferrer"` を付与

## レスポンシブ設計
- **モバイルファースト:** デフォルトをモバイル向けに書き、`sm:`/`md:`/`lg:`/`xl:` で拡張
- **ブレークポイント:** Tailwind標準（sm:640px / md:768px / lg:1024px / xl:1280px）
- **タッチ対応:** ボタン・リンクの最小タップ領域 44x44px 確保

## デザインガイドライン

### カラーパレット
| 用途 | 値 |
|------|-----|
| プライマリ | `#1d6fd8` |
| プライマリダーク | `#123d6e` |
| プライマリライト | `#eff6ff` |
| アクセント | `#3b82f6` |
| テキスト本文 | `#1e2535` |
| テキスト薄 | `#64748b` |
| 背景サーフェス | `#f5f8fc` |

### Tailwind config（全ページ共通）
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: { DEFAULT: '#1d6fd8', dark: '#123d6e', light: '#eff6ff' },
                accent: '#3b82f6',
                body: '#1e2535',
                muted: '#64748b',
                surface: '#f5f8fc',
            },
            fontFamily: {
                sans: ['"Noto Sans JP"', '"Inter"', 'sans-serif'],
                display: ['"Inter"', '"Noto Sans JP"', 'sans-serif'],
            },
        },
    },
}
```

## Git 管理
- **ブランチ:** `main`
- **リモート:** GitHub（`https://github.com/ryuichikoroki/AileWell.com`）
- **デプロイ:** `main` ブランチへの push で GitHub Pages に自動デプロイ
- **コミット:** ファイル編集後は自動的にコミット＆プッシュする
- **コミットメッセージ:** 日本語で変更内容を簡潔に記述

## 禁止事項
- Font Awesome の `fa-brain` アイコンは使用禁止
- ビルドツール（npm / webpack / Vite 等）の使用禁止
- jQuery の使用禁止
- 外部CDNからのライブラリ読込（Google Fonts以外）
- 不要なコメントや説明的コメントを入れないこと

## 外部サービス
| サービス | 用途 | 設定 |
|----------|------|------|
| Formspree | お問い合わせフォーム | エンドポイント: `mzdjbplp`、reCAPTCHA有効 |
| Google Maps | アクセスページ地図 | 座標: 35.45521, 139.39515、zoom: 17 |
| Google Fonts | ロゴ・企業理念フォント | Cormorant Garamond, Yuji Syuku |
