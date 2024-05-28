import React, { useState } from 'react';
import logoGoldFish from '../image/logo_goldFish.png';
import { Link } from 'react-router-dom';
import HeaderContainer from '../common/components/header-container/header-container';
import HeaderTopContainerBg from '../containers/header-top-container-bg';
import { useSelector } from 'react-redux';
import { getBasketEntities } from '../store/basket';
import { getFoundProducts } from '../store/products';
import history from '../utils/history';
import Number from '../image/svg/number-header';
import Profile from '../image/svg/profile-header';
import Basket from '../image/svg/basket-header';
import Search from '../common/components/search/search';

// TODO Важно не удалить
// import { setModalRegisterForm } from '../store/modals';

const HeaderTop = () => {
  const basketEntities = useSelector(getBasketEntities());
  const filteredProductsActive = useSelector(getFoundProducts());

  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const removeValueSearch = () => {
    setIsOpenSearch(false);
  };

  // TODO создать мини компонент вместо этого(что то типа модалки с тестом Скопировано)
  const copyTextToClipboard = async ({ target }) => {
    try {
      await navigator.clipboard.writeText(target.innerText);
      alert('Текст успешно скопирован в буфер обмена!');
    } catch (err) {
      alert('Ошибка:', err);
    }
  };

  const handleOpenModalForm = () => {
    // TODO ВАЖНО НЕ УДАЛИТЬ
    // dispatch(setModalRegisterForm(true));
    history.push('/user/1');
  };

  return (
    <>
      <HeaderTopContainerBg>
        <HeaderContainer>
          {filteredProductsActive.length > 0 && isOpenSearch ? (
            <div onClick={removeValueSearch} className="header_top__blockInputBlock_out"></div>
          ) : (
            <> </>
          )}
          <div className="header_top">
            <div className="header_top_logo">
              <Link to="/">
                <img src={logoGoldFish} alt="" className="header_top_logo" />
              </Link>
            </div>
            <Search />

            <div className="header_top_number">
              <Number />
              <span style={{ cursor: 'pointer' }} id="textField" onClick={copyTextToClipboard}>
                +7 (495) 911-10-11
              </span>
            </div>
            <div className="header_top_icons">
              <button style={{ backgroundColor: '#2A2A2A' }} onClick={handleOpenModalForm}>
                <Profile />
              </button>
              <div>
                <Link
                  className="header_top_icons_profile_basket"
                  style={{ color: 'rgba(255, 255, 255, 1)' }}
                  to={'/person/basket'}>
                  <Basket />
                  {basketEntities.length > 0 ? (
                    <div className="circle_on_basket">{basketEntities.length}</div>
                  ) : (
                    ''
                  )}
                </Link>
              </div>
            </div>
          </div>
        </HeaderContainer>
      </HeaderTopContainerBg>
    </>
  );
};

export default HeaderTop;
