import { useState } from "react";
import { Outlet, NavLink, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "お知らせ", to: "/news" },
  { label: "メニュー", to: "/menu" },
  { label: "店舗情報", to: "/store" },
  { label: "ギャラリー", to: "/gallery" },
  { label: "お問い合わせ", to: "/contact" },
];

export default function Root() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white font-[Inter,sans-serif] text-[#1a1a1a] flex flex-col">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#D9D9D9]">
        <div className="max-w-[1160px] mx-auto px-8 h-16 flex items-center justify-between">
          <NavLink to="/" className="flex flex-col leading-none">
            <span className="text-[11px] font-medium tracking-[0.2em] text-[#6b6b6b] uppercase">Cafe</span>
            <span className="text-[20px] font-bold tracking-tight">まめや珈琲</span>
          </NavLink>

          <nav className="hidden md:flex items-center gap-6">
            {NAV.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `text-[14px] font-medium transition-colors pb-0.5 ${
                    isActive
                      ? "text-[#2c2c2c] border-b-2 border-[#2c2c2c]"
                      : "text-[#6b6b6b] hover:text-[#2c2c2c]"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="ml-4 px-5 py-2 bg-[#2c2c2c] text-white text-[13px] font-bold rounded-[8px] hover:bg-[#444] transition-colors"
            >
              ご予約
            </NavLink>
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="メニュー">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-[#D9D9D9] bg-white px-8 pt-4 pb-6">
            <nav className="flex flex-col gap-3">
              {NAV.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-[15px] py-1 font-medium ${isActive ? "text-[#2c2c2c]" : "text-[#6b6b6b]"}`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 px-5 py-3 bg-[#2c2c2c] text-white text-[14px] font-bold rounded-[8px] text-center"
              >
                ご予約
              </NavLink>
            </nav>
          </div>
        )}
      </header>

      {/* PAGE CONTENT */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="bg-[#2c2c2c] text-white mt-auto">
        <div className="max-w-[1160px] mx-auto px-8 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-[11px] tracking-[0.2em] text-[#D9D9D9] uppercase mb-1">Cafe</p>
            <p className="text-[20px] font-bold mb-3">まめや珈琲</p>
            <p className="text-[13px] text-[#D9D9D9] leading-relaxed">
              〒000-0000<br />
              東京都渋谷区〇〇町 1-2-3<br />
              TEL: 03-0000-0000
            </p>
          </div>
          <div>
            <p className="text-[12px] font-bold tracking-widest text-[#D9D9D9] uppercase mb-3">Hours</p>
            <p className="text-[13px] text-[#D9D9D9] leading-loose">
              月〜金　8:00 – 19:00<br />
              土・日　9:00 – 20:00<br />
              定休日　火曜日
            </p>
          </div>
          <div>
            <p className="text-[12px] font-bold tracking-widest text-[#D9D9D9] uppercase mb-3">Navigation</p>
            <nav className="flex flex-col gap-2">
              {NAV.map(({ label, to }) => (
                <NavLink key={to} to={to} className="text-[13px] text-[#D9D9D9] hover:text-white transition-colors">
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center">
          <p className="text-[12px] text-[#D9D9D9]">© 2026 まめや珈琲. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
