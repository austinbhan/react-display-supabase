import React from 'react';
import Grain from './ItemTwo';

export default function GrainList({
  grains = [],
}) {
  return (
    <div className='grain-list'>
      {
        grains.map((grain, i) => {
          return <Grain
            {...grain}
            key={grain.name + i + grain.id} />;
        })
      }
    </div>
  );
}