# AileWell株式会社 コーポレートサイト 設計書

**文書バージョン:** 1.0  
**作成日:** 2026年4月10日  
**対象サイト:** https://ailewell.com  
**リポジトリ:** https://github.com/ryuichikoroki/AileWell.com

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

---

## 2. 技術スタック

### 2.1 フロントエンド

| 技術 | バージョン | 用途 | 配置 |
|------|-----------|------|------|
| HTML5 | - | ページ構造 | - |
| Tailwind CSS | Play CDN (ランタイム) | スタイリング | `vendor/tailwind/tailwind.min.js` |
| Alpine.js | 3.14.3 | UIインタラクション | `vendor/alpinejs/cdn.min.js` |
| AOS | 2.x | スクロールアニメーション | `vendor/aos/aos.js`, `vendor/aos/aos.css` |
| Font Awesome Free | 6.5.1 | アイコン | `vendor/fontawesome/all.min.css` |
| Inter | ローカルホスト (woff2) | 欧文フォント | `vendor/fonts/` |
| Noto Sans JP | ローカルホスト (woff2) | 日本語フォント | `vendor/fonts/` |
| Cormorant Garamond | Google Fonts (リモート) | ロゴ書体 | JS動的読込 |
| Yuji Syuku | Google Fonts (リモート) | 企業理念書体 | about.html `<head>` |

### 2.2 ホスティング

| 項目 | 詳細 |
|------|------|
| ホスティング | GitHub Pages |
| カスタムドメイン | ailewell.com（CNAMEレコード設定済み） |
| SSL/TLS | GitHub Pages 自動発行（Let's Encrypt） |
| CDN | GitHub Pages 標準 |

### 2.3 外部サービス

| サービス | 用途 | エンドポイント |
|----------|------|---------------|
| Formspree | お問い合わせフォーム送信 | `https://formspree.io/f/mzdjbplp` |
| Google Maps | アクセスページ地図表示 | `座標: 35.45521, 139.39515` |
| Google Fonts | Cormorant Garamond / Yuji Syuku | `https://fonts.googleapis.com` |

---

## 3. ディレクトリ構成

```
AileWell.com/
├── index.html                  # トップページ（日本語）
├── about.html                  # 会社概要（日本語）
├── service.html                # 事業・サービス（日本語）
├── news.html                   # ニュース（日本語）
├── access.html                 # アクセス（日本語）
├── contact.html                # お問い合わせ（日本語）
├── privacy.html                # プライバシーポリシー（日本語）
├── en/
│   ├── index.html              # Home（英語）
│   ├── about.html              # About Us（英語）
│   ├── service.html            # Services（英語）
│   ├── news.html               # News（英語）
│   ├── access.html             # Access（英語）
│   ├── contact.html            # Contact（英語）
│   ├── privacy.html            # Privacy Policy（英語）
│   └── js/
│       └── components.js       # ヘッダー・フッター（英語版）
├── css/
│   └── custom.css              # カスタムスタイル
├── js/
│   ├── main.js                 # AOS初期化・ヘッダー制御・カウンター
│   └── components.js           # ヘッダー・フッター（日本語版）
├── vendor/
│   ├── tailwind/tailwind.min.js
│   ├── alpinejs/cdn.min.js
│   ├── aos/aos.js, aos.css
│   ├── fontawesome/all.min.css
│   └── fonts/fonts.css, *.woff2
├── assets/
│   └── images/
│       ├── hero-top.png                                # ヒーロー背景画像
│       ├── logo-mark.png                               # ヘッダーロゴ（透過PNG）
│       ├── light blue - mark.jpg                       # OGP / favicon 用ロゴ
│       ├── light blue - tategumi1.jpg                  # 縦組みロゴ1
│       ├── light blue - tategumi2.jpg                  # 縦組みロゴ2
│       ├── Gemini_Generated_Image_c3txqc...png         # サービスページ画像1
│       └── Gemini_Generated_Image_x84sj...png          # サービスページ画像2
├── docs/
│   ├── DESIGN_DOCUMENT.md      # 本設計書
│   ├── DESIGN.md               # デザインガイド
│   ├── DEVELOPMENT_RULES.md    # 開発ルール
│   └── NEXT_STEPS.md           # 今後のタスク
├── robots.txt                  # クローラー制御
├── sitemap.xml                 # サイトマップ
└── CNAME                       # GitHub Pages カスタムドメイン設定
```

