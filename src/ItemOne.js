import React from 'react';

export default function Fruit({ name, color, price }) {
  return (
    <div className="fruit">
      <p>{name}</p>
      <p>{color}</p>
      <p>{price}</p>
    </div>
  );
}