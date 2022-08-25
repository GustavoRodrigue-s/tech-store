import StarRatingList from '../StarRatingList';

function FilterOptionsList({ category, options, setFilterOptions }) {
  const handleChange = e => {
    const currentValue = e.target.value;
    
    if (e.target.checked) {
      setFilterOptions(prevOptions => [...prevOptions, currentValue]);
    } else {
      setFilterOptions(prevOptions => 
        prevOptions.filter(option => option !== currentValue)
      );
    }
  }

  return (
    <ul>
      {
        options.map(({ label, products }, i) =>  (
          <li key={i}>
            <label>

              <div>
                <input 
                  type="checkbox" 
                  value={label}
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