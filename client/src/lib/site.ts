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
    shortName: "Thabo Mbeki",
    addressLines: [
      "Corner Thabo Mbeki & Oliver Tambo Drive",
      "Rustenburg, 2999",
      "South Africa",
    ],
    phone: "014 597 3537",
    phoneHref: "tel:+27145973537",
    directions:
      "https://www.google.com/maps/search/?api=1&query=Prime+Specs+Corner+Thabo+Mbeki+and+Oliver+Tambo+Drive+Rustenburg+2999",
  },
  {
    name: "Prime Specs Kopano Mall",
    shortName: "Kopano Mall",
    addressLines: [
      "Shop No. 06, Kopano Mall",
      "Fatima Bhayat Street, Rustenburg",
      "South Africa",
    ],
    phone: "014 065 0880",
    phoneHref: "tel:+27140650880",
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
