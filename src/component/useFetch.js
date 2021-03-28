import { useState, useEffect } from 'react'
const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok){
          throw Error('Failed to fetch the data.')
        }
        return res.json()
      })
        .then(data => {
          setData(data)
          setIsPending(false)
          setError(null)
        })
          .catch(err => {
            setError(err.message)
          })
  }, [url])

  return {data, error, isPending}
}
 
export default useFetch;