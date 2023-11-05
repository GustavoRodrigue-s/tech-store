import styled, { css } from 'styled-components';

import { Input } from '../Input';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    padding-right: 8px;

    > ${Input} {
      flex: 1 1;
      border: none;
      padding: 8px;
      background-color: transparent;
    }

    border-bottom: 1px solid ${theme.colors.gray200};

    svg {
      color: ${theme.colors.black100};
    }
  `}
`;
