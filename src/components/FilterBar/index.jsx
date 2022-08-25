import { MdExpandMore } from 'react-icons/md';

import useFilter from  '../../hooks/useFilter';

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
                    options.map(({ name, products }, i) => (
                      <li key={i}>
                        <label>
                          <div>
                            <input type="checkbox" />
                            {
                              name
                            }
                          </div>
                          <div>
                            ({products.length})
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