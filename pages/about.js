import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import { authorInfo, books, seoData } from '../data/content';

const OrnamentDivider = ({ text }) => (
  <div className="flex items-center gap-4 my-8">
    <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, #d97706)' }} />
    <span className="text-sm px-3" style={{ color: '#d97706', fontFamily: 'Noto Serif Tamil, serif' }}>{text}</span>
    <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, #d97706, transparent)' }} />
  </div>
);

export default function AboutPage() {
  return (
    <>
      <SEOHead {...seoData.about} />

      {/* Hero */}
      <section className="py-20 px-4" style={{ background: 'linear-gradient(135deg, #1a110a, #2a1d14, #4f3826)' }}>
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          {/* Author avatar */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-52 h-52 rounded-full overflow-hidden"
                style={{ border: '4px solid rgba(249,112,8,0.4)' }}>
                <img src="/author-photo.jpg" alt="செந்தில் ஜெகன்நாதன்" className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute -inset-3 rounded-full border-2 border-dashed opacity-30"
                style={{ borderColor: '#d97706' }} />
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold tracking-widest mb-3 uppercase" style={{ color: '#f97008', fontFamily: 'Lora, serif' }}>
              About · என்னை பற்றி
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-2" style={{ fontFamily: 'Noto Serif Tamil, serif' }}>
              சென்தில் ஜகன்னாதன்
            </h1>
            <div className="text-xl mb-4" style={{ color: '#fcd34d', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
              Senthil Jaganathan
            </div>
            <div className="text-base" style={{ color: '#b89478', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
              {authorInfo.tagline}
            </div>
          </div>
        </div>
      </section>

      {/* Bio section */}
      <section className="py-16 px-4" style={{ backgroundColor: '#fdf6ee' }}>
        <div className="max-w-4xl mx-auto">
          <OrnamentDivider text="✦ வாழ்க்கை வரலாறு ✦" />

          {authorInfo.bio.split('\n\n').map((para, i) => (
            <p key={i} className="text-lg leading-9 mb-6"
              style={{ color: '#2a1d14', fontFamily: 'Noto Serif Tamil, serif' }}>
              {para}
            </p>
          ))}

          {/* Info grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {[
              { icon: '🏆', label: 'சமீபத்திய விருது', value: 'புதுமைப்பித்தன் விருது 2026 — கோவை விஜய வாசகர் வட்டம்' },
              { icon: '🌍', label: 'சர்வதேசம்', value: 'Living Tamil Literature Festival, New York 2026 — Special Guest' },
              { icon: '📍', label: 'ஊர்', value: authorInfo.location },
              { icon: '📚', label: 'படைப்புகள்', value: 'சிறுகதை, கட்டுரை, திரைப்படம்' },
              { icon: '🎬', label: 'திரைப்படம்', value: 'உதவி இயக்குநர் (2014 முதல்)' },
              { icon: '📅', label: 'எழுத்தின் தொடக்கம்', value: 'ஆகஸ்ட் 2018 — ஆனந்த விகடன்' },
            ].map(item => (
              <div key={item.label} className="rounded-xl p-5"
                style={{ backgroundColor: '#fffbf5', border: '1px solid #e8ddd2' }}>
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-xs font-semibold mb-1" style={{ color: '#f97008', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                  {item.label}
                </div>
                <div className="text-sm" style={{ color: '#2a1d14', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-14 px-4" style={{ backgroundColor: '#f5ead8' }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-6xl mb-4" style={{ color: '#d97706', fontFamily: 'Playfair Display, serif' }}>"</div>
          <blockquote className="text-2xl sm:text-3xl font-bold leading-relaxed mb-6"
            style={{ color: '#2a1d14', fontFamily: 'Noto Serif Tamil, serif' }}>
            எழுத்து என்பது என் மூச்சு. வாசிப்பு என்பது என் உணவு. தமிழ் என்பது என் ஆத்மா.
          </blockquote>
          <div className="text-base" style={{ color: '#7d5a3c', fontFamily: 'Noto Serif Tamil, serif' }}>
            — சென்தில் ஜகன்னாதன்
          </div>
        </div>
      </section>

      {/* My journey */}
      <section className="py-16 px-4" style={{ backgroundColor: '#fdf6ee' }}>
        <div className="max-w-4xl mx-auto">
          <OrnamentDivider text="✦ என் பயணம் ✦" />
          <h2 className="text-3xl font-black mb-10 text-center" style={{ color: '#2a1d14', fontFamily: 'Noto Serif Tamil, serif' }}>
            எழுத்தின் பயணம்
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px"
              style={{ background: 'linear-gradient(180deg, #f97008, #d97706, transparent)', transform: 'translateX(-50%)' }} />

            {[
              { year: '2014', title: 'திரைப்படத்துறை', desc: 'உதவி இயக்குநராக தமிழ் சினிமாவில் பணி தொடங்கினார். சினிமா பின்னணியில் கதைகளும் எழுதினார்.', side: 'right' },
              { year: '2018', title: 'ஆனந்த விகடன்', desc: 'ஆகஸ்ட் 1, 2018 — முதல் சிறுகதை "அன்பின் நிழல்" ஆனந்த விகடனில் வெளிவந்தது. இலக்கிய வாழ்க்கையின் தொடக்கம்.', side: 'left' },
              { year: '2021', title: 'மழைக்கண்', desc: 'முதல் சிறுகதை தொகுப்பு வம்சி பதிப்பகம் வெளியீடாக வந்தது. வாசகர்களின் அன்பான வரவேற்பு கிடைத்தது.', side: 'right' },
              { year: '2022', title: 'சர்வதேச அங்கீகாரம்', desc: 'வேலூர் கோட்டை தமிழ் முற்றம் விருது. Cotton Fever ஆங்கில மொழிபெயர்ப்பு — மொழி அமைப்பு போட்டியில் 3ம் பரிசு.', side: 'left' },
              { year: '2024', title: 'அனாகத நாதம்', desc: 'இரண்டாவது சிறுகதை தொகுப்பு சொற்றுணை பதிப்பகம் வெளியீடாக வந்தது. மழைக்கண் 2nd edition வெளியானது.', side: 'right' },
              { year: '2026', title: 'உலக அரங்கம்', desc: 'புதுமைப்பித்தன் விருது — கோவை விஜய வாசகர் வட்டம். Living Tamil Literature Festival, New York — India-லிருந்து Special Guest!', side: 'left' },
            ].map((event) => (
              <div key={event.year} className={`relative flex gap-6 mb-10 ${event.side === 'right' ? 'pl-12 sm:pl-0 sm:pr-[52%]' : 'pl-12 sm:pl-[52%] sm:pr-0'}`}>
                {/* Dot */}
                <div className="absolute left-0 sm:left-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold z-10 -translate-x-0 sm:-translate-x-1/2"
                  style={{ background: 'linear-gradient(135deg, #f97008, #c23e07)' }}>
                  ✦
                </div>
                <div className="rounded-xl p-5 flex-1"
                  style={{ backgroundColor: '#fffbf5', border: '1px solid #e8ddd2' }}>
                  <div className="text-xs font-bold mb-1" style={{ color: '#f97008', fontFamily: 'Lora, serif' }}>{event.year}</div>
                  <div className="font-bold mb-2" style={{ color: '#2a1d14', fontFamily: 'Noto Serif Tamil, serif' }}>{event.title}</div>
                  <div className="text-sm leading-6" style={{ color: '#7d5a3c', fontFamily: 'Noto Sans Tamil, sans-serif' }}>{event.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Books listing */}
      <section className="py-14 px-4" style={{ background: 'linear-gradient(135deg, #2a1d14, #4f3826)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-8" style={{ fontFamily: 'Noto Serif Tamil, serif' }}>
            என் புத்தகங்கள்
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {books.map(book => (
              <Link key={book.id} href={`/books#${book.slug}`}
                className="px-6 py-3 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90"
                style={{ background: 'rgba(249,112,8,0.2)', border: '1px solid rgba(249,112,8,0.3)', fontFamily: 'Noto Serif Tamil, sans-serif' }}>
                {book.title}
              </Link>
            ))}
          </div>
          <Link href="/books"
            className="inline-block px-8 py-3.5 rounded-full text-white font-bold transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #f97008, #c23e07)', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
            புத்தகங்கள் வாங்க →
          </Link>
        </div>
      </section>
    </>
  );
}
