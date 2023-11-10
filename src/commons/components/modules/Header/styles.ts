import styled, { css } from 'styled-components';

import * as SearchInput from '../../elements/forms/SearchInput/styles';

export const Container = styled.header`
  ${({ theme }) => css`
    width: 100%;
    padding: 20px 64px;

    z-index: ${theme.layers.header};

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${theme.colors.white};
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);

    > div {
      flex: 0 1 360px;

      display: flex;
      align-items: center;
      gap: 48px;

      ${SearchInput.Container} {
        flex: 1 1;
      }
    }
  `}
`;
