import React from 'react';
import ReactDOM from 'react-dom';
import './modal.styles.css';

export const Modal = ({ user }) => {
  const removeModal = () => {
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(document.getElementById('modal-portal'));
    }, 100);
  };

  return (
    <div className="modal__wrapper">
      <div className="modal__cross--wrapper" onClick={removeModal}>
        <svg className="modal__cross">
          <use xlinkHref="/solid.svg#times-circle"></use>
        </svg>
      </div>
      <div className="modal">
        <div className="modal__intro">
          <img src={`https://robohash.org/${user.name}`} alt="Profile Pic" />
          <div>
            <h2>{user.name}</h2>
            <h3>{user.username}</h3>
            <code>{user.email.toLowerCase()}</code>
          </div>
        </div>
        <div className="modal__location">
          <h2 className="blue">Location</h2>
          <p>{user.address.street}</p>
          <p>{user.address.suite}</p>
          <p>{user.address.city}</p>
          <p>{user.address.zipcode}</p>
        </div>
        <div className="modal__contact">
          <h3 className="blue">
            Phone
            <br />
            <span>{user.phone}</span>
          </h3>
          <h3 className="blue">
            Website
            <br />
            <span>
              <a
                href={`https://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {user.website}
              </a>
            </span>
          </h3>
        </div>
        <div className="modal__company">
          <h2 className="blue">Company Information</h2>
          <p>{user.company.name}</p>
          <p>{user.company.catchPhrase}</p>
          <p>{user.company.bs}</p>
        </div>
      </div>
    </div>
  );
};
