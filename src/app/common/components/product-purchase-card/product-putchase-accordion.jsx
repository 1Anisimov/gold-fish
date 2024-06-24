import { memo, useState } from 'react';
import cls from './product-purchase-card.module.css';

const Component = ({ title, children }) => {
  const [openClose, setOpenClose] = useState(false);

  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item" style={{ border: 'none', outline: 'none' }}>
        <h2 className="accordion-header" style={{ border: 'none', outline: 'none' }}>
          <button
            onClick={() => setOpenClose((prevState) => !prevState)}
            className={'accordion-button' + (openClose ? ' ' : ' collapsed')}
            style={{ border: 'none', boxShadow: 'none', backgroundColor: '#fff' }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded={openClose ? 'true' : 'false'}
            aria-controls="collapseTwo">
            <h3 className={cls.accordionTitle}>{title}</h3>
          </button>
        </h2>
        <div
          id="collapseTwo"
          className={'accordion-collapse collapse' + (openClose ? ' show' : '')}
          data-bs-parent="#accordionExample">
          <div className="accordion-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export const ProductPurchaseAccordion = memo(Component);
