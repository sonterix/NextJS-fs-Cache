import getCache from '../utils/cacheFunc'

const Cache = ({ lastUpdatedDate }) => {
  const date = new Date(lastUpdatedDate)
  return <div>Last update: {date?.toString() || 'Error on update'}</div>
}

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
