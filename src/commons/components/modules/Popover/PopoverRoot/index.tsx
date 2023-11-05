import styled, { css } from 'styled-components';

import { fadeIn, fadeOut, slideTopIn } from '../../../../styles/animations';
import * as PopoverContent from '../PopoverContent/styles';
import { PopoverOverlay } from '../PopoverOverlay';

export interface PopoverRootProps {
  type?: 'slideIn' | 'solid';
}

const modifiers = {
  slideIn: () => css`
    ${PopoverContent.Container}, ${PopoverOverlay} {
      visibility: hidden;
      opacity: 0;
    }

    ${PopoverOverlay} {
      pointer-events: none;
      animation: ${fadeOut} 0.2s forwards;
    }

    &:hover {
      ${PopoverContent.Container} {
        animation: ${slideTopIn} 0.25s forwards ease;
      }
      ${PopoverOverlay} {
        animation: ${fadeIn} 0.3s forwards ease;
      }
    }
  `,
};

export const PopoverRoot = styled.div<PopoverRootProps>`
  ${({ type = 'slideIn' }) => css`
    position: relative;

    ${type === 'slideIn' && modifiers.slideIn()};
  `}
`;
