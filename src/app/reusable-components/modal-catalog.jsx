import React from 'react';
import iconClosed from '../image/icons/X_closed_icon.png';
import { ScrollBlock } from '../hooks/useScrollBlock';
import { Link } from 'react-router-dom';

const ModalCatalog = ({ modalActive, setModalActive }) => {
  const [blockScroll, allowScroll] = ScrollBlock();

  modalActive ? blockScroll() : allowScroll();
  const handleGoInCatalog = () => {
    setModalActive(false);
  };
  return (
    <>
      {modalActive && (
        <div
          onClick={(e) => e.stopPropagation()}
          className={modalActive ? 'pop-up_catalog pop-up_catalog_active' : 'pop-up_catalog'}>
          <div className="pop-up_container">
            <div onClick={(e) => e.stopPropagation()} className="pop-up_catalog_content">
              <div className="pop-ups_catalog_left">
                <div className="pop-up_catalog_container pop-up_catalog_container_border ">
                  <img
                    className="pop-up_catalog_closed"
                    onClick={() => setModalActive(false)}
                    src={iconClosed}
                    alt=""
                  />
                  <Link className="links" to="/catalog/" onClick={handleGoInCatalog}>
                    Все категории
                  </Link>
                </div>
                <div className="pop-up_catalog_container">
                  <div className="pop-up_catalog_left_bottom">
                    <span>Настольные игры</span>
                    <span>Warhammer 40000</span>
                    <span>Magic: the Gathering</span>
                    <span>Аксессуары для игр</span>
                    <span>Краски</span>
                    <span>Товары для детей</span>
                    <span>Аксессуары для моделизма</span>
                  </div>
                </div>
              </div>
              <div className="pop-ups_catalog_right"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalCatalog;
