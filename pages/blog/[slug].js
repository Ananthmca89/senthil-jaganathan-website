import Link from 'next/link';
import SEOHead from '../../components/SEOHead';
import { blogPosts } from '../../data/content';

export async function getStaticPaths() {
  const paths = blogPosts.map(post => ({ params: { slug: post.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = blogPosts.find(p => p.slug === params.slug);
  return { props: { post } };
}

export default function BlogPost({ post }) {
  if (!post) return null;

  const handleShare = (platform) => {
    const url = encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '');
    const text = encodeURIComponent(`${post.title} - சென்தில் ஜகன்னாதன்`);
    const urls = {
      whatsapp: `https://wa.me/?text=${text}%20${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
    };
    window.open(urls[platform], '_blank');
  };

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "author": { "@type": "Person", "name": "Senthil Jaganathan" },
    "datePublished": post.dateEn,
    "inLanguage": "ta",
    "publisher": { "@type": "Person", "name": "Senthil Jaganathan" }
  };

  return (
    <>
      <SEOHead
        title={`${post.title} | சென்தில் ஜகன்னாதன்`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        structuredData={articleStructuredData}
      />

      {/* Hero */}
      <section className="py-16 px-4" style={{ background: 'linear-gradient(135deg, #1a110a, #2a1d14, #4f3826)' }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm mb-6 transition-colors hover:text-white"
            style={{ color: '#b89478', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
            ← கட்டுரைகளுக்கு திரும்ப
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{ backgroundColor: 'rgba(249,112,8,0.2)', color: '#fbbf24', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
              {post.category}
            </span>
            <span className="text-xs px-3 py-1 rounded-full"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#d0bba5', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
              📅 {post.date}
            </span>
            <span className="text-xs px-3 py-1 rounded-full"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#d0bba5', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
              ⏱ {post.readTime}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-4"
            style={{ fontFamily: 'Noto Serif Tamil, serif', lineHeight: 1.5 }}>
            {post.title}
          </h1>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
              style={{ background: 'linear-gradient(135deg, #f97008, #c80030)' }}>ச</div>
            <span className="text-sm" style={{ color: '#d0bba5', fontFamily: 'Noto Serif Tamil, serif' }}>
              சென்தில் ஜகன்னாதன்
            </span>
          </div>
        </div>
      </section>

      {/* Article content */}
      <article className="py-12 px-4" style={{ backgroundColor: '#fdf6ee' }}>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl p-6 sm:p-10 mb-8"
            style={{ backgroundColor: '#fffbf5', border: '1px solid #e8ddd2' }}>
            <div className="prose max-w-none">
              {post.content.split('\n\n').map((paragraph, i) => (
                <div key={i} className="mb-5">
                  {paragraph.split('\n').map((line, j) => (
                    <p key={j} className={`leading-8 ${!line.trim() ? 'mb-2' : 'mb-0'}`}
                      style={{
                        color: '#2a1d14',
                        fontFamily: 'Noto Serif Tamil, serif',
                        fontSize: '1.05rem',
                        whiteSpace: 'pre-wrap'
                      }}>
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full text-sm"
                style={{ backgroundColor: '#f5ead8', color: '#7d5a3c', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                #{tag}
              </span>
            ))}
          </div>

          {/* Share */}
          <div className="rounded-2xl p-6 mb-8"
            style={{ backgroundColor: '#f5ead8', border: '1px solid #e8ddd2' }}>
            <div className="text-sm font-semibold mb-3" style={{ color: '#2a1d14', fontFamily: 'Noto Serif Tamil, serif' }}>
              இந்த படைப்பை பகிருங்கள்:
            </div>
            <div className="flex gap-3 flex-wrap">
              {[
                { platform: 'whatsapp', label: '💬 WhatsApp', bg: '#22c55e' },
                { platform: 'facebook', label: '📘 Facebook', bg: '#1877f2' },
                { platform: 'twitter', label: '🐦 Twitter/X', bg: '#000' },
              ].map(s => (
                <button key={s.platform} onClick={() => handleShare(s.platform)}
                  className="px-5 py-2 rounded-full text-white text-sm font-semibold transition-all hover:opacity-90"
                  style={{ backgroundColor: s.bg, fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Author card */}
          <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, #2a1d14, #4f3826)' }}>
            <div className="flex gap-4 items-start">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-xl flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #f97008, #c80030)' }}>
                ச
              </div>
              <div>
                <div className="text-white font-bold mb-1" style={{ fontFamily: 'Noto Serif Tamil, serif' }}>
                  சென்தில் ஜகன்னாதன்
                </div>
                <div className="text-sm mb-3" style={{ color: '#b89478', fontFamily: 'Lora, serif' }}>
                  Tamil Author & Poet
                </div>
                <p className="text-sm leading-6" style={{ color: '#d0bba5', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                  தமிழ் இலக்கியத்தில் புதிய குரல். கதைகள், கவிதைகள், வாழ்க்கையின் சாரம்.
                </p>
                <Link href="/about"
                  className="inline-block mt-3 text-sm font-semibold transition-colors hover:opacity-80"
                  style={{ color: '#f97008', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                  மேலும் அறிய →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related posts */}
      <section className="py-10 px-4" style={{ backgroundColor: '#f5ead8' }}>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-6" style={{ color: '#2a1d14', fontFamily: 'Noto Serif Tamil, serif' }}>
            மற்ற படைப்புகள்
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map(p => (
              <Link key={p.id} href={`/blog/${p.slug}`}
                className="blog-card rounded-xl p-4 block"
                style={{ backgroundColor: '#fffbf5', border: '1px solid #e8ddd2' }}>
                <div className="text-xs mb-2" style={{ color: '#c23e07', fontFamily: 'Noto Sans Tamil, sans-serif' }}>{p.category}</div>
                <div className="font-bold text-sm mb-1" style={{ color: '#2a1d14', fontFamily: 'Noto Serif Tamil, serif' }}>{p.title}</div>
                <div className="text-xs" style={{ color: '#b89478', fontFamily: 'Noto Sans Tamil, sans-serif' }}>{p.date}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
