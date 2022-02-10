import getCache from '../utils/cacheFunc'

const Cache = ({ lastUpdatedDate }) => {
  const date = new Date(lastUpdatedDate)
  return <div>Last update: {date?.toString() || 'Error on update'}</div>
}

export const getServerSideProps = async () => {
  await getCache()

  return {
    props: {
      lastUpdatedDate: Date.now()
    }
  }
}

export default Cache
