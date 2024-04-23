import React, { useEffect, useState } from 'react';
import { getTempBuy } from '../../API/FakeAPI';
import Card from '../reusable-components/card';
import MainContainer from '../common/components/main-container/main-container';
import MainContainerBg from '../containers/main-container-bg';

const TemporarilyBuy = ({ title, isSale }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(getTempBuy());
  }, []);
  return (
    <>
      <MainContainerBg>
        <MainContainer>
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
        </MainContainer>
      </MainContainerBg>
    </>
  );
};

export default TemporarilyBuy;
