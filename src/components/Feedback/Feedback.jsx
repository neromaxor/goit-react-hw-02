import css from "./Feedback.module.css";

export default function Feedback({ value, totalFeedback, pozitivMath }) {
  const { good, neutral, bad } = value;
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total {totalFeedback}</p>
      <p>Pozitiv: {pozitivMath}%</p>
    </div>
  );
}
