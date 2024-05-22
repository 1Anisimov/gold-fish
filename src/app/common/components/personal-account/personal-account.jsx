import React, { useMemo } from 'react';
import cls from './personal-account.module.css';
import LoyaltyCard from '../../../reusable-components/loyalty-card/loyalty-card';
import MedalsUser from '../medals-user/medals-user';
import iconV from '../../../image/icons/icon_orange_V.png';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../../store/currentUser';

const PersonalAccount = () => {
  const user = useSelector(getCurrentUser());

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
  };

  const gradeProcent = useMemo(
    () => calculateProgressOnGrade(user?.gradeProgress, user?.grade),
    [user?.gradeProgress, user?.grade]
  );

  return (
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
                  user.grade !== 'Профессионал' ? { width: gradeProcent + '%' } : { width: '100%' }
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
  );
};

export default PersonalAccount;
