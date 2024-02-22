import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import Options from "./components/Options/Options";
import { useState, useEffect } from "react";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("save-data"));

    if (savedData) {
      return savedData;
    }

    return { good, neutral, bad };
  });

  useEffect(() => {
    window.localStorage.setItem("save-data", JSON.stringify(feedback)); // Виправлено збереження даних без зайвого обгортання в об'єкт
  }, [feedback]);

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  const isFeedback = totalFeedback > 0;
  const pozitivMath = Math.round(((good + neutral) / totalFeedback) * 100);

  return (
    <div>
      <Description />
      <Options
        isFeedback={isFeedback}
        setFeedback={setFeedback}
        resetFeedback={setFeedback}
      />
      {!isFeedback && <Notification />}

      {isFeedback ? (
        <Feedback
          value={feedback}
          totalFeedback={totalFeedback}
          pozitivMath={pozitivMath}
        />
      ) : null}
    </div>
  );
}

export default App;
