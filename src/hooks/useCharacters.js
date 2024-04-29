import {  useState,useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export function useCharacters(query) {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function fetchinApi() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character?name=${query}`,
          { signal }
        );

        setCharacters(data.results.slice(0, 5));
      } catch (err) {
        if (!axios.isCancel()) {
          toast.error(err.response.data.error);
        }
      } finally {
        setIsLoading(false);
      }
    }
    if (query.length < 3) {
      setCharacters([]);
      return;
    }
    fetchinApi();
    return () => {
      controller.abort();
    };
  }, [query]);

  return {isLoading,characters};
}