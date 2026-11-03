import { NextResponse } from 'next/server';

const topicLabels: Record<string, string> = {
  bilgi: 'Genel Bilgi',
  uyelik: 'Üyelik',
  ticaret: 'Ticari İşbirliği',
  diger: 'Diğer',
};

interface ContactMessage {
  ad: string;
  eposta: string;
  konu: string;
  mesaj: string;
}

function isContactMessage(value: unknown): value is ContactMessage {
  if (typeof value !== 'object' || value === null) return false;

  const message = value as Record<string, unknown>;

  return (
    typeof message.ad === 'string' &&
    message.ad.trim().length > 0 &&
    message.ad.length <= 100 &&
    typeof message.eposta === 'string' &&
    message.eposta.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(message.eposta) &&
    typeof message.konu === 'string' &&
    Object.prototype.hasOwnProperty.call(topicLabels, message.konu) &&
    typeof message.mesaj === 'string' &&
    message.mesaj.trim().length > 0 &&
    message.mesaj.length <= 5000
  );
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_EMAIL;

  if (!apiKey || !from || !to) {
    return NextResponse.json(
      { error: 'E-posta gönderimi henüz yapılandırılmadı. Lütfen daha sonra tekrar deneyin.' },
      { status: 503 },
    );
  }

  let value: unknown;

  try {
    value = await request.json();
  } catch {
    return NextResponse.json({ error: 'İstek geçerli bir JSON içermiyor.' }, { status: 400 });
  }

  if (!isContactMessage(value)) {
    return NextResponse.json(
      { error: 'Lütfen ad, geçerli e-posta adresi, konu ve mesaj alanlarını kontrol edin.' },
      { status: 400 },
    );
  }

  const message = value;
  let resendResponse: Response;

  try {
    resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: message.eposta.trim(),
        subject: `Yaskoop iletişim formu: ${topicLabels[message.konu]}`,
        text: `Ad Soyad: ${message.ad.trim()}\nE-posta: ${message.eposta.trim()}\nKonu: ${topicLabels[message.konu]}\n\n${message.mesaj.trim()}`,
      }),
    });
  } catch (error) {
    console.error('[contact] Resend bağlantı hatası:', error);
    return NextResponse.json(
      { error: 'E-posta servisine şu anda ulaşılamıyor. Lütfen daha sonra tekrar deneyin.' },
      { status: 502 },
    );
  }

  if (!resendResponse.ok) {
    console.error(`[contact] Resend e-posta isteği başarısız oldu: HTTP ${resendResponse.status}`);
    return NextResponse.json(
      { error: 'E-posta servisi mesajı gönderemedi. Lütfen daha sonra tekrar deneyin.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
