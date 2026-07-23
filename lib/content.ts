export const clinic = {
  name: "Aesthetics Labs",
  tagline: "Skin confidence, scientifically refined.",
  shortDescription:
    "A patient-first medical aesthetics clinic in Lahore offering personalized skincare and cosmetic treatments in a calm, clinical setting.",
  phone: "+92 300 1234567",
  phoneHref: "tel:+923001234567",
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
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
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
    id: "laser-hair",
    name: "Laser Hair Reduction",
    category: "Laser",
    blurb:
      "Customized sessions for smoother skin with progressive reduction in unwanted hair across face and body areas.",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=900&q=80",
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
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80",
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
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80",
    fromPrice: "Consultation required",
  },
  {
    id: "chemical-peel",
    name: "Medical Chemical Peel",
    category: "Skin Renewal",
    blurb:
      "Targeted peels that improve dullness, pigmentation, and uneven texture under clinician guidance.",
    image:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=900&q=80",
    fromPrice: "From Rs. 10,000",
  },
  {
    id: "pigment",
    name: "Pigment & Tone Correction",
    category: "Skin Renewal",
    blurb:
      "Protocols designed to address sun spots, melasma concerns, and uneven tone with staged treatment plans.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80",
    fromPrice: "From Rs. 14,000",
  },
  {
    id: "skin-boosters",
    name: "Skin Boosters",
    category: "Injectables",
    blurb:
      "Hydrating micro-treatments that improve skin quality, bounce, and glow from within.",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80",
    fromPrice: "Consultation required",
  },
  {
    id: "consultation",
    name: "Skin Consultation",
    category: "Facials",
    blurb:
      "A thorough assessment of your goals, skin type, and history—so every treatment recommendation feels clear and personal.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
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

export const testimonials = [
  {
    id: "t1",
    quote:
      "My HydraFacial left my skin calm and glowing—not stripped. The team explained every step without pressure.",
    name: "Mariam K.",
    detail: "HydraFacial",
  },
  {
    id: "t2",
    quote:
      "I was nervous about laser hair reduction. The consultation made the plan clear, and the results after a few sessions are already noticeable.",
    name: "Hira S.",
    detail: "Laser Hair Reduction",
  },
  {
    id: "t3",
    quote:
      "Subtle filler work that still looks like me. Professional, clean clinic, and thoughtful aftercare advice.",
    name: "Ayesha R.",
    detail: "Dermal Fillers",
  },
  {
    id: "t4",
    quote:
      "Finally a place that listens. My pigment plan feels realistic, and my skin tone looks more even already.",
    name: "Sana M.",
    detail: "Pigment Correction",
  },
  {
    id: "t5",
    quote:
      "From booking to treatment, everything felt organized. The carbon peel gave me a fresh, smoother finish.",
    name: "Zoya A.",
    detail: "Carbon Laser Peel",
  },
  {
    id: "t6",
    quote:
      "They never oversold. Just clear recommendations that fit my skin and my schedule.",
    name: "Fatima N.",
    detail: "Skin Consultation",
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
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "g2",
    type: "before-after",
    title: "Smoother skin texture",
    treatment: "Carbon Laser Peel",
    before:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "g3",
    type: "before-after",
    title: "Refined tone & glow",
    treatment: "Medical Peel",
    before:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80",
    after:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80",
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
    title: "Detail-led care",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb9e3f7?auto=format&fit=crop&w=1200&q=80",
  },
];

export const trustPoints = [
  { label: "Clinician-led care", value: "Medical oversight" },
  { label: "Personalized plans", value: "No one-size protocols" },
  { label: "Calm environment", value: "Quiet, private suites" },
  { label: "Clear pricing", value: "Transparent consults" },
] as const;

export const images = {
  hero: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=2000&q=80",
  about:
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80",
  cta: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1600&q=80",
} as const;

export const ownerNote = {
  eyebrow: "A note from our founder",
  hook: "I built this clinic for the version of you that wants to feel like yourself again.",
  paragraphs: [
    "Years ago, I sat across from patients who weren’t chasing perfection they were tired of feeling unseen in their own skin. Some had been sold treatments they didn’t need. Others had never been asked what “natural” meant to them. That stayed with me.",
    "Aesthetics Labs started as a quiet promise: listen first, explain clearly, and only recommend what I’d choose for someone I love. Every consultation, every protocol, every calm room in this clinic comes back to that.",
  ],
  name: "Dr. Sara Malik",
  role: "Founder & Medical Director",
  image:
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
} as const;

export const homeIntro = {
  heading: "Discover the beauty in self confidence",
  notes: [
    "Confidence isn’t about changing who you are it’s about feeling at ease in your own skin again.",
    "At Aesthetics Labs, every treatment begins with listening, so the path we recommend feels personal, calm, and true to you.",
  ],
} as const;

export const servicesSpotlight = {
  eyebrow: "Our treatments",
  title: "Care that meets you where you are",
  description:
    "From glow facials to clinician-guided renewals—explore the full menu and find what fits your skin goals.",
  ctaLabel: "View all services",
  ctaHref: "/services",
  frames: [
    {
      src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
      label: "HydraFacial glow",
    },
    {
      src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1200&q=80",
      label: "Facial laser care",
    },
    {
      src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1200&q=80",
      label: "Skin renewal ritual",
    },
    {
      src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=80",
      label: "Refined, natural finish",
    },
  ],
} as const;
