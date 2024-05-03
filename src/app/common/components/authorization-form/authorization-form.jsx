import React from 'react';
import cls from './authorization-form.module.css';
import TabsAuthorization from '../tabs-authorization/tabs-authorization';
import iconClosed from '../../../image/icons/X_closed_icon.png';
import { ScrollBlock } from '../../../hooks/useScrollBlock';

const AuthorizationForm = ({ modalForm, setModalForm }) => {
  const [blockScroll, allowScroll] = ScrollBlock();

  modalForm ? blockScroll() : allowScroll();
  return (
    <>
      {modalForm && (
        <div className={cls.form}>
          <div className={cls.container}>
            <div className={cls.content}>
              <img
                onClick={() => setModalForm(false)}
                className={cls.iconClosed}
                src={iconClosed}
                alt=""
              />
              <h3 className={cls.title}>Войдите или зарегистрируйтесь</h3>
              <TabsAuthorization />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthorizationForm;
