export default function Store() {
  return (
    <div className="max-w-[1160px] mx-auto px-8 py-16 md:py-24">
      <div className="mb-12">
        <p className="text-[12px] tracking-[0.25em] text-[#6b6b6b] uppercase font-medium mb-2">Access</p>
        <h1 className="font-bold" style={{ fontSize: "56px", lineHeight: 1.05 }}>
          店舗情報
        </h1>
      </div>

      <div className="grid md:grid-cols-[1fr_1fr] gap-8 items-start">
        {/* Map placeholder */}
        <div className="rounded-[12px] overflow-hidden bg-[#f5f5f5] border border-[#F3FFD8] aspect-[4/3] flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop&auto=format"
            alt="カフェ外観"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info panel */}
        <div className="bg-[#f5f5f5] rounded-[16px] p-8 flex flex-col gap-6">
          <h2 className="font-bold text-[24px]">まめや珈琲</h2>

          {[
            { label: "住所", value: "〒150-0000\n東京都渋谷区〇〇町 1-2-3\nまめやビル 1F" },
            { label: "電話", value: "03-0000-0000" },
            { label: "営業時間", value: "月・水〜金　8:00 – 19:00\n土・日・祝　9:00 – 20:00\n定休日：火曜日" },
            { label: "アクセス", value: "渋谷駅 東口より徒歩5分\n表参道駅 A2出口より徒歩8分" },
          ].map(({ label, value }) => (
            /* proximity: label + value ≤16px gap */
            <div key={label} className="flex flex-col gap-1">
              <dt className="text-[12px] font-bold tracking-widest text-[#6b6b6b] uppercase">{label}</dt>
              <dd className="text-[15px] leading-relaxed whitespace-pre-line">{value}</dd>
            </div>
          ))}

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-6 py-3 bg-[#2c2c2c] text-white text-[14px] font-bold rounded-[8px] hover:bg-[#444] transition-colors text-center"
          >
            Google マップで開く
          </a>
        </div>
      </div>

      {/* Interior photos */}
      <div className="mt-12">
        <h2 className="font-bold mb-6" style={{ fontSize: "40px", lineHeight: 1.1 }}>
          店内のご紹介
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=450&fit=crop&auto=format", alt: "カウンター席" },
            { src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&h=450&fit=crop&auto=format", alt: "テーブル席" },
            { src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&h=450&fit=crop&auto=format", alt: "窓際席" },
          ].map(({ src, alt }) => (
            <div key={alt} className="rounded-[12px] overflow-hidden border border-[#F3FFD8] bg-[#f5f5f5] aspect-[4/3]">
              <img src={src} alt={alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
