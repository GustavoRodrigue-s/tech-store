import { LayoutWithHeader } from '../../commons/components/layouts';
import { useCatalog } from '../../commons/hooks';
import { Products, SideBar } from '../../modules/Home/components/modules';
import { useFilters } from '../../modules/Home/hooks';
import * as S from '../../modules/Home/styles';

export const HomePage: React.FC = () => {
  const products = useCatalog();

  const { filters, filteredProducts, handleSetFilters } = useFilters(products);

  return (
    <LayoutWithHeader>
      <S.Container>
        <S.Content>
          <SideBar
            filters={filters}
            products={filteredProducts}
            onChange={handleSetFilters}
          />
          <Products
            filters={filters}
            products={products}
            filteredProducts={filteredProducts}
          />
        </S.Content>
      </S.Container>
    </LayoutWithHeader>
  );
};
