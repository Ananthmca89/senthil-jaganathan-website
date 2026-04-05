# செந்தில் ஜெகன்நாதன் — Tamil Author Website
## Senthil Jaganathan Official Author Website

A professional Tamil author website built with Next.js, React, and Tailwind CSS.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
senthil-jaganathan/
├── pages/
│   ├── index.js          # Home page
│   ├── books.js          # Books page with UPI payment
│   ├── blog/
│   │   ├── index.js      # Blog listing
│   │   └── [slug].js     # Individual blog post
│   ├── about.js          # About the author
│   ├── contact.js        # Contact page
│   ├── 404.js            # Custom 404
│   ├── _app.js           # App wrapper
│   ├── _document.js      # Custom HTML document
│   └── api/
│       ├── sitemap.js    # SEO sitemap
│       └── robots.js     # Robots.txt
├── components/
│   ├── Navbar.js         # Navigation
│   ├── Footer.js         # Footer
│   └── SEOHead.js        # SEO meta tags
├── data/
│   └── content.js        # All Tamil content & data
├── styles/
│   └── globals.css       # Global styles + Tamil fonts
├── public/               # Static assets
├── vercel.json           # Vercel config
└── netlify.toml          # Netlify config
```

---

## ✏️ Customization

### Update Author Info
Edit `data/content.js`:
- `authorInfo.upiId` — Your actual UPI ID
- `authorInfo.phone` — Your phone number
- `authorInfo.whatsapp` — Your WhatsApp number
- `authorInfo.email` — Your email address

### Add New Books
In `data/content.js`, add to the `books` array:
```js
{
  id: 4,
  slug: "your-book-slug",
  title: "புத்தக தலைப்பு",
  titleEn: "Book Title En",
  subtitle: "subtitle",
  description: "Long description...",
  descriptionShort: "Short description...",
  pages: 200,
  year: 2024,
  genre: "நாவல்",
  price: 200,
  courier: 40,
  coverColor: "from-green-800 to-teal-900",
  coverAccent: "#059669",
  isbn: "978-XX-XXXXX-XX-X",
}
```

### Add New Blog Posts
In `data/content.js`, add to the `blogPosts` array.

### Add Author Photo
Replace the styled avatar in `pages/index.js` and `pages/about.js` with:
```jsx
<img src="/author-photo.jpg" alt="Senthil Jaganathan" className="w-full h-full object-cover" />
```
Place `author-photo.jpg` in the `public/` folder.

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

Or connect your GitHub repo to [vercel.com](https://vercel.com).

### Deploy to Netlify
```bash
# Install Netlify CLI  
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=.next
```

Or connect your GitHub repo to [netlify.com](https://netlify.com).

---

## 🔍 SEO Features
- Meta title & description for all pages
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD) for Author, Books, Articles
- Auto-generated sitemap.xml at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- Tamil language meta tags
- Canonical URLs

---

## 💳 UPI Payment Setup
1. Open `data/content.js`
2. Update `authorInfo.upiId` with your actual UPI ID
3. The UPI payment buttons will automatically use your UPI ID

UPI Deep Link format:
```
upi://pay?pa=YOUR_UPI_ID&pn=Senthil+Jaganathan&am=240&cu=INR
```

---

## 🔤 Tamil Fonts Used
- **Noto Serif Tamil** — Primary Tamil serif font for headings
- **Noto Sans Tamil** — Body Tamil text  
- **Playfair Display** — English display font
- **Lora** — English body font

All fonts loaded from Google Fonts with proper Unicode support.

---

## 📱 Features
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Tamil language support with proper Unicode
- ✅ Beautiful warm color palette (saffron, gold, crimson)
- ✅ UPI payment integration
- ✅ Order form with screenshot upload
- ✅ Blog system with categories
- ✅ WhatsApp integration
- ✅ SEO optimized
- ✅ Sitemap & Robots.txt
- ✅ Social sharing
- ✅ Author timeline
- ✅ Structured data for Google

---

## 📞 Support
For questions, contact: senthil@senthiljaganathan.in
