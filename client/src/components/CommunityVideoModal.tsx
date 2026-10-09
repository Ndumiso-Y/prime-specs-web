import { useState, useRef, useEffect } from "react";
import { Play, Pause, X, Volume2, VolumeX, ChevronLeft, ChevronRight, Square } from "lucide-react";
import { createPortal } from "react-dom";

const videos = [
  {
    src: "/videos/prime-specs/tlhage-primary-school.mp4",
    title: "Tlhage Primary School",
  },
  {
    src: "/videos/prime-specs/140-police-students-screened.mp4",
    title: "140 Police Students Screened",
  }
];

export function CommunityVideoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      // Reset state when closing
      setIsPlaying(false);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => setIsPlaying(false));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, currentIndex, isOpen]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };
  const stopVideo = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const nextVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setCurrentIndex((prev) => (prev + 1) % videos.length);
    setIsPlaying(false);
  };

  const prevVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(false);
  };

  if (!isOpen) return null;

  const currentVideo = videos[currentIndex];

  return createPortal(
    <div className="video-modal-overlay">
      <div className="video-modal-backdrop" onClick={onClose} aria-hidden="true" />
      <div className="video-modal-content" role="dialog" aria-modal="true" aria-labelledby="video-modal-title">
        <button type="button" className="video-modal-close" onClick={onClose} aria-label="Close video">
          <X aria-hidden="true" />
        </button>
        <div className="video-modal-player">
          <video
            ref={videoRef}
            src={currentVideo.src}
            className="video-element"
            playsInline
            onEnded={nextVideo}
          />
          <div className="video-modal-title-bar">
            <h3 id="video-modal-title">{currentVideo.title}</h3>
            <span className="video-modal-counter">0{currentIndex + 1} / 0{videos.length}</span>
          </div>
          <div className="video-modal-controls">
            <div className="video-control-group">
              <button type="button" className="video-btn" onClick={togglePlay} aria-label={isPlaying ? "Pause" : "Play"}>
                {isPlaying ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
              </button>
              <button type="button" className="video-btn" onClick={stopVideo} aria-label="Stop">
                <Square aria-hidden="true" />
              </button>
              <button type="button" className="video-btn" onClick={toggleMute} aria-label={isMuted ? "Unmute" : "Mute"}>
                {isMuted ? <VolumeX aria-hidden="true" /> : <Volume2 aria-hidden="true" />}
              </button>
            </div>
            {videos.length > 1 && (
              <div className="video-control-group">
                <button type="button" className="video-btn" onClick={prevVideo} aria-label="Previous video">
                  <ChevronLeft aria-hidden="true" />
                </button>
                <button type="button" className="video-btn" onClick={nextVideo} aria-label="Next video">
                  <ChevronRight aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
