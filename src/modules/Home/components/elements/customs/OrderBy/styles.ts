import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    span {
      font-weight: ${theme.weights.medium};
    }

    span,
    select {
      font-size: ${theme.sizes.smaller};

      @media screen and (min-width: 1280px) {
        font-size: ${theme.sizes.normal};
      }
    }

    select {
      border: none;
      background: none;
      outline: none;
      height: 40px;
      padding: 0 4px;

      font-weight: ${theme.weights.bold};
      font-family: ${theme.fonts.primary};
    }
  `}
`;
