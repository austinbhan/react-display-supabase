import React from 'react';
import Fruit from './ItemOne';

export default function fruitList({
  fruits = [],
}) {
  return (
    <div className='fruit-list'>
      {
        fruits.map((fruit, i) => {
          return <Fruit 
            {...fruit}
            key={fruit.name + i + fruit.id}/>;
        }
        )}
    </div>
  );
}
