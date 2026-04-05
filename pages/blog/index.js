import { useState } from 'react';
import Link from 'next/link';
import SEOHead from '../components/SEOHead';
import { blogPosts, seoData } from '../data/content';

const categories = ['அனைத்தும்', 'கவிதை', 'சிறுகதை', 'கட்டுரை'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('அனைத்தும்');

  const filtered = activeCategory === 'அனைத்தும்'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  return (
    <>
      <SEOHead {...seoData.blog} />

      {/* Hero */}
      <section className="py-16 px-4 text-center" style={{ background: 'linear-gradient(135deg, #1a110a, #2a1d14, #4f3826)' }}>
        <div className="text-xs font-semibold tracking-widest mb-4 uppercase" style={{ color: '#f97008', fontFamily: 'Lora, serif' }}>
          Blog · கட்டுரைகள்
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Noto Serif Tamil, serif' }}>
          படைப்புகள்
        </h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: '#b89478', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
          கதைகள், கவிதைகள், கட்டுரைகள் — வாழ்க்கையின் பல கோணங்கள்
        </p>
      </section>

      {/* Category filter */}
      <div className="sticky top-[65px] z-40 py-4 px-4" style={{ backgroundColor: '#fffbf5', borderBottom: '1px solid #e8ddd2' }}>
        <div className="max-w-6xl mx-auto flex gap-2 flex-wrap justify-center">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
              style={{
                fontFamily: 'Noto Sans Tamil, sans-serif',
                backgroundColor: activeCategory === cat ? '#f97008' : 'transparent',
                color: activeCategory === cat ? '#fff' : '#7d5a3c',
                border: `1px solid ${activeCategory === cat ? '#f97008' : '#e8ddd2'}`
              }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog grid */}
      <section className="py-12 px-4" style={{ backgroundColor: '#fdf6ee' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className="book-card rounded-2xl overflow-hidden cursor-pointer h-full"
                  style={{ backgroundColor: '#fffbf5', border: '1px solid #e8ddd2' }}>
                  {/* Category color bar */}
                  <div className="h-1.5 w-full"
                    style={{ background: post.category === 'கவிதை' ? 'linear-gradient(90deg, #7c3aed, #a855f7)' 
                      : post.category === 'சிறுகதை' ? 'linear-gradient(90deg, #f97008, #c23e07)' 
                      : 'linear-gradient(90deg, #d97706, #92400e)' }} />

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ backgroundColor: 'rgba(249,112,8,0.1)', color: '#c23e07', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                        {post.category}
                      </span>
                      <span className="text-xs" style={{ color: '#b89478', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold mb-3 leading-tight"
                      style={{ color: '#2a1d14', fontFamily: 'Noto Serif Tamil, serif' }}>
                      {post.title}
                    </h2>
                    <p className="text-sm leading-7 mb-4 line-clamp-3"
                      style={{ color: '#4f3826', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: '#f5ead8', color: '#7d5a3c', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid #f0e6d8' }}>
                      <span className="text-xs" style={{ color: '#b89478', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                        📅 {post.date}
                      </span>
                      <span className="text-sm font-semibold transition-all" style={{ color: '#f97008' }}>
                        படிக்க →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20" style={{ color: '#9a7055', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
              இந்த வகையில் படைப்புகள் விரைவில் வரும்...
            </div>
          )}
        </div>
      </section>
    </>
  );
}
