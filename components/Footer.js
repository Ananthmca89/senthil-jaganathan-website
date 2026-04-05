import Link from 'next/link';
import { authorInfo } from '../data/content';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a110a', color: '#d0bba5' }}>
      {/* Decorative top border */}
      <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #f97008, #d97706, #c80030, #d97706, #f97008)' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Author info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                style={{ background: 'linear-gradient(135deg, #f97008, #c80030)' }}>
                ச
              </div>
              <div>
                <div className="text-white text-lg" style={{ fontFamily: 'Noto Serif Tamil, serif', fontWeight: 700 }}>
                  சென்தில் ஜகன்னாதன்
                </div>
                <div className="text-sm" style={{ color: '#fcd34d' }}>Tamil Author & Poet</div>
              </div>
            </div>
            <p className="text-sm leading-7" style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
              தமிழ் இலக்கியத்தை நேசிப்போருக்கான ஒரு இடம். கதைகள், கவிதைகள், மற்றும் வாழ்க்கையின் உண்மைகள்.
            </p>
            {/* Social links */}
            <div className="flex gap-3 mt-4">
              {[
                { href: authorInfo.social.facebook, icon: 'F', title: 'Facebook' },
                { href: authorInfo.social.instagram, icon: 'I', title: 'Instagram' },
                { href: authorInfo.social.twitter, icon: 'X', title: 'Twitter' },
                { href: authorInfo.social.youtube, icon: 'Y', title: 'YouTube' },
              ].map((social) => (
                <a key={social.title} href={social.href} target="_blank" rel="noopener noreferrer"
                  title={social.title}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all hover:opacity-80"
                  style={{ backgroundColor: 'rgba(249,112,8,0.2)', color: '#fbbf24', border: '1px solid rgba(249,112,8,0.3)' }}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 pb-2" style={{ borderBottom: '2px solid rgba(249,112,8,0.4)', fontFamily: 'Noto Serif Tamil, serif' }}>
              பக்கங்கள்
            </h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'முகப்பு' },
                { href: '/books', label: 'புத்தகங்கள்' },
                { href: '/blog', label: 'கட்டுரைகள்' },
                { href: '/about', label: 'என்னை பற்றி' },
                { href: '/contact', label: 'தொடர்பு' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-saffron-400 transition-colors flex items-center gap-2"
                    style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}>
                    <span style={{ color: '#f97008' }}>›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 pb-2" style={{ borderBottom: '2px solid rgba(249,112,8,0.4)', fontFamily: 'Noto Serif Tamil, serif' }}>
              தொடர்பு கொள்ள
            </h3>
            <div className="space-y-3 text-sm">
              <a href={`tel:${authorInfo.phone}`} className="flex items-center gap-3 hover:text-white transition-colors">
                <span className="text-lg">📞</span>
                <span>{authorInfo.phone}</span>
              </a>
              <a href={`https://wa.me/${authorInfo.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors">
                <span className="text-lg">💬</span>
                <span>WhatsApp</span>
              </a>
              <a href={`mailto:${authorInfo.email}`} className="flex items-center gap-3 hover:text-white transition-colors">
                <span className="text-lg">✉️</span>
                <span>{authorInfo.email}</span>
              </a>
              <div className="flex items-center gap-3">
                <span className="text-lg">📍</span>
                <span>{authorInfo.location}</span>
              </div>
            </div>

            {/* Buy books CTA */}
            <Link href="/books"
              className="inline-block mt-5 px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #f97008, #c23e07)', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
              புத்தகம் வாங்க →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p className="text-sm text-center" style={{ color: '#7d5a3c' }}>
            © 2024 Senthil Jaganathan. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: '#7d5a3c', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
            தமிழ் இலக்கியம் என்றும் வாழும்
          </p>
        </div>
      </div>
    </footer>
  );
}
