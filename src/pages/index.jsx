import { getCache, initCache, storeCache } from '../utils/cache'

const Home = ({ cache }) => {
  console.log(cache)

  return <section>{JSON.stringify(cache)}</section>
}

export const getStaticProps = async () => {
  const cacheInit = initCache()

  storeCache(cacheInit)

  const cache = getCache(cacheInit)

  return {
    props: {
      cache
    },
    revalidate: 60
  }
}

export default Home
