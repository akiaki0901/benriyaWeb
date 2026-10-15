export const featuredServices = [
  {
    number: "1",
    title: "退去時の片付け・引っ越し",
    description: "残された荷物の整理から搬出・処分、引っ越しまで一括対応。",
    images: [
      "/img-hojin-detail/declutter-before.png",
      "/img-hojin-detail/declutter-working.png",
      "/img-hojin-detail/declutter-after.png",
    ],
    points: [
      "残置物・家財の分別・片付け",
      "施設内・施設間の引っ越し",
      "不用品の処分・買取",
      "必要に応じた一時保管",
    ],
  },
  {
    number: "2",
    title: "居室クリーニング（壁紙張り替え）",
    description: "次の入居者様を気持ちよく迎えるための原状回復をサポート。",
    images: [
      "/img-hojin-detail/restore-before.png",
      "/img-hojin-detail/restore-working.png",
      "/img-hojin-detail/restore-after.png",
    ],
    points: [
      "ハウスクリーニング（床・水回り・窓など）",
      "壁紙の張り替え・補修",
      "床材の補修・クッションフロア張り替え",
      "消臭・除菌・害虫駆除",
    ],
  },
] as const;

export const concerns = [
  ["bed", "急に退去が決まり、次の入居までに部屋を空けたい"],
  ["list", "残された荷物が多く、どこから手をつけていいかわからない"],
  ["wall", "壁や床が傷んでいるが、どこに頼めばいいかわからない"],
  ["heart", "家族が来られず、引っ越しや片付けをお願いしたい"],
  ["key", "複数の業者に依頼する時間や手間を減らしたい"],
] as const;

export const supportGroups = [
  {
    title: "入退去のトータルサポート",
    items: [
      "片付け・分別・処分・買取",
      "引っ越し・搬出・一時保管",
      "清掃・原状回復・次の入居へ",
    ],
  },
  {
    title: "居室の原状回復サポート",
    items: ["クリーニング", "壁紙張り替え・補修", "床材の補修・張り替え"],
  },
  {
    title: "その他の“誰に頼めばいい？”もお任せ",
    items: [
      "設備の修繕・交換",
      "空き家の管理・見守り",
      "蜂の巣・害虫・消臭・除菌 など",
    ],
  },
] as const;

export const steps = [
  [
    "phone",
    "ご相談・お問い合わせ",
    "お電話・フォームよりお気軽にご連絡ください。",
  ],
  ["clipboard", "状況の確認", "内容をお伺いし、現場や写真で状況を確認します。"],
  ["document", "ご提案・お見積り", "最適なプランとお見積りをご提案します。"],
  [
    "tools",
    "作業・専門業者手配",
    "自社または専門業者と連携し作業を実施します。",
  ],
  [
    "heart",
    "完了・アフターサポート",
    "完了後も安心のサポート。継続相談も可能です。",
  ],
] as const;
