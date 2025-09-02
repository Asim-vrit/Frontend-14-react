import { useEffect, useState } from "react";

const BASE_URL = "https://fakestoreapi.com";

export function useFetch({
  url,
  initialData,
  fetchOnMount = false,
  fetchOptions = {},
  customFetchData = { body: undefined, urlPart: "" },
  onSuccess = () => {},
  onError = () => {},
  onSettled = () => {},
}) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function customFetch(data) {
    const body = data?.body || undefined;
    const urlPart = data?.urlPart || "";

    try {
      setLoading(true);
      const raw = await fetch(BASE_URL + url + "/" + urlPart, {
        method: fetchOptions.method || "GET",
        body: JSON.stringify(body),
        headers: {
          "content-type": "Application/JSON",
          Authorization: "Bearer " + localStorage.getItem("token"),
          ...fetchOptions.headers,
        },
      });
      if (!raw.ok) {
        const error = await raw.text();
        throw new Error(error);
      }
      const res = await raw.json();
      setData(res);
      setError(null);
      onSuccess(res);
    } catch (error) {
      console.log(error);
      setData(initialData);
      onError(error);
      if (error.message) setError(error.message);
      else {
        setError("something went wrong");
      }
    } finally {
      onSettled();
      setLoading(false);
    }
  }

  useEffect(() => {
    if (fetchOnMount) customFetch(customFetchData);
  }, []);

  return { data, loading, error, customFetch };
}
