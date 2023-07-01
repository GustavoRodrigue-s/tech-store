import styled, { css } from 'styled-components';

import { IconButton } from '../../buttons';

export const Container = styled(IconButton)`
  ${({ theme }) => css`
    position: relative;

    svg {
      color: ${theme.colors.gray};
    }
  `}
`;

export const Amount = styled.span`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border-radius: ${theme.borders.normal};
    padding: 4px 6px;

    position: absolute;
    top: -4px;
    right: -4px;

    vertical-align: top;

    color: ${theme.colors.white};

    font-size: ${theme.sizes.smaller};
    font-family: ${theme.fonts.primary};
  `}
`;
