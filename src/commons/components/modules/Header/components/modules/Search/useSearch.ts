import { useState, useEffect, FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useCatalog } from '../../../../../../hooks';
import { matchSearch, removeDuplicate } from '../../../../../../utils/helpers';

export const useSearch = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

  const [searchParams, setSearchParams] = useSearchParams();

  const products = useCatalog();

  const handleToggleShow = (isShow: boolean) => {
    setIsShow(isShow);
  };

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search) return;

    const { inputSearch } = e.target as unknown as {
      inputSearch: HTMLInputElement;
    };

    inputSearch.blur();

    setSearchParams({ search });
    setIsShow(false);
  };

  const matcher = (value: string) => matchSearch(search, value);

  const departments = removeDuplicate(
    products.map(({ department }) => department)
  );

  const filteredDepartments = departments.filter(matcher);
  const filteredProducts = products.filter(({ name, department }) =>
    [name, department].some(matcher)
  );

  const hasFilteredDepartments = !!filteredDepartments.length;
  const hasFilteredProducts = !!filteredProducts.length;

  const isEmpty = !hasFilteredDepartments && !hasFilteredProducts;

  useEffect(() => {
    const search = searchParams.get('search');

    if (search) {
      setSearch(search);
    }
  }, [searchParams]);

  return {
    isShow,
    search,
    isEmpty,
    hasFilteredDepartments,
    hasFilteredProducts,
    filteredDepartments,
    filteredProducts,
    handleChange,
    handleSubmit,
    handleShow: () => handleToggleShow(true),
    handleHide: () => handleToggleShow(false),
  };
};
