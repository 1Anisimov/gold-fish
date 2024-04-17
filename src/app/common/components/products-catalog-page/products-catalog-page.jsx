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
    if (currentState.category === null) {
      return products.map((product) => {
        if (currentPrice[1] >= product.price && currentPrice[0] <= product.price) {
          if (currentAge && handleAgeParams(product.age)) {
            if (
              currentPlayers[0] <= handlePlayersParams(product.players)[0] &&
              currentPlayers[1] >=
                handlePlayersParams(product.players)[
                  handlePlayersParams(product.players).length - 1
                ]
            ) {
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
    } else if (currentState.category && currentState.subcategory === null) {
      return products.map((product) => {
        if (currentState.category === product.category) {
          if (currentPrice[1] >= product.price && currentPrice[0] <= product.price) {
            if (currentAge && handleAgeParams(product.age)) {
              if (
                currentPlayers[0] <= handlePlayersParams(product.players)[0] &&
                currentPlayers[1] >=
                  handlePlayersParams(product.players)[
                    handlePlayersParams(product.players).length - 1
                  ]
              ) {
                return (
                  <div className={cls.card} key={product.id}>
                    <Card product={product} />
                  </div>
                );
              }
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
              if (
                currentPlayers[0] <= handlePlayersParams(product.players)[0] &&
                currentPlayers[1] >=
                  handlePlayersParams(product.players)[
                    handlePlayersParams(product.players).length - 1
                  ]
              ) {
                return (
                  <div className={cls.card} key={product.id}>
                    <Card product={product} />
                  </div>
                );
              }
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
