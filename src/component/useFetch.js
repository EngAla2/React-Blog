import { useState, useEffect } from 'react'
const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortCont = new AbortController()
    fetch(url, {signa : abortCont.signal})
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
            if (err.name === "AbortError"){
              console.log("Fetch aborted")
            }else {
              setError(err.message)
            }
          })
  }, [url])

  return {data, error, isPending}
}
 
export default useFetch;