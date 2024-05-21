import React, { useEffect, useMemo } from 'react';
import cls from './user-page.module.css';
import MainContainerBg from '../../containers/main-container-bg';
import MainContainer from '../../common/components/main-container/main-container';

//img
import iconV from '../../image/icons/icon_orange_V.png';
import LoyaltyCard from '../../reusable-components/loyalty-card/loyalty-card';
import MedalsUser from '../../common/components/medals-user/medals-user';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser, getLoadingStatus, setCurrentUser } from '../../store/currentUser';

const UserPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setCurrentUser());
  }, [dispatch]);

  const user = useSelector(getCurrentUser());
  const loadingStatus = useSelector(getLoadingStatus());

  const calculateMaxValueOnGrade = (userGrade) => {
    if (userGrade === null) {
      return 1000;
    }

    if (userGrade === 'Новичок') {
      return 5000;
    }

    if (userGrade === 'Любитель') {
      return 10000;
    }

    if (userGrade === 'Профессионал') {
      return 10000;
    }
  };

  const maxValueOnGrade = useMemo(() => calculateMaxValueOnGrade(user?.grade), [user?.grade]);

  const calculateProgressOnGrade = (userProgress, userGrade) => {
    if (userGrade === null) {
      const maxValue = 1000;
      return userProgress / (maxValue / 100);
    }

    if (userGrade === 'Новичок') {
      const maxValue = 5000;
      return userProgress / (maxValue / 100);
    }

    if (userGrade === 'Любитель') {
      const maxValue = 10000;
      return userProgress / (maxValue / 100);
    }

    // if (userGrade === 'Профессионал') {
    //   const maxValue = 10000;
    //   return userProgress / (maxValue / 100);
    // }
  };

  const gradeProcent = useMemo(
    () => calculateProgressOnGrade(user?.gradeProgress, user?.grade),
    [user?.gradeProgress, user?.grade]
  );

  return loadingStatus === 'READY' ? (
    <MainContainerBg>
      <MainContainer>
        <div className={cls.userPage}>
          <h3 className={cls.mainTitle}>Личный кабинет</h3>
          <div className={cls.mainContainer}>
            <div className={cls.menuLeft}>
              <div className={cls.menuContainer}>
                <span>Профиль</span>
                <span>Заказы</span>
                <span>Мероприятия</span>
                <span>Настройки</span>
              </div>
            </div>
            <div className={cls.mainContent}>
              <div className={cls.profileInfo}>
                <div className={cls.imageProfileBlock}>
                  <img className={cls.imageProfileBlock} src={user.img} alt="" />
                </div>
                <div className={cls.userName}>{user.name}</div>
                <div className={cls.userGrade}>
                  <div className={cls.orangeCircle}>
                    <img src={iconV} alt="" />
                  </div>
                  <div className={cls.gradeText}>{user.grade}</div>
                </div>
              </div>
              <div className={cls.loyaltyCardBlock}>
                <h3 className={cls.loyaltyCardTitle}>Карта лояльности</h3>
                <div className={cls.loyaltyCardContent}>
                  <div className={cls.loyaltyCardContentTop}>
                    <LoyaltyCard />
                    <MedalsUser />
                  </div>
                  <div className={cls.loyaltyCardProgress}>
                    <div className={cls.progressLine}>
                      <div
                        className={cls.progressLineActive}
                        style={
                          user.grade !== 'Профессионал'
                            ? { width: gradeProcent + '%' }
                            : { width: '100%' }
                        }></div>
                    </div>

                    <div className={cls.progressNumber}>
                      {user.grade !== 'Профессионал'
                        ? `${user.gradeProgress}/${maxValueOnGrade}`
                        : `${maxValueOnGrade}/${maxValueOnGrade}`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
