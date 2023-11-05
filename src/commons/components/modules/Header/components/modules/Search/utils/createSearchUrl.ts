export const createSearchUrl = (department: string) =>
  `/?search=${encodeURIComponent(department)}`;
