function useFilter(products) {
  const departments = products.reduce((acc, { department }) => {
    const itemAlreadyAdded = acc.find(({ label }) => department === label);

    if (itemAlreadyAdded) {
      return acc
    } 

    acc.push({ 
      label: department, 
      products: products.filter(product => product.department === department)
    });

    return acc
  }, []);

  const prices = [
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

  const discounts = [
    {
      label: "Sem desconto", 
      products: products.filter(({ discount }) => discount === null)
    },
    {
      label: "Com desconto", 
      products: products.filter(({ discount }) => discount !== null)
    }
  ]

  const filledOrUnfilledStars = [
    [true, true, true ,true, true],
    [true, true, true ,true, false],
    [true, true, true ,false, false],
    [true, true, false ,false, false],
    [true, false, false ,false, false]
  ]

  const stars = filledOrUnfilledStars.map(item => (
    { 
      label: item,
      products: products.filter(({ stars }) => stars.every((star, i) => star === item[i]))
    }
  ));

  return { departments, prices, discounts, stars }
}

export default useFilter;