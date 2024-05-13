const changePaginationPage = (currentProducts, currentPage, numberOfProductsOnPage) => {
    if (currentPage < 2) {
      const newPaginatedProducts = currentProducts.slice(0, numberOfProductsOnPage);
      return newPaginatedProducts;
    } else {
      const newPaginatedProducts = currentProducts.slice(
        (currentPage - 1) * numberOfProductsOnPage,
        currentPage * numberOfProductsOnPage
      );
      return newPaginatedProducts;
    }
  };

  export default changePaginationPage;