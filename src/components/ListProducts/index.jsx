import { HiStar } from 'react-icons/hi'

import "./style.css";

function ListProducts({ products }) {
  return (
    <ul className="list-products">
      {
        products.map(({ id, name, image, units, rating, price }) => (
          <li key={id} className="product">
            <div className="container-image">
              <img src={require(`../../assets/images/${image}`)} alt={`Produto: ${name}`} />
            </div>
            <div className="container-name">
              <span>{name}</span>
            </div>
            <div className="container-units">
              <small>{units} unidades restantes</small>
            </div>
            <div className="container-rating">
              {
                rating.map((startType, i) => startType === "filled star" 
                  ? <HiStar key={i} size={20} color="var(--filledStarColor)" /> 
                  : <HiStar key={i} size={20} color="var(--unfilledStarColor)" />
                )
              }
            </div>
            <div className="container-price">
              <span>
                { price.toLocaleString('pt-br', { style: "currency", currency: "BRL" }) }
              </span>
            </div>
          </li>
        ))
      }
    </ul>
  )
}

export default ListProducts