import React from 'react';
import './modal.styles.css';

export const Modal = (props) => {
  const removeModal = () => {
    document.querySelector('.modal__wrapper').remove();
  }

  return (
    <div className="modal__wrapper">
      <div className="modal__cross--wrapper" onClick={removeModal}>
        <svg className="modal__cross">
          <use xlinkHref="/solid.svg#times-circle"></use>
        </svg>
      </div>
      <div className="modal">

      </div>
    </div>
  );
};
