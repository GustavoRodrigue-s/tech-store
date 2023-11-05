import styled, { css, DefaultTheme } from 'styled-components';

import {
  PrimaryButtonProps,
  PrimaryButton,
} from '../../../../../../commons/components/elements/buttons/PrimaryButton';

interface ContainerProps extends PrimaryButtonProps {
  isDisabled: boolean;
}

const modifiers = {
  disabled: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray};
    background-color: ${theme.colors.gray100};

    &:hover {
      background-color: ${theme.colors.gray100};
    }
  `,
};

export const Container = styled(PrimaryButton)<ContainerProps>`
  ${({ theme, isDisabled }) => css`
    height: 100%;

    ${isDisabled && modifiers.disabled(theme)}
  `}
`;
