import React, { useMemo } from 'react';
import cls from './personal-account.module.css';
import LoyaltyCard from '../../../reusable-components/loyalty-card/loyalty-card';
import MedalsUser from '../medals-user/medals-user';
import iconV from '../../../image/icons/icon_orange_V.png';
import { useSelector } from 'react-redux';
import {
  getCurrentUser,
  getCurrentUserTotalPurchase,
  getLoadingStatus
} from '../../../store/currentUser';

const PersonalAccount = () => {
  const user = useSelector(getCurrentUser());
  const totalPurchase = useSelector(getCurrentUserTotalPurchase());

  const loadingStatus = useSelector(getLoadingStatus());

  const getUserGradeInfoBySum = (sum) => {
    if (sum < 1000) {
      return {
        grade: 'new',
        gradeName: null,
        progressProcent: sum / (1000 / 100),
        progress: sum,
        maxSum: 1000,
        sale: 0
      };
    }
    if (sum >= 1000 && sum < 5000) {
      return {
        grade: 'beginner',
        gradeName: 'Новичок',
        progressProcent: sum / (5000 / 100),
        progress: sum,
        maxSum: 5000,
        sale: 5
      };
    }
    if (sum >= 5000 && sum < 10000) {
      return {
        grade: 'amateur',
        gradeName: 'Любитель',
        progressProcent: sum / (10000 / 100),
        progress: sum,
        maxSum: 10000,
        sale: 10
      };
    }
    if (sum >= 10000) {
      return {
        grade: 'professional',
        gradeName: 'Профессионал',
        progressProcent: 100,
        maxSum: null,
        progress: sum,
        sale: 15
      };
    }
  };

  const currentUserInfo = useMemo(() => getUserGradeInfoBySum(totalPurchase), [totalPurchase]);

  return loadingStatus === 'READY' ? (
    <div className={cls.mainContent}>
      <div className={cls.profileInfo}>
        <div className={cls.imageProfileBlock}>
          {user.img ? (
            <img
              className={cls.imageProfileBlock}
              src={require(`../../../image/${user.img}`)}
              alt=""
            />
          ) : (
            <></>
          )}
        </div>
        <div className={cls.userName}>{user.name}</div>
        <div className={cls.userGrade}>
          <div className={cls.orangeCircle}>
            <img src={iconV} alt="" />
          </div>
          <div className={cls.gradeText}>{currentUserInfo.gradeName}</div>
        </div>
      </div>
      <div className={cls.loyaltyCardBlock}>
        <h3 className={cls.loyaltyCardTitle}>Карта лояльности</h3>
        <div className={cls.loyaltyCardContent}>
          <div className={cls.loyaltyCardContentTop}>
            <LoyaltyCard userGrade={currentUserInfo.grade} />
            <MedalsUser />
          </div>
          <div className={cls.loyaltyCardProgress}>
            <div className={cls.progressLine}>
              <div
                className={cls.progressLineActive}
                style={{ width: `${currentUserInfo.progressProcent}%` }}></div>
            </div>

            <div className={cls.progressNumber}>
              {currentUserInfo.grade !== 'professional'
                ? `${currentUserInfo.progress}/${currentUserInfo.maxSum}`
                : `${currentUserInfo.progress}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default PersonalAccount;
