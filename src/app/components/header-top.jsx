import React from 'react';
import logoGoldFish from '../image/logo_goldFish.png';
import { Link } from 'react-router-dom';
import HeaderTopContainerBg from '../containers/header-top-container-bg';
import { useDispatch, useSelector } from 'react-redux';
import { getBasketEntities } from '../store/basket';
import { getFoundProducts } from '../store/products';
import history from '../utils/history';
import Number from '../image/svg/number-header';
import Profile from '../image/svg/profile-header';
import Basket from '../image/svg/basket-header';
import Search from '../common/components/search/search';
import { getSearchOpenOrClose, setSearchOpenOrClose } from '../store/modals';
import PopoverAntd from '../common/components/popover-antd/popover-antd';

// TODO Важно не удалить
// import { setModalRegisterForm } from '../store/modals';

const HeaderTop = () => {
  const dispatch = useDispatch();
  const basketEntities = useSelector(getBasketEntities());
  const filteredProductsActive = useSelector(getFoundProducts());
  const isOpenSearch = useSelector(getSearchOpenOrClose());

  const removeValueSearch = () => {
    dispatch(setSearchOpenOrClose(false));
  };

  const copyTextToClipboard = async ({ target }) => {
    try {
      await navigator.clipboard.writeText(target.innerText);
    } catch (err) {}
  };

  const handleOpenModalForm = () => {
    // TODO ВАЖНО НЕ УДАЛИТЬ
    // dispatch(setModalRegisterForm(true));
    history.push('/user/1');
  };

  return (
    <>
      <HeaderTopContainerBg>
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
            <PopoverAntd>
              <span style={{ cursor: 'pointer' }} id="textField" onClick={copyTextToClipboard}>
                +7 (495) 911-10-11
              </span>
            </PopoverAntd>
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
      </HeaderTopContainerBg>
    </>
  );
};

export default HeaderTop;
