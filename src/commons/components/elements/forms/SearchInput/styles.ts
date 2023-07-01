import styled, { css } from 'styled-components';

import { Input } from '../Input';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    > ${Input} {
      flex: 1 1;
      border: none;
      padding: 8px;
    }

    border-bottom: 1px solid ${theme.colors.gray};

    svg {
      color: ${theme.colors.gray};
    }
  `}
`;
