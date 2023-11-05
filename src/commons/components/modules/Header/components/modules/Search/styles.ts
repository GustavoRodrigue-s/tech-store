import { Link } from 'react-router-dom';

import styled, { DefaultTheme, css } from 'styled-components';

import { fadeIn, slideTopIn } from '../../../../../../styles/animations';
import { BlackOverlay } from '../../../../../elements/overlays';
import { WhiteWrapper } from '../../../../../elements/wrappers';

interface FormProps {
  isShow: boolean;
}

const modifiers = {
  show: (theme: DefaultTheme) => css`
    border-color: transparent;
    outline: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: ${theme.borders.normal};

    z-index: ${theme.layers.full + 1};
  `,
};

export const Form = styled.form<FormProps>`
  ${({ theme, isShow }) => css`
    position: relative;

    ul {
      list-style-type: none;
      margin-top: 8px;
      padding-left: 16px;
    }

    > div:first-child {
      position: relative;

      background-color: ${theme.colors.white};

      ${isShow && modifiers.show(theme)};
    }
  `}
`;

export const Autocomplete = styled.div`
  ${({ theme }) => css`
    padding-top: 12px;

    width: 100%;
    min-width: fit-content;

    position: absolute;
    top: 100%;
    right: 0;

    animation: ${slideTopIn} 0.25s forwards ease;

    z-index: ${theme.layers.full + 1};
  `}
`;

export const Content = styled(WhiteWrapper)`
  position: relative;
  padding: 12px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Overlay = styled(BlackOverlay)`
  ${({ theme }) => css`
    animation: ${fadeIn} 0.3s forwards ease;
    z-index: ${theme.layers.full};
  `}
`;

export const DepartmentLink = styled(Link)`
  ${({ theme }) => css`
    color: initial;
    display: block;
    padding: 4px 0;

    font-weight: ${theme.weights.medium};
    border-radius: ${theme.borders.normal};

    transition: opacity 0.3s;

    &:hover {
      opacity: 0.6;
    }
  `}
`;
