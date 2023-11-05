import styled, { css } from 'styled-components';

export const WhiteWrapper = styled.div`
  ${({ theme }) => css`
    padding: 8px;
    background-color: ${theme.colors.white};
    border-radius: ${theme.borders.medium};
  `}
`;
