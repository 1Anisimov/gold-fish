import React, { useState } from 'react';
import iconClosed from '../image/icons/X_closed_icon.png';
import { ScrollBlock } from '../hooks/useScrollBlock';
import { Link } from 'react-router-dom';
import arrow from '../image/icons/arrow_right_catalog.png';
import { categoriesArray, subcatigoriesArray } from '../../API/FakeAPI';
import history from '../utils/history';

const ModalCatalog = ({ modalActive, setModalActive }) => {
  const [subcategory, setSubcategory] = useState('');
  const [blockScroll, allowScroll] = ScrollBlock();

  modalActive ? blockScroll() : allowScroll();
  const handleGoInCatalog = () => {
    setModalActive(false);
  };
  const goToCategories = (value) => {
    history.push(`/catalog/${value}/`);
    setModalActive(false);
  };
  const goToSubcategories = (value) => {
    history.push(`/catalog/${subcategory}/${value}/`);
    setModalActive(false);
  };
  return (
    <>
      {modalActive && (
        <div
          onClick={() => setModalActive(false)}
          className={modalActive ? 'pop-up_catalog pop-up_catalog_active' : 'pop-up_catalog'}>
          <div className="pop-up_container">
            <div className="pop-up_catalog_content">
              <div className="pop-ups_catalog_left">
                <div className="pop-up_catalog_container pop-up_catalog_container_border ">
                  <img
                    className="pop-up_catalog_closed"
                    onClick={() => setModalActive(false)}
                    src={iconClosed}
                    alt=""
                  />
                  <Link
                    className="links pop-up_catalog_left_top_link"
                    to="/catalog/"
                    onClick={handleGoInCatalog}>
                    Все категории
                  </Link>
                </div>
                <div className="pop-up_catalog_container">
                  <div className="pop-up_catalog_left_bottom">
                    {categoriesArray &&
                      categoriesArray.map((item) => (
                        <div
                          onMouseEnter={() => setSubcategory(item.value)}
                          onClick={() => goToCategories(item.value)}
                          className="pop-up_catalog_left_categories">
                          <span className="links ">{item.name}</span>
                          <img src={arrow} alt="" />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className="pop-ups_catalog_right">
                <div className="pop-ups_catalog_right_container">
                  <div className="pop-ups_catalog_right_block">
                    {subcatigoriesArray &&
                      subcatigoriesArray.map((item) =>
                        subcategory === item.category ? (
                          <div className="pop-ups_catalog_right_item">
                            <span onClick={() => goToSubcategories(item.value)}>{item.name}</span>
                          </div>
                        ) : (
                          ''
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
