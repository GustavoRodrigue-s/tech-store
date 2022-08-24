function OrderProductsBy({ listOrder, setListOrder }) {
  const options = [
    'Favoritos',
    'Nome A-Z',
    'Nome Z-A',
    'Menor Preço',
    'Maior Preço'
  ]

  const handleSelectOption = e => {
    setListOrder(e.target.value);
  }

  return (
    <form>
      <label>
        Ordenar por
        <select value={listOrder} onChange={handleSelectOption}>
          {
            options.map((option, i) => <option key={i} value="option">{option}</option>)
          }
        </select>
      </label>
    </form>
  )
}

export default OrderProductsBy;