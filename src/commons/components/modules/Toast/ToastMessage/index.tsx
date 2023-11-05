import { useEffect } from 'react';
import {
  BsFillCheckCircleFill,
  BsFillExclamationTriangleFill,
  BsFillExclamationCircleFill,
} from 'react-icons/bs';

import { IToast } from '../../../../types';

import * as S from './styles';

interface ToastMessageProps extends IToast {
  id: number;
  onRemove: (id: number) => void;
}

const icons = {
  success: BsFillCheckCircleFill,
  warning: BsFillExclamationTriangleFill,
  error: BsFillExclamationCircleFill,
};

const ICON_SIZE = 20;

export const ToastMessage: React.FC<ToastMessageProps> = ({
  id,
  message,
  type,
  duration = 4000,
  onRemove,
}) => {
  const ToastIcon = icons[type];

  const handleClick = () => onRemove(id);

  useEffect(() => {
    const timeoutId = setTimeout(() => onRemove(id), duration);
    return () => clearTimeout(timeoutId);
  }, [id, duration, onRemove]);

  return (
    <S.Container tabIndex={0} role="button" type={type} onClick={handleClick}>
      <ToastIcon size={ICON_SIZE} />
      {message}
    </S.Container>
  );
};
