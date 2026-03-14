import { useEffect, useState } from "react";

const sparkles = ["✨", "🌟", "💫", "⭐", "🎉", "🎊", "🌸", "💖", "🌺", "🦋"];
const victorySparkles = [...sparkles, "🌈", "🦋", "🌸", "💖", "🌺", "👑", "🎁", "🏆"];

export default function CelebrationScreen({ onContinue, chapterTitle, onGoHome, isLastChapter }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const pool = isLastChapter ? victorySparkles : sparkles;
    const count = isLastChapter ? 30 : 18;
    const items = Array.from({ length: count }, (_, i) => ({
      id: i,
      emoji: pool[i % pool.length],
      left: Math.random() * 90 + 5,
      delay: Math.random() * (isLastChapter ? 1.5 : 0.8),
      duration: (isLastChapter ? 2 : 1.5) + Math.random() * 2,
    }));
    setParticles(items);
  }, [isLastChapter]);

  if (isLastChapter) {
    return (
      <div className="screen celebration-screen celebration-screen--final">
        <div className="particles-layer">
          {particles.map((p) => (
            <span
              key={p.id}
              className="particle"
              style={{
                left: `${p.left}%`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
              }}
            >
              {p.emoji}
            </span>
          ))}
        </div>

        <div className="celebration-content">
          <div className="celebration-crown">👑</div>
          <h1 className="celebration-title">הצלחת!</h1>
          <p className="celebration-subtitle">שדה הנסיכות נושע!</p>

          <div className="victory-image-wrap">
            <img
              src={`${import.meta.env.BASE_URL}images/image-1.png`}
              alt="שדה הנסיכות הקסום"
              className="victory-image"
            />
          </div>

          <div className="celebration-message">
            <p>בזכות האומץ, האהבה והדמיון שלך, הנסיכות חזרו לשדה הקסום. הפרחים פרחו מחדש, השמש זרחה, ואביב שמח חזר לשדה!</p>
            <p className="victory-quote">💕 &quot;תודה לך, הגיבורה שלנו!&quot; 💕</p>
          </div>

          <div className="celebration-stars">
            {["⭐", "⭐", "⭐", "⭐", "⭐"].map((s, i) => (
              <span key={i} className={`star-award star-${i}`}>{s}</span>
            ))}
          </div>

          <button className="btn-restart" onClick={onContinue}>
            🔄 שחקי שוב מההתחלה
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="screen celebration-screen">
      <button className="celebration-home-btn" onClick={onGoHome} aria-label="דף הבית">
        🏠
      </button>

      <div className="particles-layer">
        {particles.map((p) => (
          <span
            key={p.id}
            className="particle"
            style={{
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          >
            {p.emoji}
          </span>
        ))}
      </div>

      <div className="celebration-content">
        <div className="celebration-crown">👑</div>
        <h1 className="celebration-title">כל הכבוד!</h1>
        <p className="celebration-subtitle">עשית את זה! את גיבורה אמיצה!</p>
        <div className="celebration-princess">
          <span className="big-emoji">🧚‍♀️</span>
        </div>
        <div className="celebration-message">
          <p>הנסיכות אומרות לך תודה! 💕</p>
          <p className="chapter-done-label">סיימת: {chapterTitle}</p>
        </div>
        <div className="celebration-stars">
          {["⭐", "⭐", "⭐"].map((s, i) => (
            <span key={i} className={`star-award star-${i}`}>{s}</span>
          ))}
        </div>
        <button className="btn-continue" onClick={onContinue}>
          ⬅ המשך לפרק הבא
        </button>
      </div>
    </div>
  );
}
