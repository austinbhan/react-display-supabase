import React from 'react';
import Vegetable from './ItemThree';

export default function VegetableList({
  vegetables = [],
}) {
  return (
    <div className='vegetable-list'>
      {
        vegetables.map((vegetable, i) => {
          return <Vegetable 
            {...vegetable} 
            key={vegetable.name + i + vegetable.id} />;
        })
      }
    </div>
  );
}