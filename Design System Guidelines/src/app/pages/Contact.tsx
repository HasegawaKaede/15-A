import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", date: "", guests: "2", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="max-w-[600px] mx-auto px-8 py-24 text-center">
        <div className="bg-[#D7EEFF] rounded-[16px] p-12">
          <p className="text-[40px] font-bold mb-4">送信完了</p>
          <p className="text-[16px] text-[#1a1a1a] leading-relaxed">
            お問い合わせを受け付けました。<br />
            2営業日以内にご連絡いたします。
          </p>
          <button
            onClick={() => setSent(false)}
            className="mt-8 px-8 py-3 bg-[#2c2c2c] text-white font-bold rounded-[8px] hover:bg-[#444] transition-colors"
          >
            戻る
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[760px] mx-auto px-8 py-16 md:py-24">
      <div className="mb-12">
        <p className="text-[12px] tracking-[0.25em] text-[#6b6b6b] uppercase font-medium mb-2">Contact</p>
        <h1 className="font-bold" style={{ fontSize: "56px", lineHeight: 1.05 }}>
          お問い合わせ<br />フォーム
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* proximity: label + input ≤16px gap each field */}
        {[
          { id: "name", label: "お名前", type: "text", placeholder: "山田 花子", required: true },
          { id: "email", label: "メールアドレス", type: "email", placeholder: "hello@example.com", required: true },
          { id: "date", label: "ご希望日", type: "date", required: false },
        ].map(({ id, label, type, placeholder, required }) => (
          <div key={id} className="flex flex-col gap-2">
            <label htmlFor={id} className="text-[14px] font-bold">
              {label}{required && <span className="text-[#2c2c2c] ml-1">*</span>}
            </label>
            <input
              id={id}
              type={type}
              required={required}
              placeholder={placeholder}
              value={(form as any)[id]}
              onChange={(e) => setForm({ ...form, [id]: e.target.value })}
              className="w-full px-4 py-3 bg-[#f5f5f5] border border-[#D9D9D9] rounded-[8px] text-[15px] outline-none focus:border-[#2c2c2c] transition-colors"
            />
          </div>
        ))}

        <div className="flex flex-col gap-2">
          <label htmlFor="guests" className="text-[14px] font-bold">ご人数</label>
          <select
            id="guests"
            value={form.guests}
            onChange={(e) => setForm({ ...form, guests: e.target.value })}
            className="w-full px-4 py-3 bg-[#f5f5f5] border border-[#D9D9D9] rounded-[8px] text-[15px] outline-none focus:border-[#2c2c2c] transition-colors appearance-none"
          >
            {["1", "2", "3", "4", "5", "6人以上"].map((n) => (
              <option key={n} value={n}>{n}名</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-[14px] font-bold">ご要望・メッセージ</label>
          <textarea
            id="message"
            rows={5}
            placeholder="アレルギーやご要望があればご記入ください"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 bg-[#f5f5f5] border border-[#D9D9D9] rounded-[8px] text-[15px] outline-none focus:border-[#2c2c2c] transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          className="mt-2 w-full py-4 bg-[#2c2c2c] text-white text-[16px] font-bold rounded-[8px] hover:bg-[#444] transition-colors"
        >
          送信する
        </button>

        <p className="text-[13px] text-[#6b6b6b] text-center">
          お電話でのご予約は <strong className="text-[#1a1a1a]">03-0000-0000</strong> まで（営業時間内）
        </p>
      </form>
    </div>
  );
}
