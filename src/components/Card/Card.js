import React from 'react';

export default function Card({ name, iso2 }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={`https://flagcdn.com/60x45/${iso2.toLowerCase()}.png`} />
    </div>
  );
}
