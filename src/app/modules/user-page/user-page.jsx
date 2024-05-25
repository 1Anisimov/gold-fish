import React, { useEffect } from 'react';
import cls from './user-page.module.css';
import MainContainerBg from '../../containers/main-container-bg';
import MainContainer from '../../common/components/main-container/main-container';

//img

import { useDispatch, useSelector } from 'react-redux';
import { getLoadingStatus, setCurrentUser } from '../../store/currentUser';
import { Link, useParams } from 'react-router-dom';
import PersonalAccount from '../../common/components/personal-account/personal-account';
import PersonalAccountSettings from '../../common/components/personal-account-settings/personal-account-settings';

const UserPage = () => {
  const dispatch = useDispatch();

  const params = useParams();
  const { settings } = params;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setCurrentUser());
  }, [dispatch]);

  const loadingStatus = useSelector(getLoadingStatus());

  return loadingStatus === 'READY' ? (
    <MainContainerBg>
      <MainContainer>
        <div className={cls.userPage}>
          <h3 className={cls.mainTitle}>Личный кабинет</h3>
          <div className={cls.mainContainer}>
            <div className={cls.menuLeft}>
              <div className={cls.menuContainer}>
                <Link to={'/user/1'} className={cls.menuLink}>
                  Профиль
                </Link>
                <span className={cls.menuLink}>Заказы</span>
                <span className={cls.menuLink}>Мероприятия</span>
                <Link to={'/user/1/settings'} className={cls.menuLink}>
                  Настройки
                </Link>
              </div>
            </div>
            {/* // TODO вместо params перенести страницу в App */}
            {settings ? <PersonalAccountSettings /> : <PersonalAccount />}
            {/* <PersonalAccount /> */}
          </div>
        </div>
      </MainContainer>
    </MainContainerBg>
  ) : (
    <div className="mainContent_or_loader">
      <div className="loader"></div>
    </div>
  );
};

export default UserPage;
