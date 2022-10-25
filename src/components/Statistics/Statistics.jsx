import PropTypes from 'prop-types';
import { StatisticList, Text } from './Statistics.styled';
import { StatisticItem } from 'components/StatisticItem/StatisticItem';

export const Statistics = props => {
  const stats = Object.entries(props);

  return !props.total ? (
    <Text>There are no feedbacks</Text>
  ) : (
    <StatisticList>
      {stats.map(statItem => (
        <StatisticItem
          key={statItem[0]}
          statType={statItem[0]}
          statValue={statItem[1]}
        />
      ))}
    </StatisticList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};
