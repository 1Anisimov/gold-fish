import React, { useEffect, useMemo, useState } from 'react';
import logoGoldFish from '../image/logo_goldFish.png';
import logoSearch from '../image/icons/input_search_icon.png';
import { Link } from 'react-router-dom';
import HeaderContainer from '../common/components/header-container/header-container';
import HeaderTopContainerBg from '../containers/header-top-container-bg';
import { useDispatch, useSelector } from 'react-redux';
import { getBasketEntities } from '../store/basket';
import { getAllProducts, setFoundProducts } from '../store/products';
import history from '../utils/history';

const HeaderTop = ({ changeForm }) => {
  const dispatch = useDispatch();

  const basketEntities = useSelector(getBasketEntities());
  const products = useSelector(getAllProducts());

  const [valueSearch, setValueSearch] = useState('');
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const findProducts = ({ target }) => {
    setValueSearch(target.value);
    setIsOpenSearch(true);
  };

  const handleShowAll = () => {
    history.push('/foundProducts');
    setIsOpenSearch(false);
  };

  const filteredProducts = (valueSearch) => {
    const newArray = products.filter((p) => {
      return p.name
        .toLowerCase()
        .trim()
        .includes(valueSearch ? valueSearch.toLowerCase().trim() : '');
    });
    return newArray;
  };

  const filteredProductsActive = useMemo(() => filteredProducts(valueSearch), [valueSearch]);

  useEffect(() => {
    console.log(filteredProductsActive);
    dispatch(setFoundProducts(filteredProductsActive));
  }, [filteredProductsActive, dispatch]);

  const fiveFilteredProducts = filteredProductsActive.slice(0, 5);
  console.log(fiveFilteredProducts);

  const removeValueSearch = () => {
    setIsOpenSearch(false);
  };

  return (
    <>
      <HeaderTopContainerBg>
        <HeaderContainer>
          {filteredProductsActive.length > 0 && isOpenSearch ? (
            <div onClick={removeValueSearch} className="header_top__blockInputBlock_out"></div>
          ) : (
            <> </>
          )}
          <div className="header_top__bg">
            <div className="container_main">
              <div className="header_top">
                <div className="header_top_logo">
                  <Link to="/">
                    <img src={logoGoldFish} alt="" className="header_top_logo" />
                  </Link>
                </div>
                <div className="header_top__blockInputBlock">
                  <div className="header_top__blockInput">
                    <input
                      onChange={findProducts}
                      onFocus={findProducts}
                      type="text"
                      className="header_top_input"
                      placeholder="Найти игру"
                    />
                    <button className="header_top_input_button" onClick={handleShowAll}>
                      <img src={logoSearch} alt="" />
                    </button>
                  </div>
                  {valueSearch.length > 1 && isOpenSearch ? (
                    <div autoFocus className="searchProductsBlock">
                      {fiveFilteredProducts && fiveFilteredProducts.length > 0 ? (
                        fiveFilteredProducts.map((product) => (
                          <div className="searchProductsItem">
                            <div className="searchProductsImage">
                              <img className="searchProductsImage" src={product.img} alt="" />
                            </div>
                            <div className="searchProductsTextBlock">
                              <div className="searchProductsName">
                                <Link
                                  className="searchProductsName"
                                  to={`/catalog/${product.category}/${product.subcategory}/${product.id}`}
                                  onClick={removeValueSearch}>
                                  {product.name}
                                </Link>
                              </div>
                              <div className="searchProductsPrice">
                                {product.sale ? `${product.sale} ` : `${product.price} `}
                                <span className="searchProductsPrice_P">₽</span>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <></>
                      )}
                      {fiveFilteredProducts && fiveFilteredProducts.length > 0 ? (
                        <div className="searchProductsItem">
                          <Link
                            to={`/foundProducts`}
                            onClick={removeValueSearch}
                            className="searchProductsName">
                            Все результаты
                          </Link>
                        </div>
                      ) : (
                        <div className="searchProductsItemNotFound">Товары не найдены</div>
                      )}
                    </div>
                  ) : (
                    <> </>
                  )}
                </div>
                <div className="header_top_number">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19.25 16.875C17.5 18.5625 17.5 20.25 15.75 20.25C14 20.25 12.25 18.5625 10.5 16.875C8.75 15.1875 7 13.5 7 11.8125C7 10.125 8.75 10.125 10.5 8.4375C12.25 6.75 7 1.6875 5.25 1.6875C3.5 1.6875 0 6.75 0 6.75C0 10.125 3.59625 16.9678 7 20.25C10.4038 23.5322 17.5 27 21 27C21 27 26.25 23.625 26.25 21.9375C26.25 20.25 21 15.1875 19.25 16.875Z"
                      fill="currentColor"></path>
                  </svg>
                  <span>+7 (495) 911-10-11</span>
                </div>
                <div className="header_top_icons">
                  <button style={{ backgroundColor: '#2A2A2A' }} onClick={changeForm}>
                    <svg
                      className="header_top_icons_profile"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="28.26"
                      fillRule="evenodd"
                      strokeLinejoin="bevel"
                      strokeWidth=".501"
                      overflow="visible"
                      viewBox="0 0 217.741 205.138">
                      <path
                        fill="currentColor"
                        d="M108.87 0C94.02 0 82.429 5.392 74.075 16.183c-8.346 10.785-12.527 24.569-12.527 41.362-.102 20.858 6.699 37.396 20.417 49.601 1.749 1.631 2.366 3.718 1.851 6.262l-3.557 7.32c-1.132 2.45-2.809 4.349-5.022 5.726-2.221 1.377-6.881 3.333-13.994 5.877l-19.568 6.262c-12.73 4.066-19.509 6.305-20.337 6.712-8.659 3.565-14.327 7.276-17.005 11.146C1.444 162.858 0 179.085 0 205.138h217.741c0-26.053-1.444-42.28-4.333-48.687-2.678-3.87-8.346-7.581-17.005-11.146-.828-.407-7.607-2.646-20.337-6.712l-19.561-6.262c-7.113-2.536-11.78-4.5-14.001-5.87a13.017 13.017 0 0 1-5.022-5.726l-3.557-7.327c-.515-2.544.102-4.638 1.851-6.262 13.718-12.205 20.519-28.743 20.417-49.601 0-16.793-4.173-30.584-12.527-41.362C135.319 5.392 123.72 0 108.87 0Z"></path>
                    </svg>
                  </button>
                  <div>
                    <Link
                      className="header_top_icons_profile_basket"
                      style={{ color: 'rgba(255, 255, 255, 1)' }}
                      to={'/person/basket'}>
                      <svg
                        className="header_top_icons_profile "
                        width="35"
                        height="35"
                        viewBox="0 0 35 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M30.741 10.2082C30.489 9.77161 30.1282 9.40778 29.6937 9.15219C29.2592 8.89661 28.7659 8.75799 28.2618 8.74988H9.59518L8.74935 5.45405C8.66389 5.13589 8.47323 4.85605 8.20842 4.66009C7.94361 4.46413 7.62025 4.3636 7.29102 4.37488H4.37435C3.98757 4.37488 3.61664 4.52852 3.34315 4.80201C3.06966 5.07551 2.91602 5.44644 2.91602 5.83321C2.91602 6.21999 3.06966 6.59092 3.34315 6.86441C3.61664 7.1379 3.98757 7.29155 4.37435 7.29155H6.18268L10.2077 22.254C10.2931 22.5722 10.4838 22.852 10.7486 23.048C11.0134 23.244 11.3368 23.3445 11.666 23.3332H24.791C25.0603 23.3324 25.3241 23.257 25.5532 23.1154C25.7823 22.9739 25.9677 22.7716 26.0889 22.5311L30.8723 12.9645C31.0796 12.5299 31.1761 12.0508 31.1532 11.5698C31.1303 11.0889 30.9887 10.6211 30.741 10.2082Z"
                          fill="currentColor"></path>
                        <path
                          d="M10.9375 30.625C12.1456 30.625 13.125 29.6456 13.125 28.4375C13.125 27.2294 12.1456 26.25 10.9375 26.25C9.72938 26.25 8.75 27.2294 8.75 28.4375C8.75 29.6456 9.72938 30.625 10.9375 30.625Z"
                          fill="currentColor"></path>
                        <path
                          d="M25.5195 30.625C26.7277 30.625 27.707 29.6456 27.707 28.4375C27.707 27.2294 26.7277 26.25 25.5195 26.25C24.3114 26.25 23.332 27.2294 23.332 28.4375C23.332 29.6456 24.3114 30.625 25.5195 30.625Z"
                          fill="currentColor"></path>
                      </svg>
                      {basketEntities.length > 0 ? (
                        <div className="circle_on_basket">{basketEntities.length}</div>
                      ) : (
                        ''
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HeaderContainer>
      </HeaderTopContainerBg>
    </>
  );
};

export default HeaderTop;
