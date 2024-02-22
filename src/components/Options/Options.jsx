import css from "./Options.module.css";

export default function Options({ setFeedback, resetFeedback, isFeedback }) {
  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const resetButton = () => {
    resetFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div>
      <button onClick={() => handleFeedback("good")}>Good</button>
      <button onClick={() => handleFeedback("neutral")}>Neutral</button>
      <button onClick={() => handleFeedback("bad")}>Bad</button>
      {isFeedback && <button onClick={resetButton}>Reset</button>}
    </div>
  );
}
