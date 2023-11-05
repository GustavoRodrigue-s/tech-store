import styled, { css } from 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';

import { Status } from '../../../../types';

interface ContainerProps {
  type: Status;
}

const modifiers = {
  default: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.black100};
  `,
  success: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.green};
  `,
  error: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.error};
  `,
  warning: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.orange};
  `,
};

type Modifier = keyof typeof modifiers;

export const Container = styled.div<ContainerProps>`
  ${({ theme, type }) => css`
    padding: 12px 16px;

    cursor: pointer;
    user-select: none;

    display: flex;
    align-items: center;
    gap: 8px;

    border-radius: ${theme.borders.full};
    color: ${theme.colors.white};
    font-size: ${theme.sizes.smaller};

    svg {
      flex: 0 0 20px;
    }

    ${modifiers[type as Modifier]
      ? modifiers[type as Modifier](theme)
      : modifiers.default(theme)};
  `}
`;
