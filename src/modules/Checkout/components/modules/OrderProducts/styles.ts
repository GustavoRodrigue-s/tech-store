import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 72px 0 128px;
  max-width: 900px;
  width: 100%;
`;

export const Table = styled.table`
  border-spacing: 0 16px;
  width: 100%;
`;

export const Thead = styled.thead`
  ${({ theme }) => css`
    ${Th} {
      border-bottom: 1px solid ${theme.colors.gray200};

      padding: 8px;
      color: ${theme.colors.gray};
      font-weight: ${theme.weights.medium};
    }
  `}
`;

export const Tbody = styled.tbody`
  ${({ theme }) => css`
    > ${Tr} {
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
      border-radius: ${theme.borders.medium};
      background-color: ${theme.colors.white};

      ${Td} {
        padding: 16px;

        &:nth-child(1) {
          width: 60%;
        }
        &:nth-child(2) {
          width: 110px;
        }
        &:nth-child(3) {
          width: 25%;
          text-align: center;
          white-space: nowrap;
        }
        &:nth-child(4) {
          width: fit-content;

          svg {
            color: ${theme.colors.gray};
          }
        }

        &:first-child {
          border-radius: ${theme.borders.medium} 0 0 ${theme.borders.medium};
        }
        &:last-child {
          border-radius: 0 ${theme.borders.medium} ${theme.borders.medium} 0;
        }
      }
    }

    div.name {
      display: flex;
      align-items: center;
      gap: 16px;

      strong {
        font-size: ${theme.sizes.smaller};
        font-weight: ${theme.weights.semiBold};
      }
    }

    div.price-with-discount {
      display: flex;
      flex-direction: column;
      gap: 4px;

      small {
        font-weight: ${theme.weights.medium};

        &.old-price {
          color: ${theme.colors.gray};
        }
        &.discount {
          color: ${theme.colors.green};
        }
      }
    }
  `}
`;

export const Tr = styled.tr`
  ${() => css`
    > ${Th}:first-child {
      text-align: left;
    }
  `}
`;

export const Th = styled.th``;

export const Td = styled.td`
  ${({ theme }) => css`
    div.amount {
      display: flex;
      justify-content: space-between;
      font-size: ${theme.sizes.smaller};
    }
  `}
`;

export const Price = styled.strong`
  ${({ theme }) => css`
    font-size: ${theme.sizes.normal};
    font-weight: ${theme.weights.semiBold};
  `}
`;
