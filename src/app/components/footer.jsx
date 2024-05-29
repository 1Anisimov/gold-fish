import React from 'react';
import logo from '../image/logo_goldFish.png';
import logoVisa from '../image/icons/VISA_icon_footer.png';
import logoMir from '../image/icons/MIR_icon_footer.png';
import logoMc from '../image/icons/MC_icon_footer.png';
import BottomContainerBg from '../containers/bottom-container-bg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <BottomContainerBg>
        <footer className="footer">
          <div className="footer_top">
            <div className="footer_top_item footer_top_part_1">
              <div className="footer_top_part_1_logo">
                <img className="footer_top_part_1_logo" src={logo} alt="" />
              </div>
              <span className="footer_top_part_1_text">
                г. Москва ст.м. Таганская Малый Дровяной переулок 6
              </span>
            </div>
            <div className="footer_top_item footer_top_part_2">
              <div className="footer_top_part_2_list">
                <Link className="footer_top_title footer_top_part_2_title" to={`/catalog`}>
                  Каталог
                </Link>
                <Link className="footer_top_part_2_categories" to={`/catalog/warhammer`}>
                  Warhammer 40000
                </Link>
                <Link className="footer_top_part_2_categories" to={`/catalog/board_games`}>
                  Настольные игры
                </Link>
                <Link className="footer_top_part_2_categories" to={`/catalog/magic`}>
                  Magic: the Gathering
                </Link>
                <Link className="footer_top_part_2_categories" to={`/catalog/accessories_game`}>
                  Аксессуары для игр
                </Link>
                <Link className="footer_top_part_2_categories" to={`/catalog/paints`}>
                  Краски{' '}
                </Link>
                <Link className="footer_top_part_2_categories" to={`/catalog/accessories_modeling`}>
                  Аксессуары для моделизма
                </Link>
              </div>
            </div>
            <div className="footer_top_item footer_top_part_3">
              <div className="footer_top_part_3_list">
                <Link className="footer_top_title" to={`/`}>
                  Правила клуба
                </Link>
                <Link className="footer_top_title" to={`/`}>
                  Мероприятия
                </Link>
                <Link className="footer_top_title" to={`/`}>
                  О нас
                </Link>
                <Link className="footer_top_title" to={`/`}>
                  Контакты
                </Link>
                <Link className="footer_top_title" to={`/`}>
                  Блог
                </Link>
              </div>
            </div>
            <div className="footer_top_item footer_top_part_4">
              <div className="footer_top_part_4_list">
                <Link className="footer_top_title" to={`/`}>
                  Оплата и достака
                </Link>
                <Link className="footer_top_title" to={`/`}>
                  Гарантия и возврат
                </Link>
              </div>
            </div>
            <div className="footer_top_item footer_top_part_5">
              <button className="footer_top_part_5_button">Заказать звонок</button>
              <div className="footer_top_part_5_list">
                <Link className="footer_top_title" to={`/`}>
                  +7 (495) 911-10-11
                </Link>
                <Link className="footer_top_title" to={`/`}>
                  msk@magicgoldfish.ru
                </Link>
              </div>
              <div></div>
            </div>
          </div>

          <div className="footer_bottom">
            <div className="footer_bottom_block">
              <div className="footer_bottom_item footer_bottom_left">
                <span>© 2021 MagicGoldFish.ru</span>
                <span className="derection">Политика конфиденциальности</span>
              </div>
              <div className="footer_bottom_item footer_bottom_middle">
                <div className="footer_bottom_icons">
                  <img src={logoMir} alt="" />
                  <img src={logoVisa} alt="" />
                  <img src={logoMc} alt="" />
                </div>
              </div>
              <div className="footer_bottom_item footer_bottom_right">
                <span>Содержимое не является публичной офертой</span>
                <span className="derection">Пользовательское соглашение</span>
              </div>
            </div>
          </div>
        </footer>
      </BottomContainerBg>
    </>
  );
};

export default Footer;
