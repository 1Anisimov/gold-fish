import React from 'react';
import cls from './products-catalog-page.module.css';
import { useParams } from 'react-router-dom';
import { products } from '../../../../API/FakeAPI';
import Card from '../../../reusable-components/card';

const ProductsCatalog = () => {
  const params = useParams();
  const { category, subcategory } = params;

  const findProduct = () => {
    if (category === undefined) {
      return products.map((product) => {
        return (
          <div className={cls.card} key={product.id}>
            <Card product={product} />
          </div>
        );
      });
    } else if (subcategory === undefined) {
      console.log(subcategory);
      return products.map((product) => {
        if (category === product.category) {
          return (
            <div className={cls.card} key={product.id}>
              <Card product={product} />
            </div>
          );
        }
        return null;
      });
    } else {
      return products.map((product) => {
        if (subcategory === product.subcategory) {
          return (
            <div className={cls.card} key={product.id}>
              <Card product={product} />
            </div>
          );
        }
        return null;
      });
    }
  };
  return (
    <>
      <div className={cls.block}>{findProduct()}</div>
    </>
  );
};

export default ProductsCatalog;
// {category === undefined
//     ? products.map((product) => (
//         <div className={cls.card} key={product.id}>
//           <Card product={product} />
//         </div>
//       ))
//     : products.map((product) =>
//         product.category === category && product.subcategory === subcategory ? (
//           <div className={cls.card} key={product.id}>
//             <Card product={product} />
//           </div>
//         ) : (
//           ''
//         )
//       )}
