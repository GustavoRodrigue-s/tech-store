import {
  PropsWithChildren,
  ReactElement,
  useRef,
  Key,
  useLayoutEffect,
} from 'react';

import { useForceRender } from '../../../hooks';
import { PresenceChild } from './components/modules';
import { filterElements, getKey } from './utils/helpers';

import * as S from './styles';

type Mapper = Map<Key, ReactElement>;

const setMap = (mapper: Mapper) => (child: ReactElement) => {
  const key = getKey(child);
  mapper.set(key, child);
};

export const Presence: React.FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  const exitingChildrens = useRef<Mapper>(new Map()).current;
  const childrens = useRef<Mapper>(new Map()).current;

  const { forceRender } = useForceRender();

  const setChildrens = setMap(childrens);

  const childrenToRender = filterElements(children);

  Array.from(childrens).forEach(([key, child], index) => {
    const isPresent = childrenToRender.map(getKey).includes(key);

    if (isPresent) {
      exitingChildrens.delete(key);
    } else {
      exitingChildrens.set(key, child);
      childrenToRender.splice(index, 0, child);
    }
  });

  const isPresent = (child: ReactElement) => {
    return !exitingChildrens.has(getKey(child));
  };

  const handleExit = (childToExit: ReactElement) => {
    if (isPresent(childToExit)) return;

    const key = getKey(childToExit);

    childrens.delete(key);
    exitingChildrens.delete(key);

    if (!exitingChildrens.size) {
      forceRender();
    }
  };

  useLayoutEffect(() => {
    childrens.clear();
    childrenToRender.forEach(child => setChildrens(child));
  });

  return (
    <S.Container className="presence" ref={ref}>
      {childrenToRender.map(child => (
        <PresenceChild
          key={getKey(child)}
          isPresent={isPresent(child)}
          onExit={() => handleExit(child)}
        >
          {child}
        </PresenceChild>
      ))}
    </S.Container>
  );
};
