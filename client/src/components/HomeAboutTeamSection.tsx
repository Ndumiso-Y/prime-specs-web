import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { ArrowLink, Container, Eyebrow, Section } from "@/components/Primitives";

const teamSlides = [
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
    src: "/images/prime-specs/team/team-group-seated.jpg",
    alt: "Prime Specs team seated together in consultation area",
    caption: "Consultation & Patient Support",
  },
  {
    src: "/images/prime-specs/team/team-group-red.jpg",
    alt: "Prime Specs staff team members in red uniforms",
    caption: "Customer Service & Reception",
  },
  {
    src: "/images/prime-specs/team/team-store-visit-1.jpg",
    alt: "Prime Specs team in store with Rustenburg community visitors",
    caption: "Local Community Connection",
  },
  {
    src: "/images/prime-specs/team/team-store-visit-2.jpg",
    alt: "Prime Specs staff members in store consultation area",
    caption: "Personal & Approachable Care",
  },
];

export function HomeAboutTeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % teamSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + teamSlides.length) % teamSlides.length);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

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

        <div
          className="about-team-carousel-container"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          <div className="team-carousel-viewport">
            {teamSlides.map((slide, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={slide.src}
                  className={`team-slide ${isActive ? "is-active" : ""}`}
                  aria-hidden={!isActive}
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
                    <span className="team-slide-counter">
                      0{index + 1} / 0{teamSlides.length}
                    </span>
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
                className="carousel-toggle-play"
                onClick={() => setIsPlaying((prev) => !prev)}
                aria-label={isPlaying ? "Pause slide presentation" : "Play slide presentation"}
              >
                {isPlaying ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
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

            <div className="carousel-indicators" role="tablist" aria-label="Team photo slides">
              {teamSlides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-label={`Go to slide ${index + 1}: ${slide.caption}`}
                  className={`carousel-dot ${index === currentIndex ? "is-active" : ""}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
