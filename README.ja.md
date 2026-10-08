# Next Movie

Next Movie は、TMDB API を利用した映画検索・閲覧アプリケーションです。人気作品や近日公開作品の閲覧、ジャンル別の絞り込み、作品検索、作品詳細と出演者情報の確認ができます。

![Next Movie デモプレビュー]
(docs/images/next-movie-demo.png)

## 機能

- 人気作品と近日公開作品の表示
- ジャンル別の映画一覧
- 映画タイトルの検索
- 背景画像、概要、出演者を含む作品詳細ページ
- 出演者ページへのリンクと人物情報 API ルート
- Tailwind CSS によるレスポンシブレイアウト

## 技術スタック

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui スタイルのコンポーネント
- TMDB API

## セットアップ

### 必要な環境

- Node.js 20 以上
- TMDB API Read Access Token

### インストール

```bash
npm install
cp .env.example .env.local
```

`.env.local` を開き、自分の TMDB トークンを設定します。

```env
TMDB_TOKEN=your_tmdb_read_access_token
```

開発サーバーを起動します。

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## 利用できるスクリプト

```bash
npm run dev      # 開発サーバーを起動
npm run build    # 本番用ビルドを作成
npm run start    # 本番サーバーを起動
npm run lint     # ESLint を実行
```

## 主なルート

| ルート               | 説明                       |
| -------------------- | -------------------------- |
| `/`                  | 人気作品と近日公開作品     |
| `/genre/[name]/[id]` | 選択したジャンルの作品一覧 |
| `/search?q=...`      | 検索結果                   |
| `/detail/[id]`       | 作品詳細と出演者           |
| `/person/[id]`       | 人物情報 API ルート        |

## プロジェクト構成

```text
app/                 Next.js のページとルートハンドラー
components/          再利用可能な UI コンポーネント
lib/                 共通ユーティリティ
public/              静的アセット
types/               共通 TypeScript 型
```

## TMDB の帰属表示

このプロダクトは TMDB API を使用していますが、TMDB による推奨または認証を受けたものではありません。映画情報と画像は [The Movie Database](https://www.themoviedb.org/) から提供されています。

## Language

- English: [README.md](README.md)
