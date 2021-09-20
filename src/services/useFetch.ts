import { useState, useEffect } from "react";

export function useFetch(uri: string) {
  const [data, setData] = useState(null);
  const [error, setError] = useState<null | Error>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const response = await fetch(uri);
        if (response.ok) {
          const json = await response.json();
          setData(json);
        } else {
          let responseText = `${response.status} ${response.statusText}`;
          throw new Error(responseText);
        }
      } catch (err: any) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [uri]);

  return { data, error, loading };
}
