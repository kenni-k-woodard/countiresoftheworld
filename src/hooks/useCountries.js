import { useEffect, useState } from 'react';
import { getCountries } from '../services/getCountries.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await getCountries();
      setCountries(response);
    };
    fetchData();
  }, []);
  return countries;
}