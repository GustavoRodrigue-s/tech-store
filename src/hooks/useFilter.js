function useFilter(products) {
  const departments = [
    "Consoles",
    "Controles",
    "Notebooks",
    "Monitores",
    "Televisões",
    "Teclados",
    "Mouses",
    "Fones de ouvido"
  ];

  const productsSortedByDepartments = departments.map(label => {
    const filteredProducts = products.filter(({ department }) => department === label);

    return { label, products: filteredProducts }
  });

  const productsSortedByPrices = [
    {
      label: "Até R$ 100,00",
      products: products.filter(({ price }) => price <= 100)
    },
    {
      label: "De R$ 250,00 até R$ 500,00",
      products: products.filter(({ price }) => price > 100 && price <= 500)
    },
    {
      label: "De R$ 500,00 até R$ 1000,00",
      products: products.filter(({ price }) => price > 500 && price <= 1000)
    },
    {
      label: "Mais de R$ 1000,00",
      products: products.filter(({ price }) => price > 1000)
    }
  ];

  const productsSortedByDiscounts = [
    {
      label: "Sem desconto", 
      products: products.filter(({ discount }) => discount === null)
    },
    {
      label: "Com desconto", 
      products: products.filter(({ discount }) => discount !== null)
    }
  ]

  const stars = [
    [true, true, true ,true, true],
    [true, true, true ,true, false],
    [true, true, true ,false, false],
    [true, true, false ,false, false],
    [true, false, false ,false, false]
  ];

  const productsSortedByStars = stars.map(item => {
    const filteredProducts = products.filter(({ stars }) => stars.every((star, i) => star === item[i]));

    return { label: item, products: filteredProducts };
  });

  return { 
    productsSortedByDepartments, 
    productsSortedByPrices, 
    productsSortedByDiscounts, 
    productsSortedByStars 
  }
}

export default useFilter;