import { useEffect, useState } from "react";

const victoryItems = ["🌸", "🌺", "🌼", "🌷", "✨", "💫", "⭐", "🌟", "🎊", "💖", "🦋", "🌈"];

export default function VictoryScreen({ onRestart }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const items = Array.from({ length: 24 }, (_, i) => ({
      id: i,
      emoji: victoryItems[i % victoryItems.length],
      left: Math.random() * 92 + 4,
      delay: Math.random() * 1.5,
      duration: 2 + Math.random() * 2,
    }));
    setParticles(items);
  }, []);

  return (
    <div className="screen victory-screen">
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

      <div className="victory-content">
        <h1 className="victory-title">הצלחת!</h1>
        <h2 className="victory-subtitle">שדה הנסיכות נושע!</h2>

        <div className="victory-image-wrap">
          <img
            src="/images/image-1.png"
            alt="שדה הנסיכות הקסום"
            className="victory-image"
          />
        </div>

        <div className="victory-message">
          <p className="victory-text">
            בזכות האומץ, האהבה והדמיון שלך, הנסיכות חזרו לשדה הקסום.
            הפרחים פרחו מחדש, השמש זרחה, ואביב שמח חזר לשדה!
          </p>
          <p className="victory-quote">💕 &quot;תודה לך, הגיבורה שלנו!&quot; 💕</p>
        </div>

        <div className="victory-stars">
          {["⭐", "⭐", "⭐", "⭐", "⭐"].map((s, i) => (
            <span key={i} className={`star-award star-${i}`}>{s}</span>
          ))}
        </div>

        <button className="btn-restart" onClick={onRestart}>
          🔄 שחקי שוב מההתחלה
        </button>
      </div>
    </div>
  );
}