---

## 4. ページ構成

### 4.1 日本語ページ一覧

| ページ | ファイル | title | 概要 |
|--------|----------|-------|------|
| トップ | `index.html` | AileWell株式会社(エルウェル) \| 通信で、未来をつなぐ | ヒーロー、サービス概要、OUR STRENGTH、実績数値、ニュース、CTA |
| 会社概要 | `about.html` | 会社概要 \| AileWell | 企業理念、ビジョン、会社情報テーブル、代表挨拶、取引先 |
| 事業・サービス | `service.html` | 事業・サービス \| AileWell | 通信インフラ構築、コンサルティングの詳細 |
| ニュース | `news.html` | ニュース・お知らせ \| AileWell | お知らせ一覧 |
| アクセス | `access.html` | アクセス \| AileWell | Google Maps埋込、住所、最寄り駅 |
| お問い合わせ | `contact.html` | お問い合わせ \| AileWell | フォーム（Formspree）、直接連絡先 |
| プライバシーポリシー | `privacy.html` | プライバシーポリシー \| AileWell | 個人情報保護方針 |

### 4.2 英語ページ一覧

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

## 5. デザインシステム

### 5.1 カラースキーム

| 名称 | カラーコード | 用途 |
|------|-------------|------|
| Primary | `#1d6fd8` | メインブランドカラー、ボタン、リンク |
| Primary Dark | `#123d6e` | ヘッダー背景、フッター背景系 |
| Primary Light | `#eff6ff` | ライトアクセント、背景 |
| Accent | `#3b82f6` | アクセントカラー |
| Body | `#1e2535` | 本文テキスト |
| Muted | `#64748b` | 補助テキスト |
| Surface | `#f5f8fc` | ページ背景 |

### 5.2 タイポグラフィ

| 用途 | フォント | ウェイト |
|------|----------|----------|
| 日本語本文 | Noto Sans JP | 400, 500, 700 |
| 欧文本文 | Inter | 400, 600, 700, 800 |
| ヘッダーロゴ | Cormorant Garamond | 600, 700 |
| 企業理念（知勇兼備志在五徳） | Yuji Syuku | 400 |

### 5.3 共通コンポーネント

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

### 5.4 アニメーション

| 機能 | ライブラリ | 設定 |
|------|-----------|------|
| スクロール表示 | AOS | duration: 700ms, ease-out-cubic, once: true, offset: 60 |
| 数値カウンター | カスタムJS | IntersectionObserver, 2秒, cubic ease |
| 背景ドリフト | CSS Keyframes | `bg-drift` アニメーション |
| `prefers-reduced-motion` | CSS + JS | アニメーション無効化対応済み |

---

## 6. お問い合わせフォーム

### 6.1 構成

| フィールド名 | name属性 | 入力形式 | 必須 |
|-------------|----------|----------|------|
| お名前 | `name` | テキスト | ○ |
| メールアドレス | `email` | メール | ○ |
| お問い合わせ種別 | `type` | セレクト（サービスについて / お見積もり / その他） | - |
| お問い合わせ内容 | `message` | テキストエリア | ○ |
| CC送信先 | `_cc` | hidden（`ryuichi.koroki@ailewell.com`） | - |

### 6.2 送信フロー

```
ユーザー入力 → クライアント側バリデーション（Alpine.js）
→ fetch POST → Formspree API（https://formspree.io/f/mzdjbplp）
→ メール送信先: アカウントメール + CC
→ 成功: 送信完了メッセージ表示
→ 失敗: エラーメッセージ表示
```

### 6.3 スパム対策

- Formshield（機械学習ベース）: 有効
- reCAPTCHA: 有効

---

## 7. SEO対策

### 7.1 メタタグ

全ページに以下を設定済み：
- `<title>` タグ
- `<meta name="description">`
- Open Graph タグ（`og:title`, `og:description`, `og:type`, `og:url`, `og:image`, `og:site_name`）
- トップページに `og:locale`, `og:locale:alternate`

### 7.2 多言語対応（hreflang）

