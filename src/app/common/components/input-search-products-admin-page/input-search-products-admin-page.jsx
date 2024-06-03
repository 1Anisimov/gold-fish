import React from 'react';
import cls from './input-search-products-admin-page.module.css';
import { useDispatch } from 'react-redux';
import { setValueSearchOnAdminPage } from '../../../store/admin';

const SearchProductsOnAdminPage = () => {
  const dispatch = useDispatch();

  const searchChange = ({ target }) => {
    dispatch(setValueSearchOnAdminPage(target.value));
  };

  return (
    <div className={cls.mainBlock}>
      <div className={cls.inputBlock}>
        <input
          onChange={searchChange}
          className={cls.input}
          placeholder="Найти товар"
          type="text"
        />
      </div>
    </div>
  );
};

export default SearchProductsOnAdminPage;
