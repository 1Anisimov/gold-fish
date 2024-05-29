import React, { memo } from 'react';
import cls from './menu-on-user-page.module.css';
import { Link } from 'react-router-dom';

const Component = () => {
  return (
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
  );
};

export const MenuOnUserPage = memo(Component);
