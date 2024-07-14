import React from 'react';
import cls from './header-top.module.css';
import logoGoldFish from '../../image/logo_goldFish.png';
import { Link } from 'react-router-dom';
import HeaderTopContainerBg from '../../containers/header-top-container-bg';
import { useDispatch, useSelector } from 'react-redux';
import { getBasketEntities } from '../../store/basket';
import { getFoundProducts } from '../../store/products';
// import history from '../../utils/history';
import Number from '../../image/svg/number-header';
import Profile from '../../image/svg/profile-header';
import Basket from '../../image/svg/basket-header';
import Search from '../components/search/search';
import { getSearchOpenOrClose, setCopyNumber, setSearchOpenOrClose } from '../../store/modals';
import { CopyNumberModal } from '../components/copy-number-modal/copy-number-modal';

// TODO Важно не удалить
import { setModalRegisterForm } from '../../store/modals';
import { getAuthCurrentUser, getIsLoggedIn } from '../../store/currentUser';
import history from '../../utils/history';

const HeaderTop = () => {
  const dispatch = useDispatch();
  const basketEntities = useSelector(getBasketEntities());
  const filteredProductsActive = useSelector(getFoundProducts());
  const isOpenSearch = useSelector(getSearchOpenOrClose());

  const isLoggedIn = useSelector(getIsLoggedIn());
  const auth = useSelector(getAuthCurrentUser());

  const removeValueSearch = () => {
    dispatch(setSearchOpenOrClose(false));
  };

  const handleOpenClosed = () => {
    dispatch(setCopyNumber(false));
  };

  const copyTextToClipboard = async ({ target }) => {
    try {
      await navigator.clipboard.writeText(target.innerText);
      dispatch(setCopyNumber(true));
      setTimeout(handleOpenClosed, 2500);
    } catch (err) {}
  };

  const handleOpenModalForm = () => {
    // TODO ВАЖНО НЕ УДАЛИТЬ
    if (!isLoggedIn) {
      dispatch(setModalRegisterForm(true));
    }
    if (isLoggedIn && auth) {
      history.push(`/user/${auth.userId}`);
    }

    // history.push('/user/1');
  };

  return (
    <>
      <HeaderTopContainerBg>
        {filteredProductsActive.length > 0 && isOpenSearch ? (
          <div onClick={removeValueSearch} className={cls.header_top__blockInputBlock_out}></div>
        ) : (
          <> </>
        )}
        <div className={cls.header_top}>
          <div className={cls.header_top_logo}>
            <Link to="/">
              <img src={logoGoldFish} alt="" className={cls.header_top_logo} />
            </Link>
          </div>
          <Search />

          <div className={cls.header_top_number}>
            <Number />
            <span style={{ cursor: 'pointer' }} id="textField" onClick={copyTextToClipboard}>
              +7 (495) 911-10-11
            </span>
          </div>
          <div className={cls.header_top_icons}>
            <button style={{ backgroundColor: '#2A2A2A' }} onClick={handleOpenModalForm}>
              <Profile />
            </button>
            <div>
              <Link
                className={cls.header_top_icons_profile_basket}
                style={{ color: 'rgba(255, 255, 255, 1)' }}
                to={'/person/basket'}>
                <Basket />
                {basketEntities.length > 0 ? (
                  <div className={cls.circle_on_basket}>{basketEntities.length}</div>
                ) : (
                  ''
                )}
              </Link>
            </div>
          </div>
        </div>
        <CopyNumberModal />
      </HeaderTopContainerBg>
    </>
  );
};

export default HeaderTop;
