import { Component } from "react"

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    } 
    
    handleClickGood = () => 
        this.setState((prevState) => ({ good: prevState.good +=1}))     

    handleClickNeutral = () => 
        this.setState((prevState) => ({ neutral: prevState.neutral +=1}))    

    handleClickBad = () => 
        this.setState((prevState) =>({ bad: prevState.bad +=1}))    

        countTotalFeedback = () => {
            const { good, neutral, bad } = this.state;
            const result = good + neutral + bad;
            return result;
        }
        
        countPositiveFeedbackPercentage = () => {
            const { good, neutral, bad } = this.state;
            const result = good + neutral + bad;
            const percentGood =  good * 100 / result;
            return Math.round(percentGood);
        }

    render(){
        const { good, neutral, bad } = this.state;
        return(
        <div>
            <h1>Please leave feedback</h1>
            <div>
                <button onClick={this.handleClickGood}>Good</button>
                <button onClick={this.handleClickNeutral}>Neutral</button>
                <button onClick={this.handleClickBad}>Bad</button>
            </div>
            <h2>Statistics</h2>
            
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {this.countTotalFeedback()}</li>
                <li>Positive Feedback: { this.countPositiveFeedbackPercentage() }%</li>
            </ul>
        </div>
        
     ) }
}