import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${({ theme }) => css`
    outline: none;
    padding: 8px 16px;

    border: 1px solid ${theme.colors.gray200};
    border-radius: ${theme.borders.normal};
    color: ${theme.colors.gray};
    font-size: ${theme.sizes.normal};
  `}
`;
