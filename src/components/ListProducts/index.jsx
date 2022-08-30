import { MdFavoriteBorder } from 'react-icons/md';

import StarRatingList from '../StarRatingList';

import "./style.css";

function ListProducts({ products, handleFavorite }) {
  return (
    <ul className="list-products">
      {
        products.map(({ id, name, image, units, stars, price, discount }) => {
          const currencyFormat = { style: "currency", currency: "BRL" };

          const priceWithDiscount = price - (price * (discount / 100));

          return (
            <li key={id} className="product">
              <div className="favorite">
                <button onClick={() => handleFavorite(id)}>
                  <MdFavoriteBorder size={35} color="#C1C1C1" />
                </button>
              </div>
              <div className="image">
                <img src={ require(`../../assets/images/${image}`) } alt={`Produto: ${name}`} />
              </div>
              <div className="name">
                <span>{name}</span>
              </div>
              <div className="units">
                <small>{units} unidades restantes</small>
              </div>
              <div className="rating">
                {
                  <StarRatingList stars={stars} />
                }
              </div>
              <div className="price">
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
              <div className="add-button">
                <button>
                  Adicionar Produto
                </button>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

export default ListProducts