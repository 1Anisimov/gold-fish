import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getFoundProducts,
  getValueSearch,
  setFoundProducts,
  setFoundProductsOnPage,
  setValueSearch
} from '../../../store/products';
import { useDebounce } from '../../../hooks/useDebounce';
import history from '../../../utils/history';
import logoSearch from '../../../image/icons/input_search_icon.png';

const Search = () => {
  const dispatch = useDispatch();
  const valueSearch = useSelector(getValueSearch());
  const filteredProductsActive = useSelector(getFoundProducts());

  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const requestData = useCallback(() => {
    dispatch(setFoundProducts());
  }, [dispatch]);

  const debouncedFunc = useDebounce(requestData, 500);

  const findProducts = ({ target }) => {
    dispatch(setValueSearch(target.value));
    setIsOpenSearch(true);
    debouncedFunc();
  };

  const handleShowAll = () => {
    history.push('/foundProducts');
    setIsOpenSearch(false);
  };

  const fiveFilteredProducts = filteredProductsActive.slice(0, 5);

  const removeValueSearch = () => {
    setIsOpenSearch(false);
  };
  const setAllResults = () => {
    dispatch(setFoundProductsOnPage());
    setIsOpenSearch(false);
  };

  return (
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
              <div key={product.id} className="searchProductsItem">
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
              <Link to={`/foundProducts`} onClick={setAllResults} className="searchProductsName">
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
  );
};

export default Search;
