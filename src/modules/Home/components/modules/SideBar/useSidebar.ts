import { IFilters } from '../../../hooks/useFilters';
import { IFilter, IFilteredProducts } from '../../../types';

interface SidebarFilter {
  label: 'Departamentos' | 'Preço' | 'Descontos' | 'Avaliação';
  value: keyof IFilters;
  filters: IFilter[];
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
    activeFilters: departments.length,
  },
  {
    label: 'Preço',
    value: 'price',
    filters: sortedByPrices,
    activeFilters: price.length,
  },
  {
    label: 'Descontos',
    value: 'discount',
    filters: sortedByDiscounts,
    activeFilters: discount.length,
  },
  {
    label: 'Avaliação',
    value: 'rating',
    filters: sortedByStars,
    activeFilters: rating.length,
  },
];
