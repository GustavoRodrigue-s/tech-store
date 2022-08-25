function useFilter(products) {
  const departments = products.reduce((acc, { department }) => {
    const itemAlreadyAdded = acc.find(({ name }) => department === name);

    if (itemAlreadyAdded) {
      return acc
    } 

    acc.push({ 
      name: department, 
      products: products.filter(product => product.department === department)
    });

    return acc
  }, []);

  const prices = [
    {
      name: "Até R$ 100,00",
      products: products.filter(({ price }) => price <= 100)
    },
    {
      name: "De R$ 250,00 até R$ 500,00",
      products: products.filter(({ price }) => price > 100 && price <= 500)
    },
    {
      name: "De R$ 500,00 até R$ 1000,00",
      products: products.filter(({ price }) => price > 500 && price <= 1000)
    },
    {
      name: "Mais de R$ 1000,00",
      products: products.filter(({ price }) => price > 1000)
    }
  ];

  const discounts = [
    {
      name: "Sem desconto", 
      products: products.filter(({ discount }) => discount === null)
    },
    {
      name: "Com desconto", 
      products: products.filter(({ discount }) => discount !== null)
    }
  ]

  const filledOrUnfilledStars = [
    [false, false, false ,false, false],
    [true, false, false ,false, false],
    [true, true, false ,false, false],
    [true, true, true ,false, false],
    [true, true, true ,true, false],
    [true, true, true ,true, true]
  ]

  const stars = filledOrUnfilledStars.map(item => (
    { 
      name: item,
      products: products.filter(({ stars }) => stars.every((star, i) => star === item[i]))
    }
  ));

  return { departments, prices, discounts, stars }
}

export default useFilter;