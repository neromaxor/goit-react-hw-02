import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import "./components/Notification/Notification";
import Options from "./components/Options/Options";
import { useState } from "react";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <div>
      <Description />
      <Options />
      <Feedback value={feedback} />
    </div>
  );
}

export default App;
