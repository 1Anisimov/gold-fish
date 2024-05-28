import React from 'react';
import { Link } from 'react-router-dom';
import HeaderContainer from '../common/components/header-container/header-container';
import HeaderBottomContainerBg from '../containers/header-bottom-container-bg';
import { useDispatch } from 'react-redux';
import { setModalCatalog } from '../store/modals';
import CatalogSvg from '../image/svg/catalog-header';
import InstagramSvg from '../image/svg/instagram-logo';
import VkSvg from '../image/svg/vkontakteSvg';
import FacebookSvg from '../image/svg/facebookSvg';

const HeaderBottom = () => {
  const dispatch = useDispatch();

  const handleOpenCatalog = () => {
    dispatch(setModalCatalog(true));
  };

  return (
    <>
      {/* // TODO сделать один контейнер оболочки вместо двух */}
      <HeaderBottomContainerBg>
        <HeaderContainer>
          <div className="header_bottom_container">
            <button
              onClick={handleOpenCatalog}
              className="header_bottom_item header_bottom_catalog links">
              <CatalogSvg />
              <span>Каталог</span>
            </button>
            <Link to="/catalog/warhammer" className="header_bottom_nav_item  links">
              Warhammer
            </Link>
            <Link to="/catalog/magic" className="header_bottom_nav_item  links">
              Magic:the Cathering
            </Link>
            <Link to="" className="header_bottom_nav_item  links">
              Мероприятия
            </Link>
            <Link to="" className="header_bottom_nav_item  links">
              О центре
            </Link>
            <Link to="" className="header_bottom_nav_item  links">
              Контакты
            </Link>

            <div className="header_bottom_item header_bottom_item_icons">
              <div className="header_bottom_item_icons_inst">
                <InstagramSvg />
              </div>
              <div className="header_bottom_item_icons_vk">
                <VkSvg />
              </div>
              <div className="header_bottom_item_icons_fb">
                <FacebookSvg />
              </div>
            </div>
          </div>
        </HeaderContainer>
      </HeaderBottomContainerBg>
    </>
  );
};

export default HeaderBottom;
