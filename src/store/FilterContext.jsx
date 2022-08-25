import { createContext } from 'react';

const FilterContext = createContext();

function FilterProvider({ children, value }) {
  return (
    <FilterContext.Provider value={value}>
      { children }
    </FilterContext.Provider>
  )
}

export { FilterProvider, FilterContext };