import React from 'react';

export default function Grain({ name, color, quantity }) {
  return (
    <div className="grain">
      <p>{name}</p>
      <p>{color}</p>
      <p>{quantity}</p>
    </div>
  );
}