import React, { memo } from 'react';
import cls from './basket-page.module.css';
import MainContainerBg from '../../containers/main-container-bg';
import MainContainer from '../../common/components/main-container/main-container';
import { useDispatch, useSelector } from 'react-redux';
import {
  addQuantityProduct,
  getBasketEntities,
  getTotalPriceBasket,
  removeProductOnBasket,
  removeQuantityProduct
} from '../../store/basket';
import icon from '../../image/icons/promocodeButton.png';
import deleteIcon from '../../image/icons/DeleteIconBasket.png';
import MainButton from '../../reusable-components/main-button';
import history from '../../utils/history';

const Component = () => {
  const dispatch = useDispatch();
  const totalPrice = useSelector(getTotalPriceBasket());
  const products = useSelector(getBasketEntities());
  console.log(products);
  const handleDelete = (productId) => {
    dispatch(removeProductOnBasket(productId));
  };
  const addQuantity = (productId) => {
    dispatch(addQuantityProduct(productId));
  };
  const removeQuantity = (productId) => {
    dispatch(removeQuantityProduct(productId));
  };
  const goToProductPage = (product) => {
    history.push(`/catalog/${product.category}/${product.subcategory}/${product.id}/`);
  };
  return (
    <>
      <MainContainerBg>
        <MainContainer>
          <div className={cls.basket}>
            <h3 className={cls.title}>Корзина</h3>
            <div className={cls.basketBlock}>
              <div className={cls.left}>
                <tbody className={cls.tbody}>
                  {products.map((product) => (
                    <tr>
                      <td>
                        <div onClick={() => goToProductPage(product)} className={cls.productImage}>
                          <img className={cls.productImageImg} src={product.img} alt="" />
                        </div>
                      </td>
                      <td>
                        <div onClick={() => goToProductPage(product)} className={cls.productName}>
                          <span className={cls.productText}>{product.name}</span>
                        </div>
                      </td>
                      <td>
                        <div className={cls.salePrice}>
                          {product.sale ? (
                            <span className={cls.productSaleText}>{`${product.price} ₽`}</span>
                          ) : (
                            ''
                          )}
                        </div>
                      </td>
                      <td>
                        <div className={cls.productPrice}>
                          {product.sale ? (
                            <span className={cls.productText}>{`${product.sale} ₽`}</span>
                          ) : (
                            <span className={cls.productText}>{`${product.price} ₽`}</span>
                          )}
                        </div>
                      </td>
                      <td>
                        <div className={cls.quantity}>
                          <button
                            onClick={() => removeQuantity(product.id)}
                            className={cls.quantityButton}>
                            -
                          </button>
                          <span className={cls.quantitySpan}>{`${product.quantity} шт`}</span>
                          <button
                            onClick={() => addQuantity(product.id)}
                            className={cls.quantityButton}>
                            +
                          </button>
                        </div>
                      </td>
                      <td>
                        <div className={cls.productDelete}>
                          <button
                            onClick={() => handleDelete(product.id)}
                            className={cls.deleteIcon}>
                            <img src={deleteIcon} alt="" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </div>
              <div className={cls.right}>
                <div className={cls.price}>
                  <span className={cls.sum}>Сумма:</span>
                  <span className={cls.totalPrice}>{`${totalPrice}₽`}</span>
                </div>
                <div className={cls.promocode}>
                  <h3 className={cls.promocodeTitle}>Промокод:</h3>
                  <div className={cls.promocodeBlock}>
                    <input className={cls.input} type="text" />
                    <button className={cls.promocodeButton}>
                      <img src={icon} alt="" />
                    </button>
                  </div>
                </div>
                <div className={cls.firstButton}>
                  <MainButton width="281" heigth="49" isGradient text="Оформить" big />
                </div>
                <div className={cls.secondButton}>
                  <MainButton width="281" heigth="49" text="Купить в 1 клик" big />
                </div>
              </div>
            </div>
          </div>
        </MainContainer>
      </MainContainerBg>
    </>
  );
};

export const BasketPage = memo(Component);
