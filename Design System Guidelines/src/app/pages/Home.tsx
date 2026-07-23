import { NavLink } from "react-router";
import { ArrowRight, ChevronRight } from "lucide-react";

const RECOMMEND = [
  {
    id: 1,
    name: "ブレンドコーヒー",
    desc: "深煎りと中煎りをブレンドした看板メニュー",
    price: "¥550",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=480&fit=crop&auto=format",
  },
  {
    id: 2,
    name: "カフェラテ",
    desc: "なめらかなミルクと深みのあるエスプレッソ",
    price: "¥650",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=480&fit=crop&auto=format",
  },
  {
    id: 3,
    name: "チーズケーキ",
    desc: "毎朝手作り。濃厚でなめらかな口どけ",
    price: "¥480",
    img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&h=480&fit=crop&auto=format",
  },
];

const NEWS = [
  {
    id: 1,
    date: "2026年7月16日",
    title: "当店オープン！",
    body: "本日よりまめや珈琲がオープンいたしました。皆様のご来店を心よりお待ちしております。",
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=500&fit=crop&auto=format",
    featured: true,
  },
  {
    id: 2,
    date: "2026年7月20日",
    title: "夏季限定「アイスほうじ茶ラテ」販売開始",
    featured: false,
  },
  {
    id: 3,
    date: "2026年7月22日",
    title: "お盆期間（8/13〜16）の営業時間についてのご案内",
    featured: false,
  },
];

