import { useEffect, useState } from 'react'
import LoadingPage from '@components/Fragments/LoadingPage'
import { GET } from '@functions/fetch'
import HomePage from '@components/Pages/Home'

function Home() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      await GET('https://thangly.hasura.app/api/rest/homepage').then(({ information }) => {
        setData(information[0])
        setLoading(false)
      })
    }

    fetchData()
  }, [])

  return <LoadingPage component={data ? <HomePage data={data} /> : null} loading={loading} />
}

export default Home
