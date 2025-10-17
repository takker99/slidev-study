# Copilot Instructions for Slidev Study

このリポジトリは、研究発表スライドをSlidevで作成・デザインする技術検証プロジェクトです。

## プロジェクト概要

PowerPointなどで作成していた研究発表スライドを、Slidevでどの程度再現できるかを検証します。

## 開発環境

- **パッケージマネージャー**: pnpm
- **Linter/Formatter**: Biome
- **プレゼンテーションツール**: Slidev
- **Node.js**: v18以上を推奨

## よく使うコマンド

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動（ホットリロード付き）
pnpm dev

# プロダクションビルド
pnpm build

# PDFエクスポート
pnpm export

# コードの整形・リント
pnpm lint
pnpm lint:fix
pnpm format
```

## ファイル構成

- `slides.md` - メインのスライドファイル（Markdown形式）
- `package.json` - プロジェクト設定とスクリプト
- `biome.json` - Biomeの設定
- `.gitignore` - Gitで無視するファイル

## Slidevの書き方

### スライドの区切り

スライドは `---` で区切ります。

```markdown
---
# スライド1
内容

---
# スライド2
内容
```

### フロントマター

最初のスライドにYAMLフロントマターを使って設定を記述します。

```yaml
---
theme: default
background: https://example.com/image.jpg
highlighter: shiki
lineNumbers: true
---
```

### レイアウト

各スライドにレイアウトを指定できます。

```markdown
---
layout: center
class: text-center
---
```

利用可能なレイアウト:
- `default` - デフォルト
- `center` - 中央揃え
- `cover` - カバーページ
- `intro` - イントロダクション
- `two-cols` - 2カラムレイアウト
- `image-right` / `image-left` - 画像とテキスト
- `quote` - 引用
- `section` - セクション区切り

### コードハイライト

```markdown
\`\`\`typescript {2-3|5-6|all}
function example() {
  const x = 1
  const y = 2
  
  return x + y
}
\`\`\`
```

行番号や強調表示のアニメーションが可能です。

### アニメーション

`v-click` ディレクティブで要素を段階的に表示:

```markdown
- Item 1
- Item 2 <!-- v-click -->
- Item 3 <!-- v-click -->
```

### 数式

KaTeXを使って数式を表示:

```markdown
インライン数式: $E = mc^2$

ブロック数式:
$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$
```

### 図表・画像

```markdown
![画像の説明](/path/to/image.png)

# または

<img src="/path/to/image.png" class="w-full" />
```

## コーディング規約

### Markdown

- インデントはスペース2つ
- コードブロックには言語を指定
- 見出しは適切な階層で使用

### JavaScript/TypeScript (カスタムコンポーネント用)

- Biomeの設定に従う
- タブインデント
- ダブルクォート使用
- セミコロン省略可

### スタイル (カスタムCSS用)

- WindiCSSのユーティリティクラスを優先
- カスタムCSSは `<style>` ブロック内に記述

## 研究発表スライドの作成ガイドライン

### 推奨される構成

1. **タイトルスライド**
   - 研究タイトル
   - 著者名
   - 所属
   - 日付

2. **アウトライン**
   - 発表の流れ

3. **背景・動機**
   - 研究の背景
   - 解決したい課題

4. **関連研究**
   - 既存研究の紹介
   - 本研究との違い

5. **提案手法**
   - 手法の説明
   - アルゴリズム
   - 図表を活用

6. **実験・評価**
   - 実験設定
   - 結果の提示
   - グラフ・表の活用

7. **結論**
   - まとめ
   - 今後の課題

8. **参考文献**
   - 引用文献リスト

### デザインのベストプラクティス

- **読みやすさ**: フォントサイズは適切に（本文18px以上推奨）
- **シンプル**: 1スライド1メッセージ
- **視覚的**: 図表を効果的に使用
- **一貫性**: テーマカラーやレイアウトを統一
- **アニメーション**: 過度な使用は避ける

## トラブルシューティング

### ビルドエラー

```bash
# node_modulesを削除して再インストール
rm -rf node_modules
pnpm install
```

### 開発サーバーが起動しない

- ポートが使用されていないか確認（デフォルト: 3030）
- Node.jsのバージョンを確認

### PDFエクスポートが失敗する

- Playwrightが正しくインストールされているか確認
- `npx playwright install` を実行

## リソース

- [Slidev公式ドキュメント](https://sli.dev)
- [Slidev GitHub](https://github.com/slidevjs/slidev)
- [Biome公式サイト](https://biomejs.dev)
- [WindiCSS Documentation](https://windicss.org)

## コントリビューション

スライドの改善や新しい機能の追加は歓迎します。変更を加える際は：

1. ブランチを作成
2. 変更を加える
3. `pnpm lint:fix` でコードを整形
4. プルリクエストを作成

## Copilotの使用に関するヒント

### Slidevスライドを作成する際

- 「新しいスライドを追加して」と指示する際は、テーマとレイアウトを指定してください
- コードブロックを含める場合は、使用する言語とハイライトしたい行を明示してください

### コードの編集

- `slides.md` を編集する際は、既存のフォーマットを維持してください
- 新しいレイアウトを試す際は、Slidevの公式ドキュメントを参照してください

### デバッグ

- 開発サーバーを起動して変更を即座に確認できます
- ビルドエラーが発生した場合は、Markdownの構文を確認してください
