import React from 'react';
import MainButton from './main-button';
import cardTimer from '../image/time_card.png';
import cardPlayers from '../image/players_card.png';
import history from '../utils/history';
import { useDispatch, useSelector } from 'react-redux';
import { addProductsToBasket, searchProductInBasket } from '../store/basket';

const Card = ({ product }) => {
  const dispatch = useDispatch();
  // const isLoadingBasket = useSelector(getLoadingStatusBasket());
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
  return (
    <>
      {product && (
        <div className="card" style={{ border: 'none' }}>
          <div onClick={goToProductPage} className="card_image">
            <img className="card_image" src={product.img} alt="" />
          </div>
          {product.sale ? <div className="card_sale">{`-${product.saleProcent}%`}</div> : ''}
          <div className="card_data">
            <div className="card_data_players">
              <img className="card_data_timer_players" src={cardPlayers} alt="" />
              <span>{product.players}</span>
            </div>
            <div className="card_data_timer">
              <img className="card_data_timer_img" src={cardTimer} alt="" />
              <span>{product.time}</span>
            </div>
            <div className="card_data_ages">
              <span>{product.age}+</span>
            </div>
          </div>
          <div onClick={goToProductPage} className="card_text">
            {product.name}
          </div>
          <div className="card_price">
            {product.sale ? (
              <div className="card_sale_price_block">
                <p className="card_sale_price">{`${product.price} ₽`}</p>

                <p>{product.sale + '₽'}</p>
              </div>
            ) : (
              <div>
                {' '}
                <p style={{ textAlign: 'center' }}>{`${product.price} ₽`}</p>
              </div>
            )}
          </div>
          <div className="card_button">
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
          <div className="card_button">
            <MainButton width="163" heigth="34" text="Купить в 1 клик" />
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
