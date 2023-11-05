import { IProduct } from './IProduct';

export interface ICart {
  id: IProduct['id'];
  amount: number;
}

export interface ICartProduct extends IProduct {
  amount: number;
}
