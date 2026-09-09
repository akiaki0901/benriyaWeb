export const services = [
  {
    icon: "home",
    title: "お家の片づけ",
    accent: "green",
    image: "/img-kojin/service-declutter.png",
    text: "ご自宅やご家族のお片づけ、家財整理・遺品整理までお任せください。",
  },
  {
    icon: "truck",
    title: "引越し・住み替え",
    accent: "blue",
    image: "/img-kojin/service-moving.png",
    text: "一般のお引越しから、施設への入居・住み替えまでサポートします。",
  },
  {
    icon: "heart",
    title: "地震対策",
    accent: "orange",
    image: "/img-kojin/service-safety.png",
    text: "家具の転倒防止や耐震補強など、ご家庭の地震対策をお手伝いします。",
  },
  {
    icon: "clean",
    title: "お家のクリーニング",
    accent: "green",
    image: "/img-kojin/service-cleaning.png",
    text: "水回りからお部屋全体まで、プロの清掃で快適な空間をきれいに整えます。",
  },
  {
    icon: "vacant",
    title: "空き家管理",
    accent: "blue",
    image: "/img-kojin/service-vacant-house.png",
    text: "草刈り・清掃・簡易点検・見回りなど、大切な空き家を管理します。",
  },
  {
    icon: "people",
    title: "暮らしのお手伝い",
    accent: "orange",
    image: "/img-kojin/service-care.png",
    text: "通院同行、買い物、外出の付き添いなど、日々の生活をサポートします。",
  },
] as const;

export const smallSupports = [
  ["sofa", "家具の移動・組立"],
  ["bulb", "電球・照明の交換"],
  ["door", "電球・建具の調整"],
  ["window", "網戸・建具の調整"],
  ["curtain", "カーテン・ブラインドの取付け"],
  ["garden", "庭のお手入れ"],
  ["carry", "荷物の運搬・持ち運び"],
  ["building", "お墓掃除・お参り代行"],
  ["tv", "家具・家電の設置"],
  ["trash", "ゴミ出し・不用品の片付け"],
  ["escort", "買い物代行・付き添い"],
  ["tools", "簡単な修理・補修"],
  ["water", "水漏れ・詰まりの対応"],
  ["question", "その他、ちょっとしたお困りごと"],
] as const;

export const cases = [
  {
    number: "01",
    title: "施設入居に伴う\n実家の片づけ",
    image: "/img-kojin/service-declutter.png",
    points: [
      "家財整理・不用品処分",
      "引越し・運搬あり",
      "空き家管理（定期見回り）",
    ],
    text: "施設入居が決まり、長年住んだ実家の整理をお手伝い。片付けから引越し、空き家管理まで一括でサポートしました。",
  },
  {
    number: "02",
    title: "遠方に住むご家族からの\nご相談",
    image: "/img-kojin/service-vacant-house.png",
    points: [
      "現地確認・打ち合わせ",
      "家財整理・クリーニング",
      "定期的な空き家管理",
    ],
    text: "県外に一人暮らしのご家族を遠方からご依頼。現地での相談から片付け・清掃、その後の管理まで安心してお任せいただけました。",
  },
  {
    number: "03",
    title: "日常生活の\nお困りごと",
    image: "/img-kojin/service-care.png",
    points: ["通院同行", "買い物サポート", "お部屋の掃除・整理"],
    text: "介護保険では対応できない「ちょっとした困りごと」をサポート。暮らしがぐっと楽になったと喜ばれました。",
  },
] as const;

export const steps = [
  ["phone", "ご相談", "お電話・LINE・メールでお気軽にご相談ください。"],
  ["person", "現地確認・ヒアリング", "ご状況を確認し、ご要望をお伺いします。"],
  [
    "document",
    "お見積り・ご提案",
    "お見積りをご提示し、最適なプランをご提案。",
  ],
  ["truck", "作業・サポート", "経験豊富なスタッフが丁寧に作業を行います。"],
  ["heart", "アフターフォロー", "必要に応じて継続的にサポートいたします。"],
] as const;

export const testimonials = [
  [
    "70代 女性（宝塚市）",
    "一人ではどうしていいかわからなかった実家の片付けを、すべてお任せしました。スタッフさんが親切で、気持ちも落ち着きました。",
  ],
  [
    "60代 男性（川西市）",
    "施設入居にあたり、片付けや引越し、いろいろお願いしました。まとめて対応してくれて負担がとても減りました。",
  ],
  [
    "50代 女性（尼崎市）",
    "通院の付き添いや買い物など、ちょっとしたことも頼めるので助かっています。困ったときの心強い味方です。",
  ],
] as const;
