import styled, { DefaultTheme, css } from 'styled-components';

interface ArrowProps {
  direction: 'top' | 'right' | 'bottom' | 'left';
}

const vertical = css`
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
`;

const horizontal = css`
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
`;

const modifiers = {
  top: (theme: DefaultTheme) => css`
    border-bottom: 8px solid ${theme.colors.white};
    ${vertical}
  `,
  bottom: (theme: DefaultTheme) => css`
    border-top: 8px solid ${theme.colors.white};
    ${vertical}
  `,
  right: (theme: DefaultTheme) => css`
    border-left: 8px solid ${theme.colors.white};
    ${horizontal}
  `,
  left: (theme: DefaultTheme) => css`
    border-right: 8px solid ${theme.colors.white};
    ${horizontal}
  `,
};

export const Arrow = styled.div<ArrowProps>`
  ${({ theme, direction }) => css`
    position: absolute;
    top: -8px;
    right: 8px;

    ${modifiers[direction](theme)};
  `}
`;
