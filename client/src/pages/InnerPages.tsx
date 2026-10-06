import { FormEvent, useState } from "react";
import { ArrowRight, CircleHelp, Eye, Glasses, HeartHandshake, MapPin, MessageCircle, Phone, ShieldCheck, Sun, Users } from "lucide-react";
import { Link } from "wouter";
import { Seo } from "@/components/Seo";
import { ArrowLink, Container, ConversionBand, EditorialVisual, Eyebrow, FeatureList, LocationBlock, PageHero, Section } from "@/components/Primitives";
import { HomeAboutTeamSection } from "@/components/HomeAboutTeamSection";
import { LOCATIONS, SITE, whatsappUrl } from "@/lib/site";

export function EyeCare() {
  return <>
    <Seo title="Eye Examinations in Rustenburg | Prime Specs" description="Professional eye examinations in a reassuring environment at Prime Specs in Rustenburg. Book directly via WhatsApp." path="/eye-care" />
    <PageHero eyebrow="Eye care" title={<>A clearer next step<br />for your eyes.</>} copy="Professional eye examinations in a calm, approachable environment—with direct help choosing the eyewear you need next." visual="care" />
    <Section><Container className="editorial-two-col"><div><Eyebrow>What to expect</Eyebrow><h2>Professional care, explained simply.</h2></div><div><p className="lede">An eye examination is the right place to begin when your vision has changed, your prescription may need updating, or it is simply time for a check.</p><p>Prime Specs provides eye examinations in a professional setting. We keep the process clear and focus on the practical outcome: helping you understand the next step and select prescription eyewear where needed.</p><FeatureList items={["Professional eye examinations", "A reassuring practice environment", "A clear path from examination to eyewear"]} /></div></Container></Section>
    <Section className="process-section"><Container><div className="section-heading split-heading"><Eyebrow>Your visit</Eyebrow><h2>Simple from first message to final frame.</h2></div><ol className="process-list"><li><span>01</span><div><h3>Start with a conversation</h3><p>Message or call Prime Specs to arrange your visit and confirm anything you need to know beforehand.</p></div></li><li><span>02</span><div><h3>Have your eyes examined</h3><p>Visit the practice for a professional eye examination in a calm and well-equipped setting.</p></div></li><li><span>03</span><div><h3>Choose your eyewear</h3><p>If prescription eyewear is needed, explore frames that work for your needs and everyday style.</p></div></li></ol></Container></Section>
    <Section><Container className="story-grid"><EditorialVisual variant="care" label="Prime Specs examination equipment — authentic clinical photography slot" /><div className="story-copy story-copy-light"><Eyebrow>Before you visit</Eyebrow><h2>Using medical aid?</h2><p>We accept most medical aids, with exceptions possible. Contact the team before your visit so we can help confirm your scheme and available optical benefits.</p><ArrowLink href="/medical-aids">Medical-aid information</ArrowLink></div></Container></Section>
    <ConversionBand title="Book your eye examination." copy="Send Prime Specs a WhatsApp message and choose the Rustenburg location that works for you." />
  </>;
}

export function Eyewear() {
  return <>
    <Seo title="Prescription Glasses, Frames & Sunglasses | Prime Specs" description="Explore prescription spectacles, frames and sunglasses at Prime Specs in Rustenburg. Visit either branch to find eyewear for everyday life." path="/eyewear" />
    <PageHero eyebrow="Eyewear" title={<>Frames for work.<br />Life. Everything between.</>} copy="Prescription spectacles, frames and sunglasses selected in person—with room to discover what feels right on you." visual="eyewear" />
    <Section><Container><div className="editorial-heading section-heading"><div><Eyebrow>Three ways to look</Eyebrow><h2>Practical, personal,<br />and never one-size-fits-all.</h2></div><p>Prime Specs is a place to see eyewear properly: in context, on your face, and with help nearby.</p></div><div className="product-stories"><article><span className="product-index">01</span><Glasses aria-hidden="true" /><h3>Prescription spectacles</h3><p>Everyday eyewear built around your prescription and how you use it.</p></article><article><span className="product-index">02</span><Eye aria-hidden="true" /><h3>Frames</h3><p>Shapes, proportions and finishes to explore in person at our Rustenburg practices.</p></article><article><span className="product-index">03</span><Sun aria-hidden="true" /><h3>Sunglasses</h3><p>Sun-ready eyewear with comfort and personal style in view.</p></article></div></Container></Section>
    <Section className="gallery-section"><Container><div className="gallery-mosaic"><EditorialVisual variant="eyewear" label="Prime Specs frame wall — authentic eyewear photography slot" className="gallery-tall" /><div className="gallery-copy"><Eyebrow inverse>Try them in person</Eyebrow><h2>The right frame changes how everything comes together.</h2><p>Visit either branch to browse the available selection. Exact brands and frame availability can change, so contact the team if you are looking for something specific.</p></div><EditorialVisual variant="eyewear" label="Prime Specs sunglasses — authentic product photography slot" className="gallery-wide" /></div></Container></Section>
    <ConversionBand title="Find your next frame at Prime Specs." copy="Message us before you visit or head to either Rustenburg location." />
  </>;
}

