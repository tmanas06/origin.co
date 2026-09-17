// Brand constants — all placeholder data matching Origin.Co brand voice

export const BRAND_NAME = 'Origin.Co'
export const BRAND_TAGLINE = "Not Just A Community. It's Our Origin."
export const WHATSAPP_LINK = 'https://wa.me/919999999999?text=Hey%2C%20I%27m%20interested%20in%20joining%20Origin%20Creator%20Community!'
export const WHATSAPP_BRAND_LINK = 'https://wa.me/919999999999?text=Hi%2C%20I%27d%20like%20to%20partner%20with%20Origin%20for%20a%20brand%20collaboration.'
export const INSTAGRAM_LINK = 'https://instagram.com/origin.co'
export const LINKEDIN_LINK = 'https://linkedin.com/company/origin-co'

export const NAV_LINKS = [
  { label: 'For Creators', href: '#positioning' },
  { label: 'For Brands', href: '#brands' },
  { label: 'Events', href: '#events' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#founder' },
]

export const STATS = [
  { value: 50000, suffix: '+', label: 'Creator Followers', decimals: 0 },
  { value: 30, suffix: '+', label: 'Events Hosted', decimals: 0 },
  { value: 200, suffix: '+', label: 'Creators Onboarded', decimals: 0 },
  { value: 15, suffix: '+', label: 'Brand Partners', decimals: 0 },
]

export const EVENTS = [
  {
    id: 1,
    title: 'Bedazzle Workshop',
    date: 'Aug 2026',
    venue: 'Lower Parel, Mumbai',
    image: '/images/events/bedazzle.jpg',
    tag: 'Workshop',
  },
  {
    id: 2,
    title: 'Ride the Night',
    date: 'Jul 2026',
    venue: 'Bandra–Worli Sea Link',
    image: '/images/events/night-ride.jpg',
    tag: 'Cycling',
  },
  {
    id: 3,
    title: 'Padel Meetup',
    date: 'Jun 2026',
    venue: 'Juhu, Mumbai',
    image: '/images/events/padel.jpg',
    tag: 'Sports',
  },
  {
    id: 4,
    title: 'Creator Mixer',
    date: 'May 2026',
    venue: 'Colaba, Mumbai',
    image: '/images/events/mixer.jpg',
    tag: 'Networking',
  },
  {
    id: 5,
    title: 'Brand Collab Sprint',
    date: 'Apr 2026',
    venue: 'BKC, Mumbai',
    image: '/images/events/sprint.jpg',
    tag: 'Workshop',
  },
]

export const BRANDS = [
  { name: 'BLNCD', logo: '/images/brands/blncd.svg' },
  { name: 'Wheelo.fit', logo: '/images/brands/wheelo.svg' },
  { name: 'Bunch', logo: '/images/brands/bunch.svg' },
  { name: 'myndful', logo: '/images/brands/myndful.svg' },
  { name: 'PureForm', logo: '/images/brands/pureform.svg' },
  { name: 'Stridez', logo: '/images/brands/stridez.svg' },
]

export const CASE_STUDIES = [
  {
    brand: 'BLNCD',
    description: "A full-stack creator campaign that drove brand awareness across Mumbai's lifestyle creator ecosystem.",
    stat: '2.4M',
    statLabel: 'Impressions',
    creators: 12,
  },
  {
    brand: 'Wheelo.fit',
    description: "Targeted fitness creator partnerships delivering authentic content that converted followers into members.",
    stat: '18%',
    statLabel: 'Conversion Uplift',
    creators: 8,
  },
]

export const PROCESS_STEPS = [
  { id: 'brand', label: 'Brand', icon: '◈', description: 'You bring the vision, goals and budget.' },
  { id: 'origin', label: 'Origin', icon: '⬡', description: 'We strategise, match and manage end-to-end.' },
  { id: 'creator', label: 'Creator', icon: '✦', description: 'Vetted creators craft authentic stories.' },
  { id: 'content', label: 'Content', icon: '◎', description: 'Premium content goes live across platforms.' },
  { id: 'results', label: 'Results', icon: '▲', description: 'Measurable outcomes, real impact.' },
]

export const CREATOR_FEATURES = [
  {
    icon: '⬡',
    title: 'Join the Network',
    description: 'Connect with 200+ like-minded creators across lifestyle, fitness, fashion, and food niches in Mumbai.',
  },
  {
    icon: '✦',
    title: 'Brand Opportunities',
    description: 'Get matched with brands that align with your aesthetic — no cold pitching, no fake followers.',
  },
  {
    icon: '◈',
    title: 'IRL Community',
    description: 'Attend exclusive workshops, rides, sports meetups and creative sessions — grow beyond the algorithm.',
  },
]

export const BRAND_FEATURES = [
  {
    icon: '◎',
    title: 'Vetted Creators',
    description: 'Access a curated roster of authentic creators with real, engaged audiences — no follower inflation.',
  },
  {
    icon: '▲',
    title: 'Managed Campaigns',
    description: 'We handle briefs, coordination, content review and timelines so you can focus on strategy.',
  },
  {
    icon: '◈',
    title: 'Measurable Results',
    description: 'Full-funnel reporting on reach, engagement, conversions and brand sentiment — every campaign.',
  },
]

export const FOUNDERS = [
  {
    id: 'piyush',
    name: 'Piyush Mahadik',
    role: 'Founder',
    roleBadge: 'Founder',
    badgeClass: 'bg-purple-500/25 text-purple-300 border-purple-500/40',
    tagline: 'Building the foundation',
    handle: '@piyuush_16',
    instagram: 'https://instagram.com/piyuush_16',
    image: '/images/founder-hd.jpg',
    imageAlt: 'Piyush Mahadik — Founder of Origin',
    eyebrow: 'Visionary & Builder',
    headlinePrefix: 'Built with vision. ',
    headlineGradient: 'Driven by purpose.',
    quote: 'Different roles. Same passion. One journey. This is just the beginning. This is Origin.',
    quoteAuthor: '— Piyush Mahadik, Founder',
    bio: [
      'Piyush Mahadik founded Origin with a core conviction: authentic creator ecosystems produce transformative storytelling, higher engagement, and sustainable brand impact.',
      'Turning ideas into impact, one step at a time — Origin bridges top-tier digital talent with forward-thinking brands through strategy, community trust, and end-to-end execution.',
    ],
    pillars: [
      { title: 'Vision & Strategy', description: 'Turning bold vision into actionable, scalable strategy.' },
      { title: 'Ideas into Impact', description: 'Ideas are just the start — measurable impact is the goal.' },
    ],
    socialLinks: [
      { label: '@piyuush_16', href: 'https://instagram.com/piyuush_16', primary: true },
      { label: '@origincommune', href: 'https://instagram.com/origincommune', primary: false },
    ],
  },
  {
    id: 'sonakshi',
    name: 'Sonakshi Doshi',
    role: 'Co-Founder',
    roleBadge: 'Co-Founder',
    badgeClass: 'bg-violet-500/25 text-violet-300 border-violet-500/40',
    tagline: 'Community & Creator Lead',
    handle: '@sonakshidoshi5',
    instagram: 'https://instagram.com/sonakshidoshi5',
    image: '/images/sonakshi-doshi.jpg',
    imageAlt: 'Sonakshi Doshi — Co-Founder of Origin',
    eyebrow: 'Creator & Community Lead',
    headlinePrefix: 'Empowering creators. ',
    headlineGradient: 'Shaping culture.',
    quote: 'Creators aren’t just making content — they’re shaping culture. Origin is where their voice finds its biggest stage and real community.',
    quoteAuthor: '— Sonakshi Doshi, Co-Founder',
    bio: [
      'Sonakshi Doshi co-founded Origin to cultivate an authentic, thriving home for Mumbai’s creator community, focusing on creative direction, hands-on workshops, and creator-first culture.',
      'As a passionate reel creator and influencer herself, she drives creator curation, community events, and brand partnerships that resonate deeply with real audiences.',
    ],
    pillars: [
      { title: 'Community & Culture', description: 'Fostering genuine, IRL connections and high-engagement creator communities.' },
      { title: 'Creative Direction', description: 'Curating dynamic workshops, experiential events, and impactful storytelling.' },
    ],
    socialLinks: [
      { label: '@sonakshidoshi5', href: 'https://instagram.com/sonakshidoshi5', primary: true },
      { label: '@origincommune', href: 'https://instagram.com/origincommune', primary: false },
    ],
  },
]

