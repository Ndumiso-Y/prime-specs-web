import { FormEvent, useState } from "react";
import { ArrowRight, CircleHelp, Eye, Glasses, HardHat, HeartHandshake, Mail, MapPin, MessageCircle, Phone, ShieldCheck, Sun, Users } from "lucide-react";
import { Link } from "wouter";
import { Seo } from "@/components/Seo";
import { ArrowLink, Container, ConversionBand, EditorialVisual, Eyebrow, FeatureList, BranchCards, MedicalAidLogos, PageHeroV2, Section } from "@/components/Primitives";
import { HomeAboutTeamSection } from "@/components/HomeAboutTeamSection";
import { CommunityImpact } from "@/components/CommunityImpact";
import { LOCATIONS, SITE, whatsappUrl } from "@/lib/site";

export function EyeCare() {
  const steps = [
    { title: "Start with a conversation", copy: "Message or call Prime Specs to arrange your visit and ask anything you need to know beforehand." },
    { title: "Have your eyes examined", copy: "Visit the practice for a professional eye examination in a calm, well-equipped room." },
    { title: "Choose the right eyewear", copy: "If you need glasses, we help you pick frames and lenses that suit your prescription and your day." },
  ];
  return <>
    <Seo title="Eye Examinations in Rustenburg | Prime Specs" description="Professional eye examinations in a reassuring environment at Prime Specs in Rustenburg. Book directly via WhatsApp." path="/eye-care" />
    <PageHeroV2 eyebrow="Eye care" title={<>A clearer next step <span>for your eyes.</span></>} copy="Professional eye examinations in a calm, approachable practice, with help choosing the eyewear you need next." image="/images/prime-specs/eye-care/exam-room-detail.webp" alt="Examination chair and testing equipment at Prime Specs" position="center 40%">
      <a className="button button-primary" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> Book via WhatsApp <ArrowRight aria-hidden="true" /></a>
      <Link className="button button-ghost" href="/locations"><MapPin aria-hidden="true" /> Find a branch</Link>
    </PageHeroV2>
    <Section className="v2-band-white"><Container className="v2-two-col"><div><Eyebrow>What to expect</Eyebrow><h2>Professional care, explained simply.</h2></div><div><p className="lede">An eye examination is the right place to begin when your vision has changed, your prescription may need updating, or it is simply time for a check.</p><FeatureList items={["Professional eye examinations", "A reassuring practice environment", "A clear path from examination to eyewear"]} /></div></Container></Section>
    <Section><Container><div className="v2-heading"><div><Eyebrow>Your visit</Eyebrow><h2>Simple from first message to final frame.</h2></div></div><ol className="v2-steps">{steps.map((step, index) => <li key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.copy}</p></li>)}</ol></Container></Section>
    <Section className="v2-pad-top-0"><Container><div className="v2-split"><div className="v2-split-media"><img src="/images/prime-specs/eye-care/exam-room.webp" alt="Inside the Prime Specs examination room" loading="lazy" decoding="async" style={{ objectPosition: "center 38%" }} /></div><div className="v2-split-copy"><Eyebrow>Before you visit</Eyebrow><h2>Using medical aid?</h2><p>We accept most medical aids. Contact the team before your visit so we can help confirm your scheme and available optical benefits.</p><ArrowLink href="/medical-aids">Check medical-aid information</ArrowLink></div></div></Container></Section>
    <ConversionBand title="Book your eye examination." copy="Send Prime Specs a WhatsApp message and choose the Rustenburg location that works for you." />
  </>;
}

