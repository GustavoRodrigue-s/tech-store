import { useEffect, useState, useCallback } from 'react';

import { IToast } from '../../../types';
import { toastEventManager } from '../../../utils/helpers';
import { LayoutTransition, Motion, Presence } from '../index';
import { ToastMessage } from './ToastMessage';

import * as S from './styles';

interface Message extends IToast {
  id: number;
}

export const ToastContainer: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleRemoveMessage = useCallback((id: number) => {
    setMessages(prevMssages =>
      prevMssages.filter(message => message.id !== id)
    );
  }, []);

  useEffect(() => {
    const handleAdd = (toast: IToast) => {
      setMessages(prevMessages => [
        ...prevMessages,
        { id: Math.random(), ...toast },
      ]);
    };

    toastEventManager.on('addToast', handleAdd);

    return () => toastEventManager.off('addToast', handleAdd);
  }, []);

  return (
    <S.Container>
      <Presence>
        {messages?.map(message => (
          <Motion
            key={message.id}
            init={{ y: 50, opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, duration: 250 }}
            exit={{ scale: 0.8, opacity: 0 }}
            easing="ease"
          >
            <LayoutTransition duration={250} easing="ease">
              <ToastMessage {...message} onRemove={handleRemoveMessage} />
            </LayoutTransition>
          </Motion>
        ))}
      </Presence>
    </S.Container>
  );
};
