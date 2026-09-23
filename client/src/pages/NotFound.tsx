import { ArrowLeft, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { Container, Eyebrow } from "@/components/Primitives";
import { whatsappUrl } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="page-hero">
      <Container className="editorial-two-col">
        <div>
          <Eyebrow>404 · Page not found</Eyebrow>
          <h1 className="display-title">This page is out of focus.</h1>
        </div>
        <div>
          <p className="lede">The page may have moved. Return to the Prime Specs homepage or send us a message if you need help.</p>
          <div className="button-row">
            <Link className="button button-primary" href="/"><ArrowLeft /> Back home</Link>
            <a className="button button-outline" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp us</a>
          </div>
        </div>
      </Container>
    </section>
  );
}
