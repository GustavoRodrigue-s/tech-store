import { IFilters } from '../../../hooks/useFilters';
import { IFilter, IFilteredProducts, ILabel } from '../../../types';

interface SidebarFilter {
  label: 'Departamentos' | 'Preço' | 'Descontos' | 'Avaliação';
  value: keyof IFilters;
  filters: IFilter[];
  filter: ILabel[];
  activeFilters: number;
}

export const useSidebar = (
  {
    sortedByDepartments,
    sortedByDiscounts,
    sortedByPrices,
    sortedByStars,
  }: IFilteredProducts,
  { departments, discount, price, rating }: IFilters
): SidebarFilter[] => [
  {
    label: 'Departamentos',
    value: 'departments',
    filters: sortedByDepartments,
    filter: departments,
    activeFilters: departments.length,
  },
  {
    label: 'Preço',
    value: 'price',
    filters: sortedByPrices,
    filter: price,
    activeFilters: price.length,
  },
  {
    label: 'Descontos',
    value: 'discount',
    filters: sortedByDiscounts,
    filter: discount,
    activeFilters: discount.length,
  },
  {
    label: 'Avaliação',
    value: 'rating',
    filters: sortedByStars,
    filter: rating,
    activeFilters: rating.length,
  },
];
