/* eslint-disable react-hooks/exhaustive-deps */
import { PropsWithChildren, useMemo, useEffect, useRef } from 'react';

import { usePresence } from '../../../hooks';
import { IKeyframe } from '../../../types';
import { createAnimation } from './createAnimation';

import * as S from './styles';

export interface MotionProps extends PropsWithChildren {
  init?: Omit<IKeyframe, 'duration'>;
  animate?: IKeyframe;
  exit?: IKeyframe;
  easing?: 'ease' | 'ease-in' | 'ease-out';
}

export const Motion: React.FC<MotionProps> = ({
  init,
  animate,
  exit,
  easing,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { isPresent, onExit } = usePresence();

  const animations = useMemo(
    () => ({
      init: createAnimation(init, 'init', easing),
      animate: createAnimation(animate, 'animate', easing),
      exit: createAnimation(exit, 'exit', easing),
    }),
    []
  );

  useEffect(() => {
    const node = ref.current;
    const presenceNotImplemented = onExit === null || isPresent === null;

    if (!node || presenceNotImplemented) return;

    if (isPresent) {
      const exitAnimation = node
        .getAnimations()
        .findLast(({ id }) => id === 'exit');

      if (exitAnimation) {
        exitAnimation.onfinish = null;
        exitAnimation.reverse();
      }

      return;
    }

    if (!exit) {
      return onExit();
    }

    const { keyframe, config } = animations.exit;

    const animation = node.animate(keyframe, config);

    animation.onfinish = onExit;
  }, [isPresent, ref, animations, onExit]);

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    node.style.transform = '';
    node.style.opacity = '';

    const { keyframe, config } = animations.animate;
    const initialKeyframe = animations.init.keyframe;

    node.animate([initialKeyframe, keyframe], { ...config, easing });
  }, [ref, animations]);

  return (
    <S.Container className="motion" ref={ref} style={animations.init.keyframe}>
      {children}
    </S.Container>
  );
};
