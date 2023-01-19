import React, { useState } from 'react';
import { useCountries } from '../../hooks/useCountries.js';
import Card from '../Card/Card.js';

export default function Display() {
  const countries = useCountries();
  const [continent, setContinents] = useState('all');
  const continents = [...new Set(countries.map(({ continent }) => continent))];

  const filtered = countries.filter(
    (country) => country.continent === continent || continent === 'all'
  );

  return (
    <main>
      <select onChange={(e) => setContinents(e.target.value)}>
        <option value="all>">All</option>
        {continents.map((continent) => (
          <option key={continent} value={continent}>{continent}</option>
        ))}
      </select>
      {filtered.map((country) => (
        <Card key={country.id} {...country} />
      ))}
    </main>
  );
}
