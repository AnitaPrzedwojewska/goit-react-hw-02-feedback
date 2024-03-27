import styled from 'styled-components';

export const StatsCard = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1em;
  background-color: lightgrey;
  border-radius: 10px;
  overflow: hidden;
`;

export const Title = styled.h2`
  display: block;
  margin: 0.5em auto;
  font-size: 1.4em;
`;

export const StatList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style-type: none;
  margin-block: 0;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.6em 1.2em;
  background-color: ${props => props.color};
`;

export const Label = styled.span`
  font-size: 14px;
`;

export const Quantity = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
