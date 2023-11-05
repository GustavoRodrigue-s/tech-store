import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components';

export const Container = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 8px 0;

    color: initial;

    > img {
      max-width: 50px;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    strong {
      font-size: ${theme.sizes.smaller};
      font-weight: ${theme.weights.semiBold};
    }

    transition: 0.3s;

    &:hover {
      opacity: 0.6;
    }
  `}
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
