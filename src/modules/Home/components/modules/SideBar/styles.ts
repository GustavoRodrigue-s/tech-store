import styled, { css } from 'styled-components';

export const Container = styled.aside`
  ${({ theme }) => css`
    h2,
    ${Summary} {
      padding: 16px 0;
    }

    ${Summary}, ${Li} label {
      display: flex;
      align-items: center;
      justify-content: space-between;

      color: ${theme.colors.gray};
    }

    ${Li} {
      font-weight: ${theme.weights.normal};
    }

    width: 100%;

    @media screen and (min-width: 860px) {
      flex: 0 0 300px;
      position: sticky;
      top: 48px;
    }
  `}
`;

export const Details = styled.details`
  ${({ theme }) => css`
    font-weight: ${theme.weights.medium};

    &[open] ${Summary} svg {
      transform: rotateZ(180deg);
    }
  `}
`;

export const Summary = styled.summary`
  ${({ theme }) => css`
    user-select: none;
    cursor: pointer;
    border-top: 1px solid ${theme.colors.gray200};
    -webkit-user-select: none;

    &::-webkit-details-marker {
      display: none;
    }
  `}
`;

export const List = styled.ul`
  margin: 4px 0 20px;
  list-style-type: none;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Li = styled.li`
  label {
    flex: 1 1;
    user-select: none;

    > span {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;

export const IndicatorWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 8px;

    span {
      font-size: ${theme.sizes.smaller};
    }
  `}
`;
