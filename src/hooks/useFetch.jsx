import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const resp = await fetch(url);
        if (!resp.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await resp.json();
        setData(data.data);
      } catch (e) {
        console.log(e.message);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
