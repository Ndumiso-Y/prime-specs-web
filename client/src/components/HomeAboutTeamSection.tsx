import { ArrowLink, Container, Eyebrow, Section } from "@/components/Primitives";

export function HomeAboutTeamSection() {
  return (
    <Section className="home-about-team-section">
      <Container className="about-team-grid">
        <div className="about-team-copy reveal">
          <Eyebrow>ABOUT PRIME SPECS</Eyebrow>
          <h2>
            Local eye care,<br />
            with real people behind it.
          </h2>
          <p className="lede">
            Prime Specs combines professional eye care, eyewear and a genuine
            Rustenburg presence — supported by a team focused on making every
            visit clear, approachable and useful.
          </p>
          <div className="about-team-cta">
            <ArrowLink href="/about">Get to know Prime Specs</ArrowLink>
          </div>
        </div>

        <div className="about-team-composition">
          <div className="team-photo-wrapper primary-photo">
            <img
              src="/images/prime-specs/team/team-group-primary.jpg"
              alt="Prime Specs staff team in Rustenburg store"
              loading="eager"
              decoding="async"
              className="team-img"
            />
          </div>
          <div className="team-photo-wrapper secondary-photo">
            <img
              src="/images/prime-specs/team/team-group-secondary.jpg"
              alt="Prime Specs team seated in consultation area"
              loading="lazy"
              decoding="async"
              className="team-img"
            />
          </div>
          <div className="team-badge">
            <span className="badge-pulse" aria-hidden="true" />
            <span className="badge-text">Rustenburg Optometrists &amp; Staff</span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
