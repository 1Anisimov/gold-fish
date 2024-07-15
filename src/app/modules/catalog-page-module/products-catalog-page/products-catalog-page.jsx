import React, { useEffect, useMemo } from 'react';
import cls from './products-catalog-page.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getActivePaginatedPage,
  getAllActiveProducts,
  getFiltersLoadingStatus,
  setActivePaginatedPage,
  setActiveProducts
} from '../../../store/products';
import changePaginationPage from '../../../utils/changePaginationPage';
import Card from '../../../reusable-components/main-card/card';

const ProductsCatalog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActiveProducts());
  }, [dispatch]);

  const filtersLoadingStatus = useSelector(getFiltersLoadingStatus());
  const numberOfProductsOnPage = 12;
  const currentProducts = useSelector(getAllActiveProducts());
  const currentPage = useSelector(getActivePaginatedPage());

  const calculateNumberPages = (currentProducts) => {
    let numberPagesArray = [];

    if (currentProducts.length > 0) {
      const numberPages = Math.ceil(currentProducts.length / numberOfProductsOnPage);

      for (let i = 1; i <= numberPages; i++) {
        numberPagesArray.push(i);
      }

      return numberPagesArray;
    } else {
      return numberPagesArray;
    }
  };
  const numberPagesValue = useMemo(() => calculateNumberPages(currentProducts), [currentProducts]);

  const currentPaginationProducts = useMemo(
    () => changePaginationPage(currentProducts, currentPage, numberOfProductsOnPage),
    [currentProducts, currentPage, numberOfProductsOnPage]
  );

  const handleChangePage = ({ target }) => {
    dispatch(setActivePaginatedPage(Number(target.id)));
    window.scrollTo(0, 200);
  };

  return (
    <>
      {' '}
      {filtersLoadingStatus === 'READY' ? (
        currentProducts.length > 0 ? (
          <div className={cls.contentBlock}>
            <div className={cls.block}>
              {currentPaginationProducts.map((product) => {
                return (
                  <div className={cls.card} key={product.id}>
                    <Card product={product} />
                  </div>
                );
              })}
            </div>
            <div className={cls.paginationBlock}>
              {numberPagesValue.length > 1 ? (
                <div className={cls.paginationContent}>
                  {numberPagesValue.map((page) => (
                    <button
                      onClick={handleChangePage}
                      className={
                        cls.paginationItem +
                        (currentPage === page ? ` ${cls.paginationItemActive}` : '')
                      }
                      id={page}
                      key={page}>
                      {page}
                    </button>
                  ))}
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        ) : (
          <div className={cls.notProduct}>Товары не найдены</div>
        )
      ) : (
        <div className="product_catalog_loaderBlock">
          <div className="loader"></div>
        </div>
      )}
    </>
  );
};

export default ProductsCatalog;
