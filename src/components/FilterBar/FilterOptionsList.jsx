import StarRatingList from '../StarRatingList';

function FilterOptionsList({ category, subFilters, setSelectedFilters }) {
  const handleChange = e => {
    const currentValue = e.target.value;
    const isChecked = e.target.checked;

    isChecked
      ? setSelectedFilters(prevFilters => [...prevFilters, currentValue])
      : setSelectedFilters(prevFilters => prevFilters.filter(filter => filter !== currentValue));
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
                  cetegory={category}
                  onChange={handleChange}
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