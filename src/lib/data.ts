import type { IconName } from "./Icons";

const px = (id: number, w = 800, h = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const img = {
  hero: px(6129573, 900, 1120),
  whyChoose: px(7345461, 1000, 1240),
  vision: px(35914207, 1100, 860),
  steps: {
    one: px(7195115, 900, 620),
    two: px(33907384, 900, 620),
    three: px(6627918, 900, 620),
  },
  blog: [
    px(7195424, 900, 680),
    px(6627918, 900, 680),
    px(7195319, 900, 680),
  ],
  blogExtra: [px(5203594, 900, 680), px(5355858, 900, 680), px(18112241, 900, 680)],
};

/* ------------------------------- Nav ------------------------------ */
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Doctors", href: "/doctors" },
  { label: "Blog", href: "/blog" },
];

export const heroAvatars = [
  px(5649997, 160, 160),
  px(3156341, 160, 160),
  px(33815738, 160, 160),
  px(35689887, 160, 160),
];

/* ---------------------------- Services ---------------------------- */
export const services = [
  {
    icon: "baby" as IconName,
    title: "Pediatrics",
    body: "Monitor your child's growth and development closely to ensure their health at every stage.",
  },
  {
    icon: "bandage" as IconName,
    title: "Orthopedics",
    body: "Receive care for bone and muscle health with treatments tailored to your needs.",
  },
  {
    icon: "stomach" as IconName,
    title: "Gastroenterology",
    body: "Comprehensive care for digestive health to address issues with precision and personalized attention.",
  },
  {
    icon: "brain" as IconName,
    title: "Neurology",
    body: "Specialized treatments for brain and nerve health, ensuring advanced and compassionate care always.",
  },
  {
    icon: "heart-pulse" as IconName,
    title: "Cardiology",
    body: "State-of-the-art heart care focused on your cardiovascular health with expertise and dedication.",
  },
  {
    icon: "heart-handshake" as IconName,
    title: "General care",
    body: "Reliable primary healthcare services designed to maintain your well-being at every stage of life.",
  },
];

/* ---------------------------- Features ---------------------------- */
export const features = [
  {
    icon: "calendar" as IconName,
    title: "Easy appointment",
    body: "Schedule your appointments quickly with our simple and efficient booking system.",
  },
  {
    icon: "clipboard" as IconName,
    title: "Personalized plans",
    body: "Receive tailored care plans designed to meet your unique health needs and goals.",
  },
  {
    icon: "plus-medical" as IconName,
    title: "24/7 consultancy",
    body: "Access expert medical advice anytime through secure and reliable virtual visits.",
  },
  {
    icon: "calendar-check" as IconName,
    title: "Medical technology",
    body: "Experience modern healthcare with innovative tools and state-of-the-art equipment.",
  },
  {
    icon: "folder" as IconName,
    title: "Patient records",
    body: "Stay organized with secure, easy access to your medical records whenever needed.",
  },
  {
    icon: "shield-plus" as IconName,
    title: "Care network",
    body: "Connect with top specialists and facilities to ensure complete healthcare coverage.",
  },
];

/* ----------------------------- Process ---------------------------- */
export const steps = [
  {
    num: "01",
    title: "Share your preferences",
    body: "Tell us about your unique needs and preferences to help us create a personalized plan for your care.",
    image: img.steps.one,
    alt: "Doctor waving during a video consultation",
  },
  {
    num: "02",
    title: "Customized solutions",
    body: "We analyze your requirements and craft tailored solutions designed specifically for your goals.",
    image: img.steps.two,
    alt: "Clinical team preparing a treatment plan",
  },
  {
    num: "03",
    title: "Achieve your vision",
    body: "Experience seamless results as we bring your perfect vision to life with precision and care.",
    image: img.steps.three,
    alt: "Clinicians walking through the VitalFlow clinic",
  },
];

/* ----------------------------- Patients --------------------------- */
export const testimonials = [
  {
    name: "Emily Johnson",
    quote:
      "Their service was outstanding. They ensured I was comfortable and informed every step of the way.",
    rating: 5,
    photo: px(5649997, 200, 200),
  },
  {
    name: "Michael Roberts",
    quote:
      "The support I received was excellent. They truly cared about my needs and exceeded my expectations.",
    rating: 5,
    photo: px(3156341, 200, 200),
  },
  {
    name: "Sophia Martinez",
    quote:
      "I felt valued and cared for. Their team made every effort to provide exceptional support and service.",
    rating: 4,
    photo: px(35689887, 200, 200),
  },
  {
    name: "Olivia Harris",
    quote:
      "They were attentive and thorough. Their professionalism and kindness made the entire process seamless.",
    rating: 4,
    photo: px(33815738, 200, 200),
  },
  {
    name: "James Anderson",
    quote:
      "My experience was remarkable. They delivered exactly what they promised with care and dedication.",
    rating: 5,
    photo: px(14950779, 200, 200),
  },
  {
    name: "Daniel Thompson",
    quote:
      "Their team was exceptional. They listened to my concerns and made sure all my needs were addressed.",
    rating: 5,
    photo: px(35490806, 200, 200),
  },
];

