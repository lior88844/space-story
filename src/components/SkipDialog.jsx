export default function SkipDialog({ onConfirm, onCancel }) {
  return (
    <div className="dialog-overlay" onClick={onCancel}>
      <div className="dialog-box" onClick={(e) => e.stopPropagation()}>
        <div className="dialog-emoji">🤔</div>
        <p className="dialog-text">בטוחה שרוצה לדלג על המשימה?</p>
        <p className="dialog-sub">זה בסדר! תמיד אפשר לנסות אחר כך 💕</p>
        <div className="dialog-buttons">
          <button className="btn-confirm-skip" onClick={onConfirm}>
            כן, דלגי
          </button>
          <button className="btn-cancel-skip" onClick={onCancel}>
            לא, אנסה!
          </button>
        </div>
      </div>
    </div>
  );
}
