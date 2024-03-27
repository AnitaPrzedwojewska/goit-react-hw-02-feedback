import {
  StatsCard,
  Title,
  StatList,
  StatItem,
  Label,
  Quantity,
} from './statistics.styled';
import randomColor from 'randomcolor';
import PropTypes from 'prop-types';

export const Statistics = ({ title = 'Upload stats', stats }) => (
  <StatsCard>
    <Title>{title}</Title>
    <StatList>
      {stats.map(stat => (
        <StatItem color={randomColor}>
          <Label>{stat.label}</Label>
          <Quantity>{stat.quantity}</Quantity>
          <Quantity>{stat.percentage}%</Quantity>
        </StatItem>
      ))}
    </StatList>
  </StatsCard>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};


