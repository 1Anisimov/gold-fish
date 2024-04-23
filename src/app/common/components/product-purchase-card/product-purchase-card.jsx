import React, { memo, useState } from 'react';
import cls from './product-purchase-card.module.css';
import MainButton from '../../../reusable-components/main-button';
import playersImg from '../../../image/productPagePlayers.png';
import timerImg from '../../../image/productPageTimer.png';
import { useDispatch, useSelector } from 'react-redux';
import { addProductsToBasket, searchProductInBasket } from '../../../store/basket';
import history from '../../../utils/history';

const Component = ({ product }) => {
  const dispatch = useDispatch();
  const isProductInBasket = useSelector(searchProductInBasket(product.id));
  const [openClose, setOpenClose] = useState(true);
  const [openCloseTwo, setOpenCloseTwo] = useState(false);
  const clickBasket = () => {
    dispatch(addProductsToBasket(product));
  };
  const clickCheckout = () => {
    history.push('/person/basket');
  };
  return (
    <div className={cls.buyBlock}>
      <div className={cls.infoBlock}>
        <div className={cls.infoItem}>
          <img src={playersImg} alt="" />
          <span>{product.players}</span>
        </div>
        <div className={cls.infoItem}>
          <img src={timerImg} alt="" />
          <span>{product.time}</span>
        </div>
        <div className={cls.infoItemAge}>
          <span>{`${product.age}+`}</span>
        </div>
      </div>
      <div className={cls.priceBlock}>
        {product.sale ? (
          <div className={cls.price}>
            <span className={cls.priceDecoration}>{product.price}₽</span>
            <span>{product.sale}₽</span>
          </div>
        ) : (
          <span>{product.price}₽</span>
        )}
      </div>
      <div className={cls.button}>
        {isProductInBasket ? (
          <MainButton
            handleClick={clickCheckout}
            width="281"
            heigth="49"
            text="Оформить заказ"
            big
          />
        ) : (
          <MainButton
            handleClick={clickBasket}
            width="281"
            heigth="49"
            isGradient
            text="В корзину"
            big
          />
        )}
      </div>
      <div className={cls.button}>
        <MainButton width="281" heigth="49" text="Купить в 1 клик" big />
      </div>
      <div className={cls.accordion}>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={{ border: 'none', outline: 'none' }}>
            <h2 className="accordion-header" style={{ border: 'none', outline: 'none' }}>
              <button
                onClick={() => setOpenClose((prevState) => !prevState)}
                className={'accordion-button' + (openClose ? ' ' : ' collapsed')}
                style={{ border: 'none', boxShadow: 'none', backgroundColor: '#fff' }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded={openClose ? 'true' : 'false'}
                aria-controls="collapseTwo">
                <h3 className={cls.accordionTitle}>Доставка</h3>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className={'accordion-collapse collapse' + (openClose ? ' show' : '')}
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p className={cls.accordionBody}>Самовывоз из магазина: сегодня</p>
                <p className={cls.accordionBody}>Самовывоз из 761 пункта: 1-3 дня</p>
                <p className={cls.accordionBody}>Курьерская доставка: 1-3 дня</p>
                <p className={cls.accordionBody}>Доставка почтой: от 3 дней</p>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={{ border: 'none', outline: 'none' }}>
            <h2 className="accordion-header" style={{ border: 'none', outline: 'none' }}>
              <button
                onClick={() => setOpenCloseTwo((prevState) => !prevState)}
                className={'accordion-button' + (openCloseTwo ? ' ' : ' collapsed')}
                style={{ border: 'none', boxShadow: 'none', backgroundColor: '#fff' }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded={openCloseTwo ? 'true' : 'false'}
                aria-controls="collapseTwo">
                <h3 className={cls.accordionTitle}>Оплата</h3>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className={'accordion-collapse collapse' + (openCloseTwo ? ' show' : '')}
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p className={cls.accordionBody}>Оплата</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cls.buttonBlock}>
        <button className={cls.buttonInfo}>Задать вопрос</button>
      </div>
    </div>
  );
};

export const ProductPurchaseCard = memo(Component);
