import { useState } from "react";

const CATEGORIES = ["すべて", "ドリンク", "フード", "スイーツ"];

const ITEMS = [
  // ドリンク
  { id: 1, cat: "ドリンク", name: "ブレンドコーヒー", desc: "深煎り×中煎りのオリジナルブレンド", price: "¥550", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=480&h=360&fit=crop&auto=format" },
  { id: 2, cat: "ドリンク", name: "カフェラテ", desc: "エスプレッソ×スチームミルク", price: "¥650", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=480&h=360&fit=crop&auto=format" },
  { id: 3, cat: "ドリンク", name: "カプチーノ", desc: "きめ細かいフォームミルクで仕上げた定番", price: "¥650", img: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=480&h=360&fit=crop&auto=format" },
  { id: 4, cat: "ドリンク", name: "アイスほうじ茶ラテ", desc: "国産ほうじ茶×ミルク（夏季限定）", price: "¥680", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=480&h=360&fit=crop&auto=format", tag: "季節限定" },
  { id: 5, cat: "ドリンク", name: "フレッシュオレンジジュース", desc: "朝搾りのオレンジを丸ごと一杯に", price: "¥580", img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=480&h=360&fit=crop&auto=format" },
  { id: 6, cat: "ドリンク", name: "チャイ", desc: "スパイスが香る温かいミルクティー", price: "¥620", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=480&h=360&fit=crop&auto=format" },
  // フード
  { id: 7, cat: "フード", name: "モーニングトースト", desc: "厚切りトースト・バター・ジャム付き", price: "¥380", img: "https://images.unsplash.com/photo-1484723091739-30990ca7b4ce?w=480&h=360&fit=crop&auto=format" },
  { id: 8, cat: "フード", name: "アボカドトースト", desc: "有機アボカドとフレッシュトマトを添えて", price: "¥720", img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=480&h=360&fit=crop&auto=format" },
  { id: 9, cat: "フード", name: "キッシュプレート", desc: "本日のキッシュ・サラダ・スープセット", price: "¥980", img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=480&h=360&fit=crop&auto=format" },
  // スイーツ
  { id: 10, cat: "スイーツ", name: "チーズケーキ", desc: "毎朝手作り。濃厚でなめらかな口どけ", price: "¥480", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=480&h=360&fit=crop&auto=format", tag: "おすすめ" },
  { id: 11, cat: "スイーツ", name: "シフォンケーキ", desc: "ふわふわ生地に季節のクリームを添えて", price: "¥420", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=480&h=360&fit=crop&auto=format" },
  { id: 12, cat: "スイーツ", name: "スコーン（2個）", desc: "バターたっぷりのイギリス式スコーン", price: "¥380", img: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=480&h=360&fit=crop&auto=format" },
];

const TAG_STYLE: Record<string, string> = {
  "おすすめ": "bg-[#2c2c2c] text-white",
  "季節限定": "bg-[#FFFFE0] text-[#1a1a1a]",
};

export default function Menu() {
  const [active, setActive] = useState("すべて");
  const shown = active === "すべて" ? ITEMS : ITEMS.filter((i) => i.cat === active);

  return (
    <div className="max-w-[1160px] mx-auto px-8 py-16 md:py-24">
      {/* PAGE HEADING */}
      <div className="mb-10">
        <p className="text-[12px] tracking-[0.25em] text-[#6b6b6b] uppercase font-medium mb-2">Menu</p>
        <h1 className="font-bold" style={{ fontSize: "56px", lineHeight: 1.05 }}>
          メニュー
        </h1>
      </div>

      {/* CATEGORY TABS */}
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-[8px] text-[14px] font-bold transition-colors ${
              active === cat
                ? "bg-[#2c2c2c] text-white"
                : "bg-[#f5f5f5] text-[#6b6b6b] hover:bg-[#e8e8e8]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* CATEGORY HEADING — shown when filtered */}
      {active !== "すべて" && (
        <h2 className="font-bold mb-8" style={{ fontSize: "40px", lineHeight: 1.1 }}>
          {active}
        </h2>
      )}

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {shown.map((item) => (
          <article
            key={item.id}
            className="bg-white border border-[#F3FFD8] rounded-[12px] overflow-hidden group hover:shadow-md transition-shadow duration-300"
          >
            <div className="relative overflow-hidden bg-[#f5f5f5] aspect-[4/3]">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {item.tag && (
                <span className={`absolute top-3 left-3 text-[11px] font-bold px-2 py-0.5 rounded-[4px] ${TAG_STYLE[item.tag]}`}>
                  {item.tag}
                </span>
              )}
            </div>
            {/* proximity: name+desc+price ≤16px internal gap */}
            <div className="p-4 flex flex-col gap-1">
              <p className="text-[11px] font-medium text-[#6b6b6b] tracking-wide uppercase">{item.cat}</p>
              <h3 className="font-bold text-[16px]">{item.name}</h3>
              <p className="text-[13px] text-[#6b6b6b] leading-relaxed">{item.desc}</p>
              <p className="text-[18px] font-bold text-[#2c2c2c] mt-2">{item.price}</p>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-8 text-[13px] text-[#6b6b6b] text-center">
        価格はすべて税込です。アレルギーについてはスタッフまでお声がけください。
      </p>
    </div>
  );
}
