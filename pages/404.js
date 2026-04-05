import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4"
      style={{ background: 'linear-gradient(135deg, #1a110a, #2a1d14)' }}>
      <div className="text-center">
        <div className="text-9xl font-black mb-4" style={{ color: '#f97008', fontFamily: 'Noto Serif Tamil, serif' }}>
          404
        </div>
        <h1 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Noto Serif Tamil, serif' }}>
          பக்கம் கிடைக்கவில்லை
        </h1>
        <p className="mb-8" style={{ color: '#b89478', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
          நீங்கள் தேடும் பக்கம் இல்லை அல்லது நகர்த்தப்பட்டிருக்கலாம்.
        </p>
        <Link href="/"
          className="inline-block px-8 py-3.5 rounded-full text-white font-bold transition-all hover:opacity-90"
          style={{ background: 'linear-gradient(135deg, #f97008, #c23e07)', fontFamily: 'Noto Sans Tamil, sans-serif' }}>
          ← முகப்புக்கு திரும்பு
        </Link>
      </div>
    </div>
  );
}
