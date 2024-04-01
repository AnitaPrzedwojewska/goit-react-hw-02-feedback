import React, { Component } from 'react';
import { Wrapper } from './app.styled';
import { Section } from './Section/section';
import { Statistics } from './Statistics/statistics';
import { FeedbackOptions } from './FeedbackOptions/feedbackOptions';

export class App extends Component {
  constructor() {
    super();
    this.handleFeedbackChange = this.handleFeedbackChange.bind(this);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  handleFeedbackChange(event) {
    const { name } = event.target;
    this.setState({ [name]: this.state[name] + 1 });
  }

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return this.countTotalFeedback()
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 'can not count';
  }

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedbackChange}
          />
        </Section>
        <Section title="Statistic">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </Wrapper>
    );
  }
}