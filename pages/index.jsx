import getCache from '../utils/cacheFunc'

const Cache = ({ lastUpdatedDate }) => <div>Last update: {JSON.stringify(new Date(lastUpdatedDate))}</div>

export const getStaticProps = async () => {
  await getCache()

  return {
    props: {
      lastUpdatedDate: Date.now()
    },
    revalidate: 160 // 3 min
  }
}

export default Cache
