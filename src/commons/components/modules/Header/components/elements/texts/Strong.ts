import styled, { css } from 'styled-components';

export const Strong = styled.strong`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-weight: ${theme.weights.semiBold};
  `}
`;
