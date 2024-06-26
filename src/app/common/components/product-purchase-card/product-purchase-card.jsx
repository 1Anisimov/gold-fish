import React, { memo } from 'react';
import cls from './product-purchase-card.module.css';
import MainButton from '../../../reusable-components/main-button';
import playersImg from '../../../image/productPagePlayers.png';
import timerImg from '../../../image/productPageTimer.png';
import { useSelector } from 'react-redux';
import { searchProductInBasket } from '../../../store/basket';
import history from '../../../utils/history';
import { ProductPurchaseAccordion } from './product-putchase-accordion';

const Component = ({ product }) => {
  const isProductInBasket = useSelector(searchProductInBasket(product.id));
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
        <MainButton
          handleClick={clickCheckout}
          width="281"
          heigth="49"
          text={isProductInBasket ? 'Оформить заказ' : 'В корзину'}
          big
        />
      </div>
      <div className={cls.button}>
        <MainButton width="281" heigth="49" text="Купить в 1 клик" big />
      </div>
      <div className={cls.accordion}>
        <ProductPurchaseAccordion title="Доставка">
          <p className={cls.accordionBody}>Самовывоз из магазина: сегодня</p>
          <p className={cls.accordionBody}>Самовывоз из 761 пункта: 1-3 дня</p>
          <p className={cls.accordionBody}>Курьерская доставка: 1-3 дня</p>
          <p className={cls.accordionBody}>Доставка почтой: от 3 дней</p>
        </ProductPurchaseAccordion>
        <ProductPurchaseAccordion title="Оплата">
          <p className={cls.accordionBody}>Оплата</p>
        </ProductPurchaseAccordion>
      </div>
      <div className={cls.buttonBlock}>
        <button className={cls.buttonInfo}>Задать вопрос</button>
      </div>
    </div>
  );
};

export const ProductPurchaseCard = memo(Component);
