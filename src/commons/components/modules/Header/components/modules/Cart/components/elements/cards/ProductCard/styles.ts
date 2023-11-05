import styled, { css } from 'styled-components';

import { IconButton } from '../../../../../../../../../elements/buttons';
import { Ellipsis } from '../../../../../../../../../elements/texts';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 16px;

    padding-right: 8px;

    img {
      width: 100%;
      max-width: 46px;
    }

    small {
      color: ${theme.colors.gray};
    }

    > div {
      flex: 1 1;
    }

    ${Ellipsis} {
      font-size: ${theme.sizes.smaller};
      font-weight: ${theme.weights.semiBold};
      margin-bottom: 4px;
    }
  `}
`;

export const AmountWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 6px;

    height: 18px;

    > ${IconButton} {
      height: 100%;
      width: 18px;
      padding: 0;
      color: ${theme.colors.gray};
      border-radius: ${theme.borders.full};
      border: 1px solid ${theme.colors.gray100};
    }
  `}
`;
