import React from 'react';
import Catchphrase from './ItemFour';
import './App.css';

export default function CatchPhrasesList({
  catchphrases = [],
}) {
  return (
    <div className='catchphrase-list'>
      {
        catchphrases.map((catchphrase, i) => {
          return <Catchphrase
            {...catchphrase}
            key={catchphrase.movie + i + catchphrase.id} />;
        })
      }
    </div>
  );
}