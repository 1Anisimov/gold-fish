import React, { useEffect, useMemo } from 'react';
import MainContainerBg from '../../containers/main-container-bg';
import cls from './found-products-page.module.css';
import {
  getActivePaginatedPageOnFound,
  getFoundProductsOnFoundProductsPage,
  setActivePaginatedPageOnFound
} from '../../store/products';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../reusable-components/card';
import changePaginationPage from '../../utils/changePaginationPage';
import { Link } from 'react-router-dom';

const FoundProductsPage = () => {
  const dispatch = useDispatch();

  const activePaginatedPage = useSelector(getActivePaginatedPageOnFound());
  const activeProducts = useSelector(getFoundProductsOnFoundProductsPage());

  const numberOfProductsOnPage = 12;

  useEffect(() => {
    dispatch(setActivePaginatedPageOnFound(1));
  }, [dispatch, activeProducts]);

  const currentPaginationProducts = useMemo(
    () => changePaginationPage(activeProducts, activePaginatedPage, numberOfProductsOnPage),
    [activeProducts, activePaginatedPage, numberOfProductsOnPage]
  );

  const calculateNumberPages = (currentProducts) => {
    let numberPagesArray = [];

    if (currentProducts.length > 0) {
      const numberPages = Math.ceil(currentProducts.length / numberOfProductsOnPage);

      for (let i = 1; i <= numberPages; i++) {
        numberPagesArray.push(i);
      }

      return numberPagesArray;
    } else {
      return numberPagesArray;
    }
  };
  const numberPagesValue = useMemo(() => calculateNumberPages(activeProducts), [activeProducts]);

  const handleChangePage = ({ target }) => {
    dispatch(setActivePaginatedPageOnFound(Number(target.id)));
    window.scrollTo(0, 0);
  };

  return (
    <MainContainerBg>
      <div className={cls.page}>
        {currentPaginationProducts.length > 0 ? (
          currentPaginationProducts.map((product) => (
            <div key={product.id} className={cls.cardBlock}>
              <Card product={product} />
            </div>
          ))
        ) : (
          <div className={cls.notProducts}>
            <div>Товары не найдены</div>
            <div>
              <Link to={`/catalog`} className={cls.comeToCatalog}>
                {' '}
                Вернуться к каталогу
              </Link>
            </div>
          </div>
        )}
        <div className={cls.paginationBlock}>
          {numberPagesValue.length > 1 ? (
            <div className={cls.paginationContent}>
              {numberPagesValue.map((page) => (
                <button
                  onClick={handleChangePage}
                  className={
                    cls.paginationItem +
                    (activePaginatedPage === page ? ` ${cls.paginationItemActive}` : '')
                  }
                  id={page}
                  key={page}>
                  {page}
                </button>
              ))}
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </MainContainerBg>
  );
};

export default FoundProductsPage;
