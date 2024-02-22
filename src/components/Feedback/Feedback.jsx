import css from "./Feedback.module.css";

export default function Feedback(feedback) {
  const { good, neutral, bad } = feedback;
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  );
}
