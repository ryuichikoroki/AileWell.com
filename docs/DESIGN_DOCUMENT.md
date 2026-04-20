# AileWell株式会社 コーポレートサイト 設計書

**文書バージョン:** 2.0  
**初版作成日:** 2026年2月23日  
**最終更新日:** 2026年4月10日  
**対象サイト:** https://ailewell.com  
**リポジトリ:** https://github.com/ryuichikoroki/AileWell.com

---

## 目次

1. [プロジェクト概要](#1-プロジェクト概要)
2. [会社情報](#2-会社情報)
3. [技術スタック](#3-技術スタック)
4. [ディレクトリ構成](#4-ディレクトリ構成)
5. [ページ構成](#5-ページ構成)
6. [デザインシステム](#6-デザインシステム)
7. [コーディング規約](#7-コーディング規約)
8. [お問い合わせフォーム](#8-お問い合わせフォーム)
9. [SEO対策](#9-seo対策)
10. [セキュリティ](#10-セキュリティ)
11. [運用・保守](#11-運用保守)
12. [今後の課題](#12-今後の課題)

---

## 1. プロジェクト概要

### 1.1 目的

AileWell株式会社の企業情報、サービス内容、お問い合わせ窓口を日本語・英語の2言語で提供するコーポレートサイト。

### 1.2 対象ユーザー

- 法人・自治体（通信インフラ導入検討者）
- 取引先企業
- 海外パートナー企業（英語版）

### 1.3 サイトURL

| 言語 | URL |
|------|-----|
| 日本語 | https://ailewell.com/ |
| 英語 | https://ailewell.com/en/ |

### 1.4 設計方針

| 項目 | 方針 |
|------|------|
| ビルドツール | 不使用。静的HTMLをブラウザで直接表示 |
| オフライン対応 | ライブラリは `vendor/` にローカル格納 |
| レスポンシブ | 全ページ・全機能でスマートフォン対応必須 |
| 多言語 | 日本語版（ルート）・英語版（`/en/`）の2言語構成 |

---

## 2. 会社情報

| 項目 | 内容 |
|------|------|
| 会社名 | AileWell株式会社（エルウェル） |
| 代表取締役 | 興梠 貴治（こうろき よしはる） |
| 設立 | 2024年5月 |
| 所在地 | 〒243-0342 神奈川県海老名市中央1-16-31 A&NIビル06 |
| 連絡先 | ykoroki@ailewell.com / 080-5017-4619 |
| 受付時間 | 平日 9:00〜18:00 |
| 事業内容 | 情報通信事業 — 通信インフラ構築、データセンター構築の為、各種製品の販売及び輸出入。各種製品の販売に関するコンサルティング及び配線設計。 |

### 2.1 取引先

| 企業名（日本語） | 企業名（英語） | 区分 |
|-----------------|---------------|------|
| サンテレホン（株） | SUNTELEPHONE CO., LTD | 商社 |
| コーニングジャパン（株） | Corning Japan K.K. | メーカー |
| R&M Japan（株） | R&M Japan | メーカー |
| 東名通信工業（株） | TOMEI TSUSHIN KOGYO CO.,LTD | メーカー |
| （株）アット東京 | AT TOKYO Corporation | ユーザー |
| （株）八光電機製作所 | HACHIKO ELECTRIC CO.,LTD | ユーザー |

※ 取引先リンクは当面テキストのみ（リンク保留）

---

## 3. 技術スタック

### 3.1 フロントエンド

| 技術 | バージョン | 用途 | 配置 |
|------|-----------|------|------|
| HTML5 | - | ページ構造 | - |
| Tailwind CSS | Play CDN (ランタイム) | スタイリング | `vendor/tailwind/tailwind.min.js` |
| Alpine.js | 3.14.3 | UIインタラクション | `vendor/alpinejs/cdn.min.js` |
| AOS | 2.x | スクロールアニメーション | `vendor/aos/aos.js`, `vendor/aos/aos.css` |
| Font Awesome Free | 6.5.1 | アイコン（※ `fa-brain` 使用禁止） | `vendor/fontawesome/all.min.css` |
| Inter | ローカル (woff2) | 欧文フォント（400, 600, 700, 800） | `vendor/fonts/` |
| Noto Sans JP | ローカル (woff2) | 日本語フォント（400, 500, 700） | `vendor/fonts/` |
| Cormorant Garamond | Google Fonts | ロゴ書体 | `components.js` で動的読込 |
| Yuji Syuku | Google Fonts | 企業理念書体（知勇兼備志在五徳） | `about.html` の `<head>` |

### 3.2 ホスティング

| 項目 | 詳細 |
|------|------|
| ホスティング | GitHub Pages |
| カスタムドメイン | ailewell.com（CNAMEレコード設定済み） |
| SSL/TLS | GitHub Pages 自動発行（Let's Encrypt） |

### 3.3 外部サービス

| サービス | 用途 | 設定 |
|----------|------|------|
| Formspree | お問い合わせフォーム | エンドポイント: `mzdjbplp`、reCAPTCHA有効 |
| Google Maps | アクセスページ地図 | 座標: 35.45521, 139.39515、zoom: 17 |
| Google Fonts | ロゴ・企業理念フォント | Cormorant Garamond, Yuji Syuku |

---

## 4. ディレクトリ構成

```
AileWell.com/
├── index.html                  # トップページ（JA）
├── about.html                  # 会社概要（JA）
├── service.html                # 事業・サービス（JA）
├── news.html                   # ニュース（JA）
├── access.html                 # アクセス（JA）
├── contact.html                # お問い合わせ（JA）
├── privacy.html                # プライバシーポリシー（JA）
├── en/
│   ├── index.html              # Home（EN）
│   ├── about.html              # About Us（EN）
│   ├── service.html            # Services（EN）
│   ├── news.html               # News（EN）
│   ├── access.html             # Access（EN）
│   ├── contact.html            # Contact（EN）
│   ├── privacy.html            # Privacy Policy（EN）
│   └── js/
│       └── components.js       # ヘッダー・フッター（EN）
├── css/
│   └── custom.css              # カスタムスタイル
├── js/
│   ├── main.js                 # AOS初期化・ヘッダー制御・カウンター
│   └── components.js           # ヘッダー・フッター（JA）
├── vendor/
│   ├── tailwind/tailwind.min.js
│   ├── alpinejs/cdn.min.js
│   ├── aos/aos.js, aos.css
│   ├── fontawesome/all.min.css
│   └── fonts/fonts.css, *.woff2
├── assets/images/              # 画像素材
├── docs/
│   └── DESIGN_DOCUMENT.md      # 本設計書
├── .cursor/rules/              # Cursorルールファイル
├── robots.txt                  # クローラー制御
├── sitemap.xml                 # サイトマップ
└── CNAME                       # GitHub Pages カスタムドメイン設定
```

---

## 5. ページ構成

### 5.1 日本語ページ一覧

| ページ | ファイル | title | 概要 |
|--------|----------|-------|------|
| トップ | `index.html` | AileWell株式会社(エルウェル) \| 通信で、未来をつなぐ | ヒーロー、サービス概要、OUR STRENGTH、実績数値、ニュース、CTA |
| 会社概要 | `about.html` | 会社概要 \| AileWell | 企業理念、ビジョン、会社情報テーブル、代表挨拶、取引先 |
| 事業・サービス | `service.html` | 事業・サービス \| AileWell | 通信インフラ構築、コンサルティングの詳細 |
| ニュース | `news.html` | ニュース・お知らせ \| AileWell | お知らせ一覧 |
| アクセス | `access.html` | アクセス \| AileWell | Google Maps埋込、住所、最寄り駅 |
| お問い合わせ | `contact.html` | お問い合わせ \| AileWell | フォーム（Formspree）、直接連絡先 |
| プライバシーポリシー | `privacy.html` | プライバシーポリシー \| AileWell | 個人情報保護方針 |

### 5.2 英語ページ一覧

| ページ | ファイル | title |
|--------|----------|-------|
| Home | `en/index.html` | AileWell \| Building Tomorrow's Connected Infrastructure |
| About Us | `en/about.html` | About Us \| AileWell |
| Services | `en/service.html` | Services \| AileWell |
| News | `en/news.html` | News \| AileWell |
| Access | `en/access.html` | Access \| AileWell |
| Contact | `en/contact.html` | Contact \| AileWell |
| Privacy Policy | `en/privacy.html` | Privacy Policy \| AileWell |

---

## 6. デザインシステム

### 6.1 カラースキーム

| 名称 | カラーコード | 用途 |
|------|-------------|------|
| Primary | `#1d6fd8` | メインブランドカラー、ボタン、リンク |
| Primary Dark | `#123d6e` | ヘッダー背景、フッター背景系 |
| Primary Light | `#eff6ff` | ライトアクセント、背景 |
| Accent | `#3b82f6` | アクセントカラー |
| Body | `#1e2535` | 本文テキスト |
| Muted | `#64748b` | 補助テキスト |
| Surface | `#f5f8fc` | ページ背景 |
| ヘッダー背景 | `rgba(12,35,64,0.96)` | 固定ヘッダー |
| モバイルメニュー背景 | `rgba(8,28,54,0.98)` | モバイルナビ |

### 6.2 Tailwind config（全ページ共通）

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

### 6.3 タイポグラフィ

| 用途 | フォント | ウェイト |
|------|----------|----------|
| 日本語本文 | Noto Sans JP | 400, 500, 700 |
| 欧文本文 | Inter | 400, 600, 700, 800 |
| ヘッダーロゴ | Cormorant Garamond | 600, 700 |
| 企業理念（知勇兼備志在五徳） | Yuji Syuku | 400 |

### 6.4 共通コンポーネント

**ヘッダー（`js/components.js`）**
- 固定ナビゲーションバー（`position: fixed`、`backdrop-blur`）
- スクロール時に背景色変化（`header-scrolled`クラス）
- ロゴマーク（`logo-mark.png`）+ ロゴテキスト（Cormorant Garamond）
- デスクトップ: ナビリンク + 言語切替 + お問い合わせボタン
- モバイル: ハンバーガーメニュー（Alpine.js制御）

**フッター（`js/components.js`）**
- 4カラム構成: ブランド / 企業情報リンク / サポートリンク / 連絡先
- コピーライト（年は動的生成）
- PAGE TOPボタン（スムーススクロール）

### 6.5 アニメーション

| 機能 | ライブラリ | 設定 |
|------|-----------|------|
| スクロール表示 | AOS | duration: 700ms, ease-out-cubic, once: true, offset: 60 |
| 数値カウンター | カスタムJS | IntersectionObserver, 2秒, cubic ease |
| 背景ドリフト | CSS Keyframes | `bg-drift` アニメーション |
| `prefers-reduced-motion` | CSS + JS | アニメーション無効化対応済み |

### 6.6 レスポンシブ設計

- **モバイルファースト:** デフォルトをモバイル向けに書き、`sm:`/`md:`/`lg:`/`xl:` で拡張
- **ブレークポイント:** Tailwind標準（sm:640px / md:768px / lg:1024px / xl:1280px）
- **タッチ対応:** ボタン・リンクの最小タップ領域 44x44px 確保
- **フォントサイズ:** clamp() またはTailwindのレスポンシブプレフィックスで段階的に変更

---

## 7. コーディング規約

### 7.1 HTML

- セマンティックHTMLタグを使用（header, main, section, nav, footer, article）
- `lang="ja"` / `lang="en"` を必ず指定
- 画像には必ず `alt` 属性を付与
- インデントはスペース4つ
- ヘッダー・フッターのプレースホルダー: `<header id="site-header"></header>` / `<footer id="site-footer"></footer>`

### 7.2 head セクションの順序

1. `<meta charset="UTF-8">`
2. `<meta name="viewport">`
3. `<meta http-equiv="Content-Security-Policy">`
4. `<meta name="referrer">`
5. `<title>`
6. `<meta name="description">`
7. OGP タグ（`og:title`, `og:description`, `og:type`, `og:url`, `og:image`, `og:site_name`）
8. `<link rel="alternate" hreflang>`
9. `<link rel="icon">`, `<link rel="apple-touch-icon">`
10. CSS / JS 読み込み

### 7.3 スクリプト読み込み順

```html
<!-- head内 -->
<link rel="stylesheet" href="vendor/fonts/fonts.css">
<script src="vendor/tailwind/tailwind.min.js"></script>
<!-- tailwind.config インラインスクリプト -->
<link href="vendor/aos/aos.css" rel="stylesheet">
<link rel="stylesheet" href="vendor/fontawesome/all.min.css">
<link rel="stylesheet" href="css/custom.css">

<!-- body閉じタグ直前 -->
<script defer src="js/components.js"></script>
<script defer src="vendor/alpinejs/cdn.min.js"></script>
<script src="vendor/aos/aos.js"></script>
<script src="js/main.js"></script>
```

### 7.4 CSS（css/custom.css）

- Tailwindで実現困難なスタイルのみ記述（アニメーション、複雑なグラデーション等）
- `!important` は原則使用禁止（`header-scrolled` クラスは例外）

### 7.5 JavaScript（js/main.js）

- Alpine.js / AOS で実現困難なロジックのみ記述
- `'use strict';` を使用
- DOM操作は `DOMContentLoaded` 後に実行
- ES6+構文を積極利用

### 7.6 多言語対応

- JA版を変更したら必ずEN版（`/en/`）も同様に変更する
- `components.js` を変更したら `en/js/components.js` も同様に変更する
- 新ページ追加時は JA/EN 両方を作成し、`sitemap.xml`・`hreflang`タグ・ナビゲーション（`components.js`）も更新する

### 7.7 禁止事項

- ビルドツール（npm / webpack / Vite）の使用
- jQuery の使用
- Font Awesome の `fa-brain` アイコン
- 外部CDNからのライブラリ読込（Google Fonts 以外）
- 不要な説明的コメント

---

## 8. お問い合わせフォーム

### 8.1 フォーム構成

| フィールド名 | name属性 | 入力形式 | 必須 |
|-------------|----------|----------|------|
| お名前 | `name` | テキスト | ○ |
| メールアドレス | `email` | メール | ○ |
| お問い合わせ種別 | `type` | セレクト（サービスについて / お見積もり / その他） | - |
| お問い合わせ内容 | `message` | テキストエリア | ○ |
| CC送信先 | `_cc` | hidden（`ryuichi.koroki@ailewell.com`） | - |

### 8.2 送信フロー

```
ユーザー入力 → クライアント側バリデーション（Alpine.js）
→ fetch POST → Formspree API（https://formspree.io/f/mzdjbplp）
→ メール送信先: ykoroki@ailewell.com（メイン）+ CC
→ 成功: 送信完了メッセージ表示
→ 失敗: エラーメッセージ表示
```

### 8.3 スパム対策

- Formshield（機械学習ベース）: 有効
- reCAPTCHA: 有効

---

## 9. SEO対策

### 9.1 メタタグ

全ページに以下を設定済み：
- `<title>` タグ
- `<meta name="description">`
- Open Graph タグ（`og:title`, `og:description`, `og:type`, `og:url`, `og:image`, `og:site_name`）
- トップページに `og:locale`, `og:locale:alternate`

### 9.2 多言語対応（hreflang）

- 全ページに `<link rel="alternate" hreflang="ja">` と `hreflang="en"` を設定
- `sitemap.xml` にも `xhtml:link` で hreflang を定義

### 9.3 クローラー制御

- `robots.txt`: 全ページクロール許可、サイトマップURL記載
- `sitemap.xml`: 全14ページのURL、優先度、hreflang情報

---

## 10. セキュリティ

### 10.1 通信セキュリティ

| 項目 | 状態 |
|------|------|
| HTTPS強制 | GitHub Pages 標準（HSTS対応） |
| SSL証明書 | Let's Encrypt 自動発行・更新 |

### 10.2 Content Security Policy (CSP)

全ページに `<meta http-equiv="Content-Security-Policy">` を設定：

| ディレクティブ | 設定値 | 目的 |
|---------------|--------|------|
| `default-src` | `'self'` | デフォルトで同一オリジンのみ許可 |
| `script-src` | `'self' 'unsafe-inline' 'unsafe-eval'` | Tailwind JIT・Alpine.js実行に必要 |
| `style-src` | `'self' 'unsafe-inline' https://fonts.googleapis.com` | インラインスタイル + Google Fonts |
| `font-src` | `'self' https://fonts.gstatic.com` | ローカルフォント + Google Fonts |
| `img-src` | `'self' data:` | 同一オリジン画像 + data URI |
| `frame-src` | `https://www.google.com https://www.google.co.jp` | Google Maps埋込 |
| `connect-src` | `'self' https://formspree.io` | Formspree API通信 |
| `object-src` | `'none'` | プラグイン完全禁止 |
| `base-uri` | `'self'` | ベースタグ改ざん防止 |

### 10.3 Referrer Policy

`strict-origin-when-cross-origin` — 外部遷移時にオリジンのみ送信。

### 10.4 その他のセキュリティ特性

| 項目 | 状態 |
|------|------|
| サーバーサイドコードなし | 静的サイトのためサーバー脆弱性リスクなし |
| データベースなし | SQLインジェクション等のリスクなし |
| ユーザーデータ保存なし | サイト側でのデータ漏洩リスクなし |
| 外部ライブラリローカル配置 | CDN改ざんリスクの軽減 |
| `target="_blank"` 未使用 | tabnabbing攻撃リスクなし |

---

## 11. 運用・保守

### 11.1 デプロイフロー

```
ローカル編集 → git commit → git push (main) → GitHub Pages 自動デプロイ
```

### 11.2 バージョン管理

- Git / GitHub（`main`ブランチ運用）
- コミットメッセージは日本語で記述
- ファイル編集後は自動的にコミット＆プッシュする

### 11.3 開発ツール

- エディタ: Cursor (VS Code ベース)
- AI支援: Cursor Agent（コード編集・コミット・プッシュ）
- ルールファイル: `.cursor/rules/`（プロジェクト規約、HTML編集、セキュリティ、Gitワークフロー）

### 11.4 ローカル確認方法

```bash
cd /path/to/AileWell.com
python3 -m http.server 8080
# ブラウザで http://localhost:8080 を開く
```

---

## 12. 今後の課題

### 12.1 対応予定

| 項目 | 内容 | 優先度 |
|------|------|--------|
| 代表コメント | 代表挨拶の本文を正式な内容に差し替え | 高 |
| トップページ数値 | 「500+」「99.9%」等の実績数値を実態と照合 | 中 |
| 取り扱い製品 | 事業・サービスページに製品情報を追加 | 中 |
| 取引先リンク | 各社の公式URLを取得しリンクを有効化 | 低 |

### 12.2 将来機能（検討中）

| 項目 | 内容 |
|------|------|
| 製品在庫表示 | 在庫状況の表示機能 |
| 製品購入（EC） | カード決済対応（Stripe等の決済代行を想定） |
| Google ビジネスプロフィール | 検索結果にナレッジパネルを表示 |
| 構造化データ（Schema.org） | Organization マークアップの追加 |

---

## 付録: 画像アセット一覧

| ファイル名 | 用途 |
|-----------|------|
| `hero-top.png` | トップページヒーロー背景 |
| `logo-mark.png` | ヘッダーロゴ（透過PNG） |
| `light blue - mark.jpg` | OGP / favicon 用ロゴ |
| `light blue - tategumi1.jpg` | 縦組みロゴ1 |
| `light blue - tategumi2.jpg` | 縦組みロゴ2 |
| `Gemini_Generated_Image_c3txqc...png` | サービスページ画像1 |
| `Gemini_Generated_Image_x84sj...png` | サービスページ画像2 |
| `koroki-yoshiharu.png` | 代表取締役 宣材写真（about ページ） |

---

## 変更履歴

| 日付 | 内容 |
|------|------|
| 2026/02/23 | 初版作成。要件ヒアリング、ページ構成、デザインガイドライン策定 |
| 2026/04/10 | v2.0: 全ドキュメント統合。セキュリティ（CSP・Referrer-Policy）、SEO（hreflang・OGP）、多言語対応、コーディング規約、フォーム仕様を追記 |
| 2026/04/20 | 代表取締役 宣材写真（`koroki-yoshiharu.png`）を about ページに反映 |
