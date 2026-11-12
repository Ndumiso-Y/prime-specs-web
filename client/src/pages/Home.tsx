import { useState, useEffect } from "react";
import { ArrowRight, Eye, Glasses, HeartHandshake, Mail, MapPin, MessageCircle, Phone, Play, ShieldCheck, ShieldPlus, Sun, Users } from "lucide-react";
import { Link } from "wouter";
import { Seo } from "@/components/Seo";
import { ArrowLink, BranchCards, Container, ConversionBand, Eyebrow, MedicalAidLogos, Section } from "@/components/Primitives";
import { CommunityVideoModal } from "@/components/CommunityVideoModal";
import { LOCATIONS, whatsappUrl } from "@/lib/site";

const proofPoints = [
  { icon: MapPin, title: "2 Rustenburg locations", copy: "CBD and Kopano Mall" },
  { icon: HeartHandshake, title: "Community screenings", copy: "In local schools and groups" },
  { icon: ShieldCheck, title: "Medical aids accepted", copy: "Ask us to confirm your scheme" },
];

const services = [
  {
    icon: Eye,
    title: "Eye Examinations",
    copy: "A professional, reassuring place to start looking after your eyes.",
    cta: "Learn more",
    href: "/eye-care",
    image: "/images/prime-specs/eye-care/exam-room.webp",
    alt: "Eye examination room at Prime Specs",
    position: "center 40%",
  },
  {
    icon: Glasses,
    title: "Prescription Safety Glasses",
    copy: "Protective eyewear made to your prescription, for work and everyday use.",
    cta: "Explore eyewear",
    href: "/eyewear",
    image: "/images/prime-specs/eyewear/product-set-card.webp",
    alt: "Prescription and sun eyewear frames at Prime Specs",
    position: "center top",
  },
  {
    icon: Sun,
    title: "Frames & Sunglasses",
    copy: "Styles for work, weekends and everything between.",
    cta: "Explore styles",
    href: "/eyewear",
    image: "/images/prime-specs/eyewear/display-wall.webp",
    alt: "Frame display wall inside Prime Specs",
    position: "center 35%",
  },
  {
    icon: ShieldCheck,
    title: "Medical Aids",
    copy: "We help you confirm your scheme and optical benefits before your visit.",
    cta: "Check medical aids",
    href: "/medical-aids",
    image: null,
    alt: "",
    position: "center",
  },
  {
    icon: Users,
    title: "Our Team",
    copy: "Real Rustenburg people who put your vision first.",
    cta: "Meet the team",
    href: "/about",
    image: "/images/prime-specs/team/team-group-yellow.webp",
    alt: "Prime Specs team in yellow uniforms inside the practice",
    position: "center 36%",
  },
  {
    icon: MapPin,
    title: "Our Locations",
    copy: "Visit us in the Rustenburg CBD or at Kopano Mall.",
    cta: "View branches",
    href: "/locations",
    image: "/images/prime-specs/locations/main-exterior.webp",
    alt: "Prime Specs storefront in the Rustenburg CBD",
    position: "62% 58%",
  },
];


