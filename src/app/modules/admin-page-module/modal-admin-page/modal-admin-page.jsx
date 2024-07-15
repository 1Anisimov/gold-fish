import React from 'react';
import cls from './modal-admin-page.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentProductOnAdminPage,
  getNewChangedProduct,
  setCurrentProduct,
  setModalChanged,
  setNewChangedProduct
} from '../../../store/admin';
import MainButton from '../../../reusable-components/main-button';
import { addProductByAdminPage, changeProductByAdminPage } from '../../../store/products';

const ModalAdminPage = () => {
  const dispatch = useDispatch();
  const currentProduct = useSelector(getCurrentProductOnAdminPage());
  const changedProduct = useSelector(getNewChangedProduct());

  const inputsArray = [
    { label: 'Имя товара:', name: 'name', defaultValue: currentProduct?.name },
    { label: 'Возраст:', name: 'age', defaultValue: currentProduct?.age },
    { label: 'Кол-во игроков:', name: 'players', defaultValue: currentProduct?.players },
    { label: 'Цена:', name: 'price', defaultValue: currentProduct?.price },
    { label: 'Категория:', name: 'category', defaultValue: currentProduct?.category },
    { label: 'Подкатегория:', name: 'subcategory', defaultValue: currentProduct?.subcategory },
    { label: 'Среднее время:', name: 'time', defaultValue: currentProduct?.time },
    { label: 'Изображение:', name: 'img', defaultValue: currentProduct?.img }
  ];

  const closeModal = ({ target }) => {
    if (target?.id === 'modalBlock') {
      dispatch(setCurrentProduct(null));
      dispatch(setModalChanged(false));
    }
  };

  const changeProduct = ({ target }) => {
    if (target.name === 'price') {
      dispatch(setNewChangedProduct(target.name, Number(target.value)));
    } else {
      dispatch(setNewChangedProduct(target.name, target.value));
    }
  };

  const handleChangeProduct = () => {
    dispatch(changeProductByAdminPage(changedProduct.id, changedProduct));
    dispatch(setModalChanged(false));
  };

  const handleCreateProduct = () => {
    if (changedProduct) {
      dispatch(addProductByAdminPage(changedProduct));
      dispatch(setModalChanged(false));
    }
  };

  return (
    <div onClick={closeModal} id="modalBlock" className={cls.modalActive}>
      <div className={cls.modalContainer}>
        <div className={cls.modalContent}>
          {inputsArray &&
            inputsArray.map((item) => (
              <div className={cls.modalInputBlock}>
                <label className={cls.modalLabel} htmlFor="">
                  {item.label}
                </label>
                <input
                  onChange={changeProduct}
                  defaultValue={currentProduct ? item.defaultValue : ''}
                  className={cls.modalInput}
                  type="text"
                  name={item.name}
                />
              </div>
            ))}

          <div className={cls.modalInputBlock}>
            <MainButton
              handleClick={currentProduct ? handleChangeProduct : handleCreateProduct}
              text={currentProduct ? 'Изменить' : 'Добавить'}
              isGradient
              heigth="30"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAdminPage;
