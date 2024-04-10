import {
  StatsList,
  StatItem,
  StatsResultsList,
  StatsResultsItem,
  StatValue
} from './statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
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
