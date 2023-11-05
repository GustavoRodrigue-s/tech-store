import styled, { css } from 'styled-components';

import { PrimaryButton } from '../../../../../../../../elements/buttons';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 4px;

    display: flex;
    flex-direction: column;
    gap: 8px;

    ${PrimaryButton} {
      margin-top: 8px;
      height: 38px;
    }
  `}
`;

export const ProductsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 16px;

    padding: 16px 0;

    border-top: 0.5px solid ${theme.colors.gray200};
    border-bottom: 0.5px solid ${theme.colors.gray200};

    overflow-y: auto;
    max-height: 380px;
  `}
`;
