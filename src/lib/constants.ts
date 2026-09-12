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
    date: 'Aug 2024',
    venue: 'Lower Parel, Mumbai',
    image: '/images/events/bedazzle.jpg',
    tag: 'Workshop',
  },
  {
    id: 2,
    title: 'Ride the Night',
    date: 'Jul 2024',
    venue: 'Bandra–Worli Sea Link',
    image: '/images/events/night-ride.jpg',
    tag: 'Cycling',
  },
  {
    id: 3,
    title: 'Padel Meetup',
    date: 'Jun 2024',
    venue: 'Juhu, Mumbai',
    image: '/images/events/padel.jpg',
    tag: 'Sports',
  },
  {
    id: 4,
    title: 'Creator Mixer',
    date: 'May 2024',
    venue: 'Colaba, Mumbai',
    image: '/images/events/mixer.jpg',
    tag: 'Networking',
  },
  {
    id: 5,
    title: 'Brand Collab Sprint',
    date: 'Apr 2024',
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
