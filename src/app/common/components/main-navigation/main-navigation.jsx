import React from 'react';
import cls from './main-navigation.module.css';
import BreadcrumbBootstrap from '../breadcrumb-bootstrap/breadcrumb-bootstrap';

const MainNavigation = () => {
  return (
    <div className={cls.container}>
      <BreadcrumbBootstrap />
    </div>
  );
};

export default MainNavigation;
