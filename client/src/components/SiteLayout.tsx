import { useEffect, useState, type ReactNode } from "react";
import { Glasses, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { NAV_ITEMS, SITE, whatsappUrl } from "@/lib/site";

function BrandMark() {
  return (
    <span className="brand-mark" data-logo-fallback="false">
      <img src="/images/brand/logo-transparent.png" alt="Prime Specs" className="brand-logo" />
    </span>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? location === "/" : location.startsWith(href));

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-inner">
          <Link href="/" className="brand-link" aria-label="Prime Specs home"><BrandMark /></Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className={isActive(item.href) ? "active" : ""}>
                {item.label}
              </Link>
            ))}
          </nav>
          <a className="header-cta" href={whatsappUrl()} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" /> WhatsApp us
          </a>
          <button className="menu-toggle" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <div id="mobile-navigation" className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {NAV_ITEMS.map((item, index) => (
            <Link key={item.href} href={item.href} className={isActive(item.href) ? "active" : ""}>
              <span>0{index + 1}</span>{item.label}
            </Link>
          ))}
        </nav>
        <a className="button button-yellow mobile-menu-cta" href={whatsappUrl()} target="_blank" rel="noreferrer">
          <MessageCircle aria-hidden="true" /> WhatsApp Prime Specs
        </a>
      </div>

      <main id="main-content">{children}</main>

      <footer className="site-footer">
        <div className="footer-top container">
          <div className="footer-brand">
            <BrandMark />
            <p>Professional eye care and eyewear in Rustenburg.</p>
          </div>
          <nav aria-label="Footer navigation">
            <p className="footer-label">Explore</p>
            {NAV_ITEMS.slice(1).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </nav>
          <div>
            <p className="footer-label">Visit</p>
            <Link href="/locations">Thabo Mbeki & Oliver Tambo</Link>
            <Link href="/locations">Kopano Mall, Shop 06</Link>
          </div>
          <div>
            <p className="footer-label">Contact</p>
            <a href={SITE.phoneHref}>{SITE.phone}</a>
            <a href={whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp {SITE.whatsapp}</a>
            <a href={SITE.facebook} target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>
        <div className="footer-bottom container">
          <span>© {new Date().getFullYear()} Prime Specs</span>
          <span>Rustenburg, North West, South Africa</span>
        </div>
      </footer>

      <nav className="mobile-action-bar" aria-label="Quick contact actions">
        <a href={SITE.phoneHref}><Phone aria-hidden="true" /><span>Call</span></a>
        <a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /><span>WhatsApp</span></a>
        <Link href="/locations"><MapPin aria-hidden="true" /><span>Directions</span></Link>
      </nav>
    </div>
  );
}
