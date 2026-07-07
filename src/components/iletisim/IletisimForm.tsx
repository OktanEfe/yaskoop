'use client';

import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import Button from '@/components/ui/Button';

interface FormState {
  ad: string;
  eposta: string;
  konu: string;
  mesaj: string;
}

const initial: FormState = { ad: '', eposta: '', konu: '', mesaj: '' };

const inputClass =
  'w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 shadow-sm transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 focus:outline-none';

export default function IletisimForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Form backend entegrasyonu yapılacak (Next.js API route veya harici e-posta servisi)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-[1.75rem] border border-neutral-200 bg-emerald-50 p-8 text-center">
        <p className="text-emerald-900 font-semibold text-xl mb-2">Mesajınız alındı!</p>
        <p className="text-neutral-600 text-sm">En kısa sürede size geri dönülecektir.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ad" className="block text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500 mb-2">
            Ad Soyad
          </label>
          <input
            id="ad"
            name="ad"
            type="text"
            required
            value={form.ad}
            onChange={handleChange}
            placeholder="Adınız Soyadınız"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="eposta" className="block text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500 mb-2">
            E-posta
          </label>
          <input
            id="eposta"
            name="eposta"
            type="email"
            required
            value={form.eposta}
            onChange={handleChange}
            placeholder="eposta@ornek.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="konu" className="block text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500 mb-2">
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
        <label htmlFor="mesaj" className="block text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500 mb-2">
          Mesaj
        </label>
        <textarea
          id="mesaj"
          name="mesaj"
          required
          rows={5}
          value={form.mesaj}
          onChange={handleChange}
          placeholder="Mesajınızı buraya yazın..."
          className={`${inputClass} min-h-[160px] resize-none`}
        />
      </div>

      <Button type="submit" variant="primary" size="md" className="w-full rounded-full py-4">
        Gönder
      </Button>
    </form>
  );
}
