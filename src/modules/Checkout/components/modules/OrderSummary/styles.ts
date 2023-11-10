import styled, { css } from 'styled-components';

import { PrimaryButton } from '../../../../../commons/components/elements/buttons';
import { Input } from '../../../../../commons/components/elements/forms';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 500px;
    height: 100vh;

    position: sticky;
    top: 0;

    background-color: ${theme.colors.white};

    padding: 72px 32px 32px;

    h2,
    h3 {
      font-weight: ${theme.weights.bold};
    }
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;

    a {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: ${theme.sizes.smaller};
      color: ${theme.colors.gray};

      &:hover {
        text-decoration: underline;
      }
    }
  `}
`;

export const CouponWrapper = styled.div`
  ${({ theme }) => css`
    h3 {
      font-size: ${theme.sizes.medium};
    }

    margin-top: 64px;
    margin-bottom: 32px;

    > form {
      margin-top: 16px;

      display: flex;
      align-items: center;
      gap: 8px;

      ${Input} {
        flex: 1 1;
        color: ${theme.colors.gray};
      }

      ${PrimaryButton} {
        background-color: ${theme.colors.gray};
        padding: 0 32px;
      }

      ${Input}, ${PrimaryButton} {
        height: 45px;
      }
    }
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    position: relative;

    h2 {
      text-align: center;
      font-size: ${theme.sizes.big};
    }

    > div {
      margin-top: 24px;
      display: flex;
      flex-direction: column;
      gap: 16px;

      padding: 16px 0;
      border-top: 1px solid ${theme.colors.gray200};
      border-bottom: 1px solid ${theme.colors.gray200};

      > div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        font-size: ${theme.sizes.smaller};

        span {
          font-weight: ${theme.weights.medium};
        }
      }
    }

    .total {
      margin-top: 24px;
      font-size: ${theme.sizes.medium};
    }

    .discount-applied {
      display: flex;
      flex-direction: column;
      text-align: right;

      small {
        font-size: ${theme.sizes.semiSmaller};
        color: ${theme.colors.gray};
        text-decoration: line-through ${theme.colors.error};
      }

      span > ${Discount} {
        font-size: ${theme.sizes.semiSmaller};
      }
    }

    p {
      margin: 16px 0;
      text-align: center;
      font-size: ${theme.sizes.smaller};
      color: ${theme.colors.gray};
    }

    ${PrimaryButton} {
      margin-top: 32px;
      height: 60px;
      font-weight: ${theme.weights.semiBold};
      font-size: ${theme.sizes.normal};
      letter-spacing: 0.5px;
    }
  `}
`;

export const Discount = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.green};
  `}
`;
