export const clinic = {
  name: "Aesthetics Labs",
  tagline: "Skin confidence, scientifically refined.",
  shortDescription:
    "A patient-first medical aesthetics clinic in Lahore offering personalized skincare and cosmetic treatments in a calm, clinical setting.",
  phone: "+92 300 1234567",
  phoneHref: "tel:+923001234567",
  whatsappHref:
    "https://wa.me/923001234567?text=Hi%2C%20I%27d%20like%20to%20book%20a%20consultation%20at%20Aesthetics%20Labs.",
  email: "hello@aestheticslabs.demo",
  emailHref: "mailto:hello@aestheticslabs.demo",
  address: "12-A, MM Alam Road, Gulberg III, Lahore",
  city: "Lahore",
  hours: [
    { days: "Mon – Sat", time: "11:00 AM – 8:00 PM" },
    { days: "Sunday", time: "By appointment" },
  ],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.0!2d74.345!3d31.520!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMxJzEyLjAiTiA3NMKwMjAnNDIuMCJF!5e0!3m2!1sen!2s!4v1700000000000",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Aesthetics+Labs+Gulberg+Lahore",
  googleRating: 4.9,
  googleReviewCount: 128,
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export type ServiceCategory =
  | "Facials"
  | "Laser"
  | "Injectables"
  | "Skin Renewal";

export type Service = {
  id: string;
  name: string;
  category: ServiceCategory;
  blurb: string;
  image: string;
  fromPrice?: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    id: "hydrafacial",
    name: "HydraFacial",
    category: "Facials",
    blurb:
      "A multi-step cleanse, extract, and hydrate treatment that leaves skin visibly clearer and more luminous—ideal before events or as a monthly ritual.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80",
    fromPrice: "From Rs. 12,000",
    featured: true,
  },
  {
    id: "carbon-peel",
    name: "Carbon Laser Peel",
    category: "Laser",
    blurb:
      "A gentle laser facial that refines pores, softens texture, and restores a fresher tone with little to no downtime.",
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=80",
    fromPrice: "From Rs. 15,000",
    featured: true,
  },
  {
    id: "spectra-peel",
    name: "Spectra Peel Laser Treatment",
    category: "Laser",
    blurb:
      "Painless laser renewal on FDA & CE approved USA machines—clearer, fresher skin with a patient-focused AI approach and natural-looking results.",
    image: "/results/spectra-peel-after.jpg",
    fromPrice: "From Rs. 7,500",
    featured: true,
  },
  {
    id: "laser-hair",
    name: "Laser Hair Reduction",
    category: "Laser",
    blurb:
      "Customized sessions for smoother skin with progressive reduction in unwanted hair across face and body areas.",
    image:
      "https://images.unsplash.com/photo-1560750588-63c2c6af4b2e?auto=format&fit=crop&w=900&q=80",
    fromPrice: "From Rs. 8,000",
    featured: true,
  },
  {
    id: "botox",
    name: "Anti-Wrinkle Injections",
    category: "Injectables",
    blurb:
      "Softens expression lines on the forehead, frown area, and crow’s feet while keeping natural movement.",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb9e3f7?auto=format&fit=crop&w=900&q=80",
    fromPrice: "Consultation required",
    featured: true,
  },
  {
    id: "fillers",
    name: "Dermal Fillers",
    category: "Injectables",
    blurb:
      "Restore subtle volume and contour to lips, cheeks, and smile lines with a natural-looking finish.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
    fromPrice: "Consultation required",
  },
  {
    id: "chemical-peel",
    name: "Medical Chemical Peel",
    category: "Skin Renewal",
    blurb:
      "Targeted peels that improve dullness, pigmentation, and uneven texture under clinician guidance.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
    fromPrice: "From Rs. 10,000",
  },
  {
    id: "pigment",
    name: "Pigment & Tone Correction",
    category: "Skin Renewal",
    blurb:
      "Protocols designed to address sun spots, melasma concerns, and uneven tone with staged treatment plans.",
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=80",
    fromPrice: "From Rs. 14,000",
  },
  {
    id: "skin-boosters",
    name: "Skin Boosters",
    category: "Injectables",
    blurb:
      "Hydrating micro-treatments that improve skin quality, bounce, and glow from within.",
    image:
      "https://images.unsplash.com/photo-1598440947619-72d6213179bb?auto=format&fit=crop&w=900&q=80",
    fromPrice: "Consultation required",
  },
  {
    id: "consultation",
    name: "Skin Consultation",
    category: "Facials",
    blurb:
      "A thorough assessment of your goals, skin type, and history—so every treatment recommendation feels clear and personal.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
    fromPrice: "Complimentary with booking",
  },
];

export const serviceCategories: ServiceCategory[] = [
  "Facials",
  "Laser",
  "Injectables",
  "Skin Renewal",
];

