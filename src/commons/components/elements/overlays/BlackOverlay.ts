import styled, { css } from 'styled-components';

export const BlackOverlay = styled.div`
  ${({ theme }) => css`
    position: fixed;
    inset: 0;
    z-index: ${theme.layers.overlay};

    width: 100vw;
    height: 100vh;

    background-color: ${theme.colors.overlay};
  `}
`;
