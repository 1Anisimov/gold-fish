import React, { useEffect } from 'react';
import cls from './user-page.module.css';
import MainContainerBg from '../../containers/main-container-bg';

import { useDispatch, useSelector } from 'react-redux';
import {
  getAuthCurrentUser,
  getCurrentUserLoadingStatus,
  getLoadingStatus,
  setCurrentUser
} from '../../store/currentUser';
import { MenuOnUserPage } from './menu-on-user-page/menu-on-user-page';
import PersonalAccount from './personal-account/personal-account';
import { Redirect, useParams } from 'react-router-dom';

const UserPage = () => {
  const dispatch = useDispatch();

  const auth = useSelector(getAuthCurrentUser());

  const params = useParams();
  const { userId } = params;

  const currentUserLoadingStatus = useSelector(getCurrentUserLoadingStatus());

  useEffect(() => {
    window.scrollTo(0, 0);
    if (currentUserLoadingStatus === 'LOADING') {
      dispatch(setCurrentUser());
    }
  }, [dispatch, currentUserLoadingStatus]);

  const loadingStatus = useSelector(getLoadingStatus());

  return auth ? (
    loadingStatus === 'READY' ? (
      auth.userId === userId ? (
        <MainContainerBg>
          <div className={cls.userPage}>
            <h3 className={cls.mainTitle}>Личный кабинет</h3>
            <div className={cls.mainContainer}>
              <MenuOnUserPage />
              <PersonalAccount />
            </div>
          </div>
        </MainContainerBg>
      ) : (
        <Redirect to={`/user/${auth.userId}`} />
      )
    ) : (
      <div className="mainContent_or_loader">
        <div className="loader"></div>
      </div>
    )
  ) : (
    <Redirect to={`/`} />
  );
};

export default UserPage;