export const team = [
  {
    id: "sara",
    name: "Dr. Sara Malik",
    role: "Medical Director",
    bio: "Dermatology trained clinician focused on natural results and evidence led aesthetic protocols.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "amina",
    name: "Amina Raza",
    role: "Lead Aesthetician",
    bio: "Specialist in HydraFacial and laser facials with a calm, detail-first chairside manner.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "hassan",
    name: "Dr. Hassan Ali",
    role: "Aesthetic Physician",
    bio: "Experienced in injectables and skin rejuvenation with an emphasis on balanced, refined outcomes.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "noor",
    name: "Noor Fatima",
    role: "Patient Care Lead",
    bio: "Guides every visit from first inquiry to aftercare so patients feel informed and at ease.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
] as const;

export const googleReviews = [
  {
    id: "t1",
    quote:
      "My HydraFacial left my skin calm and glowing. Clear steps, no pressure.",
    name: "Mariam K.",
    rating: 5,
    relativeTime: "2 weeks ago",
  },
  {
    id: "t2",
    quote:
      "Nervous about laser at first—the plan was clear and results showed quickly.",
    name: "Hira S.",
    rating: 5,
    relativeTime: "a month ago",
  },
  {
    id: "t3",
    quote:
      "Subtle filler that still looks like me. Clean clinic, thoughtful aftercare.",
    name: "Ayesha R.",
    rating: 5,
    relativeTime: "3 weeks ago",
  },
  {
    id: "t4",
    quote:
      "They listen. My pigment plan feels realistic and my tone is already more even.",
    name: "Sana M.",
    rating: 5,
    relativeTime: "2 months ago",
  },
  {
    id: "t5",
    quote:
      "Organized from booking to treatment. Carbon peel left a fresh, smoother finish.",
    name: "Zoya A.",
    rating: 4,
    relativeTime: "a month ago",
  },
  {
    id: "t6",
    quote:
      "No upselling—just clear recommendations that fit my skin and schedule.",
    name: "Fatima N.",
    rating: 5,
    relativeTime: "3 months ago",
  },
] as const;

export type GalleryItem =
  | {
      id: string;
      type: "before-after";
      title: string;
      treatment: string;
      before: string;
      after: string;
    }
  | {
      id: string;
      type: "ambiance";
      title: string;
      image: string;
    };

export const gallery: GalleryItem[] = [
  {
    id: "g1",
    type: "before-after",
    title: "Clearer, calmer complexion",
    treatment: "HydraFacial series",
    before:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "g2",
    type: "before-after",
    title: "Smoother skin texture",
    treatment: "Carbon Laser Peel",
    before:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "g3",
    type: "before-after",
    title: "Refined tone & glow",
    treatment: "Medical Peel",
    before:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "g4",
    type: "ambiance",
    title: "Treatment suite",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "g5",
    type: "ambiance",
    title: "Calm clinical lounge",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "g6",
    type: "ambiance",
    title: "Clinician-led care",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb9e3f7?auto=format&fit=crop&w=1200&q=80",
  },
];

export const resultsShowcase = {
  eyebrow: "",
  title: "Why Patients Trust Us",
  description: "",
  featured: {
    id: "spectra-peel",
    title: "Spectra Peel Laser Treatment",
    treatment: "Laser skin renewal",
    priceLabel: "Prices start from",
    price: "Rs. 7,500.00 PKR",
    before: "/results/spectra-peel-before.jpg",
    after: "/results/spectra-peel-after.jpg",
    benefits: [
      "Targets congestion, dullness, and uneven tone",
      "Painless sessions with minimal downtime",
      "USA machines — FDA & CE approved",
      "Patient-focused AI treatment mapping",
      "Natural-looking clarity without a ‘treated’ look",
    ],
  },
} as const;

export const trustPoints = [
  { label: "Honest Consultations" },
  { label: "Transparent Pricing" },
  { label: "Doctor-Led Care" },
  { label: "Natural-Looking Results" },
  { label: "Support Beyond the Appointment" },
] as const;

export const images = {
  hero: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=2000&q=80",
  about:
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80",
  cta: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1600&q=80",
} as const;

export const ownerNote = {
  title: "A Note from Dr. Sara Malik",
  paragraphs: [
    "When I started practicing aesthetic medicine, I realized that most people weren't looking to change who they were—they simply wanted to feel more confident in their own skin. That belief has shaped the way I treat every patient.",
    "I believe in honest advice, natural-looking results, and recommending only what is truly needed. My goal has always been to make every patient feel heard, comfortable, and confident throughout their journey.",
    "Thank you for trusting Aesthetics Labs. It is a privilege to be a part of your story.",
  ],
  name: "Dr. Sara Malik",
  role: "Founder & Medical Director",
  image:
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
} as const;

export const servicesSpotlight = {
  eyebrow: "",
  title: "UltraClear® Cold Fiber Laser",
  description:
    "Experience the latest advancement in laser technology with the UltraClear® Cold Fiber Laser, designed to improve skin texture, reduce fine lines, acne scars, and pigmentation with minimal downtime. This innovative treatment delivers smoother, brighter, and more youthful-looking skin safely and comfortably.",
  ctaLabel: "View all services",
  ctaHref: "/services",
  videoSrc: "/media/clinic-treatment.mp4",
  videoPoster: "/media/clinic-treatment-poster.jpg",
  videoLabel: "UltraClear® Cold Fiber Laser",
} as const;
