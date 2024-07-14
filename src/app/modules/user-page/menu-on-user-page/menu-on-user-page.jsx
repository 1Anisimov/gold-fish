import React, { memo } from 'react';
import cls from './menu-on-user-page.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthCurrentUser } from '../../../store/currentUser';

const Component = () => {
  const auth = useSelector(getAuthCurrentUser());

  // const isLoggedIn = useSelector(getIsLoggedIn());
  return (
    <div className={cls.menuLeft}>
      <div className={cls.menuContainer}>
        <Link to={`/user/${auth.userId}`} className={cls.menuLink}>
          Профиль
        </Link>
        <span className={cls.menuLink}>Заказы</span>
        <span className={cls.menuLink}>Мероприятия</span>
        <Link to={`/user/${auth.userId}/settings`} className={cls.menuLink}>
          Настройки
        </Link>
      </div>
    </div>
  );
};

export const MenuOnUserPage = memo(Component);
