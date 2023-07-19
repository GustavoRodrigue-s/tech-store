import { IProduct } from './IProduct';

export interface ICart {
  id: IProduct['id'];
  amount: number;
}
