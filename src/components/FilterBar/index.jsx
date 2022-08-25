import { MdExpandMore } from 'react-icons/md';

import useFilter from  '../../hooks/useFilter';
import FilterOptionsList from './FilterOptionsList';

import "./style.css";

function FilterBar({ products, setFilterOptions }) {
  const { 
    productsSortedByDepartments, 
    productsSortedByPrices, 
    productsSortedByDiscounts, 
    productsSortedByStars 
  } = useFilter(products);

  const filters = [
    { name: "Categorias", options: productsSortedByDepartments },
    { name: "Preço", options: productsSortedByPrices },
    { name: "Descontos", options: productsSortedByDiscounts },
    { name: "Avaliação", options: productsSortedByStars }
  ]

  return (
    <>
      <h2>Filtrar por</h2>
      <ul className="filter-list">
        {
          filters.map(({ name, options }, i) => (
            <li key={i}>
              <details>
                <summary>
                  {name}
                  <MdExpandMore size={25} />
                </summary>
                { 
                  <FilterOptionsList 
                    category={name} 
                    options={options} 
                    setFilterOptions={setFilterOptions} 
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