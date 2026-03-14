import { useState } from "react";
import stories from "../data/stories.json";

const PARENT_INFO = {
  overview: "הסיפור הוא הרפתקה אינטראקטיבית בת 8 פרקים שבה הילדה מצילה שבע נסיכות קסומות שנלכדו בתוך בועות על ידי ענן אפור. בכל פרק היא שומעת חלק מהסיפור ומבצעת משימה יצירתית בעולם האמיתי. הפרק האחרון הוא פרק ניצחון — ללא משימה — שבו הגיבורה מוכתרת ומקבלת פרס!",
  prize: {
    title: "🎁 הפרס בסוף ההרפתקה",
    description: "בסיום פרק 8 הילדה מוכתרת כ\"שומרת שדה הנסיכות\" ומקבלת מסך ניצחון מיוחד באפליקציה.",
    suggestion: "מומלץ להכין מראש הפתעה אמיתית לסיום — לדוגמה:",
    ideas: [
      "כתר נייר מוכן מראש שמחכה לה",
      "קופסת ממתקים קטנה עטופה כ\"מתנה מהנסיכות\"",
      "דיפלומת גיבורה מודפסת עם שמה",
      "פעילות מיוחדת שהבטחתם לה מראש",
    ],
  },
  equipment: [
    { chapter: "פרק 1 – שדה הנסיכות הקסום", items: ["דף נייר גדול", "עפרונות צבעוניים או צבעי מים"] },
    { chapter: "פרק 2 – שומר הלב", items: ["גישה לחצר, גינה או שביל חוץ", "10 אבנים קטנות או עלים"] },
    { chapter: "פרק 3 – השיקוי הקסום", items: ["כוס מים", "לימון אחד (לסחיטת מיץ)"] },
    { chapter: "פרק 4 – מבצר הנסיכות", items: ["כריות רבות", "שמיכות וכיסויים"] },
    { chapter: "פרק 5 – ההופעה המלכותית", items: ["טלפון או מצלמה לצילום וידאו", "מקום פנוי לריקוד"] },
    { chapter: "פרק 6 – ממלכת האהבה", items: ["ללא ציוד – רק חיבוקים ומחמאות! 💕"] },
    { chapter: "פרק 7 – חרב הנסיכה האגדית", items: ["פלסטלינה (עדיף בצבעים ורוד, סגול וזהב)"] },
    { chapter: "פרק 8 – ניצחון האור והכתרת הגיבורה", items: ["ללא ציוד — פרק ניצחון עם פרס! 🏆"] },
  ],
};

export default function IntroScreen({ onStart, onGoToChapter }) {
  const [showInfo, setShowInfo] = useState(false);
  const count = stories.length;

  return (
    <div className="screen intro-screen intro-screen--scrollable">
      <div className="intro-sky">
        <span className="float-emoji e1">⭐</span>
        <span className="float-emoji e2">✨</span>
        <span className="float-emoji e3">💫</span>
        <span className="float-emoji e4">🌟</span>
        <span className="float-emoji e5">✨</span>
      </div>

      <button
        className="parent-info-btn"
        onClick={() => setShowInfo(true)}
        aria-label="מידע להורים"
      >
        ℹ️ מידע להורים
      </button>

      <div className="intro-illustration">
        <div className="castle">🏰</div>
        <div className="intro-emojis">
          <span>🌸</span>
          <span>🧚‍♀️</span>
          <span>🌺</span>
          <span>👑</span>
          <span>🌼</span>
          <span>🧚‍♀️</span>
          <span>🌷</span>
        </div>
        <div className="grass-row">
          <span>🌿</span><span>🌱</span><span>🌿</span><span>🌱</span><span>🌿</span>
        </div>
      </div>

      <div className="intro-content">
        <h1 className="intro-title">שדה הנסיכות הקסום</h1>
        <p className="intro-subtitle">הרפתקה מאגית מחכה לך!</p>
        <p className="intro-desc">
          נסיכות קסומות נלכדו בשדה הפרחים.
          <br />
          רק גיבורה כמוך יכולה להציל אותן!
        </p>
        <div className="intro-badges">
          <span className="badge">{count} פרקים</span>
          <span className="badge">{count} משימות</span>
          <span className="badge">קסם ✨</span>
        </div>
        <button className="btn-start" onClick={onStart}>
          🌈 בואי נתחיל!
        </button>

        <div className="chapter-select">
          <p className="chapter-select-label">או בחרי פרק</p>
          <ul className="chapter-select-list">
            {stories.map((story, index) => (
              <li key={story.id}>
                <button
                  className="chapter-select-item"
                  onClick={() => onGoToChapter(index)}
                >
                  <span className="chapter-select-num">{index + 1}</span>
                  <span className="chapter-select-emoji">{story.emojis[0]}</span>
                  <span className="chapter-select-title">{story.title}</span>
                  <span className="chapter-select-arrow">‹</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="intro-footer">
        <span>💕</span>
        <span>🌸</span>
        <span>💕</span>
      </div>

      {showInfo && (
        <div className="parent-info-overlay" onClick={() => setShowInfo(false)}>
          <div className="parent-info-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="parent-info-close"
              onClick={() => setShowInfo(false)}
              aria-label="סגור"
            >
              ✕
            </button>

            <h2 className="parent-info-title">מידע להורה 👨‍👩‍👧</h2>

            <section className="parent-info-section">
              <h3 className="parent-info-section-title">מה הולך לקרות בסיפור?</h3>
              <p className="parent-info-text">{PARENT_INFO.overview}</p>
            </section>

            <section className="parent-info-section">
              <h3 className="parent-info-section-title">{PARENT_INFO.prize.title}</h3>
              <p className="parent-info-text">{PARENT_INFO.prize.description}</p>
              <p className="parent-info-text parent-info-prize-suggestion">{PARENT_INFO.prize.suggestion}</p>
              <ul className="parent-info-prize-ideas">
                {PARENT_INFO.prize.ideas.map((idea) => (
                  <li key={idea}>{idea}</li>
                ))}
              </ul>
            </section>

            <section className="parent-info-section">
              <h3 className="parent-info-section-title">ציוד שכדאי להכין מראש</h3>
              <ul className="parent-info-equipment">
                {PARENT_INFO.equipment.map((entry) => (
                  <li key={entry.chapter} className="parent-info-equipment-item">
                    <strong className="parent-info-chapter">{entry.chapter}</strong>
                    <ul className="parent-info-items">
                      {entry.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
