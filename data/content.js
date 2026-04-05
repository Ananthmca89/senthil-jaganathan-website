// Books data — செந்தில் ஜெகன்நாதன் real books
export const books = [
  {
    id: 1,
    slug: "anagathanatham",
    title: "அனாகத நாதம்",
    titleEn: "Anagatha Natham",
    subtitle: "சிறுகதை தொகுப்பு — சொற்றுணை பதிப்பகம்",
    description: "செந்தில் ஜெகன்நாதனின் 'அனாகத நாதம்' — வேளாண்குடிகளின் வாழ்க்கையையும், அவர்களின் நிலையில் உருவாகி வந்துகொண்டிருக்கும் மாற்றங்களையும் உருவகப்படுத்தி, வாழ்க்கையின் அடிப்படையான வினாக்களை எழுப்பும் சிறுகதை தொகுப்பு. சொற்றுணை பதிப்பகம் வெளியீடு — 2024.",
    descriptionShort: "வேளாண்குடிகளின் வாழ்க்கையை உண்மையோடு சொல்லும் சிறந்த சிறுகதை தொகுப்பு.",
    pages: 150,
    year: 2024,
    publisher: "சொற்றுணை பதிப்பகம்",
    genre: "சிறுகதை தொகுப்பு",
    price: 200,
    courier: 40,
    coverImage: "/book-anagathanatham.jpg",
    coverColor: "from-amber-800 to-yellow-900",
    coverAccent: "#d97706",
    isbn: "",
  },
  {
    id: 2,
    slug: "mazhaikan",
    title: "மழைக்கண்",
    titleEn: "Mazhaikan",
    subtitle: "சிறுகதை தொகுப்பு — சொற்றுணை பதிப்பகம்",
    description: "வேலூர் கோட்டை தமிழ் முற்றம் விருது பெற்ற சிறுகதை தொகுப்பு. மழையைப் போல் மனதை நனைக்கும் கதைகள். 'Cotton Fever' என்ற தலைப்பில் ஆங்கிலத்தில் மொழிபெயர்க்கப்பட்டு சர்வதேச அங்கீகாரம் பெற்ற கதை இந்த தொகுப்பில் இடம்பெற்றுள்ளது. வம்சி பதிப்பகம் (2021), சொற்றுணை பதிப்பகம் (2024).",
    descriptionShort: "விருது பெற்ற சிறுகதை தொகுப்பு — மழையைப் போல் மனதை நனைக்கும் கதைகள்.",
    pages: 130,
    year: 2024,
    publisher: "சொற்றுணை பதிப்பகம்",
    genre: "சிறுகதை தொகுப்பு",
    price: 180,
    courier: 40,
    coverImage: "/book-mazhaikan.jpg",
    coverColor: "from-blue-800 to-cyan-900",
    coverAccent: "#0369a1",
    isbn: "",
  }
];

