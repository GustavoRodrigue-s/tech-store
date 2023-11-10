import { IProduct } from './IProduct';

export interface IBag {
  id: IProduct['id'];
  amount: number;
}

export interface IBagProduct extends IProduct {
  amount: number;
}
