import { useState, useEffect } from 'react';
import axios from 'axios';

const fetchData = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(url)
      .then(({ data }) => {
        setData(data);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])


  return [data, loading, error]
}

export default fetchData;