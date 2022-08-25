import StarRatingList from '../StarRatingList';

function FilterOptionsList({ category, options }) {
  return (
    <ul>
      {
        options.map(({ label, products }, i) =>  (
          <li key={i}>
            <label>
              <div>
                <input type="checkbox" />
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