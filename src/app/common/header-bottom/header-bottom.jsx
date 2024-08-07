import React from 'react';
import cls from './header-bottom.module.css';
import { Link } from 'react-router-dom';
import HeaderBottomContainerBg from '../../containers/header-bottom-container-bg';
import { useDispatch } from 'react-redux';
import { setModalCatalog } from '../../store/modals';
import CatalogSvg from '../../image/svg/catalog-header';
import InstagramSvg from '../../image/svg/instagram-logo';
import VkSvg from '../../image/svg/vkontakteSvg';
import FacebookSvg from '../../image/svg/facebookSvg';

const HeaderBottom = () => {
  const dispatch = useDispatch();

  const linksArray = [
    { name: 'Warhammer', url: '/catalog/warhammer', key: 1 },
    { name: 'Magic:the Cathering', url: '/catalog/magic', key: 2 },
    { name: 'Мероприятия', url: '/', key: 3 },
    { name: 'О центре', url: '/', key: 4 },
    { name: 'Контакты', url: '/', key: 5 }
  ];

  const handleOpenCatalog = () => {
    dispatch(setModalCatalog(true));
  };

  return (
    <>
      <HeaderBottomContainerBg>
        <div className={cls.header_bottom_container}>
          <button onClick={handleOpenCatalog} className={cls.header_bottom_catalog + ' links'}>
            <CatalogSvg />
            <span>Каталог</span>
          </button>
          {linksArray.map((item) => (
            <Link key={item.key} to={item.url} className={cls.header_bottom_nav_item + ' links'}>
              {item.name}
            </Link>
          ))}

          <div className={cls.header_bottom_item + ' ' + cls.header_bottom_item_icons}>
            <div className={cls.header_bottom_item_icons_inst}>
              <InstagramSvg />
            </div>
            <div className={cls.header_bottom_item_icons_vk}>
              <VkSvg />
            </div>
            <div className={cls.header_bottom_item_icons_fb}>
              <FacebookSvg />
            </div>
          </div>
        </div>
      </HeaderBottomContainerBg>
    </>
  );
};

export default HeaderBottom;
