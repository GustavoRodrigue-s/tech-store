/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ReactElement } from 'react';

export const getKey = (child: ReactElement) => {
  return child.key!;
};
