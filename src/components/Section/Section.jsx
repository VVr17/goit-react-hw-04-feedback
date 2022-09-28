import PropTypes from 'prop-types';
import { Box } from 'components/Box';

export const Section = ({ title, children }) => (
  <Box as="section" p={[3]} fontSize="m" bg="backgroundColor">
    {title && <h1>{title}</h1>}
    {children}
  </Box>
);

Section.prototype = {
  title: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.object),
};
