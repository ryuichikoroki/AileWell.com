# AileWell コーポレートサイト開発ルール

## プロジェクト概要
- 通信インフラ・データサービス企業「AileWell」のコーポレートサイト
- ビルドツール不使用。HTMLをブラウザで直接開いて動作する構成（または `python -m http.server`）
- ライブラリは `vendor/` にローカル格納（オフライン動作対応）
- ヘッダー・フッターは `js/components.js` で一元管理し、全ページで共有
- サンプルは `sample/` ディレクトリに格納（参照専用・編集不可）
- 計画書は `PLAN.md` を参照

## 技術スタック（ローカル配布・オフライン対応）
- ライブラリは `vendor/` に格納し、インターネット接続なしで動作
- **Tailwind CSS v4 (CDN版)** — ユーティリティCSS、レスポンシブ対応の中心
- **Alpine.js v3** — モバイルメニュー・トグル等の軽量リアクティブ（`defer` で読み込み）
- **AOS v2** — `data-aos` 属性によるスクロールアニメーション
- **Font Awesome 6** — アイコン（※ `fa-brain` は使用禁止）
- **フォント** — Noto Sans JP + Inter（`vendor/fonts/` にローカル格納）

## ディレクトリ構成
```
ailewell/
├── index.html           # トップページ
├── about.html           # 会社概要
├── service.html         # 事業・サービス
├── news.html            # ニュース
├── recruit.html         # 採用情報
├── access.html          # アクセス
├── contact.html         # お問い合わせ（フォーム + メール・電話）
├── privacy.html         # プライバシーポリシー
├── css/custom.css       # Tailwindで表現しにくいカスタムスタイルのみ
├── js/
│   ├── components.js    # ヘッダー・フッターテンプレート（全ページで共有）
│   └── main.js          # AOS初期化・カウントアップ等のカスタムロジック
├── vendor/             # ローカルライブラリ（オフライン用）
│   ├── tailwind/       # Tailwind CSS
│   ├── alpinejs/       # Alpine.js
│   ├── aos/            # AOS
│   ├── fontawesome/    # Font Awesome + webfonts
│   └── fonts/          # Inter, Noto Sans JP
├── assets/images/      # 画像素材
├── dist/                # 配布用（スクリプト・ZIP出力）
│   └── make-dist.sh     # 配布ZIP作成 → dist/ailewell-YYYYMMDD.zip
└── sample/              # 元サンプル（参照専用）
```

## コーディング規約

### HTML
- セマンティックHTMLタグを使用（header, main, section, nav, footer, article 等）
- `lang="ja"` を必ず指定
- 画像には必ず `alt` 属性を付与
- Tailwindのユーティリティクラスを直接HTML上で使用する
- Alpine.js のディレクティブ（`x-data`, `x-show`, `@click` 等）をHTMLに記述
- AOS は `data-aos="fade-up"` 等の属性で適用
- インデントはスペース4つ
- ヘッダー・フッターのプレースホルダーは `<header id="site-header"></header>` / `<footer id="site-footer"></footer>` で統一
- `js/components.js` のみインラインスタイルを例外的に使用可（ヘッダー背景色の確実な適用のため）

### スクリプト・スタイル読み込み（head / body閉じタグ直前）
```html
<!-- head内 -->
<link rel="stylesheet" href="vendor/fonts/fonts.css">
<script src="vendor/tailwind/tailwind.min.js"></script>
<link href="vendor/aos/aos.css" rel="stylesheet">
<link rel="stylesheet" href="vendor/fontawesome/all.min.css">

<!-- body閉じタグ直前 -->
<script defer src="js/components.js"></script>
<script defer src="vendor/alpinejs/cdn.min.js"></script>
<script src="vendor/aos/aos.js"></script>
<script src="js/main.js"></script>
```
- `components.js` を Alpine.js より先に `defer` で読み込むことで、注入されたヘッダーをAlpineが初期化できる

