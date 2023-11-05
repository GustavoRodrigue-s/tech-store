import { Arrow } from '../../../../../elements/customs';
import { SearchInput } from '../../../../../elements/forms';
import { Empty } from '../../elements/customs';
import { ProductCard } from './components/elements/cards';
import { Group } from './components/modules';
import { useSearch } from './useSearch';
import { createSearchUrl } from './utils';

import * as S from './styles';

export const Search: React.FC = () => {
  const {
    isShow,
    search,
    isEmpty,
    hasFilteredProducts,
    hasFilteredDepartments,
    filteredDepartments,
    filteredProducts,
    handleShow,
    handleHide,
    handleChange,
    handleSubmit,
  } = useSearch();

  return (
    <S.Form isShow={isShow} onSubmit={handleSubmit}>
      <SearchInput
        value={search}
        onChange={handleChange}
        onFocus={handleShow}
        autoComplete="off"
        name="inputSearch"
        placeholder="Buscar produto..."
      />

      {isShow && (
        <>
          <S.Autocomplete>
            <S.Content>
              <Arrow direction="top" />

              <Group isShow={hasFilteredDepartments} title="Departamentos">
                <ul>
                  {filteredDepartments.map(department => (
                    <li key={department} onClick={handleHide}>
                      <S.DepartmentLink to={createSearchUrl(department)}>
                        {department}
                      </S.DepartmentLink>
                    </li>
                  ))}
                </ul>
              </Group>

              <Group isShow={hasFilteredProducts} title="Produtos">
                <ul>
                  {filteredProducts.map(({ id, ...rest }) => (
                    <li key={id} onClick={handleHide}>
                      <ProductCard {...rest} />
                    </li>
                  ))}
                </ul>
              </Group>

              {isEmpty && (
                <Empty>
                  {search
                    ? 'Nenhum produto encontrado!'
                    : 'Digite o que você procura...'}
                </Empty>
              )}
            </S.Content>
          </S.Autocomplete>

          <S.Overlay onClick={handleHide} />
        </>
      )}
    </S.Form>
  );
};
