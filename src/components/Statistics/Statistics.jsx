import { Component } from 'react';

export class Statistics extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: '',
  };

  render() {
    const good = this.props.good;
    const neutral = this.props.neutral;
    const bad = this.props.bad;
    const total = this.props.total;
    const positivePercentage = this.props.positivePercentage;
    return (
      <>
        <p>
          Good: <span>{good}</span>
        </p>
        <p>
          Neutral: <span>{neutral}</span>
        </p>
        <p>
          Bad: <span>{bad}</span>
        </p>
        <p>
          Total: <span>{total}</span>
        </p>
        <p>
          Positive feedback: <span>{positivePercentage} %</span>
        </p>
      </>
    );
  }
}
