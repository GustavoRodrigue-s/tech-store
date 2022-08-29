import StarRatingList from '../StarRatingList';

function FilterOptionsList({ category, filterCategory, subFilters, handleFilterChange }) {
  const handleChange = (e, products, filterCategory) => {
    const label = e.target.value;
    const isChecked = e.target.checked;

    handleFilterChange(isChecked, { label, products, filterCategory });
  }

  return (
    <ul>
      {
        subFilters.map(({ label, products }, i) =>  (
          <li key={i}>
            <label>

              <div>
                <input 
                  type="checkbox" 
                  value={label}
                  onChange={e => handleChange(e, products, filterCategory)}
                />

                {
                  category !== "Avaliação"
                    ? label
                    : <StarRatingList stars={label} />
                }
                
              </div>
              <div>
                ({ products.length })
              </div>

            </label>
          </li>
        ))
      }
    </ul>
  )
}

export default FilterOptionsList;