// Blog posts
export const blogPosts = [
  {
    id: 1,
    slug: "vaelaankudikalin-vazhkai",
    title: "வேளாண்குடிகளின் வாழ்க்கை — என் கதைகளின் ஊற்று",
    category: "கட்டுரை",
    date: "2024 மார்ச் 10",
    dateEn: "2024-03-10",
    readTime: "4 நிமிடங்கள்",
    excerpt: "கலையின் பிரம்மாண்டம் எளிமை. வேளாண்குடிகளின் வாழ்க்கையில் நான் கண்ட உண்மைகளே என் கதைகளின் அடித்தளம். பனம்பள்ளி மண்ணில் வளர்ந்த நான்...",
    content: `கலையின் பிரம்மாண்டம் எளிமை.

வேளாண்குடிகளின் வாழ்க்கையில் நான் கண்ட உண்மைகளே என் கதைகளின் அடித்தளம். பனம்பள்ளி மண்ணில் வளர்ந்த நான், அந்த மண்ணின் மக்களின் வலிகளையும் மகிழ்ச்சிகளையும் கண்கூடாக கண்டேன்.

அவர்களின் நிலையில் உருவாகி வந்துகொண்டிருக்கும் மாற்றங்கள் — இது என்னை அதிகமாக யோசிக்க வைக்கிறது. வாழ்க்கையின் அடிப்படையான வினாக்கள் — இவற்றை என் கதைகளில் எழுப்பிக்கொள்கிறேன்.

'அனாகத நாதம்' இந்த யோசனைகளின் விளைவு.

— செந்தில் ஜெகன்நாதன்`,
    tags: ["வேளாண்குடி", "கதை", "பனம்பள்ளி"],
    image: null,
  },
  {
    id: 2,
    slug: "ananda-vikatan-muthal-kathai",
    title: "ஆனந்த விகடன் — என் முதல் கதை",
    category: "கட்டுரை",
    date: "2024 ஆகஸ்ட் 1",
    dateEn: "2024-08-01",
    readTime: "3 நிமிடங்கள்",
    excerpt: "ஆகஸ்ட் 1, 2018 — என் வாழ்க்கையில் மறக்க முடியாத நாள். 'அன்பின் நிழல்' என் முதல் சிறுகதை ஆனந்த விகடனில் வெளிவந்த நாள்...",
    content: `ஆகஸ்ட் 1, 2018 — என் வாழ்க்கையில் மறக்க முடியாத நாள்.

'அன்பின் நிழல்' என் முதல் சிறுகதை ஆனந்த விகடனில் வெளிவந்தது. அந்த நாள் என் எழுத்து வாழ்க்கையின் திருப்புமுனை.

புதுமைப்பித்தன், கு.அழகிரிசாமி, அசோகமித்திரன், தி.ஜானகிராமன், ஜெயமோகன், நாஞ்சில் நாடன், சு.வேணுகோபால் — இவர்கள் என் இலக்கிய ஆக்கத்தில் செல்வாக்கு செலுத்திய ஆளுமைகள்.

அவர்களின் படைப்புகள் என்னை உருவாக்கின. என் கதைகள் உங்களை தொட வேண்டும் என்று விரும்புகிறேன்.

— செந்தில் ஜெகன்நாதன்`,
    tags: ["ஆனந்த விகடன்", "முதல் கதை", "எழுத்தாளர்"],
    image: null,
  },
  {
    id: 3,
    slug: "cotton-fever-mozhibeyarpu",
    title: "Cotton Fever — சர்வதேச அங்கீகாரம்",
    category: "கட்டுரை",
    date: "2023 டிசம்பர் 1",
    dateEn: "2023-12-01",
    readTime: "3 நிமிடங்கள்",
    excerpt: "மழைக்கண் தொகுப்பிலிருந்து ஒரு கதை ஆங்கிலத்தில் மொழிபெயர்க்கப்பட்டு சர்வதேச அங்கீகாரம் பெற்றது — இது தமிழ் இலக்கியத்தின் வெற்றி...",
    content: `மழைக்கண் தொகுப்பிலிருந்து ஒரு கதை 'Cotton Fever' என்ற தலைப்பில் அஞ்சனா சேகரால் ஆங்கிலத்தில் மொழிபெயர்க்கப்பட்டது.

மொழி அமைப்பின் 2022-ம் ஆண்டுக்கான போட்டியில் மூன்றாம் பரிசை பெற்றது.

இது என் கதையின் மட்டும் வெற்றி இல்லை — இது தமிழ் இலக்கியத்தின் வெற்றி. தமிழ் மண்ணின் கதைகள் உலகுக்கு தெரிய வேண்டும்.

வேளாண்குடிகளின் வலிகள் உலக மொழிகளில் பேச வேண்டும்.

— செந்தில் ஜெகன்நாதன்`,
    tags: ["Cotton Fever", "மொழிபெயர்ப்பு", "சர்வதேசம்"],
    image: null,
  },
  {
    id: 4,
    slug: "velur-kottai-viruth",
    title: "வேலூர் கோட்டை தமிழ் முற்றம் விருது",
    category: "கட்டுரை",
    date: "2022 நவம்பர் 1",
    dateEn: "2022-11-01",
    readTime: "2 நிமிடங்கள்",
    excerpt: "மழைக்கண் சிறுகதை நூலுக்கு வேலூர் கோட்டை தமிழ் முற்றம் விருது கிடைத்தது — இது என் வாசகர்களுக்கு நான் சமர்ப்பிக்கும் விருது...",
    content: `மழைக்கண் சிறுகதை நூலுக்கு வேலூர் கோட்டை தமிழ் முற்றம் விருது வழங்கப்பட்டது.

இந்த விருது என்னுடையது மட்டும் இல்ல.

பனம்பள்ளியின் மண்ணுடையது.
மயிலாடுதுறையின் மக்களுடையது.
என் வாசகர்கள் எல்லோருடையது.

என்னை படிக்கும் ஒவ்வொருவரும் என் எழுத்தின் ஆற்றல். உங்கள் அன்பே என் விருது.

நன்றி.

— செந்தில் ஜெகன்நாதன்`,
    tags: ["விருது", "மழைக்கண்", "வேலூர்"],
    image: null,
  },
];

