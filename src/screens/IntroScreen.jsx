import { useState } from "react";
import stories from "../data/stories.json";

const PARENT_INFO = {
  overview: "הסיפור הוא הרפתקת חלל אינטראקטיבית בת 10 פרקים שבה הילדה יוצאת למסע בין פלנטות מערכת השמש בעזרת אוֹרְבִּיטָה, שליחת הכוכבים. בכל פרק היא שומעת חלק מן הסיפור ומבצעת משימה יצירתית בעולם האמיתי — מקפיצות על לבה, דרך שיר חייזרי, בניית חללית ועוד. הפרק האחרון הוא פרק ניצחון — ללא משימה — שבו הגיבורה מוכתרת לחוקרת מערכת השמש הראשית!",
  prize: {
    title: "🎁 הפרס בסוף ההרפתקה",
    description: "בסיום פרק 10 הילדה מוכתרת כ\"חוקרת מערכת השמש הראשית\" ומקבלת מסך ניצחון מיוחד באפליקציה.",
    suggestion: "מומלץ להכין מראש הפתעה אמיתית לסיום — לדוגמה:",
    ideas: [
      "כתר נייר מוכן מראש שמחכה לה",
      "קופסת ממתקים קטנה עטופה כ\"מתנה מהפלנטות\"",
      "דיפלומת חוקרת חלל מודפסת עם שמה",
      "פעילות מיוחדת שהבטחתם לה מראש",
    ],
  },
  equipment: [
    { chapter: "פרק 1 – גשר הלבה של מרקורי", items: ["כריות, ספרים, קופסאות או כל חפץ שאפשר לקפוץ עליו", "מקום פנוי לתכנון מסלול"] },
    { chapter: "פרק 2 – הסוד הסגול של נפטון ואורנוס", items: ["ללא ציוד — סריקה של הבית למציאת 5 חפצים סגולים"] },
    { chapter: "פרק 3 – גן הכוכבים של ונוס", items: ["דף נייר", "עפרונות צבעוניים, מרקרים או צבעי מים"] },
    { chapter: "פרק 4 – השיר הסודי של מאדים", items: ["ללא ציוד — רק קול ודמיון!"] },
    { chapter: "פרק 5 – מבחן הצחוק של כדור הארץ", items: ["פרי: תות, תפוז או בננה"] },
    { chapter: "פרק 6 – מועצת השמות של צדק ושבתאי", items: ["ללא ציוד — אפשר לרשום על נייר", "כל בני הבית צריכים להיות נוכחים!"] },
    { chapter: "פרק 7 – החללית של דרך החלב", items: ["פלסטלינה (עדיף בכמה צבעים)"] },
    { chapter: "פרק 8 – האוצר הזעיר של מאדים ומרקורי", items: ["גישה לחצר, גינה או שביל חוץ", "עיניים פקוחות לדברים קטנטנים!"] },
    { chapter: "פרק 9 – מחול מערכת השמש הגדולה", items: ["מקום פנוי לריקוד", "טלפון לצילום — אופציונלי"] },
    { chapter: "פרק 10 – ניצחון מסע מערכת השמש", items: ["ללא ציוד — פרק ניצחון עם פרס! 🏆"] },
  ],
};

export default function IntroScreen({ onStart, onGoToChapter }) {
  const [showInfo, setShowInfo] = useState(false);
  const missionCount = stories.filter((s) => s.mission !== null).length;

  return (
    <div className="screen intro-screen intro-screen--scrollable">
      <div className="intro-sky">
        <span className="float-emoji e1">⭐</span>
        <span className="float-emoji e2">🌟</span>
        <span className="float-emoji e3">💫</span>
        <span className="float-emoji e4">✨</span>
        <span className="float-emoji e5">⭐</span>
      </div>

      <button
        className="parent-info-btn"
        onClick={() => setShowInfo(true)}
        aria-label="מידע להורים"
      >
        ℹ️ מידע להורים
      </button>

      <div className="intro-illustration">
        <div className="castle">🚀</div>
        <div className="intro-emojis">
          <span>🌌</span>
          <span>⭐</span>
          <span>🪐</span>
          <span>🌟</span>
          <span>💫</span>
          <span>🌙</span>
          <span>✨</span>
        </div>
        <div className="grass-row">
          <span>🌟</span><span>⭐</span><span>💫</span><span>⭐</span><span>🌟</span>
        </div>
      </div>

      <div className="intro-content">
        <h1 className="intro-title">מסע בין הכוכבים</h1>
        <p className="intro-subtitle">הרפתקת חלל מחכה לך!</p>
        <p className="intro-desc">
          יצורי כוכבים נלכדו בגלקסיית האור.
          <br />
          רק גיבורת חלל כמוך יכולה להצילם!
        </p>
        <div className="intro-badges">
          <span className="badge">{stories.length} פרקים</span>
          <span className="badge">{missionCount} משימות</span>
          <span className="badge">קסם ✨</span>
        </div>
        <button className="btn-start" onClick={onStart}>
          🚀 יוצאים לחלל!
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
        <span>🌟</span>
        <span>🚀</span>
        <span>🌟</span>
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
