import { useState } from "react";
import { Play } from "lucide-react";
import { Container, Eyebrow, Section } from "@/components/Primitives";
import { CommunityVideoModal } from "@/components/CommunityVideoModal";

export function CommunityImpact() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <Section className="v2-community-section v2-community-standalone">
      <Container>
        <div className="v2-community">
          <button type="button" className="v2-community-media" onClick={() => setIsVideoOpen(true)} aria-label="Watch our community work">
            <img src="/images/prime-specs/community/outreach.webp" alt="Prime Specs community eye screening outreach" loading="lazy" decoding="async" />
            <span className="v2-play"><Play aria-hidden="true" /></span>
          </button>
          <div className="v2-community-copy">
            <Eyebrow inverse>Community</Eyebrow>
            <h2>Eye care that goes out to people.</h2>
            <p>Prime Specs takes eye screening out of the practice and into Rustenburg. Two of those days are on video: learners at Tlhage Primary School, and a group of 140 police students.</p>
            <div className="button-row">
              <button type="button" onClick={() => setIsVideoOpen(true)} className="button button-yellow">
                <Play aria-hidden="true" /> Watch our community work
              </button>
            </div>
          </div>
        </div>
      </Container>
      <CommunityVideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </Section>
  );
}