export function Eyewear() {
  const categories = [
    { icon: Eye, title: "Frames", copy: "Shapes, sizes and finishes to try on in person at either branch." },
    { icon: Sun, title: "Sunglasses", copy: "Sun-ready eyewear with comfort and personal style in view." },
    { icon: Glasses, title: "Prescription Safety Glasses", copy: "Protective eyewear made to your prescription, for work and everyday use." },
  ];
  return <>
    <Seo title="Prescription Glasses, Frames & Sunglasses | Prime Specs" description="Explore Prescription Safety Glasses, frames and sunglasses at Prime Specs in Rustenburg. Visit either branch to find your next pair." path="/eyewear" />
    <PageHeroV2 eyebrow="Eyewear" title={<>Frames for work. Life. <span>Everything between.</span></>} copy="Prescription Safety Glasses, frames and sunglasses to try on in person at either Rustenburg branch." image="/images/prime-specs/eyewear/display-wall.webp" alt="Wall of frames on display at Prime Specs" position="center 58%">
      <Link className="button button-primary" href="/locations"><MapPin aria-hidden="true" /> Visit a branch <ArrowRight aria-hidden="true" /></Link>
      <a className="button button-ghost" href={whatsappUrl("Hello Prime Specs, I would like to ask about eyewear.")} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> Ask on WhatsApp</a>
    </PageHeroV2>
    <Section className="v2-band-white"><Container><div className="v2-heading"><div><Eyebrow>What we offer</Eyebrow><h2>Three ways to see better and look good doing it.</h2></div></div><div className="v2-cats">{categories.map(({ icon: Icon, title, copy }) => <article key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{copy}</p></article>)}</div></Container></Section>
    <Section><Container><div className="v2-heading"><div><Eyebrow>In store</Eyebrow><h2>See them properly. Try them on.</h2></div><p>Brands and available frames change, so message the team if you are looking for something specific.</p></div><div className="v2-gallery"><div className="v2-gallery-tall"><img src="/images/prime-specs/eyewear/display-wall.webp" alt="Frame display wall at Prime Specs" loading="lazy" decoding="async" style={{ objectPosition: "center 60%" }} /></div><div><img src="/images/prime-specs/eyewear/product-set-card.webp" alt="Prescription and sun frames at Prime Specs" loading="lazy" decoding="async" style={{ objectPosition: "center 30%" }} /></div><div><img src="/images/prime-specs/eyewear/frames.jpg" alt="Metal frames available at Prime Specs" loading="lazy" decoding="async" style={{ objectPosition: "center 62%" }} /></div></div></Container></Section>
    <section className="conversion-band"><Container className="conversion-grid"><div><Eyebrow inverse>Try them in person</Eyebrow><h2>The right frame changes how everything comes together.</h2><p>Visit either Rustenburg branch to browse what is in store.</p></div><Link className="button button-yellow" href="/locations"><MapPin aria-hidden="true" /> Visit a branch</Link></Container></section>
  </>;
}

export function MedicalAids() {
  const steps = [
    { title: "Tell us your scheme", copy: "Send your medical-aid name and the branch you would like to visit." },
    { title: "We help you confirm", copy: "The team helps check whether your scheme can be accepted and what optical benefits may be available." },
    { title: "Plan your visit", copy: "Once confirmed, arrange your eye examination or eyewear visit directly with Prime Specs." },
  ];
  const checkUrl = whatsappUrl("Hello Prime Specs, I would like to check my medical aid. My scheme is: ");
  return <>
    <Seo title="Medical Aid Optometrist in Rustenburg | Prime Specs" description="Prime Specs accepts most medical aids. Contact us before visiting to confirm your scheme and available optical benefits." path="/medical-aids" />
    <section className="v2-compact-hero">
      <Container>
        <div className="reveal">
          <Eyebrow>Medical aids</Eyebrow>
          <h1>Check your benefits <span>before your visit.</span></h1>
          <p className="lede">We accept most medical aids. Send us your scheme name and we will help confirm your available optical benefits.</p>
          <div className="button-row"><a className="button button-primary" href={checkUrl} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> Check my medical aid <ArrowRight aria-hidden="true" /></a></div>
        </div>
        <MedicalAidLogos className="v2-logos-page" />
      </Container>
    </section>
    <Section className="v2-band-white"><Container><div className="v2-split v2-split-plain"><div className="v2-split-media"><img src="/images/prime-specs/interiors/reception.jpg" alt="Reception desk at Prime Specs" loading="lazy" decoding="async" style={{ objectPosition: "center 48%" }} /></div><div className="v2-split-copy"><Eyebrow>Good to know</Eyebrow><h2>We accept most medical aids.</h2><p>The schemes listed above appear on our shopfront. Acceptance and benefits can differ from plan to plan, so please confirm with us before your visit rather than taking the list as a guarantee.</p><ArrowLink href={checkUrl} external>Ask about my scheme</ArrowLink></div></div></Container></Section>
    <Section><Container><div className="v2-heading"><div><Eyebrow>How it works</Eyebrow><h2>Three quick steps before you arrive.</h2></div></div><ol className="v2-steps">{steps.map((step, index) => <li key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.copy}</p></li>)}</ol></Container></Section>
    <section className="conversion-band"><Container className="conversion-grid"><div><Eyebrow inverse>Talk to Prime Specs</Eyebrow><h2>Want to check your medical aid?</h2><p>WhatsApp us your scheme name and preferred branch. We will help you confirm the next step.</p></div><a className="button button-yellow" href={checkUrl} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> Check my medical aid</a></Container></section>
  </>;
}

