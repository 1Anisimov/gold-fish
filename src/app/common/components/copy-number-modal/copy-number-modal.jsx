import React, { memo } from 'react';
import cls from './copy-number-modal.module.css';
import { useSelector } from 'react-redux';
import { getCopyNumberModal } from '../../../store/modals';

const Component = () => {
  const isOpen = useSelector(getCopyNumberModal());

  return isOpen ? (
    <div className={cls.modalBlock}>
      <div className={cls.content}>Номер Скопирован</div>
    </div>
  ) : (
    <></>
  );
};

export const CopyNumberModal = memo(Component);
