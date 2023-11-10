import styled, { css } from 'styled-components';

import { IconButton } from '../../../../../elements/buttons';
import { Strong } from '../../elements/texts';

export const BagButton = styled(IconButton)`
  ${({ theme }) => css`
    position: relative;

    svg {
      color: ${theme.colors.black100};
    }
  `}
`;

export const Amount = styled.span`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border-radius: ${theme.borders.full};

    width: 18px;
    height: 18px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0px;
    right: -4px;

    color: ${theme.colors.white};

    font-size: ${theme.sizes.semiSmaller};
    font-weight: ${theme.weights.semiBold};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    footer ${Strong} {
      color: initial;
      font-size: ${theme.sizes.smaller};
      font-weight: ${theme.weights.bold};
    }
  `}
`;
