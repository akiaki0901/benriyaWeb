# components/hojin

`HojinClient.tsx` をページから読み込んで使用します。

```tsx
import HojinClient from "@/components/hojin/HojinClient";

export default function Page() {
  return <HojinClient />;
}
```

`public` に以下の画像を置いてください。

- `hojin-top-image.png`
- `sisetu-tyo.png`
- `care-manager.png`
- `minsei-iin.png`
- `koumuten.png`
- `koumuten_L.png`
- `koumuten_R.png`
- `hojin-contact.png`

画像名が異なる場合は、該当コンポーネント内の `src` または `background` を変更してください。
