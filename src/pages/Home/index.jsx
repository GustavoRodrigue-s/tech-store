import Header from '../../components/Header';
import FilterBar from '../../components/FilterBar';
import ListProducts from '../../components/ListProducts';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <aside>
          <FilterBar />
        </aside>
        <section>
          <div>
            <div>
              <div>
                <h1>Buscar por: "Todos os produtos"</h1>
              </div>
              <div>
                {/* <FormOrderBy /> */}
              </div>
            </div>
          </div>
          <div>
            <ListProducts />
          </div>
        </section>
      </main>
    </>
  )
}