import React, { memo } from 'react';
import { Breadcrumb } from 'antd';
import { useParams } from 'react-router-dom';

const App = () => {
  const params = useParams();
  const { category, subcategory, productId } = params;
  console.log(params);
  const activeItems = [
    {
      title: 'Главная',
      href: '/'
    },
    {
      title: 'Каталог',
      href: '/catalog/'
    },
    category !== undefined && {
      title: category,
      href: `/catalog/${category}/`
    }

    // {
    //   title: 'Application List',
    //   href: ''
    // },
    // {
    //   title: 'An Application',
    //   href: ''
    // }
  ];
  return <Breadcrumb separator=">" items={activeItems} />;
};
export const BreadcrumbAntd = memo(App);
