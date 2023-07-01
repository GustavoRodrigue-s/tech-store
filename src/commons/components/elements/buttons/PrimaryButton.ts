import styled, { DefaultTheme, css } from 'styled-components';

const modifiers = {
  lg: (theme: DefaultTheme) => css`
    padding: 12px 16px;
    font-size: ${theme.sizes.big};
  `,
  md: (theme: DefaultTheme) => css`
    padding: 8px 12px;
    font-size: ${theme.sizes.normal};
  `,
  sm: (theme: DefaultTheme) => css`
    padding: 8px 12px;
    font-size: ${theme.sizes.small};
  `,
  isFullWidth: () => css`
    width: 100%;
  `,
};

interface PrimaryButtonProps {
  size?: 'lg' | 'md' | 'sm';
  isFullWidth?: boolean;
}

export const PrimaryButton = styled.button<PrimaryButtonProps>`
  ${({ theme, size, isFullWidth }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${theme.colors.primary};
    border-radius: ${theme.borders.normal};
    color: ${theme.colors.white};

    transition: background-color 0.3s;

    :hover {
      background-color: ${theme.colors.primaryDark};
    }

    ${size ? modifiers[size](theme) : modifiers.md(theme)};
    ${isFullWidth && modifiers.isFullWidth()};
  `}
`;
