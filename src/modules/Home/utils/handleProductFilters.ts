import { IProduct } from '../../../commons/types';
import { IFilteredProducts } from '../types';

type SortedByDepartments = { label: string; products: IProduct[] }[];

export const handleProductFilters = (
  products: IProduct[]
): IFilteredProducts => {
  const sortedByDepartments = products.reduce<SortedByDepartments>(
    (acc, product) => {
      const departmentExists = acc?.find(
        ({ label }) => label === product?.department
      );

      if (departmentExists) return acc;

      const filteredProducts = products.filter(
        ({ department }) => department === product?.department
      );

      return [
        ...acc,
        { label: product?.department, products: filteredProducts },
      ];
    },
    []
  );

  const sortedByPrices = [
    {
      label: 'Até R$ 100,00',
      products: products.filter(({ price }) => price <= 100),
    },
    {
      label: 'De R$ 250,00 até R$ 500,00',
      products: products.filter(({ price }) => price > 100 && price <= 500),
    },
    {
      label: 'De R$ 500,00 até R$ 1000,00',
      products: products.filter(({ price }) => price > 500 && price <= 1000),
    },
    {
      label: 'Mais de R$ 1000,00',
      products: products.filter(({ price }) => price > 1000),
    },
  ];

  const sortedByDiscounts = [
    {
      label: 'Sem desconto',
      products: products.filter(({ discount }) => !discount),
    },
    {
      label: 'Com desconto',
      products: products.filter(({ discount }) => discount),
    },
  ];

  const stars = [1, 2, 3, 4, 5] as (1 | 2 | 3 | 4 | 5)[];

  const sortedByStars = stars.map(star => ({
    label: star,
    products: products.filter(({ filledStars }) => star === (filledStars ?? 0)),
    isStar: true,
  }));

  return {
    sortedByDepartments,
    sortedByPrices,
    sortedByDiscounts,
    sortedByStars,
  };
};
