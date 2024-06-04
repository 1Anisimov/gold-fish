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
import { changeProductByAdminPage } from '../../../store/products';

const ModalAdminPage = () => {
  const dispatch = useDispatch();
  const currentProduct = useSelector(getCurrentProductOnAdminPage());
  const changedProduct = useSelector(getNewChangedProduct());
  console.log(changedProduct);

  const closeModal = ({ target }) => {
    if (target?.id === 'modalBlock') {
      dispatch(setCurrentProduct(null));
      dispatch(setModalChanged(false));
    }
  };

  const changeProduct = ({ target }) => {
    if (changedProduct) {
      dispatch(setNewChangedProduct(target.name, target.value));
    }
  };

  const handleChangeProduct = () => {
    dispatch(changeProductByAdminPage(changedProduct.id, changedProduct));
    console.log('change');
  };

  const handleCreateProduct = () => {
    console.log('create');
  };

  return (
    <div onClick={closeModal} id="modalBlock" className={cls.modalActive}>
      <div className={cls.modalContainer}>
        <div className={cls.modalContent}>
          <div className={cls.modalInputBlock}>
            <label className={cls.modalLabel} htmlFor="">
              Имя товара
            </label>
            <input
              onChange={changeProduct}
              defaultValue={currentProduct ? currentProduct?.name : ''}
              className={cls.modalInput}
              type="text"
              name="name"
            />
          </div>
          <div className={cls.modalInputBlock}>
            <label className={cls.modalLabel} htmlFor="">
              Возраст
            </label>
            <input
              onChange={changeProduct}
              name="age"
              defaultValue={currentProduct ? currentProduct?.age : ''}
              className={cls.modalInput}
              type="text"
            />
          </div>
          <div className={cls.modalInputBlock}>
            <label className={cls.modalLabel} htmlFor="">
              Кол-во игроков
            </label>
            <input
              onChange={changeProduct}
              name="players"
              defaultValue={currentProduct ? currentProduct?.players : ''}
              className={cls.modalInput}
              type="text"
            />
          </div>
          <div className={cls.modalInputBlock}>
            <label className={cls.modalLabel} htmlFor="">
              Цена
            </label>
            <input
              onChange={changeProduct}
              name="price"
              defaultValue={currentProduct ? currentProduct?.price : ''}
              className={cls.modalInput}
              type="text"
            />
          </div>
          <div className={cls.modalInputBlock}>
            <label className={cls.modalLabel} htmlFor="">
              Категория
            </label>
            <input
              onChange={changeProduct}
              name="category"
              defaultValue={currentProduct ? currentProduct?.category : ''}
              className={cls.modalInput}
              type="text"
            />
          </div>
          <div className={cls.modalInputBlock}>
            <label className={cls.modalLabel} htmlFor="">
              Подкатегория
            </label>
            <input
              onChange={changeProduct}
              name="subcategory"
              defaultValue={currentProduct ? currentProduct?.subcategory : ''}
              className={cls.modalInput}
              type="text"
            />
          </div>
          <div className={cls.modalInputBlock}>
            <label className={cls.modalLabel} htmlFor="">
              Среднее время
            </label>
            <input
              onChange={changeProduct}
              name="time"
              defaultValue={currentProduct ? currentProduct?.time : ''}
              className={cls.modalInput}
              type="text"
            />
          </div>
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
