import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    span {
      font-weight: ${theme.weights.medium};
    }

    select {
      border: none;
      background: none;
      outline: none;
      height: 40px;
      padding: 0 4px;

      font-size: ${theme.sizes.normal};
      font-weight: ${theme.weights.bold};
      font-family: ${theme.fonts.primary};
    }
  `}
`;
