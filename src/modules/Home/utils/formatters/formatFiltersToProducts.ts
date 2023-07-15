import { IProduct } from '../../../../commons/types';
import { IFilter, ILabel } from '../../types';

export const formatFiltersForProducts = (
  filters: ILabel[][],
  allFilteredProducts: IFilter[]
): IProduct[][] =>
  Object.values(filters).map(labels =>
    labels?.reduce(
      (acc: IProduct[], label: ILabel) => [
        ...acc,
        ...(allFilteredProducts.find(filter => filter.label === label)
          ?.products ?? []),
      ],
      []
    )
  );