// Author info — complete real details
export const authorInfo = {
  name: "செந்தில் ஜெகன்நாதன்",
  nameEn: "Senthil Jaganathan",
  tagline: "புதுமைப்பித்தன் விருது 2026 | Living Tamil Literature Festival NY | எழுத்தாளர் & இயக்குநர்",
  taglineEn: "Pudhumaipithan Award 2026 | Living Tamil Literature Festival New York | Author & Director",
  bio: `"கலையின் பிரம்மாண்டம் எளிமை" — செந்தில் ஜெகன்நாதன்

மயிலாடுதுறை மாவட்டம் பனம்பள்ளி கிராமத்தில் பிறந்தவர். வேளாண்குடிகளின் வாழ்க்கையையும் அவர்களின் நிலையில் உருவாகி வந்துகொண்டிருக்கும் மாற்றங்களையும் உருவகப்படுத்தி வாழ்க்கையின் அடிப்படையான வினாக்களை எழுப்பிக்கொள்ளும் படைப்பாளி.

ஆகஸ்ட் 1, 2018 அன்று முதல் சிறுகதை 'அன்பின் நிழல்' ஆனந்த விகடனில் வெளிவந்தது. 2014-ம் ஆண்டு முதல் திரைப்படத்துறையில் உதவி இயக்குநராகவும் பணிபுரிந்து வருகிறார்.

புதுமைப்பித்தன், கு.அழகிரிசாமி, அசோகமித்திரன், தி.ஜானகிராமன், ஜெயமோகன், நாஞ்சில் நாடன், சு.வேணுகோபால் ஆகியோர் இவரது இலக்கிய ஆக்கத்தில் செல்வாக்கு செலுத்திய ஆளுமைகள்.`,
  education: "இளங்கலை உயிர்மவேதியியல், SKSS கலைக் கல்லூரி, திருப்பனந்தாள் | MBA, சென்னைப் பல்கலைக்கழகம்",
  location: "பனம்பள்ளி, மயிலாடுதுறை, தமிழ்நாடு",
  phone: "+91 9715304324",
  email: "senthiljaganathan56@gmail.com",
  whatsapp: "+919715304324",
  upiId: "9790030749@ybl",
  awards: [
    "கோவை விஜய வாசகர் வட்டம் — புதுமைப்பித்தன் விருது 2026 ✦",
    "Living Tamil Literature Festival, New York 2026 — Special Guest (India-லிருந்து 30 சிறந்த எழுத்தாளர்களில் ஒருவர்)",
    "வேலூர் கோட்டை தமிழ் முற்றம் விருது — மழைக்கண் (2022)",
    "Cotton Fever — மொழி அமைப்பு மொழிபெயர்ப்பு போட்டி மூன்றாம் பரிசு (2022)",
    "ஆனந்த விகடன் — முதல் சிறுகதை வெளியீடு (2018)",
  ],
  social: {
    facebook: "https://www.facebook.com/senthil.nathan.372",
    instagram: "https://www.instagram.com/senthiljagannathan/",
    twitter: "https://x.com/SenthilJwriter",
    youtube: "",
    tamilwiki: "https://tamil.wiki/wiki/%E0%AE%9A%E0%AF%86%E0%AE%A8%E0%AF%8D%E0%AE%A4%E0%AE%BF%E0%AE%B2%E0%AF%8D_%E0%AE%9C%E0%AF%86%E0%AE%95%E0%AE%A8%E0%AF%8D%E0%AE%A8%E0%AE%BE%E0%AE%A4%E0%AE%A9%E0%AF%8D",
  }
};

// SEO data — fully optimized for real author
export const seoData = {
  home: {
    title: "செந்தில் ஜெகன்நாதன் | Tamil Author | Senthil Jaganathan Official Website",
    description: "Senthil Jaganathan - Award winning Tamil short story writer from Mayiladuthurai. Vellore Kottai Tamil Muttram Award winner. Buy books Anagatha Natham and Mazhaikan online.",
    keywords: "Senthil Jaganathan, செந்தில் ஜெகன்நாதன், Tamil author, Mayiladuthurai writer, அனாகத நாதம், மழைக்கண், Pudhumaipithan Award 2026, Living Tamil Literature Festival New York, award winning Tamil writer, Sorrrunai publications",
  },
  books: {
    title: "அனாகத நாதம் | மழைக்கண் — செந்தில் ஜெகன்நாதன்",
    description: "Buy Tamil books by Senthil Jaganathan — Anagatha Natham and Mazhaikan. Award winning short story collections. Sorrrunai Publications. Direct order with UPI payment.",
    keywords: "Anagatha Natham book, Mazhaikan book, Senthil Jaganathan books, சொற்றுணை பதிப்பகம், Tamil short stories buy",
  },
  blog: {
    title: "செந்தில் ஜெகன்நாதன் கட்டுரைகள் | Senthil Jaganathan Articles",
    description: "Read articles and stories by award winning Tamil author Senthil Jaganathan from Mayiladuthurai.",
    keywords: "Senthil Jaganathan articles, Tamil writer Mayiladuthurai, செந்தில் ஜெகன்நாதன் கட்டுரை",
  },
  about: {
    title: "செந்தில் ஜெகன்நாதன் பற்றி | About Senthil Jaganathan",
    description: "Award winning Tamil author Senthil Jaganathan from Panampallli, Mayiladuthurai. Ananda Vikatan author. Vellore Kottai Tamil Muttram Award winner.",
    keywords: "Senthil Jaganathan biography, Mayiladuthurai Tamil author, Panampallli, Ananda Vikatan",
  },
  contact: {
    title: "தொடர்பு | Contact Senthil Jaganathan",
    description: "Contact Tamil author Senthil Jaganathan for book orders via WhatsApp. Sorrrunai Publications direct order.",
    keywords: "Contact Senthil Jaganathan, book order, செந்தில் ஜெகன்நாதன் தொடர்பு",
  }
};
