export type Status = 'success' | 'warning' | 'error';

export interface IToast {
  message: string;
  type: Status;
  duration?: number;
}
