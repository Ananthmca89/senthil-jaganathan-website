import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'முகப்பு', labelEn: 'Home' },
    { href: '/books', label: 'புத்தகங்கள்', labelEn: 'Books' },
    { href: '/blog', label: 'கட்டுரைகள்', labelEn: 'Articles' },
    { href: '/about', label: 'என்னை பற்றி', labelEn: 'About' },
    { href: '/contact', label: 'தொடர்பு', labelEn: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-ink/97 backdrop-blur-md nav-scroll-shadow' : 'bg-ink'
    }`} style={{ backgroundColor: scrolled ? 'rgba(42,29,20,0.97)' : '#2a1d14' }}>
      {/* Top decorative strip */}
      <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #f97008, #d97706, #c80030, #d97706, #f97008)' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
              style={{ background: 'linear-gradient(135deg, #f97008, #c80030)' }}>
              ச
            </div>
            <div>
              <div className="tamil-heading text-white text-base leading-tight" style={{ fontFamily: 'Noto Serif Tamil, serif' }}>
                செந்தில் ஜெகன்நாதன்
              </div>
              <div className="text-xs" style={{ color: '#fcd34d', fontFamily: 'Lora, serif', letterSpacing: '0.05em' }}>
                Tamil Author
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                  router.pathname === link.href
                    ? 'text-white font-semibold'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                style={{
                  fontFamily: 'Noto Sans Tamil, sans-serif',
                  backgroundColor: router.pathname === link.href ? 'rgba(249,112,8,0.25)' : undefined,
                  color: router.pathname === link.href ? '#fbbf24' : undefined
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/books" className="ml-3 px-5 py-2 rounded-full text-white text-sm font-semibold transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #f97008, #c23e07)', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
              புத்தகம் வாங்க
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10" style={{ backgroundColor: '#1a110a' }}>
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                style={{ fontFamily: 'Noto Sans Tamil, sans-serif' }}
              >
                <span>{link.label}</span>
                <span className="text-xs text-gray-500">{link.labelEn}</span>
              </Link>
            ))}
            <Link href="/books" onClick={() => setIsOpen(false)}
              className="block mt-2 px-4 py-3 rounded-full text-white text-center font-semibold"
              style={{ background: 'linear-gradient(135deg, #f97008, #c23e07)', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
              புத்தகம் வாங்க
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
