import getCache from '../utils/test'

const Home = ({ cache }) => {
  console.log(cache)

  return <section>{JSON.stringify(cache)}</section>
}

export const getStaticProps = async () => {
  const cache = await getCache()

  return {
    props: {
      cache
    },
    revalidate: 60
  }
}

export default Home
