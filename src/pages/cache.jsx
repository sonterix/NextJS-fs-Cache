import { storeCache } from '../utils/cache'

const Cache = () => {
  return <div></div>
}

export const getStaticProps = async () => {
  storeCache()

  return {
    props: {},
    revalidate: 160
  }
}

export default Cache
