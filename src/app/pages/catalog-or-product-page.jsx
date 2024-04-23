import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ProductPage } from '../modules/product-page/product-page';
import CatalogPage from '../modules/Catalog-page';

const Component = () => {
  const params = useParams();
  const { productId } = params;
  return <>{productId ? <ProductPage productId={productId} /> : <CatalogPage />}</>;
};

export const CatalogOrProductPage = memo(Component);
