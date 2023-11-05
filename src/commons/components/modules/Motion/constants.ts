import { IKeyframe } from '../../../types';

type Animation = Required<IKeyframe> & Omit<KeyframeAnimationOptions, 'easing'>;

const defaultKeyframe: Required<IKeyframe> = {
  y: 0,
  x: 0,
  scale: 1,
  opacity: 1,
  duration: 200,
};

export const init: Animation = {
  ...defaultKeyframe,
};

export const animate: Animation = {
  ...defaultKeyframe,
  id: 'animate',
  composite: 'accumulate',
  fill: 'forwards',
};

export const exit: Animation = {
  ...defaultKeyframe,
  id: 'exit',
  fill: 'forwards',
};
