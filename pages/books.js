import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { books, authorInfo, seoData } from '../data/content';

const OrnamentDivider = ({ text }) => (
  <div className="flex items-center gap-4 my-8">
    <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, #d97706)' }} />
    <span className="text-sm px-3" style={{ color: '#d97706', fontFamily: 'Noto Serif Tamil, serif' }}>{text}</span>
    <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, #d97706, transparent)' }} />
  </div>
);

const BookCoverLarge = ({ book }) => {
  if (book.coverImage) {
    return (
      <div className="w-44 h-64 rounded-2xl overflow-hidden shadow-2xl flex-shrink-0 mx-auto"
        style={{ border: '3px solid rgba(217,119,6,0.4)' }}>
        <img src={book.coverImage} alt={book.title} className="w-full h-full object-cover" />
      </div>
    );
  }
  return (
    <div className="w-44 h-64 rounded-2xl relative overflow-hidden shadow-2xl flex-shrink-0 mx-auto"
      style={{ background: 'linear-gradient(160deg, #3d2b1e, #2a1d14)' }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <div className="text-4xl mb-2" style={{ color: book.coverAccent, fontFamily: 'Noto Serif Tamil, serif', fontWeight: 900 }}>
          {book.title.charAt(0)}
        </div>
        <div className="text-white text-sm font-bold text-center leading-tight mb-1"
          style={{ fontFamily: 'Noto Serif Tamil, serif' }}>
          {book.title}
        </div>
        <div className="text-xs text-center mb-3" style={{ color: '#b89478', fontFamily: 'Noto Serif Tamil, serif' }}>
          {book.subtitle}
        </div>
        <div className="text-xs" style={{ color: '#9a7055', fontFamily: 'Lora, serif' }}>Senthil Jaganathan</div>
      </div>
      <div className="absolute bottom-3 right-3 text-xs font-bold px-2 py-1 rounded-full"
        style={{ backgroundColor: book.coverAccent + '33', color: '#fcd34d', border: `1px solid ${book.coverAccent}44` }}>
        {book.genre}
      </div>
      <div className="absolute left-0 top-0 bottom-0 w-3 rounded-l-2xl" style={{ background: 'rgba(0,0,0,0.25)' }} />
    </div>
  );
};

function UPIModal({ book, onClose }) {
  const upiUrl = `upi://pay?pa=${authorInfo.upiId}&pn=Senthil+Jaganathan&am=${book.price + book.courier}&cu=INR&tn=Book+${encodeURIComponent(book.titleEn)}`;
  const [formData, setFormData] = useState({
    name: '', phone: '', address: '', pincode: '', bookName: book.title, transactionId: '', screenshot: null
  });
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1); // 1: payment info, 2: order form

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
      <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl relative"
        style={{ backgroundColor: '#fffbf5' }}>
        {/* Header */}
        <div className="p-5 border-b sticky top-0 z-10 flex items-center justify-between"
          style={{ background: 'linear-gradient(135deg, #2a1d14, #4f3826)', borderColor: 'rgba(249,112,8,0.2)' }}>
          <div>
            <div className="text-white font-bold" style={{ fontFamily: 'Noto Serif Tamil, serif' }}>
              {book.title} — வாங்க
            </div>
            <div className="text-sm" style={{ color: '#fcd34d' }}>₹{book.price} + ₹{book.courier} = ₹{book.price + book.courier}</div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10">
            ×
          </button>
        </div>

        {!submitted ? (
          <div className="p-5">
            {/* Step tabs */}
            <div className="flex rounded-xl overflow-hidden mb-6" style={{ border: '1px solid #e8ddd2' }}>
              {[
                { num: 1, label: 'பணம் செலுத்த' },
                { num: 2, label: 'விவரம் அனுப்ப' }
              ].map(s => (
                <button key={s.num} onClick={() => setStep(s.num)}
                  className="flex-1 py-3 text-sm font-semibold transition-all"
                  style={{
                    fontFamily: 'Noto Sans Tamil, sans-serif',
                    backgroundColor: step === s.num ? '#f97008' : 'transparent',
                    color: step === s.num ? '#fff' : '#7d5a3c'
                  }}>
                  {s.num}. {s.label}
                </button>
              ))}
            </div>

            {step === 1 && (
              <div>
                {/* Warning */}
                <div className="p-4 rounded-xl mb-5 text-sm leading-6"
                  style={{ backgroundColor: 'rgba(200,0,48,0.08)', border: '1px solid rgba(200,0,48,0.2)', color: '#c80030', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                  ⚠️ <strong>முக்கியம்:</strong> பணம் செலுத்துவதற்கு முன் receiver பெயர் <strong>Senthil Jaganathan</strong> என்று இருக்கிறதா என்று சரிபாருங்கள்.
                </div>

                {/* Price breakdown */}
                <div className="rounded-xl p-4 mb-5" style={{ backgroundColor: '#f5ead8', border: '1px solid #e8ddd2' }}>
                  <div className="text-sm font-semibold mb-3" style={{ color: '#2a1d14', fontFamily: 'Noto Serif Tamil, serif' }}>
                    விலை விவரம்:
                  </div>
                  <div className="space-y-2 text-sm" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                    <div className="flex justify-between">
                      <span style={{ color: '#4f3826' }}>புத்தகம்</span>
                      <span style={{ color: '#2a1d14', fontWeight: 600 }}>₹{book.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ color: '#4f3826' }}>Courier கட்டணம்</span>
                      <span style={{ color: '#2a1d14', fontWeight: 600 }}>₹{book.courier}</span>
                    </div>
                    <div className="flex justify-between pt-2" style={{ borderTop: '1px solid #d0bba5' }}>
                      <span className="font-bold" style={{ color: '#2a1d14' }}>மொத்தம்</span>
                      <span className="font-black text-lg" style={{ color: '#f97008' }}>₹{book.price + book.courier}</span>
                    </div>
                  </div>
                </div>

                {/* UPI ID */}
                <div className="rounded-xl p-4 mb-5" style={{ backgroundColor: '#fff', border: '2px solid rgba(249,112,8,0.3)' }}>
                  <div className="text-sm font-semibold mb-2" style={{ color: '#2a1d14', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                    UPI ID:
                  </div>
                  <div className="flex items-center gap-3">
                    <code className="text-lg font-bold" style={{ color: '#f97008' }}>{authorInfo.upiId}</code>
                    <button onClick={() => navigator.clipboard?.writeText(authorInfo.upiId)}
                      className="text-xs px-3 py-1 rounded-full transition-all"
                      style={{ backgroundColor: 'rgba(249,112,8,0.1)', color: '#c23e07', border: '1px solid rgba(249,112,8,0.3)' }}>
                      Copy
                    </button>
                  </div>
                </div>

                {/* QR Code visual placeholder */}
                <div className="flex justify-center mb-5">
                  <div className="p-4 rounded-xl text-center" style={{ border: '2px solid #e8ddd2', backgroundColor: '#fff' }}>
                    <div className="w-40 h-40 mx-auto flex items-center justify-center rounded-lg mb-2"
                      style={{ backgroundColor: '#f5ead8', border: '2px dashed #d0bba5' }}>
                      <div className="text-center">
                        <div className="text-3xl mb-1">📱</div>
                        <div className="text-xs" style={{ color: '#7d5a3c', fontFamily: 'Noto Sans Tamil, sans-serif' }}>UPI QR Code</div>
                        <div className="text-xs mt-1" style={{ color: '#b89478' }}>{authorInfo.upiId}</div>
                      </div>
                    </div>
                    <div className="text-xs" style={{ color: '#7d5a3c', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                      ₹{book.price + book.courier} செலுத்தவும்
                    </div>
                  </div>
                </div>

                {/* UPI Pay button */}
                <a href={upiUrl}
                  className="upi-btn block w-full text-center py-4 rounded-xl text-white font-bold text-base mb-3 transition-all hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                  📱 UPI App-ல் திறந்து செலுத்த
                </a>

                <button onClick={() => setStep(2)}
                  className="w-full py-3 rounded-xl font-semibold text-sm transition-all"
                  style={{ backgroundColor: 'rgba(249,112,8,0.1)', color: '#f97008', border: '1px solid rgba(249,112,8,0.3)', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                  செலுத்திவிட்டேன் → விவரம் அனுப்ப
                </button>
              </div>
            )}

            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="p-3 rounded-xl text-sm mb-4"
                  style={{ backgroundColor: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', color: '#16a34a', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                  ✅ பணம் செலுத்திய பிறகு கீழே விவரங்களை நிரப்புங்கள்.
                </div>
                {[
                  { name: 'name', label: 'உங்கள் பெயர் *', placeholder: 'பெயர் உள்ளிடவும்', type: 'text', required: true },
                  { name: 'phone', label: 'மொபைல் எண் *', placeholder: '+91 XXXXX XXXXX', type: 'tel', required: true },
                  { name: 'pincode', label: 'பின்கோட் *', placeholder: '600001', type: 'text', required: true },
                  { name: 'transactionId', label: 'UPI Transaction ID *', placeholder: 'Transaction ID', type: 'text', required: true },
                ].map(field => (
                  <div key={field.name}>
                    <label className="block text-sm font-semibold mb-1" style={{ color: '#2a1d14', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      required={field.required}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={e => setFormData({...formData, [field.name]: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border text-sm"
                      style={{ borderColor: '#e8ddd2', backgroundColor: '#fffbf5', color: '#2a1d14', fontFamily: 'Noto Sans Tamil, sans-serif' }}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-semibold mb-1" style={{ color: '#2a1d14', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                    முழு முகவரி *
                  </label>
                  <textarea
                    required rows={3}
                    placeholder="வீட்டு எண், தெரு, நகரம், மாவட்டம்"
                    value={formData.address}
                    onChange={e => setFormData({...formData, address: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border text-sm resize-none"
                    style={{ borderColor: '#e8ddd2', backgroundColor: '#fffbf5', color: '#2a1d14', fontFamily: 'Noto Sans Tamil, sans-serif' }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1" style={{ color: '#2a1d14', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                    Payment Screenshot *
                  </label>
                  <input
                    type="file" accept="image/*" required
                    onChange={e => setFormData({...formData, screenshot: e.target.files[0]})}
                    className="w-full px-4 py-3 rounded-xl border text-sm"
                    style={{ borderColor: '#e8ddd2', backgroundColor: '#fffbf5', color: '#4f3826' }}
                  />
                </div>
                <button type="submit"
                  className="w-full py-4 rounded-xl text-white font-bold text-base transition-all hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #f97008, #c23e07)', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                  ஆர்டர் confirm செய்ய →
                </button>
              </form>
            )}
          </div>
        ) : (
          <div className="p-8 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: '#2a1d14', fontFamily: 'Noto Serif Tamil, serif' }}>
              நன்றி!
            </h3>
            <p className="text-base leading-7 mb-6" style={{ color: '#4f3826', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
              உங்கள் ஆர்டர் பெற்றுக்கொண்டோம். 24-48 மணி நேரத்தில் உங்கள் புத்தகம் dispatch ஆகும். WhatsApp-ல் தொடர்பு கொள்ளப்படுவீர்கள்.
            </p>
            <a href={`https://wa.me/${authorInfo.whatsapp}?text=நான் ${book.title} புத்தகம் ஆர்டர் செய்தேன்`}
              target="_blank" rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full text-white font-bold mb-3"
              style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
              💬 WhatsApp-ல் தொடர்பு கொள்ள
            </a>
            <br />
            <button onClick={onClose} className="text-sm mt-2" style={{ color: '#7d5a3c', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
              மூட
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function BooksPage() {
  const [selectedBook, setSelectedBook] = useState(null);

  const bookStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Books by Senthil Jaganathan",
    "itemListElement": books.map((book, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Book",
        "name": book.titleEn,
        "author": { "@type": "Person", "name": "Senthil Jaganathan" },
        "inLanguage": "ta",
        "offers": { "@type": "Offer", "price": book.price, "priceCurrency": "INR", "availability": "https://schema.org/InStock" }
      }
    }))
  };

  return (
    <>
      <SEOHead {...seoData.books} structuredData={bookStructuredData} />

      {/* Hero */}
      <section className="py-16 px-4 text-center" style={{ background: 'linear-gradient(135deg, #1a110a, #2a1d14, #4f3826)' }}>
        <div className="text-xs font-semibold tracking-widest mb-4 uppercase" style={{ color: '#f97008', fontFamily: 'Lora, serif' }}>
          Books · புத்தகங்கள்
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Noto Serif Tamil, serif' }}>
          என் புத்தகங்கள்
        </h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: '#b89478', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
          ஒவ்வொரு புத்தகமும் ஒரு உலகம். நுழைந்து வாருங்கள்.
        </p>
      </section>

      {/* Books */}
      <section className="py-16 px-4" style={{ backgroundColor: '#fdf6ee' }}>
        <div className="max-w-6xl mx-auto">
          {books.map((book, index) => (
            <div key={book.id} id={book.slug} className="mb-16 scroll-mt-20">
              <div className={`book-card rounded-2xl overflow-hidden ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                style={{ boxShadow: '0 8px 40px rgba(42,29,20,0.12)', backgroundColor: '#fffbf5' }}>
                <div className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Book visual side */}
                  <div className="lg:w-2/5 p-8 sm:p-12 flex flex-col items-center justify-center gap-6"
                    style={{ background: 'linear-gradient(135deg, #2a1d14, #3d2b1e)' }}>
                    <BookCoverLarge book={book} />
                    <div className="text-center">
                      <div className="text-3xl font-black mb-1" style={{ color: '#f97008' }}>{book.price}</div>
                      <div className="text-sm" style={{ color: '#b89478', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                        + ₹40 Courier = மொத்தம் <strong style={{ color: '#fcd34d' }}>₹{book.price + book.courier}</strong>
                      </div>
                    </div>
                    {/* Action buttons */}
                    <div className="w-full max-w-xs space-y-3">
                      <button
                        onClick={() => setSelectedBook(book)}
                        className="w-full py-3.5 rounded-xl text-white font-bold transition-all hover:opacity-90"
                        style={{ background: 'linear-gradient(135deg, #f97008, #c23e07)', fontFamily: 'Noto Sans Tamil, sans-serif', fontSize: '0.95rem' }}>
                        📦 Hard Copy வாங்க — ₹{book.price + book.courier}
                      </button>
                      <button
                        className="w-full py-3 rounded-xl font-semibold text-sm border-2 transition-all hover:bg-white/5"
                        style={{ color: '#fbbf24', borderColor: 'rgba(251,191,36,0.3)', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                        📄 PDF Version — விரைவில்
                      </button>
                    </div>
                  </div>

                  {/* Book info side */}
                  <div className="lg:w-3/5 p-8 sm:p-12">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ backgroundColor: 'rgba(249,112,8,0.1)', color: '#c23e07', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                        {book.genre}
                      </span>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ backgroundColor: 'rgba(217,119,6,0.1)', color: '#92400e', fontFamily: 'Lora, serif' }}>
                        {book.year} · {book.pages} பக்கங்கள்
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-black mb-2"
                      style={{ color: '#2a1d14', fontFamily: 'Noto Serif Tamil, serif' }}>
                      {book.title}
                    </h2>
                    <div className="text-lg mb-6" style={{ color: '#7d5a3c', fontFamily: 'Noto Serif Tamil, serif' }}>
                      {book.subtitle}
                    </div>
                    <p className="text-base leading-8 mb-8" style={{ color: '#4f3826', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                      {book.description}
                    </p>

                    {/* Price breakdown box */}
                    <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: '#f5ead8', border: '1px solid #e8ddd2' }}>
                      <div className="text-sm font-semibold mb-3" style={{ color: '#2a1d14', fontFamily: 'Noto Serif Tamil, serif' }}>
                        💰 விலை விவரம்
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-sm">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: '#fffbf5' }}>
                          <div className="font-black text-xl" style={{ color: '#2a1d14' }}>₹{book.price}</div>
                          <div className="text-xs mt-1" style={{ color: '#9a7055', fontFamily: 'Noto Sans Tamil, sans-serif' }}>புத்தகம்</div>
                        </div>
                        <div className="flex items-center justify-center text-2xl" style={{ color: '#d0bba5' }}>+</div>
                        <div className="p-2 rounded-lg" style={{ backgroundColor: '#fffbf5' }}>
                          <div className="font-black text-xl" style={{ color: '#2a1d14' }}>₹{book.courier}</div>
                          <div className="text-xs mt-1" style={{ color: '#9a7055', fontFamily: 'Noto Sans Tamil, sans-serif' }}>Courier</div>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 text-center" style={{ borderTop: '1px solid #d0bba5' }}>
                        <span className="text-sm" style={{ color: '#4f3826', fontFamily: 'Noto Sans Tamil, sans-serif' }}>மொத்தம்: </span>
                        <span className="text-2xl font-black" style={{ color: '#f97008' }}>₹{book.price + book.courier}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedBook(book)}
                      className="px-8 py-3.5 rounded-xl text-white font-bold transition-all hover:opacity-90"
                      style={{ background: 'linear-gradient(135deg, #f97008, #c23e07)', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                      இப்போதே வாங்க →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UPI Payment info section */}
      <section className="py-12 px-4" style={{ background: 'linear-gradient(135deg, #1a110a, #2a1d14)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4" style={{ color: '#fcd34d', fontFamily: 'Noto Serif Tamil, serif' }}>
            UPI மூலம் பணம் செலுத்துங்கள்
          </div>
          <div className="text-4xl font-black mb-2" style={{ color: '#f97008' }}>{authorInfo.upiId}</div>
          <div className="text-sm mb-6" style={{ color: '#b89478', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
            ⚠️ Receiver பெயர் <strong style={{ color: '#fcd34d' }}>Senthil Jaganathan</strong> என்று சரிபாருங்கள்
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['PhonePe', 'Google Pay', 'Paytm', 'BHIM'].map(app => (
              <span key={app} className="px-4 py-2 rounded-full text-sm font-semibold"
                style={{ backgroundColor: 'rgba(249,112,8,0.15)', color: '#fbbf24', border: '1px solid rgba(249,112,8,0.3)' }}>
                {app}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedBook && <UPIModal book={selectedBook} onClose={() => setSelectedBook(null)} />}
    </>
  );
}
