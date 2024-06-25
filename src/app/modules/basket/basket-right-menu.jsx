import React from 'react';
import cls from './basket-right-menu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalPriceBasket } from '../../store/basket';
import { getCurrentSale, promocodeSearch, setSale } from '../../store/promocodes';
import icon from '../../image/icons/promocodeButton.png';
import MainButton from '../../reusable-components/main-button';

const BasketRightMenu = () => {
  const dispatch = useDispatch();

  const totalPrice = useSelector(getTotalPriceBasket());
  const salePromocode = useSelector(getCurrentSale());

  const changeInputPromocode = ({ target }) => {
    dispatch(promocodeSearch(target.value));
  };

  function checkPromocode() {
    dispatch(setSale());
  }

  return (
    <div className={cls.right}>
      <div className={cls.price}>
        <span className={cls.sum}>Сумма:</span>
        <span className={cls.totalPrice}>{` ${totalPrice} ₽`}</span>
        {salePromocode ? (
          <div>
            <span className={cls.sum}>Сумма со скидкой:</span>
            <span
              className={
                cls.totalPrice
              }>{`${Math.ceil((totalPrice / 100) * (100 - salePromocode))} ₽`}</span>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className={cls.promocode}>
        <h3 className={cls.promocodeTitle}>Промокод:</h3>
        <div className={cls.promocodeBlock}>
          <input onChange={changeInputPromocode} className={cls.input} type="text" />
          <button onClick={checkPromocode} className={cls.promocodeButton}>
            <img src={icon} alt="" />
          </button>
        </div>
        {salePromocode ? <p style={{ color: 'green' }}>купон активирован</p> : ''}
      </div>
      <div className={cls.firstButton}>
        <MainButton width="281" heigth="49" isGradient text="Оформить" big />
      </div>
      <div className={cls.secondButton}>
        <MainButton width="281" heigth="49" text="Купить в 1 клик" big />
      </div>
    </div>
  );
};

export default BasketRightMenu;
