export const matchSearch = (search: string, value: string) => {
  const formattedSearch = search.toLowerCase().trim();

  if (formattedSearch) {
    return value.toLowerCase().startsWith(formattedSearch);
  }
};
