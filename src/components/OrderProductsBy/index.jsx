import "./style.css";

function OrderProductsBy({ listOrder, setListOrder }) {
  const options = [
    'Nome A-Z',
    'Nome Z-A',
    'Favoritos',
    'Menor Preço',
    'Maior Preço'
  ]

  const handleSelectOption = e => {
    setListOrder(e.target.value);
  }

  return (
    <form className="form-order">
      <label htmlFor="select-order-by">Ordenar por</label>
      <select 
        value={listOrder} 
        onChange={handleSelectOption} 
        id="select-order-by"
      >
        {
          options.map((option, i) => <option key={i} value={option}>{option}</option>)
        }
      </select>
    </form>
  )
}

export default OrderProductsBy;