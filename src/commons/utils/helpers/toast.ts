import { EventManager } from '../../lib';
import { IToast } from '../../types';

export const toastEventManager = new EventManager<IToast>();

export const toast = ({ type, message, duration }: IToast) => {
  toastEventManager.emit('addToast', { type, message, duration });
};
