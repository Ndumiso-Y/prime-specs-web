import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const teamPhotos = [
  {
    src: "/images/prime-specs/team/prime-specs-team-group-red-green-uniform-seated-03.webp",
    alt: "Prime Specs team members in red and green uniforms",
  },
  {
    src: "/images/prime-specs/team/prime-specs-team-group-yellow-uniform-03.webp",
    alt: "Prime Specs team members in yellow uniforms",
  },
];

export function TeamGallery() {
  const trackRef = useRef<HTMLDivElement>(null);

  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    track.scrollBy({
      left: direction * track.clientWidth * 0.72,
      behavior: "smooth",
    });
  };

  return (
    <div className="team-gallery">
      <div className="team-gallery-head">
        <span className="team-gallery-kicker">Meet the people behind the practice</span>
        <div className="team-gallery-controls" aria-label="Team gallery controls">
          <button className="team-gallery-control" type="button" onClick={() => move(-1)} aria-label="Previous team photo">
            <ChevronLeft aria-hidden="true" />
          </button>
          <button className="team-gallery-control" type="button" onClick={() => move(1)} aria-label="Next team photo">
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="team-gallery-track" ref={trackRef}>
        {teamPhotos.map((photo, index) => (
          <figure
            className={`team-gallery-card ${index === 0 ? "team-gallery-card-featured" : ""}`}
            key={photo.src}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
