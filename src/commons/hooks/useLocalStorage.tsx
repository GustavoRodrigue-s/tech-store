/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
import { useState, useEffect, Dispatch, SetStateAction } from 'react';

const get = (key: string) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

const set = <T extends unknown>(key: string, item: T) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export const useLocalStorage = <T extends unknown>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] => {
  const [item, setItem] = useState<T>(() => {
    const localStorageItem = get(key);
    return localStorageItem ?? initialValue;
  });

  useEffect(() => {
    set(key, item);
  }, [item, key]);

  return [item, setItem];
};
