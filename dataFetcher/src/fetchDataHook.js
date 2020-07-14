import { useState, useEffect } from 'react';
import axios from 'axios';

const fetchData = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(url)
      .then(({ data }) => {
        console.log(data)
        setData(data);
      })
      .catch(error => {
        setError(error);
      })
  }, [])


  return [data, error]
}

export default fetchData;