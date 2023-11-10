import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;

  padding: 40px 20px;

  @media screen and (min-width: 1280px) {
    padding: 80px 20px;
  }
`;

export const Content = styled.main`
  ${({ theme }) => css`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 32px;

    h2 {
      font-size: ${theme.sizes.medium};

      @media screen and (min-width: 1280px) {
        font-size: ${theme.sizes.big};
      }
    }

    @media screen and (min-width: 860px) {
      flex-direction: row;
    }

    @media screen and (min-width: 1560px) {
      gap: 64px;
    }
  `}
`;
