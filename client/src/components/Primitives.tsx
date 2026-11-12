import type { ReactNode } from "react";
import { ArrowUpRight, Check, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "wouter";
import { LOCATIONS, MEDICAL_AIDS, whatsappUrl } from "@/lib/site";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`container ${className}`}>{children}</div>;
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`section-space ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children, inverse = false }: { children: ReactNode; inverse?: boolean }) {
  return <p className={`eyebrow ${inverse ? "eyebrow-inverse" : ""}`}>{children}</p>;
}

export function ArrowLink({
  href,
  children,
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  const content = (
    <span className="arrow-link-inner">
      {children}
      <ArrowUpRight aria-hidden="true" />
    </span>
  );
  const classes = `arrow-link ${className}`;
  if (external || href.startsWith("http") || href.startsWith("tel:")) {
    return (
      <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

export function EditorialVisual({
  variant = "hero",
  label,
  className = "",
}: {
  variant?: "hero" | "care" | "eyewear" | "community" | "branch" | "contact";
  label: string;
  className?: string;
}) {
  const images = {
    hero: "/images/prime-specs/hero/hero.png",
    care: "/images/prime-specs/eye-care/exam-room.jpg",
    eyewear: className.includes("collage-small") ? "/images/prime-specs/eyewear/frames.jpg" : "/images/prime-specs/eyewear/display-wall.jpg",
    community: "/images/prime-specs/community/outreach.jpg",
    branch: "/images/prime-specs/locations/main-exterior.jpg",
    contact: "/images/prime-specs/interiors/reception.jpg",
  };

  const imageSrc = images[variant];
  const mobileImageSrc = variant === "hero" ? "/images/prime-specs/hero/hero-mobile.png" : null;

  return (
    <div className={`editorial-visual editorial-${variant} ${className}`} aria-label={label} role="img">
      <picture className="editorial-picture">
        {mobileImageSrc && <source media="(max-width: 640px)" srcSet={mobileImageSrc} />}
        <img className="editorial-image" src={imageSrc} alt={label} />
      </picture>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
  visual,
}: {
  eyebrow: string;
  title: ReactNode;
  copy: string;
  visual: "care" | "eyewear" | "community" | "branch" | "contact";
}) {
  return (
    <section className="page-hero">
      <Container className="page-hero-grid">
        <div className="page-hero-copy reveal">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="display-title">{title}</h1>
          <p className="lede">{copy}</p>
        </div>
        <EditorialVisual variant={visual} label={`${eyebrow} — authentic Prime Specs photography slot`} />
      </Container>
    </section>
  );
}

export function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="feature-list">
      {items.map((item) => (
        <li key={item}>
          <Check aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function LocationBlock({ index }: { index: number }) {
  const location = LOCATIONS[index];
  return (
    <article className="location-block">
      <div className="location-number">0{index + 1}</div>
      <div>
        <p className="mini-label">Rustenburg branch</p>
        <h3>{location.name}</h3>
        <address>
          {location.addressLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </address>
        {"practiceNumber" in location && (
          <p className="practice-number">Practice no. {location.practiceNumber}</p>
        )}
      </div>
      <div className="location-actions">
        <a href={location.phoneHref}>
          <Phone aria-hidden="true" /> {location.phone}
        </a>
        <a href={location.emailHref}>
          <Mail aria-hidden="true" /> {location.email}
        </a>
        <a href={location.directions} target="_blank" rel="noreferrer">
          <MapPin aria-hidden="true" /> Directions
        </a>
      </div>
    </article>
  );
}

export function ConversionBand({
  title = "Ready to look after your eyes?",
  copy = "Message Prime Specs to book an eye examination or ask about eyewear and medical-aid benefits.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="conversion-band">
      <Container className="conversion-grid">
        <div>
          <Eyebrow inverse>Talk to Prime Specs</Eyebrow>
          <h2>{title}</h2>
          <p>{copy}</p>
        </div>
        <a className="button button-yellow" href={whatsappUrl()} target="_blank" rel="noreferrer">
          <MessageCircle aria-hidden="true" /> WhatsApp us
        </a>
      </Container>
    </section>
  );
}

export function PageHeroV2({
  eyebrow,
  title,
  copy,
  image,
  alt,
  position = "center",
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  copy: string;
  image: string;
  alt: string;
  position?: string;
  children?: ReactNode;
}) {
  return (
    <section className="v2-page-hero">
      <Container className="v2-page-hero-grid">
        <div className="v2-page-hero-copy reveal">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1>{title}</h1>
          <p className="lede">{copy}</p>
          {children && <div className="button-row">{children}</div>}
        </div>
        <div className="v2-page-hero-media">
          <img src={image} alt={alt} style={{ objectPosition: position }} fetchPriority="high" decoding="async" />
        </div>
      </Container>
    </section>
  );
}

export function BranchCards() {
  return (
    <div className="v2-branch-grid">
      {LOCATIONS.map((location) => (
        <article key={location.displayName} className="v2-branch">
          <div className="v2-branch-media">
            <img src={location.image} alt={`${location.displayName} storefront`} loading="lazy" decoding="async" />
          </div>
          <div className="v2-branch-body">
            <h3>{location.displayName}</h3>
            <address>
              {location.addressLines.slice(0, 2).map((line) => <span key={line}>{line}</span>)}
            </address>
            {"practiceNumber" in location && <p className="practice-number">Practice no. {location.practiceNumber}</p>}
            <div className="v2-branch-contact">
              <a href={location.phoneHref}><Phone aria-hidden="true" /> {location.phone}</a>
              <a href={location.emailHref}><Mail aria-hidden="true" /> {location.email}</a>
            </div>
            <a className="button button-outline" href={location.directions} target="_blank" rel="noreferrer"><MapPin aria-hidden="true" /> Directions</a>
          </div>
        </article>
      ))}
    </div>
  );
}

export function MedicalAidLogos({ className = "" }: { className?: string }) {
  return (
    <ul className={`v2-logos ${className}`} aria-label="Medical aid schemes">
      {MEDICAL_AIDS.map((aid) => (
        <li key={aid.name}>
          <img src={aid.logo} alt={aid.name} loading="lazy" decoding="async" style={{ maxHeight: aid.height }} />
        </li>
      ))}
    </ul>
  );
}