export function About() {
  const values = [
    { icon: Eye, title: "Professional eye care", copy: "Eye examinations in a proper clinical room, explained in plain language." },
    { icon: Glasses, title: "Eyewear for real life", copy: "Prescription Safety Glasses, frames and sunglasses for how you actually live and work." },
    { icon: MapPin, title: "Rooted in Rustenburg", copy: "Two branches in town, and screening days out in local schools and community groups." },
  ];
  return <>
    <Seo title="About Prime Specs | Local Eye Care in Rustenburg" description="Meet Prime Specs, a Rustenburg optometrist and eyewear retailer serving the local community from two locations." path="/about" />
    <PageHeroV2 eyebrow="About Prime Specs" title={<>Eye care built <span>around real life.</span></>} copy="A Rustenburg optometry practice and eyewear retailer, run by local people from two branches in town." image="/images/prime-specs/team/team-group-seated.webp" alt="The Prime Specs team together inside the practice" position="center 24%">
      <Link className="button button-primary" href="/contact"><MessageCircle aria-hidden="true" /> Contact the team <ArrowRight aria-hidden="true" /></Link>
      <Link className="button button-ghost" href="/locations"><MapPin aria-hidden="true" /> Find a branch</Link>
    </PageHeroV2>
    <Section className="v2-band-white"><Container className="v2-two-col"><div><Eyebrow>Our story</Eyebrow><h2>A local practice with two doors open.</h2></div><div><p className="lede">Prime Specs looks after eyes in Rustenburg from two branches: the CBD practice on the corner of Thabo Mbeki and Oliver Tambo Drive, and Shop 06 at Kopano Mall.</p><p className="v2-body">We examine eyes, fit Prescription Safety Glasses and help people work out their medical-aid benefits before they visit. The aim is simple: you leave knowing what your eyes need and what to do next.</p></div></Container></Section>
    <HomeAboutTeamSection eyebrow="Our team" title={<>The people behind<br />Prime Specs.</>} copy="Led by Thabo, our Director, and Langa, our Optician and Operating Officer, with a team across both Rustenburg branches." ctaHref="/contact" ctaLabel="Contact the team" />
    <CommunityImpact />
    <Section className="v2-band-white"><Container><div className="v2-heading"><div><Eyebrow>What we stand for</Eyebrow><h2>Three things we keep coming back to.</h2></div></div><div className="v2-values">{values.map(({ icon: Icon, title, copy }) => <div key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{copy}</p></div>)}</div></Container></Section>
    <ConversionBand />
  </>;
}

export function AboutTeam() {
  return <>
    <Seo title="Prime Specs Team | Rustenburg Optometrists & Staff" description="Meet the real people behind Prime Specs in Rustenburg. Professional eye care, eyewear and genuine local presence." path="/about-team" />
    <HomeAboutTeamSection />
    <ConversionBand title="Get to know the Prime Specs team." copy="Book an eye examination or ask about eyewear at either of our Rustenburg locations." />
  </>;
}

