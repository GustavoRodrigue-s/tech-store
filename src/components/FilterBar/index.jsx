import { MdExpandMore } from 'react-icons/md';

import useFilter from  '../../hooks/useFilter';
import FilterOptionsList from './FilterOptionsList';

import "./style.css";

function FilterBar({ products }) {
  const { departments, prices, discounts, stars } = useFilter(products);

  const filters = [
    { name: "Categorias", options: departments },
    { name: "Preço", options: prices },
    { name: "Descontos", options: discounts },
    { name: "Avaliação", options: stars }
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
                  <FilterOptionsList category={name} options={options} />
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