import React, { Component } from 'react';
import { Wrapper } from './app.styled';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  constructor() {
    super();
    this.handleFeedbackGoodChange = this.handleFeedbackGoodChange.bind(this);
    this.handleFeedbackNeutralChange =
      this.handleFeedbackNeutralChange.bind(this);
    this.handleFeedbackBadChange = this.handleFeedbackBadChange.bind(this);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  handleFeedbackGoodChange() {
    this.setState({ good: this.state.good + 1 });
  }
  handleFeedbackNeutralChange() {
    this.setState({ neutral: this.state.neutral + 1 });
  }
  handleFeedbackBadChange() {
    this.setState({ bad: this.state.bad + 1 });
  }

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return this.countTotalFeedback()
      ? ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0)
      : 'can not count';
  }

  render() {
    const total = this.countTotalFeedback();
    const percentageGood = this.countPositiveFeedbackPercentage();
    return (
      <Wrapper>
        <h2>Please leave feedback</h2>
        <div>
          <button
            type="button"
            count="good"
            onClick={this.handleFeedbackGoodChange}
          >
            Good
          </button>
          <button
            type="button"
            count=""
            onClick={this.handleFeedbackNeutralChange}
          >
            Neutral
          </button>
          <button
            type="button"
            count="bad"
            onClick={this.handleFeedbackBadChange}
          >
            Bad
          </button>
        </div>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={total}
          percentageGood={percentageGood}
        />
        {/* <h2>Statistic</h2>
        <p>
          Good: <span>{this.state.good}</span>
        </p>
        <p>
          Neutral: <span>{this.state.neutral}</span>
        </p>
        <p>
          Bad: <span>{this.state.bad}</span>
        </p>
        <p>
          Total: <span>{total}</span>
        </p>
        <p>
          Positive feedback: <span>{percentageGood} %</span>
        </p> */}
      </Wrapper>
    );
  }
}

// export const App = () => {
//   return (
//     <Wrapper>
//       <div>
//         <h2>Please leave feedback</h2>
//         <div class="form">
//           <button type="button">Good</button>
//           <button type="button">Neutral</button>
//           <button type="button">Bad</button>
//         </div>
//       </div>
//       <Statistics title="Statistics" stats={data}></Statistics>
//     </Wrapper>
//   );
// };