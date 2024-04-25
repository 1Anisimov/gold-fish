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
import { Link } from 'react-router-dom';
import { getCurrentPromocode, getCurrentSale, promocodeSearch, setSale } from '../../store/search';
import { getAllPromocodes } from '../../../API/FakeAPI';

const Component = () => {
  const dispatch = useDispatch();
  const totalPrice = useSelector(getTotalPriceBasket());
  const products = useSelector(getBasketEntities());
  const currentPromocode = useSelector(getCurrentPromocode());
  const salePromocode = useSelector(getCurrentSale());

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
  const changeInputPromocode = ({ target }) => {
    console.log(target.value);
    dispatch(promocodeSearch(target.value));
  };
  async function checkPromocode() {
    const allPromocodes = getAllPromocodes();

    const promocode = allPromocodes.find((item) => item.code === currentPromocode);
    console.log(promocode);

    if (promocode === undefined) {
      dispatch(setSale(null));
    }

    allPromocodes.forEach((item) => {
      if (item.code === currentPromocode) {
        dispatch(setSale(item.sale));
      }
    });
  }
  return (
    <>
      <MainContainerBg>
        <MainContainer>
          {products.length > 0 ? (
            <div className={cls.basket}>
              <h3 className={cls.title}>Корзина</h3>
              <div className={cls.basketBlock}>
                <div className={cls.left}>
                  <tbody className={cls.tbody}>
                    {products.map((product) => (
                      <tr>
                        <td>
                          <div
                            onClick={() => goToProductPage(product)}
                            className={cls.productImage}>
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
                    <span className={cls.totalPrice}>{` ${totalPrice} ₽`}</span>
                    {salePromocode ? (
                      <div>
                        <span className={cls.sum}>Сумма со скидкой:</span>
                        <span
                          className={
                            cls.totalPrice
                          }>{`${(totalPrice / 100) * (100 - salePromocode)} ₽`}</span>
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
              </div>
            </div>
          ) : (
            <div className={cls.basket}>
              <h3 className={cls.title}>Корзина</h3>
              <div className={cls.basketZeroImage}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  color="rgba(202, 202, 202, 1)"
                  width="160"
                  height="160"
                  fill="currentColor"
                  class="bi bi-cart4"
                  viewBox="0 0 16 16">
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                </svg>
                <h3 className={cls.basketZeroTitle}>Ваша корзина пуста</h3>
                <div className={cls.basketZeroText}>
                  <span>
                    <Link className={cls.basketZeroLink} to={'/catalog'}>
                      Нажмите здесь
                    </Link>
                    , чтобы продолжить покупки
                  </span>
                </div>
              </div>
            </div>
          )}
        </MainContainer>
      </MainContainerBg>
    </>
  );
};

export const BasketPage = memo(Component);
