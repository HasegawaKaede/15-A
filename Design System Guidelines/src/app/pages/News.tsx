import { NavLink } from "react-router";
import { ChevronRight } from "lucide-react";

const ALL_NEWS = [
  {
    id: 1,
    date: "2026年7月16日",
    category: "お知らせ",
    title: "当店オープン！",
    body: "本日よりまめや珈琲がオープンいたしました。スペシャルティコーヒーと毎朝手作りのスイーツで皆様をお迎えします。皆様のご来店を心よりお待ちしております。",
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=500&fit=crop&auto=format",
    featured: true,
  },
  {
    id: 2,
    date: "2026年7月20日",
    category: "メニュー",
    title: "夏季限定「アイスほうじ茶ラテ」販売開始",
    body: "国産ほうじ茶を使ったアイスラテが夏季限定で登場。香ばしい香りとミルクの甘さが絶妙です。",
    featured: false,
  },
  {
    id: 3,
    date: "2026年7月22日",
    category: "お知らせ",
    title: "お盆期間（8/13〜16）の営業時間についてのご案内",
    body: "お盆期間中は営業時間が変更になります。8月13日〜16日は10:00〜17:00の営業となります。",
    featured: false,
  },
  {
    id: 4,
    date: "2026年7月10日",
    category: "イベント",
    title: "7月28日（日）コーヒーセミナー開催のご案内",
    body: "スペシャルティコーヒーの楽しみ方をバリスタがわかりやすくお伝えする体験セミナーを開催します。",
    featured: false,
  },
];

const CAT_STYLE: Record<string, string> = {
  "お知らせ": "bg-[#D7EEFF] text-[#1a1a1a]",
  "メニュー": "bg-[#F3FFD8] text-[#1a1a1a]",
  "イベント": "bg-[#FFFFE0] text-[#1a1a1a]",
};

export default function News() {
  const [featured, ...rest] = ALL_NEWS;
  return (
    <div className="max-w-[1160px] mx-auto px-8 py-16 md:py-24">
      {/* PAGE HEADING */}
      <div className="mb-12">
        <p className="text-[12px] tracking-[0.25em] text-[#6b6b6b] uppercase font-medium mb-2">News</p>
        <h1 className="font-bold" style={{ fontSize: "56px", lineHeight: 1.05 }}>
          お知らせ
        </h1>
      </div>

      {/* Featured — contrast: #D7EEFF + 40px title */}
      <div className="bg-[#D7EEFF] rounded-[12px] border border-[#F3FFD8] overflow-hidden mb-8">
        <div className="grid md:grid-cols-[1fr_1fr]">
          <div className="overflow-hidden bg-[#D9D9D9] aspect-[4/3] md:aspect-auto">
            <img
              src={featured.img}
              alt={featured.title}
              className="w-full h-full object-cover"
            />
          </div>
          {/* proximity: date + category + title within 16px vertical gap */}
          <div className="p-8 md:p-10 flex flex-col justify-center gap-2">
            <div className="flex items-center gap-3">
              <time className="text-[13px] font-medium text-[#2c2c2c]">{featured.date}</time>
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded-[4px] ${CAT_STYLE[featured.category]}`}>
                {featured.category}
              </span>
            </div>
            <h2 className="font-bold" style={{ fontSize: "40px", lineHeight: 1.15 }}>
              {featured.title}
            </h2>
            <p className="text-[16px] text-[#1a1a1a] leading-relaxed mt-1">{featured.body}</p>
          </div>
        </div>
      </div>

      {/* Secondary list */}
      <ul className="flex flex-col divide-y divide-[#D9D9D9]">
        {rest.map((item) => (
          <li key={item.id}>
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 py-6">
              {/* proximity: date + category tight group, 24px from title */}
              <div className="flex items-center gap-3 shrink-0 sm:pt-0.5">
                <time className="text-[13px] text-[#6b6b6b] tabular-nums w-[100px]">{item.date}</time>
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-[4px] ${CAT_STYLE[item.category] ?? "bg-[#f5f5f5] text-[#6b6b6b]"}`}>
                  {item.category}
                </span>
              </div>
              <div className="flex-1">
                <p className="text-[15px] font-bold mb-1">{item.title}</p>
                <p className="text-[14px] text-[#6b6b6b] leading-relaxed">{item.body}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
