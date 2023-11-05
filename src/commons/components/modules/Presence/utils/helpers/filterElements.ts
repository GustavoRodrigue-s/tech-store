import { ReactNode, Children, ReactElement, isValidElement } from 'react';

export const filterElements = (children: ReactNode) => {
  const elements: ReactElement[] = [];

  Children.forEach(children, child => {
    isValidElement(child) && elements.push(child);
  });

  return elements;
};
