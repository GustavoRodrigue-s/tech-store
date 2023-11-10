import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding-top: 120px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    text-align: center;

    h1 {
      font-size: ${theme.sizes.headlingFour};
    }

    p {
      font-size: ${theme.sizes.normal};
      width: 100%;
      max-width: 600px;
    }

    p,
    a {
      color: ${theme.colors.gray};
    }

    a {
      text-decoration: underline;
    }
  `}
`;
