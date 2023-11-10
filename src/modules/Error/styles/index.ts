import styled, { css } from 'styled-components';

import { PrimaryButton } from '../../../commons/components/elements/buttons';

export const Container = styled.div`
  padding: 40px 20px;
  flex: 1 1;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.main`
  ${({ theme }) => css`
    width: 100%;
    flex: 1 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;

    text-align: center;

    .logo {
      font-size: min(${theme.sizes.headlingOne}, 15vw);
    }

    p {
      font-weight: ${theme.weights.semiBold};
      width: 100%;
      max-width: 360px;
      margin: 16px 0;
    }

    ${PrimaryButton} {
      padding: 16px 32px;
    }
  `}
`;

export const Strong = styled.strong`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-weight: ${theme.weights.bold};
    font-size: ${theme.sizes.headlingThree};

    letter-spacing: 1.5px;
    text-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
  `}
`;
