import { Component } from "react"

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      } 
      render(){
        return(
        <div>
            <h1>Please leave feedback</h1>
            <div>
                <button>Good</button>
                <button>Neutral</button>
                <button>Bad</button>
            </div>
            <h2>Statistics</h2>
            <ul>
                <li>Good: {this.state.good}</li>
                <li>Neutral: {this.state.neutral}</li>
                <li>Bad: {this.state.bad}</li>
            </ul>

            <p>Total: 6</p>
            <p>Positive Feedback: 50%</p>
        </div>
        
     ) }
}