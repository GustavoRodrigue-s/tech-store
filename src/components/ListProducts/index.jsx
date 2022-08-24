import useCatalog from "../../store/hooks/useCatalog";

function ListProducts() {
  const products = useCatalog();

  return (
    <ul>
      {
        products.map(({ id, name }) => <li key={id}>{name}</li>)
      }
    </ul>
  )
}

export default ListProducts