import { useContext } from 'react';
import { MdExpandMore } from 'react-icons/md';

import { FilterContext } from '../../store/FilterContext';
import FilterOptionsList from './FilterOptionsList';

import "./style.css";

function FilterBar() {
  const { filteredProducts, setSelectedFilters } = useContext(FilterContext);

  const {
    sortedByDepartments,
    sortedByPrices,
    sortedByDiscounts,
    sortedByStars
  } = filteredProducts;

  const filters = [
    { name: "Categorias", subFilters: sortedByDepartments },
    { name: "Preço", subFilters: sortedByPrices },
    { name: "Descontos", subFilters: sortedByDiscounts },
    { name: "Avaliação", subFilters: sortedByStars }
  ]

  return (
    <>
      <h2>Filtrar por</h2>
      <ul className="filter-list">
        {
          filters.map(({ name, subFilters }, i) => (
            <li key={i}>
              <details>
                <summary>
                  {name}
                  <MdExpandMore size={25} />
                </summary>
                { 
                  <FilterOptionsList 
                    category={name} 
                    subFilters={subFilters}
                    setSelectedFilters={setSelectedFilters}
                  />
                }
              </details>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default FilterBar