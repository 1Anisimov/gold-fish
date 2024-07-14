import React from 'react';
import cls from './breadcrumb-bootstrap.module.css';
import { useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getAllCategories } from '../../../store/categories';
import { getAllSubcategories } from '../../../store/subcategories';
import { getActiveProductOnProductPage } from '../../../store/products';

const BreadcrumbBootstrap = () => {
  const params = useParams();
  const { pathname } = useLocation();
  const pathnameValue = pathname.split('/').slice(1, 2).join();
  const { category, subcategory, productId } = params;
  const categoriesArray = useSelector(getAllCategories());
  const subcategoriesArray = useSelector(getAllSubcategories());
  const product = useSelector(getActiveProductOnProductPage());
  return (
    <div>
      <nav aria-label="breadcrumb">
        {pathnameValue === 'catalog' ? (
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link className={cls.links} to="/">
                Главная
              </Link>
            </li>
            <li class="breadcrumb-item">
              <Link className={category === undefined ? cls.linkActive : cls.links} to="/catalog/">
                Каталог
              </Link>
            </li>
            {category !== undefined ? (
              categoriesArray.map((item) => {
                if (item.value === category) {
                  return (
                    <li class="breadcrumb-item active" aria-current="page">
                      <Link
                        className={subcategory === undefined ? cls.linkActive : cls.links}
                        to={`/catalog/${category}`}>
                        {item.name}
                      </Link>
                    </li>
                  );
                } else return <></>;
              })
            ) : (
              <></>
            )}
            {subcategory !== undefined ? (
              subcategoriesArray.map((item) => {
                if (item.value === subcategory) {
                  return (
                    <li class="breadcrumb-item active" aria-current="page">
                      <Link
                        className={productId === undefined ? cls.linkActive : cls.links}
                        to={`/catalog/${category}/${subcategory}/`}>
                        {item.name}
                      </Link>
                    </li>
                  );
                } else return <></>;
              })
            ) : (
              <></>
            )}
            {productId !== undefined ? (
              product && (
                <li class="breadcrumb-item active" aria-current="page">
                  <Link
                    className={productId !== undefined ? cls.linkActive : cls.links}
                    to={`/catalog/${category}/${subcategory}/${productId}`}>
                    {product?.name}
                  </Link>
                </li>
              )
            ) : (
              <></>
            )}
          </ol>
        ) : (
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link className={cls.links} to="/">
                Главная
              </Link>
            </li>
            <li class="breadcrumb-item">
              <Link
                className={pathnameValue === 'person' ? cls.linkActive : cls.links}
                to="/basket/">
                Корзина
              </Link>
            </li>
          </ol>
        )}
      </nav>
    </div>
  );
};

export default BreadcrumbBootstrap;
