# slidev-study

slidevの技術検証。slidevでどの程度研究発表向けスライドをデザインできるか検証する。

## 概要

このリポジトリは、PowerPointなどで作成していた研究発表スライドを、Slidevでどの程度再現できるかを検証するプロジェクトです。

Slidevは、開発者向けのプレゼンテーションスライド作成ツールで、Markdownでスライドを記述し、Webテクノロジー（Vue.js、Vite、WindiCSS）を使用して美しいプレゼンテーションを作成できます。

## 必要な環境

- Node.js 18以上
- pnpm 8以上

## セットアップ

### 1. pnpmのインストール（未インストールの場合）

```bash
npm install -g pnpm
```

### 2. 依存関係のインストール

```bash
pnpm install
```

## 使い方

### 開発サーバーの起動

```bash
pnpm dev
```

ブラウザで http://localhost:3030 を開くとスライドが表示されます。
`slides.md` を編集すると、自動的にブラウザに反映されます。

### ビルド

プロダクション用のビルド（SPA）を生成します：

```bash
pnpm build
```

ビルドされたファイルは `dist/` ディレクトリに出力されます。

### PDFエクスポート

スライドをPDFファイルとしてエクスポートします：

```bash
pnpm export
```

### コードの整形・リント

Biomeを使用してコードをチェック・整形します：

```bash
# リントチェック
pnpm lint

# 自動修正
pnpm lint:fix

# コード整形
pnpm format
```

## ファイル構成

- `slides.md` - メインのスライドファイル（Markdown形式）
- `package.json` - プロジェクト設定とスクリプト
- `biome.json` - Biome（リンター・フォーマッター）の設定
- `copilot-instructions.md` - GitHub Copilot使用時のガイドライン
- `copilot-setup-steps.yml` - 開発環境のセットアップ手順

## 技術スタック

- **Slidev**: プレゼンテーションフレームワーク
- **pnpm**: パッケージマネージャー
- **Biome**: リンター・フォーマッター
- **Vue.js**: UIフレームワーク（Slidevのベース）
- **Vite**: ビルドツール
- **UnoCSS**: ユーティリティファーストCSSエンジン

## ドキュメント

詳細な使い方については、以下のドキュメントを参照してください：

- [copilot-instructions.md](./copilot-instructions.md) - Copilotでの開発ガイドライン
- [copilot-setup-steps.yml](./copilot-setup-steps.yml) - セットアップ手順の詳細
- [Slidev公式ドキュメント](https://sli.dev)

## ライセンス

ISC
