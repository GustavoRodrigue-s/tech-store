/* eslint-disable @typescript-eslint/no-explicit-any */
import { CSSProperties } from 'react';

import { IKeyframe } from '../../../types';
import * as defaultKeyframes from './constants';

interface ReturnType {
  keyframe: Keyframe & CSSProperties;
  config: KeyframeAnimationOptions;
}

export const createAnimation = (
  currentKeyframe: IKeyframe | undefined,
  type: 'init' | 'animate' | 'exit',
  easing?: string
): ReturnType => {
  const defaultKeyframeConfig = defaultKeyframes[type];

  const formattedKeyframe: any = {};

  for (const k in defaultKeyframeConfig) {
    const key = k as keyof IKeyframe;

    if (!currentKeyframe) {
      formattedKeyframe[key] = defaultKeyframeConfig[key];
    } else {
      formattedKeyframe[key] =
        currentKeyframe[key] ?? defaultKeyframeConfig[key];
    }
  }

  const { x, y, scale, opacity, ...config } = formattedKeyframe as IKeyframe;

  const keyframe: Keyframe & CSSProperties = {
    transform: `translate(${x}px, ${y}px) scale(${scale})`,
    opacity,
  };

  return {
    keyframe,
    config: {
      ...config,
      easing: easing ?? 'ease',
    },
  };
};
