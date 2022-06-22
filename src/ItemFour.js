import React from 'react';

export default function Catchphrase({ movie, character, line }) {
  return (
    <div className='catchphrases'>
      <p>{movie}</p>
      <p>{character}</p>
      <p>{line}</p>
    </div>
  );
}