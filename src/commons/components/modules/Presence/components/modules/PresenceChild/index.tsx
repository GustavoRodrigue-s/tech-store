import { PropsWithChildren, createContext, useMemo } from 'react';

import * as S from './styles';

interface PresenceChildContextProps {
  isPresent: boolean;
  onExit: () => void;
}

interface PresenceChildProps extends PropsWithChildren {
  isPresent: boolean;
  onExit: () => void;
}

export const PresenceChildContext = createContext(
  {} as PresenceChildContextProps
);

export const PresenceChild: React.FC<PresenceChildProps> = ({
  isPresent,
  children,
  onExit,
}) => {
  const value = useMemo(() => ({ isPresent, onExit }), [isPresent, onExit]);

  return (
    <S.Contaienr className="presence-child">
      <PresenceChildContext.Provider value={value}>
        {children}
      </PresenceChildContext.Provider>
    </S.Contaienr>
  );
};
