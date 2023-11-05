import { IProduct } from '../../../commons/types';

export type ILabel = string | number;

interface IsStar {
  label: 0 | 1 | 2 | 3 | 4 | 5;
  products: IProduct[];
  isStar: boolean;
}

interface IsNotStar {
  label: string;
  products: IProduct[];
  isStar?: undefined;
}

export type IFilter = IsStar | IsNotStar;

export interface IFilteredProducts {
  sortedByDepartments: IFilter[];
  sortedByPrices: IFilter[];
  sortedByDiscounts: IFilter[];
  sortedByStars: IFilter[];
}