- 全ページに `<link rel="alternate" hreflang="ja">` と `hreflang="en"` を設定
- `sitemap.xml` にも `xhtml:link` で hreflang を定義

### 7.3 クローラー制御

- `robots.txt`: 全ページクロール許可、サイトマップURL記載
- `sitemap.xml`: 全14ページのURL、優先度、hreflang情報

---

## 8. セキュリティ

### 8.1 通信セキュリティ

| 項目 | 状態 |
|------|------|
| HTTPS強制 | GitHub Pages 標準（HSTS対応） |
| SSL証明書 | Let's Encrypt 自動発行・更新 |

### 8.2 Content Security Policy (CSP)

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

### 8.3 Referrer Policy

`strict-origin-when-cross-origin` — 外部遷移時にオリジンのみ送信。

### 8.4 その他のセキュリティ特性

| 項目 | 状態 |
|------|------|
| サーバーサイドコードなし | 静的サイトのためサーバー脆弱性リスクなし |
| データベースなし | SQLインジェクション等のリスクなし |
| ユーザーデータ保存なし | サイト側でのデータ漏洩リスクなし |
| 外部ライブラリローカル配置 | CDN改ざんリスクの軽減 |
| `target="_blank"` 未使用 | tabnabbing攻撃リスクなし |

---

## 9. 会社情報

| 項目 | 内容 |
|------|------|
| 会社名 | AileWell株式会社（エルウェル） |
| 代表取締役 | 興梠 貴治（こうろき よしはる） |
| 設立 | 2024年5月 |
| 所在地 | 〒243-0342 神奈川県海老名市中央1-16-31 A&NIビル06 |
| 事業内容 | 情報通信事業 — 通信インフラ構築、データセンター構築の為、各種製品の販売及び輸出入。各種製品の販売に関するコンサルティング及び配線設計。 |

### 9.1 取引先

| 企業名（日本語） | 企業名（英語） |
|-----------------|---------------|
| サンテレホン（株） | SUNTELEPHONE CO., LTD |
| コーニングジャパン（株） | Corning Japan K.K. |
| R&M Japan（株） | R&M Japan |
| 東名通信工業（株） | TOMEI TSUSHIN KOGYO CO.,LTD |
| （株）アット東京 | AT TOKYO Corporation |
| （株）八光電機製作所 | HACHIKO ELECTRIC CO.,LTD |

---

## 10. 運用・保守

### 10.1 デプロイフロー

```
ローカル編集 → git commit → git push (main) → GitHub Pages 自動デプロイ
```

### 10.2 バージョン管理

- Git / GitHub（`main`ブランチ運用）
- コミットメッセージは日本語で記述

### 10.3 開発ツール

- エディタ: Cursor (VS Code ベース)
- AI支援: Cursor Agent（コード編集・コミット・プッシュ）
- ルールファイル: `.cursor/rules/git-workflow.mdc`

---

## 付録A: ファイル一覧

| ファイルパス | 種別 | 説明 |
|-------------|------|------|
| `index.html` | HTML | トップページ（JA） |
| `about.html` | HTML | 会社概要（JA） |
| `service.html` | HTML | 事業・サービス（JA） |
| `news.html` | HTML | ニュース（JA） |
| `access.html` | HTML | アクセス（JA） |
| `contact.html` | HTML | お問い合わせ（JA） |
| `privacy.html` | HTML | プライバシーポリシー（JA） |
| `en/index.html` | HTML | Home（EN） |
| `en/about.html` | HTML | About Us（EN） |
| `en/service.html` | HTML | Services（EN） |
| `en/news.html` | HTML | News（EN） |
| `en/access.html` | HTML | Access（EN） |
| `en/contact.html` | HTML | Contact（EN） |
| `en/privacy.html` | HTML | Privacy Policy（EN） |
| `css/custom.css` | CSS | カスタムスタイル |
| `js/main.js` | JS | AOS初期化・ヘッダー・カウンター |
| `js/components.js` | JS | ヘッダー・フッター（JA） |
| `en/js/components.js` | JS | ヘッダー・フッター（EN） |
| `robots.txt` | TXT | クローラー制御 |
| `sitemap.xml` | XML | サイトマップ |
| `CNAME` | TXT | GitHub Pages ドメイン設定 |
