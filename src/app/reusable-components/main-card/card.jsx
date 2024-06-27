import React from 'react';
import cls from './card.module.css';
import MainButton from '../main-button';
import cardTimer from '../../image/time_card.png';
import cardPlayers from '../../image/players_card.png';
import history from '../../utils/history';
import { useDispatch, useSelector } from 'react-redux';
import { addProductsToBasket, searchProductInBasket } from '../../store/basket';
import { setCurrentProduct, setModalChanged } from '../../store/admin';

const Card = ({ product, admin }) => {
  const dispatch = useDispatch();

  const isProductInBasket = useSelector(searchProductInBasket(product.id));
  const goToProductPage = () => {
    history.push(`/catalog/${product.category}/${product.subcategory}/${product.id}`);
  };

  const clickBasket = () => {
    dispatch(addProductsToBasket(product));
  };

  const clickCheckout = () => {
    history.push('/person/basket');
  };

  const productChange = () => {
    dispatch(setCurrentProduct(product));
    dispatch(setModalChanged(true));
  };

  return (
    <>
      {product && (
        <div className={cls.card} style={{ border: 'none' }}>
          <div onClick={goToProductPage} className={cls.card_image}>
            <img className={cls.card_image} src={require(`../../image/${product.img}`)} alt="" />
          </div>
          {product.sale ? <div className={cls.card_sale}>{`-${product.saleProcent}%`}</div> : ''}
          <div className={cls.card_data}>
            <div className={cls.card_data_players}>
              <img className={cls.card_data_timer_players} src={cardPlayers} alt="" />
              <span>{product.players}</span>
            </div>
            <div className={cls.card_data_timer}>
              <img className={cls.card_data_timer_img} src={cardTimer} alt="" />
              <span>{product.time}</span>
            </div>
            <div className={cls.card_data_ages}>
              <span>{product.age}+</span>
            </div>
          </div>
          <div onClick={goToProductPage} className={cls.card_text}>
            {product.name}
          </div>
          <div className={cls.card_price}>
            {product.sale ? (
              <div className={cls.card_sale_price_block}>
                <p className={cls.card_sale_price}>{`${product.price} ₽`}</p>

                <p>{product.sale + '₽'}</p>
              </div>
            ) : (
              <div>
                {' '}
                <p style={{ textAlign: 'center' }}>{`${product.price} ₽`}</p>
              </div>
            )}
          </div>
          {admin ? (
            <></>
          ) : (
            <div className={cls.card_button}>
              {isProductInBasket ? (
                <MainButton
                  handleClick={clickCheckout}
                  width="163"
                  heigth="34"
                  text="Оформить заказ"
                />
              ) : (
                <MainButton
                  handleClick={clickBasket}
                  width="163"
                  heigth="34"
                  isGradient
                  text="В корзину"
                />
              )}
            </div>
          )}

          {admin ? (
            <div className={cls.card_button}>
              <MainButton
                handleClick={productChange}
                width="163"
                heigth="34"
                text="редактировать"
              />
            </div>
          ) : (
            <div className={cls.card_button}>
              <MainButton width="163" heigth="34" text="Купить в 1 клик" />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Card;
