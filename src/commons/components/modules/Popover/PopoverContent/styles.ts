import styled, { css } from 'styled-components';

import { WhiteWrapper } from '../../../elements/wrappers';

interface ContainerProps {
  width: number;
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, width }) => css`
    /* width: max-content; */
    width: ${width}px;

    padding-top: 12px;

    position: absolute;
    top: 100%;
    right: 0;
    z-index: ${theme.layers.popover};
  `}
`;

export const Content = styled(WhiteWrapper)`
  position: relative;
`;
