import React from 'react';
import cls from './modal-catalog.module.css';
import iconClosed from '../image/icons/X_closed_icon.png';
import { ScrollBlock } from '../hooks/useScrollBlock';
import { Link } from 'react-router-dom';
import arrow from '../image/icons/arrow_right_catalog.png';
import history from '../utils/history';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../store/categories';
import { getAllSubcategories } from '../store/subcategories';
import {
  setActiveCategoryOnModalCatalog,
  getModalCatalog,
  getModalCatalogActiveCategory,
  setModalCatalog
} from '../store/modals';

const ModalCatalog = () => {
  const dispatch = useDispatch();

  const modalActive = useSelector(getModalCatalog());
  const categoriesArray = useSelector(getAllCategories());
  const subcatigoriesArray = useSelector(getAllSubcategories());
  const activeCategory = useSelector(getModalCatalogActiveCategory());

  const [blockScroll, allowScroll] = ScrollBlock();

  modalActive ? blockScroll() : allowScroll();

  const handleGoInCatalog = () => {
    dispatch(setModalCatalog(false));
  };

  const goToCategories = (value) => {
    history.push(`/catalog/${value}/`);
    dispatch(setModalCatalog(false));
  };

  const goToSubcategories = (value) => {
    history.push(`/catalog/${activeCategory}/${value}/`);
    dispatch(setModalCatalog(false));
  };

  const handleChangeActiveCategory = (category) => {
    dispatch(setActiveCategoryOnModalCatalog(category));
  };

  return (
    <>
      {modalActive && (
        <div
          onClick={() => dispatch(setModalCatalog(false))}
          className={
            modalActive ? cls.pop_up_catalog + ' ' + cls.pop_up_catalog_active : cls.pop_up_catalog
          }>
          <div className={cls.pop_up_container}>
            <div className={cls.pop_up_catalog_content}>
              <div className={cls.pop_ups_catalog_left}>
                <div
                  className={
                    cls.pop_up_catalog_container + ' ' + cls.pop_up_catalog_container_border
                  }>
                  <img
                    className={cls.pop_up_catalog_closed}
                    onClick={() => dispatch(setModalCatalog(false))}
                    src={iconClosed}
                    alt=""
                  />
                  <Link
                    className={cls.pop_up_catalog_left_top_link + ' links'}
                    to="/catalog/"
                    onClick={handleGoInCatalog}>
                    Все категории
                  </Link>
                </div>
                <div className={cls.pop_up_catalog_container}>
                  <div className={cls.pop_up_catalog_left_bottom}>
                    {categoriesArray.map((item) => (
                      <div
                        key={item.value}
                        onMouseEnter={() => handleChangeActiveCategory(item.value)}
                        onClick={() => goToCategories(item.value)}
                        className={cls.pop_up_catalog_left_categories}>
                        <span className="links">{item.name}</span>
                        <img src={arrow} alt="" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className={cls.pop_ups_catalog_right}>
                <div className={cls.pop_ups_catalog_right_container}>
                  <div className={cls.pop_ups_catalog_right_block}>
                    {subcatigoriesArray.map((item) =>
                      activeCategory === item.category ? (
                        <div key={item.value} className={cls.pop_ups_catalog_right_item}>
                          <span onClick={() => goToSubcategories(item.value)}>{item.name}</span>
                        </div>
                      ) : (
                        <div key={item.value}></div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalCatalog;
