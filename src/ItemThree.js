import React from 'react';

export default function Vegetable({ name, color, quantity }) {
  return (
    <div className="vegetable">
      <p>{name}</p>
      <p>{color}</p>
      <p>{quantity}</p>
    </div>
  );
}