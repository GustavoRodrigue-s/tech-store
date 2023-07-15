import { MdExpandMore } from 'react-icons/md';

import { Stars } from '../../../../../commons/components/elements/customs';
import { IFilters } from '../../../hooks/useFilters';
import { IFilteredProducts, ILabel } from '../../../types';
import { useSidebar } from './useSidebar';

import * as S from './styles';

interface SideBarProps {
  filters: IFilters;
  products: IFilteredProducts;
  onChange: (isAdd: boolean, label: ILabel, type: keyof IFilters) => void;
}

export const SideBar: React.FC<SideBarProps> = ({
  filters,
  products,
  onChange,
}) => {
  const data = useSidebar(products, filters);

  return (
    <S.Container>
      <h2>Filtrar Por</h2>

      {data.map(({ label, filters, value, activeFilters }) => (
        <S.Details key={label}>
          <S.Summary>
            {label}

            <S.IndicatorWrapper>
              {activeFilters > 0 && (
                <span>
                  {activeFilters}
                  <small>x</small>
                </span>
              )}
              <MdExpandMore size={24} />
            </S.IndicatorWrapper>
          </S.Summary>

          <S.List>
            {filters.map(({ products, label, isStar }, index) => (
              <S.Li key={index}>
                <label>
                  <span>
                    <input
                      type="checkbox"
                      onChange={e => onChange(e.target.checked, label, value)}
                    />
                    {isStar ? <Stars filledStars={label} /> : label}
                  </span>
                  ({products.length})
                </label>
              </S.Li>
            ))}
          </S.List>
        </S.Details>
      ))}
    </S.Container>
  );
};
