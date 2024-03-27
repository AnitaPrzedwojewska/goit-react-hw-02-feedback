import { Wrapper, Title } from './sections.styled';
import PropTypes from 'prop-types';

export const Section = ({ title }) => {
  <Wrapper>
    <Title title={title}></Title>
  </Wrapper>
};

Section.propTypes = {
  title: PropTypes.string,
};
