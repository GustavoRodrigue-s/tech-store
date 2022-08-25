import { MdExpandMore } from 'react-icons/md';

import useFilter from  '../../hooks/useFilter';
import StarRatingList from '../StarRatingList';

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
                <ul>
                  {
                    options.map((option, i) => (
                      <li key={i}>
                        <label>
                          <div>
                            <input type="checkbox" />
                            {
                              name !== "Avaliação"
                                ? option.name
                                : <StarRatingList stars={option.name} />
                            }
                          </div>
                          <div>
                            ({option.products.length})
                          </div>
                        </label>
                      </li>
                    ))
                  }
                </ul>
              </details>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default FilterBar