export function Locations() {
  return <>
    <Seo title="Prime Specs Locations in Rustenburg" description="Find Prime Specs in the Rustenburg CBD on the corner of Thabo Mbeki and Oliver Tambo Drive, or at Shop 06, Kopano Mall." path="/locations" />
    <section className="v2-compact-hero">
      <Container>
        <div className="reveal">
          <Eyebrow>Locations</Eyebrow>
          <h1>Two Rustenburg locations. <span>One Prime Specs experience.</span></h1>
          <p className="lede">Choose the branch that suits you, call ahead or open directions before you leave.</p>
        </div>
      </Container>
    </section>
    <Section className="v2-pad-top-0"><Container className="v2-branch-list">{LOCATIONS.map((location) => <article className="v2-branch-detail" key={location.displayName}>
      <div className="v2-branch-detail-media"><img src={location.image} alt={`${location.displayName} storefront`} loading="lazy" decoding="async" /></div>
      <div className="v2-branch-detail-body">
        <Eyebrow>{location.shortName}</Eyebrow>
        <h2>{location.displayName}</h2>
        <address>{location.addressLines.map((line) => <span key={line}>{line}</span>)}</address>
        {"practiceNumber" in location && <p className="practice-number">Practice no. {location.practiceNumber}</p>}
        <div className="v2-branch-contact">
          <a href={location.phoneHref}><Phone aria-hidden="true" /> {location.phone}</a>
          <a href={location.emailHref}><Mail aria-hidden="true" /> {location.email}</a>
        </div>
        <div className="button-row">
          <a className="button button-primary" href={location.directions} target="_blank" rel="noreferrer"><MapPin aria-hidden="true" /> Get directions</a>
          <a className="button button-outline" href={location.phoneHref}><Phone aria-hidden="true" /> Call branch</a>
        </div>
      </div>
      <div className="v2-branch-map"><iframe title={`Map of ${location.displayName}`} src={location.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
    </article>)}</Container></Section>
    <section className="conversion-band"><Container className="conversion-grid"><div><Eyebrow inverse>Not sure which branch?</Eyebrow><h2>Start with a quick message.</h2><p>Tell us which part of Rustenburg is most convenient and we will point you to the right branch.</p></div><a className="button button-yellow" href={whatsappUrl("Hello Prime Specs, please help me choose the most convenient branch.")} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> Ask on WhatsApp</a></Container></section>
  </>;
}

const CONTACT_TOPICS = [
  { value: "book an eye examination", label: "Eye examination", icon: Eye },
  { value: "ask about eyewear", label: "Eyewear enquiry", icon: Glasses },
  { value: "check my medical-aid benefits", label: "Medical aid enquiry", icon: ShieldCheck },
  { value: "ask a general question", label: "General question", icon: CircleHelp },
];
const CONTACT_BRANCHES = [
  { value: "the CBD branch (Thabo Mbeki & Oliver Tambo Drive)", label: "CBD" },
  { value: "the Kopano Mall branch", label: "Kopano Mall" },
];

export function Contact() {
  const [topic,setTopic] = useState(CONTACT_TOPICS[0].value);
  const [branch,setBranch] = useState(CONTACT_BRANCHES[0].value);
  const submit = (event: FormEvent) => { event.preventDefault(); window.open(whatsappUrl(`Hello Prime Specs, I would like to ${topic} at ${branch}.`), "_blank", "noopener,noreferrer"); };
  return <>
    <Seo title="Contact & Book | Prime Specs Rustenburg" description="Book an eye examination, call a Prime Specs branch, get directions or ask about medical-aid benefits in Rustenburg." path="/contact" />
    <section className="v2-compact-hero v2-contact-hero">
      <Container className="v2-contact-grid">
        <div className="reveal">
          <Eyebrow>Contact / Book</Eyebrow>
          <h1>Let us make your <span>next step simple.</span></h1>
          <p className="lede">Pick what you need and your branch. We open WhatsApp with the message ready, and you decide when to send it.</p>
          <div className="v2-contact-quick">
            <a href={SITE.phoneHref}><Phone aria-hidden="true" /><span><small>Call the CBD branch</small>{SITE.phone}</span></a>
            <a href={LOCATIONS[1].phoneHref}><Phone aria-hidden="true" /><span><small>Call Kopano Mall</small>{LOCATIONS[1].phone}</span></a>
          </div>
        </div>
        <form onSubmit={submit} className="v2-book-card">
          <fieldset>
            <legend>1. What do you need?</legend>
            <div className="v2-choice-grid">{CONTACT_TOPICS.map(({ value, label, icon: Icon }) => <label key={value} className={`v2-choice ${topic === value ? "is-selected" : ""}`}><input type="radio" name="topic" value={value} checked={topic === value} onChange={() => setTopic(value)} /><Icon aria-hidden="true" /><span>{label}</span></label>)}</div>
          </fieldset>
          <fieldset>
            <legend>2. Which branch?</legend>
            <div className="v2-choice-grid">{CONTACT_BRANCHES.map(({ value, label }) => <label key={value} className={`v2-choice ${branch === value ? "is-selected" : ""}`}><input type="radio" name="branch" value={value} checked={branch === value} onChange={() => setBranch(value)} /><MapPin aria-hidden="true" /><span>{label}</span></label>)}</div>
          </fieldset>
          <button className="button button-primary" type="submit"><MessageCircle aria-hidden="true" /> Continue to WhatsApp <ArrowRight aria-hidden="true" /></button>
        </form>
      </Container>
    </section>
    <Section className="v2-band-white"><Container><div className="v2-heading"><div><Eyebrow>Direct contact</Eyebrow><h2>Reach a branch directly.</h2></div><ArrowLink href="/locations">See maps and details</ArrowLink></div><BranchCards /></Container></Section>
  </>;
}
