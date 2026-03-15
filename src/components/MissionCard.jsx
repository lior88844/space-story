export default function MissionCard({ mission, onDone, onSkip }) {
  return (
    <div className="mission-card">
      <div className="mission-header">
        <span className="mission-star">🚀</span>
        <span className="mission-title">משימת החלל שלך!</span>
        <span className="mission-star">🌟</span>
      </div>
      <p className="mission-text">{mission}</p>
      <div className="mission-buttons">
        <button className="btn-done" onClick={onDone}>✅ עשיתי!</button>
        <button className="btn-skip" onClick={onSkip}>דילוג</button>
      </div>
    </div>
  );
}
