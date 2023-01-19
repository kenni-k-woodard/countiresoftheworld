import { useEffect, useState } from 'react';
import { getCountries } from '../services/getCountries.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCountries();
        setCountries(response);
      } catch (e) {
        setError('Bummer! You found an error...');
      }
    };
    fetchData();
  }, []);
  return { countries, error };
}