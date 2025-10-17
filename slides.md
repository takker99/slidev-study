---
# Slidevプレゼンテーションの設定
theme: default
background: https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev Study
  slidevでどの程度研究発表向けスライドをデザインできるか検証する
drawings:
  persist: false
transition: slide-left
title: Slidev Study
mdc: true
---

# Slidev Study

slidevでどの程度研究発表向けスライドをデザインできるか検証する

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---

# Slidevとは？

Slidevは開発者向けのプレゼンテーションスライド作成ツールです。

- 📝 **Markdown記法** - マークダウンで簡単にスライドを作成
- 🎨 **テーマ** - カスタマイズ可能なテーマシステム
- 🧑‍💻 **開発者フレンドリー** - コードハイライト、Vueコンポーネント対応
- 🌐 **Web技術** - HTML/CSS/JavaScriptでカスタマイズ
- 📤 **エクスポート** - PDF、PNG、ホスティング可能なSPA

<br>
<br>

公式サイト: [sli.dev](https://sli.dev)

---

# 使い方

## 開発サーバーの起動

```bash
pnpm dev
```

## ビルド

```bash
pnpm build
```

## PDFエクスポート

```bash
pnpm export
```

---

# コード例

Slidevではコードブロックが美しく表示されます。

```typescript {all|2|1-4|all}
interface User {
  id: number
  name: string
  email: string
}

function greet(user: User) {
  console.log(`Hello, ${user.name}!`)
}
```

<arrow v-click="[3, 4]" x1="400" y1="420" x2="230" y2="330" color="#564" width="3" arrowSize="1" />

---
layout: center
class: text-center
---

# 研究発表スライドの作成を始めよう！

[ドキュメント](https://sli.dev) · [GitHub](https://github.com/slidevjs/slidev)
