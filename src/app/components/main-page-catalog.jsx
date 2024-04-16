import React from 'react';
import imageCatalog from '../image/Настольные игры.png';
import imageOne from '../image/catalog/1.png';
import imageTwo from '../image/catalog/2.png';
import imageThree from '../image/catalog/3.png';
import imageFour from '../image/catalog/4.png';
import history from '../utils/history';

const MainCatalog = () => {
  const goToCatalog = ({ target }) => {
    history.push(`/catalog/${target.id}`);
  };
  return (
    <>
      <div className="main_catalog">
        <div className="container_main">
          <h2 className="main_catalog_h1">Каталог</h2>
          <div className="main_catalog_block">
            <div className="main_catalog_block_left">
              <div className="main_catalog_block_left_image">
                <img src={imageCatalog} alt="" id="board_games" onClick={goToCatalog} />
              </div>
              <div className="main_catalog_block_left_text" id="board_games" onClick={goToCatalog}>
                Настольные игры
              </div>
            </div>
            <div className="main_catalog_block_right">
              <div className="main_catalog_block_right_top">
                <div className="main_catalog_block_right_item main_catalog_block_right_1">
                  <img src={imageOne} alt="" id="warhammer" onClick={goToCatalog} />
                  <div
                    className="main_catalog_block_right_text"
                    id="warhammer"
                    onClick={goToCatalog}>
                    Варгеймы
                  </div>
                </div>
                <div className="main_catalog_block_right_item main_catalog_block_right_2">
                  <img src={imageTwo} alt="" id="paints" onClick={goToCatalog} />
                  <div className="main_catalog_block_right_text" id="paints" onClick={goToCatalog}>
                    Краски
                  </div>
                </div>
              </div>
              <div className="main_catalog_block_right_bottom">
                <div className="main_catalog_block_right_item main_catalog_block_right_3">
                  <img src={imageThree} alt="" id="magic" onClick={goToCatalog} />
                  <div className="main_catalog_block_right_text" id="magic" onClick={goToCatalog}>
                    Magic:the Cathering
                  </div>
                </div>
                <div className="main_catalog_block_right_item main_catalog_block_right_4">
                  <img src={imageFour} alt="" id="" onClick={goToCatalog} />
                  <div className="main_catalog_block_right_text" id="" onClick={goToCatalog}>
                    Весь каталог
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCatalog;
