import React from 'react';
import cls from './products-catalog-page.module.css';
import { products } from '../../../../API/FakeAPI';
import Card from '../../../reusable-components/card';
import { useSelector } from 'react-redux';
import {
  getFiltersAge,
  getFiltersLoadingStatus,
  getFiltersPlayers,
  getFiltersPrice,
  getFiltersState
} from '../../../store/filters';

const ProductsCatalog = () => {
  const currentState = useSelector(getFiltersState());
  const currentPrice = useSelector(getFiltersPrice());
  const currentAge = useSelector(getFiltersAge());
  const currentPlayers = useSelector(getFiltersPlayers());
  const filtersLoadingStatus = useSelector(getFiltersLoadingStatus());

  const handleAgeParams = (age) => {
    if (filtersLoadingStatus) {
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
  const handlePlayersParams = (str) => {
    const players = str.split('-');
    const newPlayersArray = [];
    if (players.length > 1) {
      for (let i = Number(players[0]); i <= Number(players[1]); i++) {
        newPlayersArray.push(i);
      }
      return newPlayersArray;
    } else {
      newPlayersArray.push(Number(players[0]));
      newPlayersArray.push(Number(players[0]));
      return newPlayersArray;
    }
  };

  const findProduct = () => {
    const productsCategories = products.filter((product) => {
      if (currentState.subcategory !== null && product.subcategory === currentState.subcategory) {
        return product;
      }
      if (
        currentState.subcategory === null &&
        currentState.category !== null &&
        product.category === currentState.category
      ) {
        return product;
      }
      if (currentState.subcategory === null && currentState.category === null) {
        return product;
      }
    });
    const newArray = productsCategories.filter(
      (product) =>
        currentPrice[1] >= product.price &&
        currentPrice[0] <= product.price &&
        currentAge &&
        handleAgeParams(product.age) &&
        currentPlayers[0] <= handlePlayersParams(product.players)[0] &&
        currentPlayers[1] >=
          handlePlayersParams(product.players)[handlePlayersParams(product.players).length - 1]
    );

    return newArray.map((product) => {
      return (
        <div className={cls.card} key={product.id}>
          <Card product={product} />
        </div>
      );
    });
  };
  return (
    <>
      {' '}
      {filtersLoadingStatus === 'READY' ? (
        findProduct().length > 0 ? (
          <div className={cls.block}>{findProduct()}</div>
        ) : (
          <div className={cls.notProduct}>Товары не найдены</div>
        )
      ) : (
        'Loading...'
      )}
    </>
  );
};

export default ProductsCatalog;
