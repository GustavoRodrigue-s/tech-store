import styled, { css } from 'styled-components';

export const PopoverTarget = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: ${theme.layers.popover};
  `}
`;
