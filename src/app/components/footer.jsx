import React from 'react';
import logo from '../image/logo_goldFish.png';
import logoVisa from '../image/icons/VISA_icon_footer.png';
import logoMir from '../image/icons/MIR_icon_footer.png';
import logoMc from '../image/icons/MC_icon_footer.png';
import BottomContainerBg from '../containers/bottom-container-bg';
import BottomContainer from '../containers/bottom-container';

const Footer = () => {
  return (
    <>
      <BottomContainerBg>
        <footer className="footer">
          <BottomContainer>
            {/* <div className="container_main"> */}
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
                <span className="footer_top_part_2_title">Каталог</span>
                <div className="footer_top_part_2_list">
                  <span>Warhammer 40000</span>
                  <span>Настольные игры</span>
                  <span>Magic: the Gathering</span>
                  <span>Аксессуары для игр</span>
                  <span>Краски </span>
                  <span>Аксессуары для моделизма</span>
                </div>
              </div>
              <div className="footer_top_item footer_top_part_3">
                <div className="footer_top_part_3_list">
                  <span>Правила клуба</span>
                  <span>Мероприятия</span>
                  <span>О нас</span>
                  <span>Контакты</span>
                  <span>Блог</span>
                </div>
              </div>
              <div className="footer_top_item footer_top_part_4">
                <div className="footer_top_part_4_list">
                  <span>Оплата и достака</span>
                  <span>Гарантия и возврат</span>
                </div>
              </div>
              <div className="footer_top_item footer_top_part_5">
                <button className="footer_top_part_5_button">Заказать звонок</button>
                <div className="footer_top_part_5_list">
                  <span>+7 (495) 911-10-11</span>
                  <span>msk@magicgoldfish.ru</span>
                </div>
                <div></div>
              </div>
            </div>
          </BottomContainer>
          {/* </div> */}

          <div className="footer_bottom">
            <BottomContainer>
              {/* <div className="container_main"> */}
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
            </BottomContainer>
            {/* </div> */}
          </div>
        </footer>
      </BottomContainerBg>
    </>
  );
};

export default Footer;
