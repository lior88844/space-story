# 🌸 שדה הנסיכות הקסום

An interactive Hebrew-language children's story app — a magical 8-chapter adventure where a child rescues seven enchanted princesses by completing real-world creative missions.

> Built with React + Vite · Designed for mobile · Full RTL Hebrew support

---

## ✨ What is this?

A fairy tale comes to life. The child listens to (or reads) each chapter of the story, then steps away from the screen to complete a hands-on mission in the real world — drawing, building, singing, hugging, crafting. After completing the mission, the story continues to the next chapter.

The final chapter has no mission — it's a reward: the hero is crowned as the guardian of the princess field. 👑

---

## 📖 The 8 Chapters

| # | Title | Real-World Mission |
|---|---|---|
| 1 | שדה הנסיכות הקסום | Draw a colorful flower field |
| 2 | שומר הלב | Collect 10 stones/leaves and arrange them as a heart |
| 3 | השיקוי הקסום | Make and drink a glass of water with lemon juice |
| 4 | מבצר הנסיכות | Build a fort from pillows and blankets |
| 5 | ההופעה המלכותית | Invent a song + dance and film it |
| 6 | ממלכת האהבה | Give compliments and hugs to everyone at home |
| 7 | חרב הנסיכה האגדית | Sculpt a princess sword from playdough |
| 8 | ניצחון האור והכתרת הגיבורה | 🏆 Final reward — no mission! |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm

### Install & Run

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The output goes to `dist/`.

---

## 🎵 Adding Audio

Place `.m4a` audio files in `public/audio/` with the following names:

```
public/audio/
├── chapter-1.m4a
├── chapter-2.m4a
├── chapter-3.m4a
├── chapter-4.m4a
├── chapter-5.m4a
├── chapter-6.m4a
├── chapter-7.m4a
└── chapter-8.m4a
```

The audio player automatically detects if a file is present. If a file is missing, a placeholder is shown gracefully.

---

## 🖼️ Assets

| Path | Description |
|---|---|
| `public/images/image-1.png` | Final victory screen illustration |
| `public/audio/chapter-*.m4a` | Per-chapter narration audio |

---

## 🌐 Deployment (GitHub Pages)

The app is configured for automatic deployment to GitHub Pages via GitHub Actions.

Every push to `main` triggers a build and deploy automatically. The base URL is set dynamically from the repository name — no manual configuration needed.

**Setup steps:**

1. Create a GitHub repository
2. Push the code to `main`
3. Go to **Settings → Pages → Source** and select **GitHub Actions**
4. Your app will be live at:

```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

---

## 🗂️ Project Structure

```
princess-story/
├── public/
│   ├── audio/          # Chapter narration (.m4a files)
│   └── images/         # Illustrations
├── src/
│   ├── components/
│   │   ├── AudioPlayer.jsx   # Play/pause/seek audio
│   │   ├── MissionCard.jsx   # Mission done/skip UI
│   │   └── SkipDialog.jsx    # Skip confirmation dialog
│   ├── screens/
│   │   ├── IntroScreen.jsx        # Homepage & chapter select
│   │   ├── StoryScreen.jsx        # Per-chapter story view
│   │   ├── CelebrationScreen.jsx  # Post-mission celebration (+ final victory)
│   │   └── VictoryScreen.jsx      # (legacy, no longer used)
│   ├── data/
│   │   └── stories.json      # All 8 chapters (Hebrew content)
│   ├── App.jsx               # Navigation state machine
│   ├── main.jsx              # React entry point
│   └── index.css             # All styles (RTL, responsive, animations)
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Pages auto-deploy
├── index.html
├── vite.config.js
└── package.json
```

---

## 🛠️ Tech Stack

| | |
|---|---|
| Framework | [React 18](https://react.dev/) |
| Bundler | [Vite 5](https://vitejs.dev/) |
| Styling | Plain CSS with CSS variables |
| Language | Hebrew (RTL) |
| Fonts | [Varela Round](https://fonts.google.com/specimen/Varela+Round) |
| Deployment | GitHub Pages via GitHub Actions |

---

## 📱 Mobile Support

The app is designed mobile-first:

- Full-screen on phones (no frame border on small screens)
- `100dvh` for correct height on iOS Safari
- `safe-area-inset` padding for notched iPhones
- Touch-optimized buttons (`touch-action: manipulation`)
- Responsive font scaling at `700px`, `600px`, and `500px` height breakpoints
- Landscape mode support

---

## 👨‍👩‍👧 For Parents

Tap the **ℹ️ מידע להורים** button on the home screen for:
- A full story overview
- A per-chapter equipment checklist to prepare in advance
- Suggestions for a surprise physical prize to give at the end

---

## 📄 License

Private project — all story content and assets are original.
