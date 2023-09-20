const generateQuery = (productFilter) => {
  const searchParams = new URLSearchParams("");

  for (let key in productFilter) {
    if (productFilter[key]) {
      if (key === "price") {
        if (
          productFilter[key].gte !== null &&
          productFilter[key].lte !== null
        ) {
          searchParams.append("price[gte]", productFilter[key]?.gte);
          searchParams.append("price[lte]", productFilter[key]?.lte);
        }
      } else {
        searchParams.append(key, productFilter[key]);
      }
    }
  }

  const queryString = searchParams.toString();
  return queryString;
};

export default generateQuery;
