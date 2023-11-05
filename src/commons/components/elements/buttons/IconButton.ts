import styled, { css } from 'styled-components';

interface IconButtonProps {
  isWithHover?: boolean;
}

const modifiers = {
  hover: () => css`
    &:hover {
      background-color: rgba(0, 0, 0, 0.07);
    }
  `,
};

export const IconButton = styled.button<IconButtonProps>`
  ${({ theme, isWithHover }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 4px;
    border-radius: ${theme.borders.normal};

    transition: 0.3s background-color;

    ${isWithHover && modifiers.hover()};
  `}
`;