export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const hasSeenVideo = sessionStorage.getItem("primeSpecsCommunityVideoSeen");
    if (!hasSeenVideo) {
      const timer = setTimeout(() => {
        setIsVideoOpen(true);
        sessionStorage.setItem("primeSpecsCommunityVideoSeen", "true");
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Seo title="Prime Specs | Optometrist & Eyewear in Rustenburg" description="Professional eye examinations, Prescription Safety Glasses, frames and sunglasses from Prime Specs at two Rustenburg locations." />
      <section className="home-hero v2-hero">
        <picture className="home-hero-media">
          <source media="(max-width: 900px)" srcSet="/images/prime-specs/hero/hero-mobile.webp" />
          <img src="/images/prime-specs/hero/hero.webp" alt="Woman wearing bold black eyeglasses" fetchPriority="high" decoding="async" />
        </picture>
        <div className="home-hero-overlay" aria-hidden="true" />
        <Container className="home-hero-inner">
          <div className="hero-copy reveal">
            <div className="hero-heading">
              <Eyebrow>Your optometrist in Rustenburg</Eyebrow>
              <h1>Professional eye care. <span>Eyewear that fits your life.</span></h1>
            </div>
            <div className="hero-actions">
              <p>Eye examinations, expert care, frames and sunglasses — right here in Rustenburg.</p>
              <div className="button-row">
                <a className="button button-primary" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> Book via WhatsApp <ArrowRight aria-hidden="true" /></a>
                <Link className="button button-ghost" href="/locations"><MapPin aria-hidden="true" /> Find a branch <ArrowRight aria-hidden="true" /></Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div className="v2-proof-wrap">
        <Container>
          <ul className="v2-proof">
            {proofPoints.map(({ icon: Icon, title, copy }) => (
              <li key={title}>
                <Icon aria-hidden="true" />
                <div><strong>{title}</strong><span>{copy}</span></div>
              </li>
            ))}
          </ul>
        </Container>
      </div>

      <Section id="services" className="v2-services">
        <Container>
          <div className="v2-heading">
            <div>
              <Eyebrow>What we do</Eyebrow>
              <h2>Everything your eyes need, in one place.</h2>
            </div>
            <p>From your eye test to the frame you walk out wearing, with help on medical aid along the way.</p>
          </div>
          <div className="v2-grid">
            {services.map(({ icon: Icon, title, copy, cta, href, image, alt, position }) => (
              <Link key={title} href={href} className="v2-card">
                <div className={`v2-card-media ${image ? "" : "v2-card-media-plain"}`}>
                  {image ? (
                    <img src={image} alt={alt} loading="lazy" decoding="async" style={{ objectPosition: position }} />
                  ) : (
                    <ShieldPlus aria-hidden="true" />
                  )}
                </div>
                <div className="v2-card-body">
                  <Icon aria-hidden="true" className="v2-card-icon" />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <span className="v2-card-link">{cta} <ArrowRight aria-hidden="true" /></span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="v2-community-section">
        <Container>
          <div className="v2-community">
            <button type="button" className="v2-community-media" onClick={() => setIsVideoOpen(true)} aria-label="Watch our community work">
              <img src="/images/prime-specs/community/outreach.webp" alt="Prime Specs community eye screening outreach" loading="lazy" decoding="async" />
              <span className="v2-play"><Play aria-hidden="true" /></span>
            </button>
            <div className="v2-community-copy">
              <Eyebrow inverse>Community</Eyebrow>
              <h2>Clearer vision, closer to home.</h2>
              <p>Prime Specs takes eye screening out of the practice and into Rustenburg — from learners at Tlhage Primary School to a group of 140 police students.</p>
              <div className="button-row">
                <button type="button" onClick={() => setIsVideoOpen(true)} className="button button-yellow">
                  <Play aria-hidden="true" /> Watch our community work
                </button>
                <ArrowLink href="/about" className="arrow-link-light">Our story</ArrowLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="v2-medical">
        <Container className="v2-medical-inner">
          <div>
            <Eyebrow>Medical aids</Eyebrow>
            <h2>We accept most medical aids.</h2>
            <p>Contact Prime Specs to confirm your scheme and available optical benefits before your visit.</p>
            <ArrowLink href="/medical-aids">Check medical aids</ArrowLink>
          </div>
          <MedicalAidLogos className="v2-logos-rail" />
        </Container>
      </Section>

      <Section className="v2-branches">
        <Container>
          <div className="v2-heading">
            <div>
              <Eyebrow>Two locations</Eyebrow>
              <h2>Find Prime Specs in Rustenburg.</h2>
            </div>
            <ArrowLink href="/locations">View branch details</ArrowLink>
          </div>
          <BranchCards />
        </Container>
      </Section>

      <ConversionBand copy="Book an examination or speak to the Prime Specs team." />
      <CommunityVideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </>
  );
}