export function MedicalAids() {
  const schemes = ["Fedhealth", "Bonitas", "Bestmed", "BCIMA Medical Aid", "GEMS", "Sisonke Health", "Thebemed"];
  return <>
    <Seo title="Medical Aid Optometrist in Rustenburg | Prime Specs" description="Prime Specs accepts most medical aids. Contact us before visiting to confirm your scheme and available optical benefits." path="/medical-aids" />
    <PageHero eyebrow="Medical aids" title={<>Check your benefits<br />before your visit.</>} copy="We accept most medical aids. Contact Prime Specs before your appointment and we’ll help confirm your scheme and available optical benefits." visual="contact" />
    <Section><Container className="medical-explainer"><div className="medical-lead"><ShieldCheck aria-hidden="true" /><Eyebrow>Clear before you arrive</Eyebrow><h2>A quick message can make your visit simpler.</h2></div><ol><li><span>01</span><div><h3>Tell us your scheme</h3><p>Send the medical-aid name and the branch you would like to visit.</p></div></li><li><span>02</span><div><h3>We help you confirm</h3><p>The team will help check whether your scheme can be accepted and what optical benefits may be available.</p></div></li><li><span>03</span><div><h3>Plan your visit</h3><p>Once confirmed, arrange the most suitable next step directly with Prime Specs.</p></div></li></ol></Container></Section>
    <Section className="scheme-section"><Container><div className="section-heading editorial-heading"><div><Eyebrow>Schemes seen at Prime Specs</Eyebrow><h2>Ask us to confirm<br />before your visit.</h2></div><p>These names have appeared in Prime Specs storefront material. Acceptance can vary, so they are shown as reference—not a guarantee of current participation or benefits.</p></div><div className="scheme-list">{schemes.map((scheme, index)=><div key={scheme}><span>{String(index + 1).padStart(2,"0")}</span>{scheme}</div>)}</div></Container></Section>
    <ConversionBand title="Want to check your medical aid?" copy="WhatsApp Prime Specs with your scheme name and preferred branch. We’ll help you confirm the next step." />
  </>;
}

export function About() {
  return <>
    <Seo title="About Prime Specs | Local Eye Care in Rustenburg" description="Meet Prime Specs, a Rustenburg optometrist and eyewear retailer serving the local community from two locations." path="/about" />
    <PageHero eyebrow="About Prime Specs" title={<>Eye care built<br />around real life.</>} copy="A local Rustenburg business focused on professional eye care, accessible eyewear and an approachable in-person experience." visual="community" />
    <Section><Container className="editorial-two-col"><div><Eyebrow>Our approach</Eyebrow><h2>Professional where it matters. Personal in how it feels.</h2></div><div><p className="lede">Prime Specs combines eye examinations and eyewear in a setting designed to make the process easier to understand and act on.</p><p>The focus is practical: clear next steps, useful support and eyewear for the everyday lives of the people we serve in Rustenburg.</p></div></Container></Section>
    <Section className="about-pillars"><Container><div className="pillar-row"><div><span>01</span><Eye /><h3>Professional eye care</h3></div><p>Eye examinations in a professional environment, without unnecessary complexity.</p></div><div className="pillar-row"><div><span>02</span><Glasses /><h3>Eyewear with purpose</h3></div><p>Prescription spectacles, frames and sunglasses considered for everyday use.</p></div><div className="pillar-row"><div><span>03</span><Users /><h3>Rustenburg community</h3></div><p>Two local locations and a growing story rooted in the community around them.</p></div></Container></Section>
    <Section><Container className="story-grid"><EditorialVisual variant="community" label="Prime Specs team — authentic staff photography slot" /><div className="story-copy story-copy-light"><Eyebrow>The people behind Prime Specs</Eyebrow><h2>A real local team.</h2><p>Prime Specs’ team photography will live here once the approved image library is supplied. No names or biographies have been invented.</p><ArrowLink href="/contact">Contact the team</ArrowLink></div></Container></Section>
    <Section className="community-strip"><Container className="community-strip-grid"><HeartHandshake aria-hidden="true" /><div><Eyebrow inverse>Our community</Eyebrow><h2>Local presence, shown with restraint.</h2></div><p>Prime Specs has authentic community and outreach photography. A curated selection can replace the neutral visual slots without changing this layout.</p></Container></Section>
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
    <Seo title="Prime Specs Locations in Rustenburg" description="Find Prime Specs at Thabo Mbeki and Oliver Tambo Drive or at Shop 06, Kopano Mall in Rustenburg." path="/locations" />
    <PageHero eyebrow="Locations" title={<>Two Rustenburg<br />locations. One clear welcome.</>} copy="Choose the branch that works for you, call directly or open directions before you leave." visual="branch" />
    <Section><Container className="branch-list">{LOCATIONS.map((location,index)=><article className="branch-detail" key={location.name}><div className="branch-copy"><Eyebrow>Branch 0{index+1}</Eyebrow><h2>{location.name}</h2><address>{location.addressLines.map(line=><span key={line}>{line}</span>)}</address>{"practiceNumber" in location && <p>Practice number: {location.practiceNumber}</p>}<div className="button-row"><a className="button button-primary" href={location.phoneHref}><Phone />Call {location.phone}</a><a className="button button-outline" href={location.directions} target="_blank" rel="noreferrer"><MapPin />Directions</a></div><p className="hours-note">Operating hours are intentionally not shown until confirmed.</p></div><EditorialVisual variant="branch" label={`${location.name} — authentic branch photography slot`} /></article>)}</Container></Section>
    <Section className="branch-compare"><Container><div className="section-heading split-heading"><Eyebrow>Not sure which branch?</Eyebrow><h2>Start with a quick message.</h2></div><p>Tell us where you are coming from or which part of Rustenburg is most convenient. We’ll help you choose your branch.</p><ArrowLink href={whatsappUrl("Hello Prime Specs, please help me choose the most convenient branch.")} external>Ask on WhatsApp</ArrowLink></Container></Section>
  </>;
}

