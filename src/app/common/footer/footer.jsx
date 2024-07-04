import React from 'react';
import cls from './footer.module.css';
import logo from '../../image/logo_goldFish.png';
import logoVisa from '../../image/icons/VISA_icon_footer.png';
import logoMir from '../../image/icons/MIR_icon_footer.png';
import logoMc from '../../image/icons/MC_icon_footer.png';
import BottomContainerBg from '../../containers/bottom-container-bg';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToUpOnPage = () => {
    window.scrollTo(0, 0);
  };

  const linksArrayOne = [
    {
      class: cls.footer_top_title + ' ' + cls.footer_top_part_2_title,
      name: 'Каталог',
      url: '/catalog'
    },
    { class: cls.footer_top_part_2_categories, name: 'Warhammer 40000', url: '/catalog/warhammer' },
    {
      class: cls.footer_top_part_2_categories,
      name: 'Настольные игры',
      url: '/catalog/board_games'
    },
    {
      class: cls.footer_top_part_2_categories,
      name: 'Magic: the Gathering',
      url: '/catalog/magic'
    },
    {
      class: cls.footer_top_part_2_categories,
      name: 'Аксессуары для игр',
      url: '/catalog/accessories_game'
    },
    { class: cls.footer_top_part_2_categories, name: 'Краски', url: '/catalog/paints' },
    {
      class: cls.footer_top_part_2_categories,
      name: 'Аксессуары для моделизма',
      url: '/catalog/accessories_modeling'
    }
  ];

  const linksArrayTwo = [
    { name: 'Правила клуба', url: '/' },
    { name: 'Мероприятия', url: '/' },
    { name: 'О нас', url: '/' },
    { name: 'Контакты', url: '/' },
    { name: 'Блог', url: '/' }
  ];

  return (
    <>
      <BottomContainerBg>
        <footer className={cls.footer}>
          <div className={cls.footer_top}>
            <div className={cls.footer_top_item + ' ' + cls.footer_top_part_1}>
              <div className={cls.footer_top_part_1_logo}>
                <img className={cls.footer_top_part_1_logo} src={logo} alt="" />
              </div>
              <span className={cls.footer_top_part_1_text}>
                г. Москва ст.м. Таганская Малый Дровяной переулок 6
              </span>
            </div>
            <div className={cls.footer_top_item + ' ' + cls.footer_top_part_2}>
              <div className={cls.footer_top_part_2_list}>
                {linksArrayOne.map((item) => (
                  <Link onClick={scrollToUpOnPage} className={item.class} to={item.url}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className={cls.footer_top_item + ' ' + cls.footer_top_part_3}>
              <div className={cls.footer_top_part_3_list}>
                {linksArrayTwo.map((item) => (
                  <Link className={cls.footer_top_title} to={item.url}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className={cls.footer_top_item + ' ' + cls.footer_top_part_4}>
              <div className={cls.footer_top_part_4_list}>
                <Link className={cls.footer_top_title} to={`/`}>
                  Оплата и достака
                </Link>
                <Link className={cls.footer_top_title} to={`/`}>
                  Гарантия и возврат
                </Link>
              </div>
            </div>
            <div className={cls.footer_top_item + ' ' + cls.footer_top_part_5}>
              <button className={cls.footer_top_part_5_button}>Заказать звонок</button>
              <div className={cls.footer_top_part_5_list}>
                <Link className={cls.footer_top_title} to={`/`}>
                  +7 (495) 911-10-11
                </Link>
                <Link className={cls.footer_top_title} to={`/`}>
                  msk@magicgoldfish.ru
                </Link>
              </div>
              <div></div>
            </div>
          </div>

          <div className={cls.footer_bottom}>
            <div className={cls.footer_bottom_block}>
              <div className={cls.footer_bottom_item + ' ' + cls.footer_bottom_left}>
                <span>© 2021 MagicGoldFish.ru</span>
                <span className={cls.derection}>Политика конфиденциальности</span>
              </div>
              <div className={cls.footer_bottom_item + ' ' + cls.footer_bottom_middle}>
                <div className={cls.footer_bottom_icons}>
                  <img src={logoMir} alt="" />
                  <img src={logoVisa} alt="" />
                  <img src={logoMc} alt="" />
                </div>
              </div>
              <div className={cls.footer_bottom_item + ' ' + cls.footer_bottom_right}>
                <span>Содержимое не является публичной офертой</span>
                <span className={cls.derection}>Пользовательское соглашение</span>
              </div>
            </div>
          </div>
        </footer>
      </BottomContainerBg>
    </>
  );
};

export default Footer;
