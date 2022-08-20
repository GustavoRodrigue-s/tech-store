import catalog from './assets/catalog/catalog.json';

function App() {
  return (
    <div className="App">
      { 
        catalog.map(({ name, image, id }) => (
          <li key={id}>
            {name}
            <img src={require(`./assets/images/${image}`)} alt={image} />
          </li>
        )) 
      }
    </div>
  );
}

export default App;