export default function Home() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative bg-[#2c2c2c] min-h-[540px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1600&h=800&fit=crop&auto=format"
          alt="カフェの温かな内観"
          className="absolute inset-0 w-full h-full object-cover opacity-45"
        />
        <div className="relative z-10 max-w-[1160px] mx-auto px-8 pb-16 pt-24">
          <p className="text-[#E0FFFF] text-[12px] font-medium tracking-[0.3em] uppercase mb-4">
            Specialty Coffee &amp; Handmade Sweets
          </p>
          <h1
            className="text-white font-bold leading-[1.1] mb-6"
            style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
          >
            豆から丁寧に、<br />
            一杯に心を込めて。
          </h1>
          <p className="text-[#E0FFFF] text-[16px] leading-relaxed max-w-[440px] mb-8">
            スペシャルティコーヒーと毎朝手作りのスイーツをご用意してお待ちしています。
          </p>
          <div className="flex flex-wrap gap-4">
            <NavLink
              to="/menu"
              className="flex items-center gap-2 px-8 py-3 bg-white text-[#2c2c2c] text-[15px] font-bold rounded-[8px] hover:bg-[#f5f5f5] transition-colors"
            >
              メニューを見る <ArrowRight size={16} />
            </NavLink>
            <NavLink
              to="/store"
              className="flex items-center gap-2 px-8 py-3 border border-white/60 text-white text-[15px] font-medium rounded-[8px] hover:bg-white/10 transition-colors"
            >
              店舗情報
            </NavLink>
          </div>
        </div>
      </section>

      {/* ── おすすめメニュー ── */}
      <section className="py-16 md:py-24 max-w-[1160px] mx-auto px-8">
        <div className="mb-10">
          <p className="text-[12px] font-medium tracking-[0.25em] text-[#6b6b6b] uppercase mb-2">
            Recommended
          </p>
          <h2 className="font-bold" style={{ fontSize: "40px", lineHeight: 1.1 }}>
            おすすめメニュー
          </h2>
        </div>

        {/* 3-column card grid — proximity: image+text ≤16px gap inside card */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {RECOMMEND.map((item) => (
            <article
              key={item.id}
              className="bg-white border border-[#F3FFD8] rounded-[12px] overflow-hidden group hover:shadow-md transition-shadow duration-300"
            >
              <div className="overflow-hidden bg-[#f5f5f5] aspect-[4/3]">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* proximity: 16px internal padding keeps image+text tight */}
              <div className="p-4 flex flex-col gap-1">
                <h3 className="font-bold text-[16px]">{item.name}</h3>
                <p className="text-[13px] text-[#6b6b6b] leading-relaxed">{item.desc}</p>
                <p className="text-[18px] font-bold text-[#2c2c2c] mt-2">{item.price}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <NavLink
            to="/menu"
            className="flex items-center gap-1 text-[14px] font-bold text-[#2c2c2c] hover:underline"
          >
            メニュー一覧へ <ChevronRight size={15} />
          </NavLink>
        </div>
      </section>

      {/* ── お知らせ ── */}
      <section className="pb-16 md:pb-24 max-w-[1160px] mx-auto px-8">
        <div className="mb-10 flex items-end justify-between flex-wrap gap-4">
          <div>
            <p className="text-[12px] font-medium tracking-[0.25em] text-[#6b6b6b] uppercase mb-2">
              News
            </p>
            <h2 className="font-bold" style={{ fontSize: "40px", lineHeight: 1.1 }}>
              お知らせ
            </h2>
          </div>
          <NavLink
            to="/news"
            className="flex items-center gap-1 text-[14px] font-bold text-[#2c2c2c] hover:underline"
          >
            すべて見る <ChevronRight size={15} />
          </NavLink>
        </div>

        {/* Featured card — contrast: #D7EEFF accent, large image */}
        <div className="bg-[#D7EEFF] rounded-[12px] border border-[#F3FFD8] overflow-hidden mb-6">
          <div className="grid md:grid-cols-[1fr_1fr] gap-0">
            <div className="overflow-hidden bg-[#D9D9D9] aspect-[4/3] md:aspect-auto">
              <img
                src={NEWS[0].img}
                alt={NEWS[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* proximity: date + title within 16px */}
            <div className="p-8 md:p-10 flex flex-col justify-center gap-2">
              <time className="text-[13px] font-bold text-[#2c2c2c] tracking-wide">
                {NEWS[0].date}
              </time>
              <h3 className="font-bold" style={{ fontSize: "40px", lineHeight: 1.15 }}>
                {NEWS[0].title}
              </h3>
              <p className="text-[16px] text-[#1a1a1a] leading-relaxed mt-2">
                {NEWS[0].body}
              </p>
              <NavLink
                to="/news"
                className="mt-4 self-start flex items-center gap-2 px-6 py-2.5 bg-[#2c2c2c] text-white text-[14px] font-bold rounded-[8px] hover:bg-[#444] transition-colors"
              >
                詳しく見る <ArrowRight size={14} />
              </NavLink>
            </div>
          </div>
        </div>

        {/* Secondary news list */}
        <ul className="flex flex-col divide-y divide-[#D9D9D9]">
          {NEWS.slice(1).map((item) => (
            <li key={item.id}>
              <NavLink
                to="/news"
                className="flex items-center gap-6 py-4 px-2 -mx-2 rounded-[8px] hover:bg-[#f5f5f5] transition-colors group"
              >
                <time className="text-[13px] text-[#6b6b6b] tabular-nums w-[110px] shrink-0">
                  {item.date}
                </time>
                <p className="text-[15px] font-medium flex-1 group-hover:text-[#2c2c2c] transition-colors">
                  {item.title}
                </p>
                <ChevronRight size={15} className="text-[#D9D9D9] group-hover:text-[#2c2c2c] transition-colors shrink-0" />
              </NavLink>
            </li>
          ))}
        </ul>
      </section>

      {/* ── CTA PANEL ── */}
      <section className="pb-16 md:pb-24 max-w-[1160px] mx-auto px-8">
        <div className="bg-[#2c2c2c] rounded-[16px] px-8 py-12 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[#E0FFFF] text-[12px] tracking-[0.25em] uppercase font-medium mb-3">
              Reservation &amp; Contact
            </p>
            <h2
              className="text-white font-bold leading-snug"
              style={{ fontSize: "clamp(28px, 3vw, 40px)" }}
            >
              ご予約・お問い合わせ
            </h2>
            <p className="text-[#D9D9D9] text-[16px] mt-3 leading-relaxed max-w-[400px]">
              ウェブフォームまたはお電話にてお気軽にどうぞ。
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="tel:03-0000-0000"
              className="px-8 py-3 bg-white text-[#2c2c2c] text-[15px] font-bold rounded-[8px] hover:bg-[#f5f5f5] transition-colors text-center"
            >
              03-0000-0000
            </a>
            <NavLink
              to="/contact"
              className="px-8 py-3 border border-white/60 text-white text-[15px] font-medium rounded-[8px] hover:bg-white/10 transition-colors text-center"
            >
              フォームで予約
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
