'use client';

import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

interface FormState {
  ad: string;
  eposta: string;
  konu: string;
  mesaj: string;
}

const initial: FormState = { ad: '', eposta: '', konu: '', mesaj: '' };

const inputClass =
  'w-full rounded-2xl border border-[#dfe5dc] bg-[#f7f9f6] px-4 py-3.5 text-sm text-[#193323] placeholder:text-[#899487] transition focus:border-[#73916b] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#dce8d4]/70';

export default function IletisimForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [isSending, setIsSending] = useState(false);
  const [notice, setNotice] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSending(true);
    setNotice(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const result: unknown = await response.json().catch(() => null);

      if (!response.ok) {
        const errorMessage =
          typeof result === 'object' &&
          result !== null &&
          'error' in result &&
          typeof result.error === 'string'
            ? result.error
            : 'Mesajınız gönderilemedi. Lütfen tekrar deneyin.';
        throw new Error(errorMessage);
      }

      setForm(initial);
      setNotice({ type: 'success', text: 'Mesajınız iletildi. En kısa sürede size dönüş yapacağız.' });
    } catch (error) {
      setNotice({
        type: 'error',
        text:
          error instanceof Error
            ? error.message
            : 'Mesajınız gönderilemedi. Lütfen tekrar deneyin.',
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-busy={isSending}>
      {notice && (
        <p
          role={notice.type === 'error' ? 'alert' : 'status'}
          className={`rounded-2xl border px-4 py-3 text-sm leading-6 ${
            notice.type === 'error'
              ? 'border-red-200 bg-red-50 text-red-800'
              : 'border-[#cfe0c7] bg-[#f1f7ed] text-[#315d37]'
          }`}
        >
          {notice.text}
        </p>
      )}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ad" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#536451]">
            Ad Soyad
          </label>
          <input
            id="ad"
            name="ad"
            type="text"
            required
            autoComplete="name"
            maxLength={100}
            value={form.ad}
            onChange={handleChange}
            placeholder="Adınız Soyadınız"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="eposta" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#536451]">
            E-posta
          </label>
          <input
            id="eposta"
            name="eposta"
            type="email"
            required
            autoComplete="email"
            maxLength={254}
            value={form.eposta}
            onChange={handleChange}
            placeholder="eposta@ornek.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="konu" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#536451]">
          Konu
        </label>
        <select
          id="konu"
          name="konu"
          required
          value={form.konu}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Konu seçin...</option>
          <option value="bilgi">Genel Bilgi</option>
          <option value="uyelik">Üyelik</option>
          <option value="ticaret">Ticari İşbirliği</option>
          <option value="diger">Diğer</option>
        </select>
      </div>

      <div>
        <label htmlFor="mesaj" className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#536451]">
          Mesaj
        </label>
        <textarea
          id="mesaj"
          name="mesaj"
          required
          rows={5}
          maxLength={5000}
          value={form.mesaj}
          onChange={handleChange}
          placeholder="Mesajınızı buraya yazın..."
          className={`${inputClass} min-h-[160px] resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={isSending}
        className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#1d472c] px-7 text-sm font-bold text-white shadow-[0_12px_28px_rgba(29,71,44,0.16)] transition hover:-translate-y-0.5 hover:bg-[#285c38] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#285c38] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSending ? 'Gönderiliyor…' : 'Mesajı gönder'}
        {!isSending && <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>}
      </button>
    </form>
  );
}
