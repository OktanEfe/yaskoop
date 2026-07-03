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
  'w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow placeholder:text-gray-400';

export default function IletisimForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Form backend entegrasyonu yapılacak (Next.js API route veya harici e-posta servisi)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-background border border-border rounded-xl p-8 text-center">
        <p className="text-foreground font-semibold text-lg mb-1">Mesajınız alındı!</p>
        <p className="text-muted text-sm">En kısa sürede size geri döneceğiz.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ad" className="block text-sm font-medium text-gray-700 mb-1.5">
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
          <label htmlFor="eposta" className="block text-sm font-medium text-gray-700 mb-1.5">
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
        <label htmlFor="konu" className="block text-sm font-medium text-gray-700 mb-1.5">
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
        <label htmlFor="mesaj" className="block text-sm font-medium text-gray-700 mb-1.5">
          Mesaj
        </label>
        <textarea
          id="mesaj"
          name="mesaj"
          required
          rows={4}
          value={form.mesaj}
          onChange={handleChange}
          placeholder="Mesajınızı buraya yazın..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <Button type="submit" variant="primary" size="md" className="w-full mt-2">
        Gönder
      </Button>
    </form>
  );
}
