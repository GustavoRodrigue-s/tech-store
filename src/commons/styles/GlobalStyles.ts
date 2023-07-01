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

      font-family: ${theme.fonts.primary};
      font-size: ${theme.sizes.normal};
      font-weight: ${theme.weights.normal};

      background-color: ${theme.colors.background};
    }

    a,
    button {
      cursor: pointer;
      text-decoration: none;
    }

    button {
      outline: none;
      border: none;
      background-color: transparent;
    }
  `}
`;
