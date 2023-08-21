import { EmergenceData } from "components/App.styled"

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
      <div>
        <EmergenceData>
              <li>Good: {good}</li>
              <li>Neutral: {neutral}</li>
              <li>Bad: {bad}</li>
              <li>Total: {total}</li>
              <li>Positive Feedback: { positivePercentage } %</li>
              </EmergenceData>
      </div>
  )
  }