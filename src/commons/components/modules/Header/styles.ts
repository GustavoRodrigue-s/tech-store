import styled, { css } from 'styled-components';

import * as SearchInput from '../../elements/forms/SearchInput/styles';

export const Container = styled.header`
  ${({ theme }) => css`
    width: 100%;
    padding: 20px;

    z-index: ${theme.layers.header};

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${theme.colors.white};
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);

    .logo {
      font-size: ${theme.sizes.big};
    }

    > div {
      display: flex;
      align-items: center;
      gap: 24px;

      ${SearchInput.Container} {
        flex: 1 1;
      }
    }

    @media screen and (min-width: 800px) {
      .logo {
        font-size: ${theme.sizes.headlingSeven};
      }

      > div {
        gap: 48px;
      }
    }

    @media screen and (min-width: 860px) {
      padding: 20px 32px;
    }

    @media screen and (min-width: 1280px) {
      padding: 20px 64px;
    }
  `}
`;