/* ------------------------------ Doctors --------------------------- */
export const doctors = [
  {
    name: "Jonathan Reed",
    role: "Gastroenterologist",
    rating: 4.9,
    reviews: 212,
    experience: "14 yrs",
    photo: px(6303591, 700, 900),
    available: true,
  },
  {
    name: "Olivia Bennett",
    role: "Dermatologist",
    rating: 5.0,
    reviews: 178,
    experience: "11 yrs",
    photo: px(16552437, 700, 900),
    available: true,
  },
  {
    name: "Amara Osei",
    role: "Cardiologist",
    rating: 4.9,
    reviews: 243,
    experience: "16 yrs",
    photo: px(19131218, 700, 900),
    available: false,
  },
  {
    name: "Marcus Lind",
    role: "Orthopedic Surgeon",
    rating: 4.8,
    reviews: 141,
    experience: "19 yrs",
    photo: px(37407192, 700, 900),
    available: true,
  },
  {
    name: "Priya Raman",
    role: "Pediatrician",
    rating: 4.9,
    reviews: 302,
    experience: "12 yrs",
    photo: px(15962796, 700, 900),
    available: true,
  },
  {
    name: "Henry Blake",
    role: "Neurologist",
    rating: 4.7,
    reviews: 96,
    experience: "22 yrs",
    photo: px(6129573, 700, 900),
    available: false,
  },
  {
    name: "Nadia Karim",
    role: "General Physician",
    rating: 5.0,
    reviews: 189,
    experience: "10 yrs",
    photo: px(18252410, 700, 900),
    available: true,
  },
  {
    name: "Tomás Ferreira",
    role: "Dental Surgeon",
    rating: 4.8,
    reviews: 121,
    experience: "9 yrs",
    photo: px(6303593, 700, 900),
    available: true,
  },
];

/* ------------------------------- Blog ----------------------------- */
export const posts = [
  {
    title: "The Benefits of Regular Exercise: A Pathway to Health",
    date: "Sep 4, 2024",
    read: "5 min Read",
    image: img.blog[0],
    category: "Wellness",
  },
  {
    title: "Managing Stress for Better Health: Strategies for a Calmer Life",
    date: "Sep 5, 2024",
    read: "5 min Read",
    image: img.blog[1],
    category: "Mental health",
  },
  {
    title: "The Impact of Sleep on Your Health: Why Rest Matters",
    date: "Sep 16, 2024",
    read: "5 min Read",
    image: img.blog[2],
    category: "Lifestyle",
  },
  {
    title: "How Preventive Screenings Detect Disease Years Earlier",
    date: "Sep 21, 2024",
    read: "7 min Read",
    image: img.blogExtra[0],
    category: "Diagnostics",
  },
  {
    title: "A Dentist's Guide to Keeping Your Enamel for Life",
    date: "Oct 2, 2024",
    read: "6 min Read",
    image: img.blogExtra[1],
    category: "Dental",
  },
  {
    title: "Inside Modern Surgery: Safer, Smaller, Smarter",
    date: "Oct 9, 2024",
    read: "8 min Read",
    image: img.blogExtra[2],
    category: "Surgery",
  },
];

/* ------------------------------- FAQ ------------------------------ */
export const faqs = [
  {
    q: "What services do you offer?",
    a: "VitalFlow covers nine departments — from general practice, pediatrics and cardiology to orthopedics, gastroenterology and neurology. Every service is available in clinic or through secure virtual visits.",
  },
  {
    q: "How can I book an appointment?",
    a: "Tap 'Book a call', choose your department and preferred doctor, pick a time slot and you're confirmed instantly. You can also call us at +1 (800) 555-0199 or book through the patient app.",
  },
  {
    q: "Are your services available 24/7?",
    a: "Yes. Our virtual urgent line connects you with a clinician around the clock, and in-clinic urgent care runs from 7am to 9pm every day, including weekends.",
  },
  {
    q: "Do you accept insurance?",
    a: "We work with 40+ major insurers. Add your policy details in the app and we verify coverage, handle pre-authorisation and bill your insurer directly.",
  },
  {
    q: "What makes your care unique?",
    a: "One medical record, one care team, and transparent pricing before you book. Our clinicians focus on prevention first, and every treatment plan is built around your life — not an average patient.",
  },
];

/* --------------------------- Footer data -------------------------- */
export const footerColumns = [
  {
    title: "Static pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "404", href: "/oops" },
    ],
  },
  {
    title: "CMS Pages",
    links: [
      { label: "Services", href: "/services" },
      { label: "Doctors", href: "/doctors" },
      { label: "Careers", href: "/about" },
      { label: "Blogs", href: "/blog" },
    ],
  },
  {
    title: "Detail pages",
    links: [
      { label: "Service (CMS)", href: "/services" },
      { label: "Doctor (CMS)", href: "/doctors" },
      { label: "Career (CMS)", href: "/about" },
      { label: "Blogs (CMS)", href: "/blog" },
    ],
  },
];

export const socialLinks = [
  { label: "LinkedIn", icon: "linkedin" as IconName },
  { label: "Facebook", icon: "facebook" as IconName },
  { label: "Twitter", icon: "twitter" as IconName },
  { label: "Youtube", icon: "youtube" as IconName },
];
