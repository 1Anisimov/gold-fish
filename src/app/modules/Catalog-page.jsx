import React, { useState } from 'react';
import FilterCatalog from '../common/components/filter-catalog/filter-catalog';
import ProductsCatalog from '../common/components/products-catalog-page/products-catalog-page';

const CatalogPage = () => {
  const [titleCatalog, setTitleCatalog] = useState('Каталог продукции');
  return (
    <>
      <div className="catalog_page">
        <div className="container_main">
          <h2 className="first_title">{titleCatalog}</h2>
          <div className="catalog_page_block">
            <FilterCatalog setTitleCatalog={setTitleCatalog} />
            <ProductsCatalog />
          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogPage;
