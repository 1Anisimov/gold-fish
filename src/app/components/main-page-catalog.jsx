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

  const catalogBlockItems = [
    { id: 'warhammer', text: 'Варгеймы', img: imageOne },
    { id: 'paints', text: 'Краски', img: imageTwo },
    { id: 'magic', text: 'Magic:the Cathering', img: imageThree },
    { id: '', text: 'Весь каталог', img: imageFour }
  ];

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
              {catalogBlockItems &&
                catalogBlockItems.map((item) => (
                  <div key={item.id} className="main_catalog_block_right_item ">
                    <img src={item.img} alt="" id={item.id} onClick={goToCatalog} />
                    <div
                      className="main_catalog_block_right_text"
                      id={item.id}
                      onClick={goToCatalog}>
                      {item.text}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCatalog;
