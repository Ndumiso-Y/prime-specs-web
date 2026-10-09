import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ArrowLink, Container, Eyebrow, Section } from "@/components/Primitives";

const teamSlides = [
  {
    src: "/images/prime-specs/team/Thabo Director.jpg",
    alt: "Thabo, Director at Prime Specs",
    caption: "Thabo · Director",
  },
  {
    src: "/images/prime-specs/team/Langa Lab Technician.jpg",
    alt: "Langa, Lab Technician at Prime Specs",
    caption: "Langa · Lab Technician",
  },
  {
    src: "/images/prime-specs/team/team-group-yellow.jpg",
    alt: "Prime Specs staff team in yellow uniforms inside Rustenburg practice",
    caption: "Rustenburg Practice Team",
  },
  {
    src: "/images/prime-specs/team/team-group-green.jpg",
    alt: "Prime Specs team members in green uniforms standing together",
    caption: "Optical & Eye Care Team",
  },
  {
    src: "/images/prime-specs/team/team-group-red.jpg",
    alt: "Prime Specs staff team members in red uniforms",
    caption: "Customer Service & Reception",
  },
];

export function HomeAboutTeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToSlide = useCallback((index: number) => {
    const slide = slideRefs.current[index];
    if (slide) {
      slide.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    }
    setActiveIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    scrollToSlide((activeIndex + 1) % teamSlides.length);
  }, [activeIndex, scrollToSlide]);

  const prevSlide = useCallback(() => {
    scrollToSlide((activeIndex - 1 + teamSlides.length) % teamSlides.length);
  }, [activeIndex, scrollToSlide]);

  // Handle manual scroll updating the activeIndex
  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    
    scrollTimeoutRef.current = setTimeout(() => {
      const viewport = e.currentTarget;
      let minDistance = Infinity;
      let closestIndex = activeIndex;

      slideRefs.current.forEach((slide, index) => {
        if (!slide) return;
        const distance = Math.abs(slide.offsetLeft - viewport.offsetLeft - viewport.scrollLeft);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex);
      }
    }, 150);
  }, [activeIndex]);

  // Auto-advance
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    if (isPaused) return;

    const interval = setInterval(() => {
      if (document.visibilityState === "visible") {
        nextSlide();
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [activeIndex, isPaused, nextSlide]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#about-team" || hash === "#team") {
      const timer = setTimeout(() => {
        const el = document.getElementById("about-team");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Section id="about-team" className="home-about-team-section">
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

        <div 
          className="about-team-carousel-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="team-carousel-viewport" onScroll={handleScroll}>
            {teamSlides.map((slide, index) => {
              return (
                <div
                  key={slide.src}
                  className="team-slide"
                  ref={(el) => { slideRefs.current[index] = el; }}
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="team-slide-img"
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                  <div className="team-slide-overlay">
                    <span className="team-slide-caption">{slide.caption}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="team-carousel-controls">
            <div className="carousel-nav-buttons">
              <button
                type="button"
                className="carousel-btn"
                onClick={prevSlide}
                aria-label="Previous team photo"
              >
                <ChevronLeft aria-hidden="true" />
              </button>
              <button
                type="button"
                className="carousel-btn"
                onClick={nextSlide}
                aria-label="Next team photo"
              >
                <ChevronRight aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
