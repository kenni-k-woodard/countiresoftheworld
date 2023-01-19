import React from 'react';
import { useCountries } from '../../hooks/useCountries.js';
import Card from '../Card/Card.js';

export default function Display() {
  const countries = useCountries();
  return (
    <main>
      {countries.map((country) => (
        <Card key={country.id} {...country} />
      ))}
    </main>
  );
}
