import { EmergenceData } from "components/App.styled"
import PropTypes from 'prop-types';

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

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
}