import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    body {
      width: 100%;
      height: 100vh;
      font-family: ${theme.font.familyPrimary};
      font-size: ${theme.sizes.normal};
      font-weight: ${theme.weights.normal};
    }

    a,
    button {
      cursor: pointer;
    }

    button {
      outline: none;
      border: none;
      background-color: transparent;
    }
  `}
`;
