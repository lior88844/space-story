import { useState } from "react";
import stories from "./data/stories.json";
import IntroScreen from "./screens/IntroScreen";
import StoryScreen from "./screens/StoryScreen";
import CelebrationScreen from "./screens/CelebrationScreen";

const SCREEN = {
  INTRO: "intro",
  STORY: "story",
  CELEBRATION: "celebration",
};

export default function App() {
  const [screen, setScreen] = useState(SCREEN.INTRO);
  const [chapterIndex, setChapterIndex] = useState(0);

  const currentStory = stories[chapterIndex];

  const handleStart = () => {
    setChapterIndex(0);
    setScreen(SCREEN.STORY);
  };

  const isLastChapter = chapterIndex === stories.length - 1;

  const handleChapterComplete = (didMission) => {
    if (didMission) {
      setScreen(SCREEN.CELEBRATION);
    } else {
      const next = chapterIndex + 1;
      if (next >= stories.length) {
        setScreen(SCREEN.CELEBRATION);
      } else {
        setChapterIndex(next);
        setScreen(SCREEN.STORY);
      }
    }
  };

  const handleCelebrationContinue = () => {
    const next = chapterIndex + 1;
    if (next >= stories.length) {
      setChapterIndex(0);
      setScreen(SCREEN.INTRO);
    } else {
      setChapterIndex(next);
      setScreen(SCREEN.STORY);
    }
  };

  const handleGoHome = () => {
    setChapterIndex(0);
    setScreen(SCREEN.INTRO);
  };

  const handleGoBack = () => {
    if (chapterIndex === 0) {
      setScreen(SCREEN.INTRO);
    } else {
      setChapterIndex(chapterIndex - 1);
      setScreen(SCREEN.STORY);
    }
  };

  const handleGoToChapter = (index) => {
    setChapterIndex(index);
    setScreen(SCREEN.STORY);
  };

  return (
    <div className="app-shell">
      <div className="phone-frame">
        {screen === SCREEN.INTRO && (
          <IntroScreen onStart={handleStart} onGoToChapter={handleGoToChapter} />
        )}
        {screen === SCREEN.STORY && (
          <StoryScreen
            key={chapterIndex}
            story={currentStory}
            chapterIndex={chapterIndex}
            totalChapters={stories.length}
            onComplete={handleChapterComplete}
            onGoBack={handleGoBack}
            onGoHome={handleGoHome}
          />
        )}
        {screen === SCREEN.CELEBRATION && (
          <CelebrationScreen
            chapterTitle={currentStory.title}
            onContinue={handleCelebrationContinue}
            onGoHome={handleGoHome}
            isLastChapter={isLastChapter}
          />
        )}
      </div>
    </div>
  );
}
