import { useState, useEffect } from "react";
import { ArrowDown, ArrowRight, Eye, Glasses, HeartPulse, MapPin, MessageCircle, ShieldCheck, Sun, Play } from "lucide-react";
import { Link } from "wouter";
import { Seo } from "@/components/Seo";
import { ArrowLink, Container, ConversionBand, EditorialVisual, Eyebrow, LocationBlock, Section } from "@/components/Primitives";
import { HomeAboutTeamSection } from "@/components/HomeAboutTeamSection";
import { CommunityVideoModal } from "@/components/CommunityVideoModal";
import { whatsappUrl } from "@/lib/site";
const pathways = [
  { number: "01", title: "Eye examinations", copy: "A professional, reassuring place to begin.", href: "/eye-care", icon: Eye },
  { number: "02", title: "Prescription eyewear", copy: "Everyday eyewear selected around your needs.", href: "/eyewear", icon: Glasses },
  { number: "03", title: "Frames & sunglasses", copy: "Styles for work, weekends and everything between.", href: "/eyewear", icon: Sun },
  { number: "04", title: "Medical aids", copy: "Ask us to help confirm your available benefits.", href: "/medical-aids", icon: ShieldCheck },
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
      <section className="home-hero">
        <picture className="home-hero-media">
          <source media="(max-width: 900px)" srcSet="/images/prime-specs/hero/hero-mobile.png" />
          <img src="/images/prime-specs/hero/hero.png" alt="Woman wearing bold black eyeglasses" fetchPriority="high" decoding="async" />
        </picture>
        <div className="home-hero-overlay" aria-hidden="true" />
        <Container className="home-hero-inner">
          <div className="hero-copy reveal">
            <div className="hero-heading">
              <Eyebrow>Rustenburg · South Africa</Eyebrow>
              <h1>Professional<br />eye care.<br /><span>Eyewear<br />that fits<br />your life.</span></h1>
            </div>
            <div className="hero-actions">
              <p>Eye examinations, Prescription Safety Glasses, frames and sunglasses from Prime Specs in Rustenburg.</p>
              <div className="button-row">
                <a className="button button-primary" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> Book via WhatsApp</a>
                <Link className="button button-text" href="/locations">Find a branch <ArrowRight aria-hidden="true" /></Link>
              </div>
            </div>
          </div>
          <a href="#services" className="hero-scroll" aria-label="Scroll to services"><ArrowDown aria-hidden="true" /></a>
        </Container>
      </section>

      <HomeAboutTeamSection />

      <Section id="services" className="pathways-section">
        <Container>
          <div className="section-heading split-heading">
            <Eyebrow>Start here</Eyebrow>
            <h2>What can we help you with?</h2>
          </div>
          <div className="pathway-list">
            {pathways.map(({ number, title, copy, href, icon: Icon }) => (
              <Link key={title} href={href} className="pathway-row">
                <span className="pathway-number">{number}</span>
                <Icon aria-hidden="true" />
                <span className="pathway-title">{title}</span>
                <span className="pathway-copy">{copy}</span>
                <ArrowRight aria-hidden="true" className="pathway-arrow" />
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="care-story-section">
        <Container className="story-grid story-grid-dark">
          <EditorialVisual variant="care" label="Eye examination — authentic Prime Specs clinical photography slot" />
          <div className="story-copy">
            <Eyebrow inverse>Professional eye care</Eyebrow>
            <h2>A calm, clear place to look after your eyes.</h2>
            <p>Our eye-care experience is designed to feel professional and reassuring, with a direct path from examination to eyewear.</p>
            <ArrowLink href="/eye-care" className="arrow-link-light">Explore eye care</ArrowLink>
          </div>
        </Container>
      </Section>

      <Section className="eyewear-story-section">
        <Container>
          <div className="section-heading editorial-heading">
            <div>
              <Eyebrow>Eyewear, considered</Eyebrow>
              <h2>Made for the way<br />you move through life.</h2>
            </div>
            <p>Prescription Safety Glasses, expressive frames and sunglasses—presented with space to see what suits you.</p>
          </div>
          <div className="eyewear-collage">
            <EditorialVisual variant="eyewear" label="Prescription Safety Glasses — authentic Prime Specs eyewear photography slot" className="collage-large" />
            <div className="collage-note"><span>01</span><h3>Prescription Safety<br />Glasses</h3><ArrowLink href="/eyewear">Explore eyewear</ArrowLink></div>
            <EditorialVisual variant="eyewear" label="Frames and sunglasses — authentic Prime Specs product photography slot" className="collage-small" />
          </div>
        </Container>
      </Section>

      <Section className="medical-home-section">
        <Container className="medical-home-grid">
          <div className="medical-symbol"><HeartPulse aria-hidden="true" /></div>
          <div>
            <Eyebrow>Medical aids</Eyebrow>
            <h2>We accept most medical aids.</h2>
          </div>
          <div>
            <p>Contact Prime Specs before your visit and we’ll help confirm your scheme and available optical benefits.</p>
            <ArrowLink href="/medical-aids">How medical-aid enquiries work</ArrowLink>
          </div>
        </Container>
      </Section>

      <Section className="community-section">
        <Container className="community-grid">
          <div className="community-copy">
            <Eyebrow>Here in Rustenburg</Eyebrow>
            <h2>Local eye care with a real community connection.</h2>
            <p>Prime Specs serves Rustenburg from two accessible locations and continues to build its story in the community around them.</p>
            <div className="button-row" style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
              <button onClick={() => setIsVideoOpen(true)} className="button button-yellow">
                <Play aria-hidden="true" style={{ width: '1.1rem', fill: 'currentColor' }} /> Watch community outreach
              </button>
              <ArrowLink href="/about">Our story</ArrowLink>
            </div>
          </div>
          <EditorialVisual variant="community" label="Prime Specs community — authentic outreach photography slot" />
        </Container>
      </Section>

      <Section className="locations-home-section">
        <Container>
          <div className="section-heading locations-heading">
            <div><Eyebrow>Two locations</Eyebrow><h2>Find Prime Specs<br />in Rustenburg.</h2></div>
            <MapPin aria-hidden="true" />
          </div>
          <div className="locations-stack">
            <LocationBlock index={0} />
            <LocationBlock index={1} />
          </div>
          <div className="center-link"><ArrowLink href="/locations">View branch details</ArrowLink></div>
        </Container>
      </Section>

      <ConversionBand />
      <CommunityVideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </>
  );
}
