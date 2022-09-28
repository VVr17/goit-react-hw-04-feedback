import styled from '@emotion/styled';

export const StatisticList = styled.ul`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[0]}px;
  margin: ${p => p.theme.space[0]}px;
  list-style: none;
`;

export const Text = styled.p`
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[0]}px;
  font-size: ${p => p.theme.fontSizes.m};
`;
