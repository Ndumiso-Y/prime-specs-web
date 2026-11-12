export const SITE = {
  name: "Prime Specs",
  url: "https://www.primespecs.co.za",
  phone: "014 597 3537",
  phoneHref: "tel:+27145973537",
  whatsapp: "071 990 2234",
  whatsappBase: "https://wa.me/27719902234",
  facebook: "https://www.facebook.com/PrimeSpecs",
} as const;

export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/eye-care", label: "Eye Care" },
  { href: "/eyewear", label: "Eyewear" },
  { href: "/medical-aids", label: "Medical Aids" },
  { href: "/about", label: "About" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
] as const;

export const LOCATIONS = [
  {
    name: "Prime Specs",
    displayName: "Prime Specs — CBD",
    image: "/images/prime-specs/locations/main-exterior.webp",
    shortName: "Rustenburg CBD",
    mapEmbed: "https://www.google.com/maps?q=Corner+Thabo+Mbeki+and+Oliver+Tambo+Drive+Rustenburg+2999&output=embed",
    addressLines: [
      "Corner Thabo Mbeki & Oliver Tambo Drive",
      "Rustenburg, 2999",
      "South Africa",
    ],
    phone: "014 597 3537",
    phoneHref: "tel:+27145973537",
    email: "rustenburg@primespecs.co.za",
    emailHref: "mailto:rustenburg@primespecs.co.za",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Prime+Specs+Corner+Thabo+Mbeki+and+Oliver+Tambo+Drive+Rustenburg+2999",
  },
  {
    name: "Prime Specs Kopano Mall",
    displayName: "Prime Specs — Kopano Mall",
    image: "/images/prime-specs/locations/kopano-exterior.webp",
    shortName: "Kopano Mall",
    mapEmbed: "https://www.google.com/maps?q=Kopano+Mall+Fatima+Bhayat+Street+Rustenburg&output=embed",
    addressLines: [
      "Shop No. 06, Kopano Mall",
      "Fatima Bhayat Street, Rustenburg",
      "South Africa",
    ],
    phone: "014 065 0880",
    phoneHref: "tel:+27140650880",
    email: "kopano@primespecs.co.za",
    emailHref: "mailto:kopano@primespecs.co.za",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Prime+Specs+Kopano+Mall+Shop+6+Fatima+Bhayat+Street+Rustenburg",
    practiceNumber: "7030916",
  },
] as const;

export const defaultWhatsappMessage =
  "Hello Prime Specs, I’d like to book an eye examination.";

export function whatsappUrl(message = defaultWhatsappMessage) {
  return `${SITE.whatsappBase}?text=${encodeURIComponent(message)}`;
}

export const MEDICAL_AIDS = [
  { name: "Fedhealth", logo: "/images/medical-aids/fedhealth.svg", height: 30 },
  { name: "Bonitas", logo: "/images/medical-aids/bonitas.png", height: 62 },
  { name: "Bestmed", logo: "/images/medical-aids/bestmed.svg", height: 30 },
  { name: "BCIMA Medical Aid", logo: "/images/medical-aids/bcima.png", height: 76 },
  { name: "GEMS", logo: "/images/medical-aids/gems.png", height: 62 },
  { name: "Sisonke Health Medical Scheme", logo: "/images/medical-aids/sisonke.png", height: 64 },
  { name: "Thebemed", logo: "/images/medical-aids/thebemed.svg", height: 62 },
] as const;
