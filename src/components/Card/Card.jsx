import React from 'react';
import ReactDOM from 'react-dom';
import './card.styles.css';

import { Modal } from './../Modal/Modal';

export const Card = ({ monster }) => {
  const renderModal = () => {
    ReactDOM.render(
      <Modal user={monster} />,
      document.getElementById('modal-portal')
    );
    document
      .querySelector('.modal__wrapper')
      .addEventListener('click', (ev) => {
        if (!ev.target.closest('.modal')) {
          setTimeout(() => {
            ReactDOM.unmountComponentAtNode(
              document.getElementById('modal-portal')
            );
          }, 100);
        }
      });
  };

  return (
    <div className="card" title={monster.name} onClick={renderModal}>
      <img
        loading="lazy"
        className="card__img"
        src={`https://robohash.org/${monster.name}`}
        alt="Monster Pic"
      />
      <h3 className="card__title">{monster.name}</h3>
      <code className="card__email-id">{monster.email.toLowerCase()}</code>
    </div>
  );
};
