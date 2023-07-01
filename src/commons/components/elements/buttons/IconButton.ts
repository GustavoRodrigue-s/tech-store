import styled, { css } from 'styled-components';

export const IconButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 4px;
    border-radius: ${theme.borders.normal};

    transition: 0.3s background-color;

    &:hover {
      background-color: rgba(0, 0, 0, 0.07);
    }
  `}
`;
