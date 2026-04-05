import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import { books, blogPosts, authorInfo, seoData } from '../data/content';

const OrnamentDivider = ({ text }) => (
  <div className="flex items-center gap-4 my-8">
    <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, #d97706)' }} />
    <span className="text-sm px-3" style={{ color: '#d97706', fontFamily: 'Noto Serif Tamil, serif', letterSpacing: '0.1em' }}>
      {text}
    </span>
    <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, #d97706, transparent)' }} />
  </div>
);

const BookCover = ({ book, size = 'sm' }) => {
  const sizeClass = size === 'lg' ? 'w-44 h-64' : 'w-32 h-48';
  return (
    <div className={`${sizeClass} rounded-xl relative overflow-hidden shadow-2xl flex-shrink-0`}
      style={{ background: `linear-gradient(135deg, ${book.coverColor.split(' ').join(', ').replace('from-', '').replace('to-', '')})` }}>
      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${book.coverAccent}33, #1a110a99)` }} />
      {/* Book spine effect */}
      <div className="absolute left-0 top-0 bottom-0 w-3" style={{ background: 'rgba(0,0,0,0.3)' }} />
      {/* Content */}
      <div className="absolute inset-3 flex flex-col justify-between">
        <div className="text-white/60 text-xs" style={{ fontFamily: 'Lora, serif' }}>
          {book.genre}
        </div>
        <div>
          <div className="text-white text-base font-bold leading-tight mb-1"
            style={{ fontFamily: 'Noto Serif Tamil, serif', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
            {book.title}
          </div>
          <div className="text-white/70 text-xs" style={{ fontFamily: 'Noto Serif Tamil, serif' }}>
            {book.subtitle}
          </div>
          <div className="mt-2 text-xs font-bold" style={{ color: '#fcd34d' }}>₹200</div>
        </div>
      </div>
      {/* Decorative corner */}
      <div className="absolute top-2 right-2 w-6 h-6 rounded-full" style={{ backgroundColor: book.coverAccent + '44', border: `1px solid ${book.coverAccent}66` }} />
    </div>
  );
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Senthil Jaganathan - Tamil Author",
    "url": "https://www.senthiljaganathan.in",
    "description": seoData.home.description,
    "author": {
      "@type": "Person",
      "name": "Senthil Jaganathan"
    }
  };

  return (
    <>
      <SEOHead {...seoData.home} structuredData={structuredData} />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a110a 0%, #2a1d14 40%, #3d2b1e 70%, #4f3826 100%)' }}>
        
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #fbbf24 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        {/* Large decorative Tamil character */}
        <div className="absolute right-0 top-0 text-[20rem] font-black opacity-5 leading-none select-none"
          style={{ color: '#f97008', fontFamily: 'Noto Serif Tamil, serif', right: '-2rem', top: '-2rem' }}>
          த
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm mb-6"
                style={{ backgroundColor: 'rgba(249,112,8,0.15)', border: '1px solid rgba(249,112,8,0.3)', color: '#fbbf24', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                <span>✦</span>
                <span>தமிழ் இலக்கியம்</span>
                <span>✦</span>
              </div>

              {/* Tamil welcome */}
              <div className="text-2xl sm:text-3xl mb-2" style={{ color: '#fcd34d', fontFamily: 'Noto Serif Tamil, serif', fontWeight: 600 }}>
                வணக்கம், வாசகர்களே!
              </div>

              {/* Author name */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-2 leading-tight"
                style={{ fontFamily: 'Noto Serif Tamil, serif', textShadow: '0 2px 20px rgba(249,112,8,0.3)' }}>
                சென்தில்
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-tight"
                style={{ fontFamily: 'Noto Serif Tamil, serif', color: '#f97008', textShadow: '0 2px 20px rgba(249,112,8,0.4)' }}>
                ஜகன்னாதன்
              </h1>
              <div className="text-lg sm:text-xl mb-2" style={{ color: '#b89478', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
                Senthil Jaganathan
              </div>

              <p className="text-base sm:text-lg mb-8 leading-8 max-w-lg" style={{ color: '#d0bba5', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                தமிழ் இலக்கியத்தின் புதிய குரல். நாவல்கள், சிறுகதைகள், கவிதைகள் — வாழ்க்கையின் ஆழத்தை வார்த்தைகளில் வடிக்கும் ஒரு எழுத்தாளர்.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="/books"
                  className="px-8 py-3.5 rounded-full text-white font-bold text-base transition-all hover:opacity-90 hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #f97008, #c23e07)', fontFamily: 'Noto Sans Tamil, sans-serif', boxShadow: '0 4px 20px rgba(249,112,8,0.4)' }}>
                  புத்தகம் வாங்க →
                </Link>
                <Link href="/blog"
                  className="px-8 py-3.5 rounded-full font-bold text-base transition-all hover:bg-white/20 border-2"
                  style={{ color: '#fbbf24', borderColor: 'rgba(251,191,36,0.4)', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                  கட்டுரைகள் படிக்க
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-10">
                {[
                  { num: '3+', label: 'புத்தகங்கள்' },
                  { num: '500+', label: 'வாசகர்கள்' },
                  { num: '10+', label: 'ஆண்டுகள்' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-black" style={{ color: '#f97008', fontFamily: 'Playfair Display, serif' }}>
                      {stat.num}
                    </div>
                    <div className="text-xs mt-1" style={{ color: '#9a7055', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Author + Books visual */}
            <div className="flex flex-col items-center gap-6">
              {/* Author illustration placeholder */}
              <div className="relative">
                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4"
                  style={{ borderColor: 'rgba(249,112,8,0.4)' }}>
                  <img src="/author-photo.jpg" alt="செந்தில் ஜெகன்நாதன்" className="w-full h-full object-cover object-top" />
                </div>
                {/* Decorative ring */}
                <div className="absolute -inset-3 rounded-full border-2 border-dashed opacity-30"
                  style={{ borderColor: '#d97706' }} />
              </div>

              {/* Floating book cards */}
              <div className="flex gap-4 justify-center flex-wrap">
                {books.map((book, i) => (
                  <Link key={book.id} href={`/books#${book.slug}`}
                    className="transform transition-all hover:-translate-y-2"
                    style={{ animationDelay: `${i * 0.15}s` }}>
                    <BookCover book={book} size="sm" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <div className="text-xs text-gray-400">Scroll</div>
          <div className="w-px h-8 animate-bounce" style={{ background: 'linear-gradient(#f97008, transparent)' }} />
        </div>
      </section>

      {/* WELCOME MESSAGE */}
      <section className="py-16 px-4" style={{ backgroundColor: '#fdf6ee' }}>
        <div className="max-w-3xl mx-auto text-center">
          <OrnamentDivider text="✦ வரவேற்பு ✦" />
          <div className="text-2xl sm:text-3xl font-bold mb-6 leading-relaxed"
            style={{ color: '#2a1d14', fontFamily: 'Noto Serif Tamil, serif' }}>
            "வாசிப்பு என்பது ஒரு கதவு — அந்த கதவை திறக்கும்போது நீங்கள் இன்னொரு உலகில் இருப்பீர்கள்."
          </div>
          <p className="text-lg leading-8 mb-6" style={{ color: '#4f3826', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
            என் படைப்புகளுக்கு நீங்கள் வந்திருப்பதற்கு நன்றி. இந்த வலைதளத்தில் என் புத்தகங்களை வாங்கலாம், கட்டுரைகளை படிக்கலாம், என்னோடு தொடர்பு கொள்ளலாம். வாசிப்பே வாழ்க்கை!
          </p>
          <div className="text-base" style={{ color: '#f97008', fontFamily: 'Noto Serif Tamil, serif', fontWeight: 600 }}>
            — சென்தில் ஜகன்னாதன்
          </div>
        </div>
      </section>

      {/* FEATURED BOOKS */}
      <section className="py-16 px-4" style={{ backgroundColor: '#f5ead8' }}>
        <div className="max-w-6xl mx-auto">
          <OrnamentDivider text="✦ புத்தகங்கள் ✦" />
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-3"
            style={{ color: '#2a1d14', fontFamily: 'Noto Serif Tamil, serif' }}>
            என் புத்தகங்கள்
          </h2>
          <p className="text-center mb-12 text-base" style={{ color: '#7d5a3c', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
            ஒவ்வொரு புத்தகமும் ஒரு பயணம்
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {books.map((book) => (
              <div key={book.id} className="book-card rounded-2xl overflow-hidden"
                style={{ backgroundColor: '#fffbf5', boxShadow: '0 4px 20px rgba(42,29,20,0.1)' }}>
                {/* Book header */}
                <div className="p-6 flex gap-4 items-start"
                  style={{ background: `linear-gradient(135deg, #2a1d14, #4f3826)` }}>
                  <BookCover book={book} size="sm" />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold px-2 py-1 rounded-full inline-block mb-2"
                      style={{ backgroundColor: 'rgba(249,112,8,0.2)', color: '#fbbf24', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                      {book.genre}
                    </div>
                    <h3 className="text-white text-lg font-bold leading-tight mb-1"
                      style={{ fontFamily: 'Noto Serif Tamil, serif' }}>
                      {book.title}
                    </h3>
                    <div className="text-sm mb-3" style={{ color: '#b89478', fontFamily: 'Noto Serif Tamil, serif' }}>
                      {book.subtitle}
                    </div>
                    <div className="text-2xl font-black" style={{ color: '#f97008' }}>₹200</div>
                    <div className="text-xs mt-1" style={{ color: '#9a7055' }}>+ ₹40 courier = ₹240 total</div>
                  </div>
                </div>

                {/* Description */}
                <div className="p-5">
                  <p className="text-sm leading-7 mb-5" style={{ color: '#4f3826', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                    {book.descriptionShort}
                  </p>
                  <div className="flex gap-3">
                    <Link href={`/books#${book.slug}`}
                      className="flex-1 text-center py-2.5 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90"
                      style={{ background: 'linear-gradient(135deg, #f97008, #c23e07)', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                      வாங்க
                    </Link>
                    <Link href={`/books#${book.slug}`}
                      className="flex-1 text-center py-2.5 rounded-xl text-sm font-semibold transition-all border-2"
                      style={{ color: '#f97008', borderColor: 'rgba(249,112,8,0.3)', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                      விவரம்
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/books"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-bold transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #f97008, #c23e07)', fontFamily: 'Noto Sans Tamil, sans-serif', fontSize: '1rem' }}>
              அனைத்து புத்தகங்களும் பார்க்க →
            </Link>
          </div>
        </div>
      </section>

      {/* LATEST ARTICLES */}
      <section className="py-16 px-4" style={{ backgroundColor: '#fdf6ee' }}>
        <div className="max-w-6xl mx-auto">
          <OrnamentDivider text="✦ கட்டுரைகள் ✦" />
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-3"
            style={{ color: '#2a1d14', fontFamily: 'Noto Serif Tamil, serif' }}>
            சமீபத்திய படைப்புகள்
          </h2>
          <p className="text-center mb-12" style={{ color: '#7d5a3c', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
            கதைகள், கவிதைகள், கட்டுரைகள்
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <div className="blog-card rounded-xl p-5 h-full cursor-pointer"
                  style={{ backgroundColor: '#fffbf5', border: '1px solid #e8ddd2' }}>
                  <div className="text-xs font-semibold px-2 py-1 rounded-full inline-block mb-3"
                    style={{ backgroundColor: 'rgba(249,112,8,0.1)', color: '#c23e07', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                    {post.category}
                  </div>
                  <h3 className="text-base font-bold mb-2 leading-tight"
                    style={{ color: '#2a1d14', fontFamily: 'Noto Serif Tamil, serif' }}>
                    {post.title}
                  </h3>
                  <p className="text-sm leading-6 mb-3 line-clamp-3"
                    style={{ color: '#7d5a3c', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs" style={{ color: '#b89478', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                      {post.date}
                    </span>
                    <span className="text-xs" style={{ color: '#f97008' }}>படிக்க →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/blog"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold border-2 transition-all hover:bg-orange-50"
              style={{ color: '#f97008', borderColor: 'rgba(249,112,8,0.4)', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
              அனைத்தும் படிக்க →
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="py-16 px-4" style={{ background: 'linear-gradient(135deg, #2a1d14, #4f3826)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6" style={{ color: '#f97008', fontFamily: 'Noto Serif Tamil, serif', fontWeight: 900 }}>ச</div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4"
            style={{ fontFamily: 'Noto Serif Tamil, serif' }}>
            என்னை பற்றி
          </h2>
          <p className="text-lg leading-8 mb-8 max-w-2xl mx-auto" style={{ color: '#d0bba5', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
            தமிழ்நாட்டில் பிறந்து வளர்ந்த நான், மனித உறவுகளையும் வாழ்க்கையின் அழகையும் என் படைப்புகளில் வெளிப்படுத்துகிறேன்.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about"
              className="px-8 py-3 rounded-full text-white font-bold transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #f97008, #c23e07)', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
              மேலும் அறிய →
            </Link>
            <Link href="/contact"
              className="px-8 py-3 rounded-full font-bold border-2 transition-all hover:bg-white/10"
              style={{ color: '#fbbf24', borderColor: 'rgba(251,191,36,0.4)', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
              தொடர்பு கொள்ள
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
