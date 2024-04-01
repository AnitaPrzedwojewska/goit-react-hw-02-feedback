import { Component } from 'react';
import {
  StatsList,
  StatItem,
  StatsResultsList,
  StatsResultsItem,
  StatValue
} from './statistics.styled';

export class Statistics extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: '',
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <>
        <StatsList>
          <StatItem>
            Good: <StatValue>{good}</StatValue>
          </StatItem>
          <StatItem>
            Neutral: <StatValue>{neutral}</StatValue>
          </StatItem>
          <StatItem>
            Bad: <StatValue>{bad}</StatValue>
          </StatItem>
        </StatsList>
        <StatsResultsList>
          <StatsResultsItem>
            Total: <StatValue>{total}</StatValue>
          </StatsResultsItem>
          <StatsResultsItem>
            Positive feedback: <StatValue>{positivePercentage} %</StatValue>
          </StatsResultsItem>
        </StatsResultsList>
      </>
    );
  }
}
