import React, { useEffect } from 'react';
import cls from './user-page-settings.module.css';
import MainContainerBg from '../../containers/main-container-bg';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentUserLoadingStatus,
  getLoadingStatus,
  setCurrentUser
} from '../../store/currentUser';
import PersonalAccountSettings from '../user-page/personal-account-settings/personal-account-settings';
import { MenuOnUserPage } from '../user-page/menu-on-user-page/menu-on-user-page';

const UserPageSettings = () => {
  const dispatch = useDispatch();

  const loadingStatus = useSelector(getLoadingStatus());
  const currentUserLoadingStatus = useSelector(getCurrentUserLoadingStatus());

  useEffect(() => {
    window.scrollTo(0, 0);
    if (currentUserLoadingStatus === 'LOADING') {
      dispatch(setCurrentUser());
    }
  }, [dispatch, currentUserLoadingStatus]);

  return loadingStatus === 'READY' ? (
    <MainContainerBg>
      <div className={cls.userPage}>
        <h3 className={cls.mainTitle}>Личный кабинет</h3>
        <div className={cls.mainContainer}>
          <MenuOnUserPage />
          <PersonalAccountSettings />
        </div>
      </div>
    </MainContainerBg>
  ) : (
    <div className="mainContent_or_loader">
      <div className="loader"></div>
    </div>
  );
};

export default UserPageSettings;
