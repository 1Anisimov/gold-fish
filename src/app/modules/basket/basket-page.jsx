import React, { memo, useEffect } from 'react';
import cls from './basket-page.module.css';
import MainContainerBg from '../../containers/main-container-bg';
import { useDispatch, useSelector } from 'react-redux';
import {
  addQuantityProduct,
  getBasketEntities,
  removeProductOnBasket,
  removeQuantityProduct
} from '../../store/basket';
import deleteIcon from '../../image/icons/DeleteIconBasket.png';
import history from '../../utils/history';
import { Link } from 'react-router-dom';
import { downloadAllPromocodes } from '../../store/promocodes';
import BasketSvg from '../../image/svg/basketSvg';
import BasketRightMenu from './basket-right-menu';
import MainNavigation from '../../common/components/main-navigation/main-navigation';

const Component = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(downloadAllPromocodes());
  }, [dispatch]);

  const products = useSelector(getBasketEntities());

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
        {products.length > 0 ? (
          <div className={cls.basket}>
            <MainNavigation />
            <h3 className={cls.title}>Корзина</h3>
            <div className={cls.basketBlock}>
              <div className={cls.left}>
                <tbody className={cls.tbody}>
                  {products.map((product) => (
                    <tr>
                      <td>
                        <div onClick={() => goToProductPage(product)} className={cls.productImage}>
                          <img
                            className={cls.productImageImg}
                            src={require(`../../image/${product.img}`)}
                            alt=""
                          />
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
                          <span
                            className={
                              cls.productText
                            }>{`${product.sale ? product.sale : product.price} ₽`}</span>
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
              <BasketRightMenu />
            </div>
          </div>
        ) : (
          <div className={cls.basket}>
            <MainNavigation />
            <h3 className={cls.title}>Корзина</h3>
            <div className={cls.basketZeroImage}>
              <BasketSvg />

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
      </MainContainerBg>
    </>
  );
};

export const BasketPage = memo(Component);
