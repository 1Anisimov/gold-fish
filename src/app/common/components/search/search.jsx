import React, { useCallback } from 'react';
import cls from './search.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getFoundProducts,
  getFoundProductsLoadingStatus,
  getValueSearch,
  setFoundProducts,
  setFoundProductsOnPage,
  setValueSearch
} from '../../../store/products';
import { useDebounce } from '../../../hooks/useDebounce';
import history from '../../../utils/history';
import logoSearch from '../../../image/icons/input_search_icon.png';
import { getSearchOpenOrClose, setSearchOpenOrClose } from '../../../store/modals';

const Search = () => {
  const dispatch = useDispatch();

  const valueSearch = useSelector(getValueSearch());
  const filteredProductsActive = useSelector(getFoundProducts());
  const isOpenSearch = useSelector(getSearchOpenOrClose());
  const loadingStatus = useSelector(getFoundProductsLoadingStatus());

  const requestData = useCallback(() => {
    dispatch(setFoundProducts());
    dispatch(setSearchOpenOrClose(true));
  }, [dispatch]);

  const debouncedFunc = useDebounce(requestData, 500);

  const findProducts = ({ target }) => {
    dispatch(setValueSearch(target.value));
    debouncedFunc();
  };

  const handleShowAll = () => {
    history.push('/foundProducts');
    dispatch(setSearchOpenOrClose(false));
  };

  const fiveFilteredProducts = filteredProductsActive.slice(0, 5);

  const removeValueSearch = () => {
    dispatch(setSearchOpenOrClose(false));
  };
  const setAllResults = () => {
    dispatch(setFoundProductsOnPage());
    dispatch(setSearchOpenOrClose(false));
  };

  return (
    <div className={cls.header_top__blockInputBlock}>
      <div className={cls.header_top__blockInput}>
        <input
          onChange={findProducts}
          onFocus={findProducts}
          type="text"
          className={cls.header_top_input}
          placeholder="Найти игру"
        />
        <button className={cls.header_top_input_button} onClick={handleShowAll}>
          <img src={logoSearch} alt="" />
        </button>
      </div>
      {loadingStatus === 'READY' &&
      valueSearch.length > 0 &&
      isOpenSearch &&
      fiveFilteredProducts ? (
        <div autoFocus className={cls.searchProductsBlock}>
          {fiveFilteredProducts && fiveFilteredProducts.length > 0 ? (
            fiveFilteredProducts.map((product) => (
              <div key={product.id} className={cls.searchProductsItem}>
                <div className={cls.searchProductsImage}>
                  <img
                    className={cls.searchProductsImage}
                    src={require(`../../../image/${product.img}`)}
                    alt=""
                  />
                </div>
                <div className={cls.searchProductsTextBlock}>
                  <div className={cls.searchProductsName}>
                    <Link
                      className={cls.searchProductsName}
                      to={`/catalog/${product.category}/${product.subcategory}/${product.id}`}
                      onClick={removeValueSearch}>
                      {product.name}
                    </Link>
                  </div>
                  <div className={cls.searchProductsPrice}>
                    {product.sale ? `${product.sale} ` : `${product.price} `}
                    <span className={cls.searchProductsPrice_P}>₽</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
          {fiveFilteredProducts && fiveFilteredProducts.length > 0 ? (
            <div className={cls.searchProductsItem}>
              <Link
                to={`/foundProducts`}
                onClick={setAllResults}
                className={cls.searchProductsName}>
                Все результаты
              </Link>
            </div>
          ) : (
            <div className={cls.searchProductsItemNotFound}>Товары не найдены</div>
          )}
        </div>
      ) : (
        <> </>
      )}
    </div>
  );
};

export default Search;
