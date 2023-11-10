import styled, { css, keyframes } from 'styled-components';

import { Ellipsis } from '../../../../../../commons/components/elements/texts';

interface FavoriteWrapperProps {
  isFavorite: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1
  }
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.borders.medium};

    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

    position: relative;
    padding: 8px;
    height: 340px;

    display: flex;
    flex-direction: column;
    gap: 4px;

    strong {
      font-weight: ${theme.weights.semiBold};
    }

    small {
      color: ${theme.colors.gray};
    }

    ${ButtonWrapper}, ${FavoriteWrapper} {
    }

    &:hover {
      ${PriceWrapper} {
        display: none;
      }
      ${ShowOnHoverWrapper} {
        display: block;
      }
    }
  `}
`;

const ShowOnHoverWrapper = styled.div`
  display: none;
  animation: ${fadeIn} 0.3s forwards;
`;

export const FavoriteWrapper = styled(ShowOnHoverWrapper)<FavoriteWrapperProps>`
  position: absolute;
  top: 8px;
  right: 8px;

  svg {
    color: ${({ theme, isFavorite }) =>
      isFavorite ? theme.colors.primary : theme.colors.gray};
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  img {
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: 4px;

    small {
      font-weight: ${theme.weights.medium};
    }

    ${Ellipsis} {
      height: 44px;
    }
  `}
`;

export const PriceWrapper = styled.div`
  ${({ theme }) => css`
    small {
      font-size: ${theme.sizes.semiSmaller};
      font-weight: ${theme.weights.semiBold};
    }
  `}
`;

export const ButtonWrapper = styled(ShowOnHoverWrapper)`
  margin-top: auto;
`;
