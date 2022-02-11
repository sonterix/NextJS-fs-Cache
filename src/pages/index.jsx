import { getCache, setCache } from '../utils/cache'

const Home = ({ cache }) => (
  <section>
    <h1>Home Page</h1>
    <br />
    {cache && <p>Last update: {JSON.stringify(new Date(cache))}</p>}
  </section>
)

export const getStaticProps = async () => {
  await setCache('lastUpdate', Date.now())

  const cache = await getCache('lastUpdate')

  return {
    props: {
      cache: cache || null
    },
    revalidate: 1800
  }
}

export default Home
