import storeCache from '../utils/storeCache'
import getCache from '../utils/getCache'

const Home = ({ cache }) => {
  console.log(cache)

  return <section>{JSON.stringify(cache)}</section>
}

export const getStaticProps = async () => {
  await storeCache()
  const cache = getCache()

  return {
    props: {
      cache
    },
    revalidate: 60
  }
}

export default Home
