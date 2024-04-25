import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const crumbs = [
  {
    title: <Link to={'/'}>Главная</Link>
  },
  {
    title: <Link to={'/catalog'}>Каталог</Link>
  },
  {
    title: <Link to={'/catalog'}>Категория</Link>
  },
  {
    title: <Link to={'/catalog'}>Сабкатегория</Link>
  }
];

const MainBreadcrumb = () => <Breadcrumb items={crumbs} />;

export default MainBreadcrumb;
