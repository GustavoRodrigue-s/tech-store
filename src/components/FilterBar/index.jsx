import { useContext } from 'react';
import { MdExpandMore } from 'react-icons/md';

import { FilterContext } from '../../store/FilterContext';
import FilterOptionsList from './FilterOptionsList';

import "./style.css";

function FilterBar() {
  const { filteredProducts, handleFilterChange } = useContext(FilterContext);

  const {
    sortedByDepartments,
    sortedByPrices,
    sortedByDiscounts,
    sortedByStars
  } = filteredProducts;

  const filters = [
    { name: "Departamentos", filter: "departments", subFilters: sortedByDepartments },
    { name: "Preço", filter: "price", subFilters: sortedByPrices },
    { name: "Descontos", filter: "discount", subFilters: sortedByDiscounts },
    { name: "Avaliação", filter: "rating", subFilters: sortedByStars }
  ]

  return (
    <>
      <h2>Filtrar por</h2>
      <ul className="filter-list">
        {
          filters.map(({ name, subFilters, filter }, i) => (
            <li key={i}>
              <details>
                <summary>
                  {name}
                  <MdExpandMore size={25} />
                </summary>
                { 
                  <FilterOptionsList 
                    category={name}
                    filter={filter}
                    subFilters={subFilters}
                    handleFilterChange={handleFilterChange}
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