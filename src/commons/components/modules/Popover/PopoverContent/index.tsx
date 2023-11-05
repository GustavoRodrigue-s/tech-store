import { ReactNode } from 'react';

import { Arrow } from '../../../elements/customs';

import * as S from './styles';

interface PopoverContentProps {
  children: ReactNode;
  width: number;
}

export const PopoverContent: React.FC<PopoverContentProps> = ({
  width,
  children,
}) => (
  <S.Container width={width}>
    <S.Content>
      <Arrow direction="top" />
      {children}
    </S.Content>
  </S.Container>
);