export function Contact() {
  const [topic,setTopic] = useState("book an eye examination");
  const [branch,setBranch] = useState("either Rustenburg branch");
  const submit = (event: FormEvent) => { event.preventDefault(); window.open(whatsappUrl(`Hello Prime Specs, I’d like to ${topic} at ${branch}.`), "_blank", "noopener,noreferrer"); };
  return <>
    <Seo title="Contact & Book | Prime Specs Rustenburg" description="Book an eye examination, call a Prime Specs branch, get directions or ask about medical-aid benefits in Rustenburg." path="/contact" />
    <PageHero eyebrow="Contact / Book" title={<>Let’s make your<br />next step simple.</>} copy="Book via WhatsApp, call a branch, ask about medical aid or open directions. No account and no complicated form." visual="contact" />
    <Section><Container className="contact-grid"><div className="contact-primary"><Eyebrow>WhatsApp Prime Specs</Eyebrow><h2>What do you need help with?</h2><form onSubmit={submit} className="whatsapp-form"><label htmlFor="topic">I would like to</label><select id="topic" value={topic} onChange={e=>setTopic(e.target.value)}><option value="book an eye examination">Book an eye examination</option><option value="ask about prescription eyewear">Ask about prescription eyewear</option><option value="ask about frames and sunglasses">Ask about frames and sunglasses</option><option value="confirm my medical-aid benefits">Confirm medical-aid benefits</option><option value="ask a general question">Ask a general question</option></select><label htmlFor="branch">Preferred location</label><select id="branch" value={branch} onChange={e=>setBranch(e.target.value)}><option value="either Rustenburg branch">Either Rustenburg branch</option><option value="the Thabo Mbeki and Oliver Tambo Drive branch">Thabo Mbeki & Oliver Tambo</option><option value="the Kopano Mall branch">Kopano Mall</option></select><button className="button button-yellow" type="submit"><MessageCircle />Continue in WhatsApp</button></form><p className="form-note">This opens WhatsApp with your message prepared. You choose when to send it.</p></div><aside className="contact-aside"><div><Phone /><p>Call the main branch</p><a href={SITE.phoneHref}>{SITE.phone}</a></div><div><MapPin /><p>Visit Prime Specs</p><Link href="/locations">See both locations <ArrowRight /></Link></div><div><CircleHelp /><p>Medical-aid question</p><Link href="/medical-aids">What to send us <ArrowRight /></Link></div></aside></Container></Section>
    <Section className="contact-locations"><Container><Eyebrow>Direct branch contact</Eyebrow><div className="locations-stack"><LocationBlock index={0}/><LocationBlock index={1}/></div></Container></Section>
  </>;
}
