const PHOTOS = [
  { id: 1, src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop&auto=format", alt: "ブレンドコーヒー", span: "col-span-1 row-span-2" },
  { id: 2, src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=500&fit=crop&auto=format", alt: "カフェ外観", span: "col-span-1" },
  { id: 3, src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&h=500&fit=crop&auto=format", alt: "カフェラテ", span: "col-span-1" },
  { id: 4, src: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&h=600&fit=crop&auto=format", alt: "チーズケーキ", span: "col-span-1" },
  { id: 5, src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=600&fit=crop&auto=format", alt: "店内カウンター", span: "col-span-1" },
  { id: 6, src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1200&h=600&fit=crop&auto=format", alt: "窓際の席", span: "col-span-2" },
  { id: 7, src: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&h=600&fit=crop&auto=format", alt: "スコーン", span: "col-span-1" },
  { id: 8, src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&h=600&fit=crop&auto=format", alt: "カフェの雰囲気", span: "col-span-1" },
];

export default function Gallery() {
  return (
    <div className="max-w-[1160px] mx-auto px-8 py-16 md:py-24">
      <div className="mb-12">
        <p className="text-[12px] tracking-[0.25em] text-[#6b6b6b] uppercase font-medium mb-2">Gallery</p>
        <h1 className="font-bold" style={{ fontSize: "56px", lineHeight: 1.05 }}>
          ギャラリー
        </h1>
      </div>

      {/* Masonry-style grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[240px]">
        {PHOTOS.map((photo) => (
          <div
            key={photo.id}
            className={`${photo.span} rounded-[12px] overflow-hidden border border-[#F3FFD8] bg-[#f5f5f5] group`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      <p className="mt-10 text-[13px] text-[#6b6b6b] text-center">
        Instagram{" "}
        <a href="#" className="font-bold text-[#2c2c2c] hover:underline">
          @mameya_coffee
        </a>{" "}
        でも日々の様子をご紹介しています。
      </p>
    </div>
  );
}
