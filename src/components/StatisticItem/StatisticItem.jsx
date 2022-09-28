import PropTypes from 'prop-types';
import { StatisticItemStyled } from './StatisticItem.styled';

export const StatisticItem = ({ statType, statValue }) => (
  <StatisticItemStyled>
    {statType === 'positivePercentage' ? 'positive Percentage' : statType}:{` `}
    {statValue}
  </StatisticItemStyled>
);

StatisticItem.propTypes = {
  statType: PropTypes.string.isRequired,
  statValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};
