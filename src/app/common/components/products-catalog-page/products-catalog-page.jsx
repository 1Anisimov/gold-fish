import React, { useEffect } from 'react';
import cls from './products-catalog-page.module.css';
import Card from '../../../reusable-components/card';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllActiveProducts,
  getFiltersLoadingStatus,
  setActiveProducts
} from '../../../store/filters';

const ProductsCatalog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActiveProducts());
  }, [dispatch]);

  const filtersLoadingStatus = useSelector(getFiltersLoadingStatus());

  const currentProducts = useSelector(getAllActiveProducts());

  return (
    <>
      {' '}
      {filtersLoadingStatus === 'READY' ? (
        currentProducts.length > 0 ? (
          <div className={cls.block}>
            {currentProducts.map((product) => {
              return (
                <div className={cls.card} key={product.id}>
                  <Card product={product} />
                </div>
              );
            })}
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
