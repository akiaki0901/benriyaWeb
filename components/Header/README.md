# Header

```tsx
<Header
  activeIndex={2}
  underlineColor="#0b326f"
  contactButtonColor="#0b326f"
  contactButtonHoverColor="#174a87"
/>
```

- \`activeIndex\`: 下線を表示するリンク位置。先頭は \`0\`、非表示は \`-1\`
- \`underlineColor\`: ナビゲーションリンク下線の色
- \`contactButtonColor\`: お問い合わせボタンとメニューボタンの色
- \`contactButtonHoverColor\`: お問い合わせボタンのホバー色
- \`fixed\`: ヘッダーを画面上部に固定するか
- \`navItems\`: ナビゲーション項目
- \`logoSrc\`: ロゴ画像のパス。使わない場合は \`null\`
- \`contactHref\`: お問い合わせページのリンク

固定表示の場合、ページ側のレイアウトにはヘッダーの高さ分の上余白を設定してください。
