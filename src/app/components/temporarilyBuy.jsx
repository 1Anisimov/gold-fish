import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../API/FakeAPI';
import Card from '../reusable-components/card';

const TemporarilyBuy = ({ title, isSale }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(getAllProducts());
  }, []);
  return (
    <>
      <div className="temporarily_buy">
        <div className="container_main">
          <h2 className="temporarily_h2">{title}</h2>
          <div className="temporarily_content">
            {products.map((product) =>
              isSale ? (
                product.sale ? (
                  <div key={product.id}>
                    <Card product={product} />
                  </div>
                ) : (
                  ''
                )
              ) : !product.sale ? (
                <div key={product.id}>
                  <Card product={product} />
                </div>
              ) : (
                ''
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TemporarilyBuy;
