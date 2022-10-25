import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  min-width: 160px;
  min-height: 40px;

  color: currentColor;
  font-weight: ${p => p.theme.fontWeight.semiBold};
  font-size: ${p => p.theme.fontSizes.s};
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid ${p => p.theme.colors.btnColor};
  background-color: ${p => p.theme.colors.btnColor};
  border-radius: ${p => p.theme.space[1]}px;
  transition: box-shadow 250ms cubic-bezier(0.19, 1, 0.22, 1);

  :hover,
  :focus {
    box-shadow: 0px 4px 4px ${p => p.theme.colors.btnShadowColor};
  }

  :not(:last-of-type) {
    margin-right: ${p => p.theme.space[3]}px;
  }
`;
