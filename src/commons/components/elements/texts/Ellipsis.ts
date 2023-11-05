import styled, { css } from 'styled-components';

interface EllipsisProps {
  lines?: number;
}

export const Ellipsis = styled.p<EllipsisProps>`
  ${({ lines = 1 }) => css`
    overflow: hidden;
    text-overflow: ellipsis;

    display: -webkit-box;
    -webkit-line-clamp: ${lines};
    -webkit-box-orient: vertical;
  `}
`;
