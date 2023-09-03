import {useEffect, useState} from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(resp => {
          if (!resp.ok) {
            throw Error('Could not fetch data');
          }
          return resp.json();
        })
        .then(data => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch(e => {
          setIsPending(false);
          setError(e.message);
        })
    }, 1000)
  }, [url]);

  return { data, isPending, error };
}

export default useFetch;