import React from 'react';
import ReactDOM from 'react-dom';
import './card.styles.css';

import { Modal } from './../modal/Modal';

export const Card = ({ monster }) => {
  const renderModal = () => {
    ReactDOM.render(<Modal />, document.getElementById('modal-portal'));
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
