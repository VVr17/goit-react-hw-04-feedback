import PropTypes from 'prop-types';
import React from 'react';
import { Box } from 'components/Box';
import { ButtonStyled } from 'components/Button/Button';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Box py={[3]}>
    {Object.keys(options).map(key => (
      <ButtonStyled key={key} onClick={onLeaveFeedback} name={key}>
        {key}
      </ButtonStyled>
    ))}
  </Box>
);

FeedbackOptions.propTypes = {
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};
