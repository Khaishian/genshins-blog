import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            // console.log(res);
            throw Error("Could not fetch data");
          }
          // console.log(res.json());
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((e) => {
          if (e.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsPending(false);
            setError(e.message);
          }
        });
    }, 200);

    return () => abortCont.abort();
  }, [url]);

  // console.log(data);
  return { data, isPending, error };
};

export default useFetch;
