import { useState, useEffect, useRef } from "react";

export default function AudioPlayer({ src }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasFile, setHasFile] = useState(false);

  const fullSrc = src
    ? import.meta.env.BASE_URL.replace(/\/$/, "") + src
    : null;

  useEffect(() => {
    if (!fullSrc) return;
    fetch(fullSrc, { method: "HEAD" })
      .then((r) => setHasFile(r.ok))
      .catch(() => setHasFile(false));
  }, [fullSrc]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    setProgress((audio.currentTime / audio.duration) * 100);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current?.duration || 0);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(100);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audio.currentTime = ratio * audio.duration;
  };

  const formatTime = (sec) => {
    if (!sec || isNaN(sec)) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const elapsed = audioRef.current ? audioRef.current.currentTime : 0;

  if (!hasFile) {
    return (
      <div className="audio-player audio-player--empty">
        <span className="play-btn play-btn--disabled">▶</span>
        <div className="audio-info">
          <span className="audio-label">🎵 הקלטה תתווסף בקרוב</span>
          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: "0%" }} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="audio-player">
      <audio
        ref={audioRef}
        src={fullSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        preload="metadata"
      />
      <button className="play-btn" onClick={togglePlay} aria-label={isPlaying ? "השהה" : "נגן"}>
        {isPlaying ? "⏸" : "▶"}
      </button>
      <div className="audio-info">
        <div className="audio-times">
          <span className="audio-label">🎵 האזינו לסיפור</span>
          <span className="audio-time">{formatTime(elapsed)} / {formatTime(duration)}</span>
        </div>
        <div className="progress-bar-track" onClick={handleSeek} style={{ cursor: "pointer" }}>
          <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}
