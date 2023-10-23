import React, { createContext, ReactNode, useState } from 'react';

type FilterType = string[];

export type FilterContextType = {
  filters: FilterType;
  addFilter: (selectedCategory: string) => void;
};

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined
);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<FilterType>([]);

  function addFilter(selectedCategory: string) {
    if(!filters.includes(selectedCategory)) {
      setFilters(value => [...value, selectedCategory])
    } else {
      setFilters(oldValue => [...oldValue.filter(value => value !== selectedCategory)])
    }
}

  return (
    <FilterContext.Provider value={{ filters, addFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
