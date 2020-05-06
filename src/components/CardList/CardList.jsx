import React from 'react';
import './card-list.styles.css';
import { Card } from './../Card/Card';

export const CardList = ({ monsters }) => {
  return (
    <div className="cardlist">
      {monsters.map((monster) => (
        <Card key={monster.name} monster={monster} />
      ))}
    </div>
  );
};
