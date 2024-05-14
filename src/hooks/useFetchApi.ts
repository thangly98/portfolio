import { useEffect, useState } from 'react'

function useFetchApi<T>(url: string) {
  const [data, setData] = useState<T>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState()

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url)
        .then((response) => {
          if (response.ok) return response.json()
          return Promise.reject(response)
        })
        .then((response) => setData(response))
        .catch((error) => {
          error.json().then((err: never) => setError(err))
        })
        .finally(() => setLoading(false))
    }

    fetchData()
  }, [url])

  return { loading, error, data }
}

export default useFetchApi
