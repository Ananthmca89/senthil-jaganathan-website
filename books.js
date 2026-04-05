import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { authorInfo, seoData } from '../data/content';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent('வணக்கம் சென்தில் ஜகன்னாதன் அவர்களே, நான் உங்களிடம் பேச விரும்புகிறேன்.');

  return (
    <>
      <SEOHead {...seoData.contact} />

      {/* Hero */}
      <section className="py-16 px-4 text-center" style={{ background: 'linear-gradient(135deg, #1a110a, #2a1d14, #4f3826)' }}>
        <div className="text-xs font-semibold tracking-widest mb-4 uppercase" style={{ color: '#f97008', fontFamily: 'Lora, serif' }}>
          Contact · தொடர்பு
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Noto Serif Tamil, serif' }}>
          தொடர்பு கொள்ளுங்கள்
        </h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: '#b89478', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
          புத்தகம் ஆர்டர், சந்தேகங்கள், கருத்துகள் — எதுவாக இருந்தாலும் தொடர்பு கொள்ளலாம்.
        </p>
      </section>

      <section className="py-16 px-4" style={{ backgroundColor: '#fdf6ee' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-5">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#2a1d14', fontFamily: 'Noto Serif Tamil, serif' }}>
                தொடர்பு விவரங்கள்
              </h2>

              {/* WhatsApp - primary */}
              <a href={`https://wa.me/${authorInfo.whatsapp}?text=${whatsappMessage}`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl transition-all hover:shadow-lg group"
                style={{ background: 'linear-gradient(135deg, #dcfce7, #bbf7d0)', border: '2px solid #22c55e' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl flex-shrink-0"
                  style={{ backgroundColor: '#22c55e' }}>
                  💬
                </div>
                <div>
                  <div className="font-bold" style={{ color: '#166534', fontFamily: 'Noto Sans Tamil, sans-serif' }}>WhatsApp</div>
                  <div className="text-sm" style={{ color: '#16a34a' }}>{authorInfo.phone}</div>
                  <div className="text-xs mt-1" style={{ color: '#4ade80' }}>Click to chat →</div>
                </div>
              </a>

              {/* Phone */}
              <a href={`tel:${authorInfo.phone}`}
                className="flex items-center gap-4 p-5 rounded-2xl transition-all hover:shadow-md"
                style={{ backgroundColor: '#fffbf5', border: '1px solid #e8ddd2' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #f97008, #c23e07)' }}>
                  📞
                </div>
                <div>
                  <div className="font-bold" style={{ color: '#2a1d14', fontFamily: 'Noto Sans Tamil, sans-serif' }}>தொலைபேசி</div>
                  <div className="text-sm" style={{ color: '#7d5a3c' }}>{authorInfo.phone}</div>
                </div>
              </a>

              {/* Email */}
              <a href={`mailto:${authorInfo.email}`}
                className="flex items-center gap-4 p-5 rounded-2xl transition-all hover:shadow-md"
                style={{ backgroundColor: '#fffbf5', border: '1px solid #e8ddd2' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #d97706, #92400e)' }}>
                  ✉️
                </div>
                <div>
                  <div className="font-bold" style={{ color: '#2a1d14', fontFamily: 'Noto Sans Tamil, sans-serif' }}>மின்னஞ்சல்</div>
                  <div className="text-sm" style={{ color: '#7d5a3c' }}>{authorInfo.email}</div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-5 rounded-2xl"
                style={{ backgroundColor: '#fffbf5', border: '1px solid #e8ddd2' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' }}>
                  📍
                </div>
                <div>
                  <div className="font-bold" style={{ color: '#2a1d14', fontFamily: 'Noto Sans Tamil, sans-serif' }}>இடம்</div>
                  <div className="text-sm" style={{ color: '#7d5a3c' }}>{authorInfo.location}</div>
                </div>
              </div>

              {/* Social */}
              <div className="p-5 rounded-2xl" style={{ backgroundColor: '#fffbf5', border: '1px solid #e8ddd2' }}>
                <div className="font-semibold mb-3" style={{ color: '#2a1d14', fontFamily: 'Noto Serif Tamil, serif' }}>
                  சமூக ஊடகங்கள்
                </div>
                <div className="flex gap-3">
                  {[
                    { href: authorInfo.social.facebook, label: 'Facebook', color: '#1877f2' },
                    { href: authorInfo.social.instagram, label: 'Instagram', color: '#e1306c' },
                    { href: authorInfo.social.twitter, label: 'Twitter', color: '#000' },
                    { href: authorInfo.social.youtube, label: 'YouTube', color: '#ff0000' },
                  ].map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      title={s.label}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold transition-all hover:scale-110"
                      style={{ backgroundColor: s.color }}>
                      {s.label.charAt(0)}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl p-6 sm:p-8" style={{ backgroundColor: '#fffbf5', border: '1px solid #e8ddd2' }}>
                <h2 className="text-2xl font-bold mb-6" style={{ color: '#2a1d14', fontFamily: 'Noto Serif Tamil, serif' }}>
                  செய்தி அனுப்புங்கள்
                </h2>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: '#2a1d14', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                          பெயர் *
                        </label>
                        <input type="text" required placeholder="உங்கள் பெயர்"
                          value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border text-sm"
                          style={{ borderColor: '#e8ddd2', backgroundColor: '#fdf6ee', color: '#2a1d14', fontFamily: 'Noto Sans Tamil, sans-serif' }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: '#2a1d14', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                          மொபைல்
                        </label>
                        <input type="tel" placeholder="+91 XXXXX XXXXX"
                          value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                          className="w-full px-4 py-3 rounded-xl border text-sm"
                          style={{ borderColor: '#e8ddd2', backgroundColor: '#fdf6ee', color: '#2a1d14' }}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: '#2a1d14', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                        மின்னஞ்சல்
                      </label>
                      <input type="email" placeholder="your@email.com"
                        value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border text-sm"
                        style={{ borderColor: '#e8ddd2', backgroundColor: '#fdf6ee', color: '#2a1d14' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: '#2a1d14', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                        விஷயம் *
                      </label>
                      <select required value={form.subject} onChange={e => setForm({...form, subject: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border text-sm"
                        style={{ borderColor: '#e8ddd2', backgroundColor: '#fdf6ee', color: form.subject ? '#2a1d14' : '#9a7055', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                        <option value="">தேர்வு செய்யுங்கள்</option>
                        <option value="book-order">புத்தகம் ஆர்டர்</option>
                        <option value="event">நிகழ்வு அழைப்பு</option>
                        <option value="interview">நேர்காணல்</option>
                        <option value="feedback">கருத்து / பாராட்டு</option>
                        <option value="other">மற்றவை</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: '#2a1d14', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                        செய்தி *
                      </label>
                      <textarea required rows={5} placeholder="உங்கள் செய்தியை இங்கே எழுதுங்கள்..."
                        value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border text-sm resize-none"
                        style={{ borderColor: '#e8ddd2', backgroundColor: '#fdf6ee', color: '#2a1d14', fontFamily: 'Noto Sans Tamil, sans-serif' }}
                      />
                    </div>
                    <button type="submit"
                      className="w-full py-4 rounded-xl text-white font-bold text-base transition-all hover:opacity-90"
                      style={{ background: 'linear-gradient(135deg, #f97008, #c23e07)', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                      செய்தி அனுப்பு →
                    </button>
                  </form>
                ) : (
                  <div className="py-12 text-center">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#2a1d14', fontFamily: 'Noto Serif Tamil, serif' }}>
                      நன்றி!
                    </h3>
                    <p className="mb-6 leading-7" style={{ color: '#4f3826', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                      உங்கள் செய்தி பெற்றுக்கொண்டோம். விரைவில் பதில் அளிக்கப்படும்.
                    </p>
                    <a href={`https://wa.me/${authorInfo.whatsapp}?text=${whatsappMessage}`}
                      target="_blank" rel="noopener noreferrer"
                      className="inline-block px-8 py-3 rounded-full text-white font-bold"
                      style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                      💬 WhatsApp-ல் நேரடியாக பேசலாம்
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
