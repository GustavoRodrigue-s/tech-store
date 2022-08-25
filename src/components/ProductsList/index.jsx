import StarRatingList from '../StarRatingList';

import "./style.css";

function ListProducts({ products }) {
  return (
    <ul className="list-products">
      {
        products.map(({ id, name, image, units, stars, price, discount }) => {
          const currencyFormat = { style: "currency", currency: "BRL" };

          const priceWithDiscount = price - (price * (discount / 100));

          return (
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
                  <StarRatingList stars={stars} />
                }
              </div>
              <div className="container-price">
                {
                  discount && (
                    <div className="price-with-discount">
                      De <del>{ price.toLocaleString('pt-br', currencyFormat) }</del> <span>(↓{ discount }%)</span> por:
                    </div>
                  )
                }
                <div>
                  <span>
                    { 
                      discount 
                        ? priceWithDiscount.toLocaleString('pt-br', currencyFormat) 
                        : price.toLocaleString('pt-br', currencyFormat) 
                    }
                  </span>
                </div>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

export default ListProducts