### CSS（css/custom.css）
- Tailwindで実現困難なスタイルのみ記述（アニメーション、複雑なグラデーション等）
- CSS変数（カスタムプロパティ）で色定義する場合はTailwind設定と整合させる
- `!important` は原則使用禁止（`header-scrolled` クラスは例外）

### JavaScript（js/main.js）
- Alpine.js / AOS で実現困難なロジックのみ記述
- `'use strict';` を使用
- DOM操作は `DOMContentLoaded` 後に実行
- ES6+構文を積極利用（const/let、アロー関数、テンプレートリテラル等）

## レスポンシブ設計
- **モバイルファースト:** デフォルトをモバイル向けに書き、`sm:`/`md:`/`lg:`/`xl:` で拡張
- **ブレークポイント:** Tailwind標準（sm:640px / md:768px / lg:1024px / xl:1280px）
- **タッチ対応:** ボタン・リンクの最小タップ領域 44x44px 確保
- **フォント:** clamp() またはTailwindのレスポンシブプレフィックスで段階的にサイズ変更

## デザインガイドライン

### カラーパレット（実装値）
| 用途 | 値 |
|------|-----|
| プライマリ | `#1d6fd8` |
| プライマリダーク | `#123d6e` |
| プライマリライト | `#eff6ff` |
| アクセント | `#3b82f6` |
| テキスト本文 | `#1e2535` |
| テキスト薄 | `#64748b` |
| 背景サーフェス | `#f5f8fc` |
| ヘッダー背景 | `rgba(12,35,64,0.96)` |
| モバイルメニュー背景 | `rgba(8,28,54,0.98)` |

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

### その他ガイドライン
- フォント: Noto Sans JP（日本語）、Inter（英字・数字）
- 余白: セクション間 `py-16 md:py-24 lg:py-32`
- カード: `rounded-2xl` + `card-hover` クラスでホバーエフェクト
- アニメーション: AOSベースで控えめに。`prefers-reduced-motion` 対応必須
- サービス装飾番号: `.service-num` クラスを使用（`css/custom.css` で定義）
- ページヒーロー（サブページ）: `cta-gradient` クラスで統一。コンパクトに（`py-6 md:py-8`）し、下のコンテンツをスクロールせず見やすくする
- セクション余白: サブページは `py-10 md:py-14 lg:py-20` を基本とする（過度な余白を避ける）

## 配布

- **ZIP作成:** `./dist/make-dist.sh` を実行 → `dist/ailewell-YYYYMMDD.zip` が生成される
- **含まれるもの:** HTML、css/、js/、vendor/、assets/（sample/、.git、PLAN.md 等は除外）
- **受け取り側:** ZIP解凍後、`index.html` をブラウザで直接開く（`file://` 可、オフライン動作）
- **ローカル確認:** `python -m http.server 8080` → `http://localhost:8080`

## Git 管理

- **ブランチ:** デフォルトは `main`
- **コミットタイミング:** ユーザーから明示的に依頼があった場合のみコミットする
- **コミットメッセージ規約:** Conventional Commits（英語・絵文字なし）
  - `feat:` 新機能・新ページ追加
  - `fix:` バグ修正・表示崩れ修正
  - `style:` デザイン調整（機能変更なし）
  - `content:` テキスト・コンテンツ更新
  - `docs:` PLAN.md・README等のドキュメント更新
  - `chore:` その他メンテナンス（.gitignore等）
- **コミット対象外:** `.DS_Store`、ログファイル（`.gitignore` で管理済み）
- **リモート:** 現時点はローカルのみ。`git remote add origin <URL>` で後から追加可能

## 禁止事項
- Font Awesome の `fa-brain` アイコンは使用禁止
- ビルドツール（npm / webpack / Vite 等）の使用禁止
- jQuery の使用禁止
- `sample/` ディレクトリ内のファイルを変更しないこと
- 不要なコメントや説明的コメントを入れないこと
