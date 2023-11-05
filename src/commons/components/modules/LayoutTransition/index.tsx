import { PropsWithChildren } from 'react';

import { usePresence, useLayoutTransition } from '../../../hooks';

import * as S from './styles';

interface LayoutTransitionProps extends PropsWithChildren {
  duration?: number;
  easing?: 'ease' | 'ease-in' | 'ease-out';
}

export const LayoutTransition: React.FC<LayoutTransitionProps> = ({
  duration = 300,
  easing = 'ease',
  children,
}) => {
  const { ref } = useLayoutTransition<HTMLDivElement>({ duration, easing });

  usePresence();

  return (
    <S.Container ref={ref} className="layoutTransition">
      {children}
    </S.Container>
  );
};
