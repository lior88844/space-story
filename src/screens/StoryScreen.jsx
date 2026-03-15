import { useState } from "react";
import MissionCard from "../components/MissionCard";
import SkipDialog from "../components/SkipDialog";

export default function StoryScreen({ story, chapterIndex, totalChapters, onComplete, onGoBack, onGoHome }) {
  const [showSkipDialog, setShowSkipDialog] = useState(false);

  const handleDone = () => onComplete(true);
  const handleSkip = () => setShowSkipDialog(true);
  const handleConfirmSkip = () => {
    setShowSkipDialog(false);
    onComplete(false);
  };

  const paragraphs = story.story.split("\n\n");

  return (
    <div className="screen story-screen" style={{ background: story.bgGradient }}>
      {showSkipDialog && (
        <SkipDialog
          onConfirm={handleConfirmSkip}
          onCancel={() => setShowSkipDialog(false)}
        />
      )}

      <div className="story-nav-bar">
        <button className="story-nav-btn" onClick={onGoBack} aria-label="פרק קודם">
          חזרה ›
        </button>
        <button className="story-nav-btn" onClick={onGoHome} aria-label="דף הבית">
          🏠
        </button>
      </div>

      <div className="chapter-progress">
        {Array.from({ length: totalChapters }).map((_, i) => (
          <span
            key={i}
            className={`dot ${i < chapterIndex ? "dot-done" : i === chapterIndex ? "dot-active" : "dot-pending"}`}
          />
        ))}
      </div>

      <div className="illustration-area">
        <div className="floating-emojis">
          {story.emojis.map((em, i) => (
            <span key={i} className={`illus-emoji ie${i + 1}`}>{em}</span>
          ))}
        </div>
        <h2 className="chapter-title">{story.title}</h2>
        <p className="chapter-num">פרק {chapterIndex + 1} מתוך {totalChapters}</p>
      </div>

      <div className="story-scroll-area">
        <div className="story-box">
          {paragraphs.map((para, i) => (
            <p key={i} className="story-paragraph">{para}</p>
          ))}
        </div>
      </div>

      <div className="mission-section">
        {story.mission ? (
          <MissionCard
            mission={story.mission}
            onDone={handleDone}
            onSkip={handleSkip}
          />
        ) : (
          <div className="prize-section">
            <div className="prize-emojis">🏆 👑 🚀</div>
            <p className="prize-text">הצלחת בכל המשימות — מגיע לך הפרס שלך, גיבורת חלל!</p>
            <button className="btn-claim-prize" onClick={handleDone}>
              ✨ קבלי את הפרס! ✨
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
