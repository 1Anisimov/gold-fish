import React from 'react';
import cls from './products-catalog-page.module.css';
import { products } from '../../../../API/FakeAPI';
import Card from '../../../reusable-components/card';
import { useSelector } from 'react-redux';
import { getFiltersAge, getFiltersPrice, getFiltersState } from '../../../store/filters';

const ProductsCatalog = () => {
  const currentState = useSelector(getFiltersState());
  const currentPrice = useSelector(getFiltersPrice());
  const currentAge = useSelector(getFiltersAge());

  const handleAgeParams = (age) => {
    if (currentAge) {
      let ageArray = [];
      Object.keys(currentAge).map((item) => {
        if (currentAge[item]) {
          ageArray.push(item);
        }
        return ageArray;
      });
      let str = ageArray.join(',');
      const newAgeArray = str.split(',');

      return newAgeArray.find((item) => item === age);
    }
  };

  const findProduct = () => {
    if (currentState.category === null) {
      return products.map((product) => {
        if (currentPrice[1] >= product.price && currentPrice[0] <= product.price) {
          if (currentAge && handleAgeParams(product.age)) {
            return (
              <div className={cls.card} key={product.id}>
                <Card product={product} />
              </div>
            );
          }
        }
        return null;
      });
    } else if (currentState.subcategory === null) {
      return products.map((product) => {
        if (currentState.category === product.category) {
          if (currentPrice[1] >= product.price && currentPrice[0] <= product.price) {
            if (currentAge && handleAgeParams(product.age)) {
              return (
                <div className={cls.card} key={product.id}>
                  <Card product={product} />
                </div>
              );
            }
          }
        }
        return null;
      });
    }
    if (currentState.category && currentState.subcategory) {
      return products.map((product) => {
        if (currentState.subcategory === product.subcategory) {
          if (currentPrice[1] >= product.price && currentPrice[0] <= product.price) {
            if (currentAge && handleAgeParams(product.age)) {
              return (
                <div className={cls.card} key={product.id}>
                  <Card product={product} />
                </div>
              );
            }
          }
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
