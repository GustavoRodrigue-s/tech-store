import { useState } from 'react';

export const useForceRender = () => {
  const setCounter = useState<number>(0)[1];

  const forceRender = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  return {
    forceRender,
  };
};
