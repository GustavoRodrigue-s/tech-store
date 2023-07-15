import * as S from './styles';

const orderByOptions = [
  { label: 'Nome A-Z', value: 'asc name' },
  { label: 'Nome Z-A', value: 'desc name' },
  { label: 'Favoritos', value: 'favorites' },
  { label: 'Maior preço', value: 'asc price' },
  { label: 'Menor preço', value: 'desc price' },
] as const;

export type IOrderBy = (typeof orderByOptions)[number]['value'];

interface OrderByProps {
  order: IOrderBy;
  handleOrderChange: (order: IOrderBy) => void;
}

export const OrderBy: React.FC<OrderByProps> = ({
  order,
  handleOrderChange,
}) => (
  <S.Container>
    <span>Ordernar por</span>
    <select
      value={order}
      onChange={e => handleOrderChange(e.target.value as IOrderBy)}
    >
      {orderByOptions?.map(({ label, value }) => (
        <option key={label} value={value}>
          {label}
        </option>
      ))}
    </select>
  </S.Container>
);
